import os
import re
import boto3
import time
from fastapi import FastAPI, HTTPException, UploadFile, File
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
from io import BytesIO
from sqlalchemy import create_engine, Column, Integer, String, LargeBinary
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# CORS settings
origins = [
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DATABASE_URL = os.getenv("DATABASE_URL")
print(f"Database URL: {DATABASE_URL}")

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class Photo(Base):
    __tablename__ = "photos"
    id = Column(Integer, primary_key=True, index=True)
    filename = Column(String, index=True)
    url = Column(String, nullable=False)

Base.metadata.create_all(bind=engine)

# AWS S3 setup
s3 = boto3.client(
    "s3",
    aws_access_key_id=os.getenv("AWS_ACCESS_KEY_ID"),
    aws_secret_access_key=os.getenv("AWS_SECRET_ACCESS_KEY"),
    region_name=os.getenv("AWS_REGION"),
)
BUCKET_NAME = os.getenv("AWS_BUCKET_NAME")

def sync_s3_with_db():
    session = SessionLocal()
    try:
        print("Starting S3 to DB sync process...")
        response = s3.list_objects_v2(Bucket=BUCKET_NAME)
        if 'Contents' in response:
            for obj in response['Contents']:
                filename = obj['Key']
                file_url = f"https://{BUCKET_NAME}.s3.amazonaws.com/{filename}"

                print(f"Checking if {filename} exists in the database...")
                existing_photo = session.query(Photo).filter(Photo.filename == filename).first()
                if not existing_photo:
                    print(f"Inserting {filename} into the database...")
                    new_photo = Photo(filename=filename, url=file_url)
                    session.add(new_photo)
                    print(f"Added {filename} to the database.")
        
        session.commit()
        print("Database sync completed and committed.")
    except Exception as e:
        session.rollback()
        print(f"Error syncing S3 with DB: {str(e)}")
    finally:
        session.close()
        print("Session closed.")

@app.get("/photos")
async def get_photos():
    session = SessionLocal()
    try:
        photos = session.query(Photo).all()
        # Filter photos to only include filenames that contain numbers
        filtered_photos = [photo for photo in photos if re.search(r'\d', photo.filename)]
        return [{"filename": photo.filename, "url": photo.url} for photo in filtered_photos]
    finally:
        session.close()

@app.get("/photos/{filename}")
async def get_photo(filename: str):
    session = SessionLocal()
    photo = session.query(Photo).filter(Photo.filename == filename).first()
    session.close()

    if not photo:
        raise HTTPException(status_code=404, detail="Photo not found in the database")

    # Generate the URL to the photo in S3
    file_url = s3.generate_presigned_url(
        'get_object',
        Params={'Bucket': BUCKET_NAME, 'Key': filename},
        ExpiresIn=3600  # URL expiration time in seconds
    )

    return {"filename": filename, "url": file_url}

if __name__ == "__main__":
    time.sleep(5)  # Ensure the database is ready
    sync_s3_with_db()