import os
import re
import boto3
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from botocore.exceptions import ClientError

load_dotenv()

# --- S3 Setup ---

s3 = boto3.client(
    "s3",
    aws_access_key_id=os.getenv("AWS_ACCESS_KEY_ID"),
    aws_secret_access_key=os.getenv("AWS_SECRET_ACCESS_KEY"),
    region_name=os.getenv("AWS_REGION"),
)
BUCKET_NAME = os.getenv("AWS_BUCKET_NAME")

# --- App ---

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:8080",
        "https://portfolio-v6fc.onrender.com",
        "https://fanimator.me",
        "https://fanimator.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Helpers ---


def extract_order(filename: str) -> int:
    try:
        return int(filename.split(".")[0])
    except ValueError:
        return float("inf")


# --- Routes ---


@app.get("/photos")
def get_photos():
    response = s3.list_objects_v2(Bucket=BUCKET_NAME)
    if "Contents" not in response:
        return []
    filenames = [obj["Key"] for obj in response["Contents"]]
    filtered = [f for f in filenames if re.search(r"\d", f)]
    sorted_filenames = sorted(filtered, key=extract_order)
    return [
        {
            "filename": f,
            "url": f"https://{BUCKET_NAME}.s3.{os.getenv('AWS_REGION')}amazonaws.com/{f}",
        }
        for f in sorted_filenames
    ]


@app.get("/photos/{filename}")
def get_photo(filename: str):
    try:
        s3.head_object(Bucket=BUCKET_NAME, Key=filename)
    except ClientError:
        raise HTTPException(status_code=404, detail="Photo not found")

    url = s3.generate_presigned_url(
        "get_object",
        Params={"Bucket": BUCKET_NAME, "Key": filename},
        ExpiresIn=3600,
    )
    return {"filename": filename, "url": url}
