
from pydantic import BaseModel
from typing import List, Optional


class Folder(BaseModel):
    id: Optional[str] = None    
    titulo: str
    images: List[str]
    documents: List[str]
    gallery_Id: str

