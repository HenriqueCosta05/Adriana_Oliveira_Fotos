from pydantic import BaseModel, EmailStr


class LoginForm(BaseModel):
    username: EmailStr
    password: str