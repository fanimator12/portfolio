import os
import pytest
from fastapi.testclient import TestClient
from unittest.mock import patch
from sqlalchemy import create_engine
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
    mock_s3 = patch("boto3.client").start()
    mock_s3().list_objects_v2.return_value = {
        "Contents": [{"Key": "0.png"}]
    }

    sync_s3_with_db()

    db = SessionLocal()
    photos = db.query(Photo).all()
    db.close()

    assert len(photos) == 101
    assert photos[0].filename == "0.png"

    mock_s3.stop()


def test_get_photos_empty():
    response = client.get("/photos")
    assert response.status_code == 200
    assert response.json() == []


def test_get_photos_with_data():
    db = SessionLocal()
    photo1 = Photo(
        filename="1.JPG",
        url="https://franciska-portfolio.s3.eu-west-1.amazonaws.com/1.JPG"
    )
    photo2 = Photo(
        filename="2.jpg",
        url="https://franciska-portfolio.s3.eu-west-1.amazonaws.com/2.jpg"
    )
    db.add_all([photo1, photo2])
    db.commit()
    db.close()

    response = client.get("/photos")
    assert response.status_code == 200
    assert len(response.json()) == 2


def test_get_photo_found():
    db = SessionLocal()
    photo = Photo(
        filename="1.JPG",
        url="https://franciska-portfolio.s3.eu-west-1.amazonaws.com/1.JPG"
    )
    db.add(photo)
    db.commit()
    db.close()

    response = client.get("/photos/1.JPG")
    assert response.status_code == 200
    assert "url" in response.json()


def test_get_photo_not_found():
    response = client.get("/photos/456.jpg")
    assert response.status_code == 404
    assert response.json() == {"detail": "Photo not found in the database"}
