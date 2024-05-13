from pydantic import BaseModel, Field
from typing import List
from datetime import datetime

class Gallery(BaseModel):
    clientAssociated: str
    category: str
    createdAt: datetime = Field(default_factory=datetime.now)
    photos: List = []