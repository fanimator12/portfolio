import os
import re
import boto3
from contextlib import asynccontextmanager
from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine, Column, Integer, String, select
from sqlalchemy.orm import declarative_base, sessionmaker, Session
from dotenv import load_dotenv

load_dotenv()

# --- DB setup ---

DATABASE_URL = os.getenv("DATABASE_URL")
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()


class Photo(Base):
    __tablename__ = "photos"
    id = Column(Integer, primary_key=True, index=True)
    filename = Column(String, index=True)
    url = Column(String, nullable=False)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# --- S3 setup ---

s3 = boto3.client(
    "s3",
    aws_access_key_id=os.getenv("AWS_ACCESS_KEY_ID"),
    aws_secret_access_key=os.getenv("AWS_SECRET_ACCESS_KEY"),
    region_name=os.getenv("AWS_REGION"),
)
BUCKET_NAME = os.getenv("AWS_BUCKET_NAME")


# --- Sync ---

def sync_s3_with_db():
    session = SessionLocal()
    try:
        print("Starting S3 to DB sync...")
        response = s3.list_objects_v2(Bucket=BUCKET_NAME)
        if "Contents" not in response:
            print("No objects found in bucket.")
            return

        for obj in response["Contents"]:
            filename = obj["Key"]
            file_url = f"https://{BUCKET_NAME}.s3.amazonaws.com/{filename}"
            existing = session.execute(
                select(Photo).where(Photo.filename == filename)
            ).scalar_one_or_none()
            if not existing:
                print(f"Inserting {filename}...")
                session.add(Photo(filename=filename, url=file_url))

        session.commit()
        print("Sync complete.")
    except Exception as e:
        session.rollback()
        print(f"Sync error: {e}")
    finally:
        session.close()


# --- App ---

@asynccontextmanager
async def lifespan(app: FastAPI):
    Base.metadata.create_all(bind=engine)
    sync_s3_with_db()
    yield


app = FastAPI(lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8080"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# --- Routes ---

@app.get("/photos")
def get_photos(db: Session = Depends(get_db)):
    photos = db.execute(select(Photo)).scalars().all()
    filtered = [p for p in photos if re.search(r"\d", p.filename)]
    return [{"filename": p.filename, "url": p.url} for p in filtered]


@app.get("/photos/{filename}")
def get_photo(filename: str, db: Session = Depends(get_db)):
    photo = db.execute(
        select(Photo).where(Photo.filename == filename)
    ).scalar_one_or_none()

    if not photo:
        raise HTTPException(status_code=404, detail="Photo not found")

    url = s3.generate_presigned_url(
        "get_object",
        Params={"Bucket": BUCKET_NAME, "Key": filename},
        ExpiresIn=3600,
    )
    return {"filename": filename, "url": url}