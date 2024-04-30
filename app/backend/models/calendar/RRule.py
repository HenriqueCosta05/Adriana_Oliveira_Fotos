from pydantic import BaseModel

class RRule(BaseModel):
    freq: str
    count: int
