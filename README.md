# Franciska Torok's personal portfolio

# Prerequisites 
Install [virtualenv](https://virtualenv.pypa.io/en/latest/installation.html).

# Run backend
1. `cd backend`
2. `python3 -m <your_virtual_env> venv`
3. `source <your_virtual_env>/bin/activate`
4. `docker-compose up -d`
5. `pip install -r requirements.txt`
6. `uvicorn main:app --reload`

REST API will be available through http://localhost:8000/docs.

# Run frontend
1. `cd frontend`
2. `npm install`
3. `npm run dev`

Node v18.17.0

Update **npm** before running:
`npm install -g npm@latest`
