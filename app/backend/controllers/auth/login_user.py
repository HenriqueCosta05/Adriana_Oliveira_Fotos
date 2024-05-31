import os
from helpers.auth.create_access_token import create_access_token
from dotenv import load_dotenv
from datetime import timedelta
from fastapi import APIRouter

app = APIRouter()

load_dotenv()
API_KEY = os.getenv("SECRET_KEY")
ACCESS_TOKEN_EXPIRE_MINUTES = os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES")

@app.post("/login-user/{user_id}")
def login_for_access_token(user_id: str):
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user_id}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}