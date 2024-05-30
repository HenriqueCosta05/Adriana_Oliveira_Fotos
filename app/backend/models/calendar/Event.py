from pydantic import BaseModel
from datetime import time
from datetime import date


class Event(BaseModel):
    title: str
    description: str
    dateInitial: date
    hourInitial: time
    dateFinal:  date
    hourFinal: time
    client: str
