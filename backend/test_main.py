from fastapi.testclient import TestClient
from botocore.exceptions import ClientError
from unittest.mock import patch
from main import app

client = TestClient(app)

BASE_URL = "https://franciska-portfolio.s3.eu-west-1.amazonaws.com"

def test_get_photos_empty():
    with patch("main.s3") as mock_s3:
        mock_s3.list_objects_v2.return_value = {}
        response = client.get("/photos")
    assert response.status_code == 200
    assert response.json() == []


def test_get_photos_with_data():
    with patch("main.s3") as mock_s3:
        mock_s3.list_objects_v2.return_value = {
            "Contents": [{"Key": "1.JPG"}, {"Key": "2.JPG"}]
        }
        response = client.get("/photos")
    assert response.status_code == 200
    assert len(response.json()) == 2


def test_get_photos_sorted():
    with patch("main.s3") as mock_s3:
        mock_s3.list_objects_v2.return_value = {
            "Contents": [{"Key": "3.JPG"}, {"Key": "1.JPG"}, {"Key": "2.JPG"}]
        }
        response = client.get("/photos")
    assert response.status_code == 200
    filenames = [p["filename"] for p in response.json()]
    assert filenames == ["1.JPG", "2.JPG", "3.JPG"]


def test_get_photos_correct_url():
    with patch("main.s3") as mock_s3:
        mock_s3.list_objects_v2.return_value = {
            "Contents": [{"Key": "1.JPG"}]
        }
        response = client.get("/photos")
    assert response.status_code == 200
    assert response.json()[0]["url"] == f"{BASE_URL}/1.JPG"


def test_get_photo_found():
    with patch("main.s3") as mock_s3:
        mock_s3.head_object.return_value = {}
        mock_s3.generate_presigned_url.return_value = "https://fanimator.me/1.JPG"
        response = client.get("/photos/1.JPG")
    assert response.status_code == 200
    assert response.json()["url"] == "https://fanimator.me/1.JPG"


def test_get_photo_not_found():
    with patch("main.s3") as mock_s3:
        mock_s3.head_object.side_effect = ClientError(
            {"Error": {"Code": "404", "Message": "Not Found"}}, "HeadObject"
        )
        response = client.get("/photos/999.JPG")
    assert response.status_code == 404
    assert response.json() == {"detail": "Photo not found"}
