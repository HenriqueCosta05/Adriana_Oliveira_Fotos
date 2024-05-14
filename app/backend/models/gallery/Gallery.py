from .Folder import Folder
from bson import ObjectId
from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime

class Gallery(BaseModel):
    id: Optional[str] = None
    title: str
    category: str
    createdAt: Optional[datetime] = Field(default_factory=datetime.now)
    photos: Optional[Folder] = None
    photosNumber: int
    defaultSize: str
    clientAssociated: str
