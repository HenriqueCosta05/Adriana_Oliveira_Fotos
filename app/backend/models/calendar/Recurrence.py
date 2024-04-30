from pydantic import BaseModel
from models.calendar.RRule import RRule


class Recurrence(BaseModel):
    freq: str
    count: int