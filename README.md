# Franciska Torok's personal portfolio

Personal portfolio built with React, Three.js, and a FastAPI backend serving photos from AWS S3.

## Architecture

```
Browser (Vercel) → FastAPI (Render) → AWS S3
                ↖______presigned URL__________↗
```

The frontend requests a photo list from the backend. The backend queries S3 and returns filenames with presigned URLs. The browser fetches photos directly from S3 using those URLs.

## Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [Python](https://www.python.org/) 3.12+
- [Docker](https://www.docker.com/)
- AWS account with an S3 bucket

## Environment variables

Create a `.env` file in `backend/`:

```env
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret
AWS_REGION=eu-west-1
AWS_BUCKET_NAME=your_bucket
```

## Run backend

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```

API docs available at http://localhost:8000/docs.

Or with Docker:

```bash
cd backend
docker compose up
```

## Run frontend

```bash
cd frontend
npm install
npm run dev
```

Update npm before running if needed:

```bash
npm install -g npm@latest
```

## Run tests

```bash
cd backend
source venv/bin/activate
pytest
```

## Deployment

- Frontend: [Vercel](https://vercel.com) — connect repo, set root directory to `frontend`, add `VITE_API_URL` env var pointing to the Render backend URL.
- Backend: [Render](https://render.com) — deploy from Docker image, set AWS env vars in the Render dashboard.
