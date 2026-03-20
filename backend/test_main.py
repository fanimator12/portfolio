import os
import pytest
from fastapi.testclient import TestClient
from unittest.mock import patch
from sqlalchemy import create_engine, select
from sqlalchemy.orm import sessionmaker
from main import app, sync_s3_with_db, Base, Photo


DATABASE_URL = os.getenv("DATABASE_URL")
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
client = TestClient(app)


@pytest.fixture(scope="function", autouse=True)
def setup_and_teardown():
    Base.metadata.create_all(bind=engine)
    yield
    Base.metadata.drop_all(bind=engine)


def test_sync_s3_with_db():
    with patch("main.s3") as mock_s3:
        mock_s3.list_objects_v2.return_value = {
            "Contents": [{"Key": "1.JPG"}]
        }
        sync_s3_with_db()

    db = SessionLocal()
    photos = db.execute(select(Photo)).scalars().all()
    db.close()

    assert len(photos) == 1
    assert photos[0].filename == "1.JPG"


def test_sync_s3_with_db_empty_bucket():
    with patch("main.s3") as mock_s3:
        mock_s3.list_objects_v2.return_value = {}
        sync_s3_with_db()

    db = SessionLocal()
    photos = db.execute(select(Photo)).scalars().all()
    db.close()

    assert len(photos) == 0


def test_sync_s3_with_db_no_duplicates():
    with patch("main.s3") as mock_s3:
        mock_s3.list_objects_v2.return_value = {
            "Contents": [{"Key": "1.JPG"}]
        }
        sync_s3_with_db()
        sync_s3_with_db()

    db = SessionLocal()
    photos = db.execute(select(Photo)).scalars().all()
    db.close()

    assert len(photos) == 1


def test_get_photos_empty():
    response = client.get("/photos")
    assert response.status_code == 200
    assert response.json() == []


def test_get_photos_with_data():
    db = SessionLocal()
    db.add_all([
        Photo(filename="1.JPG", url="https://franciska-portfolio.s3.eu-west-1.amazonaws.com/1.JPG"),
        Photo(filename="2.JPG", url="https://franciska-portfolio.s3.eu-west-1.amazonaws.com/2.JPG"),
    ])
    db.commit()
    db.close()

    response = client.get("/photos")
    assert response.status_code == 200
    assert len(response.json()) == 2


def test_get_photos_sorted():
    db = SessionLocal()
    db.add_all([
        Photo(filename="3.JPG", url="https://franciska-portfolio.s3.eu-west-1.amazonaws.com/3.JPG"),
        Photo(filename="1.JPG", url="https://franciska-portfolio.s3.eu-west-1.amazonaws.com/1.JPG"),
        Photo(filename="2.JPG", url="https://franciska-portfolio.s3.eu-west-1.amazonaws.com/2.JPG"),
    ])
    db.commit()
    db.close()

    response = client.get("/photos")
    assert response.status_code == 200
    filenames = [p["filename"] for p in response.json()]
    assert filenames == ["1.JPG", "2.JPG", "3.JPG"]


def test_get_photo_found():
    db = SessionLocal()
    db.add(Photo(filename="1.JPG", url="https://franciska-portfolio.s3.eu-west-1.amazonaws.com/1.JPG"))
    db.commit()
    db.close()

    with patch("main.s3") as mock_s3:
        mock_s3.generate_presigned_url.return_value = "https://fanimator.me/1.JPG"
        response = client.get("/photos/1.JPG")

    assert response.status_code == 200
    assert response.json()["url"] == "https://fanimator.me/1.JPG"


def test_get_photo_not_found():
    response = client.get("/photos/999.JPG")
    assert response.status_code == 404
    assert response.json() == {"detail": "Photo not found"}