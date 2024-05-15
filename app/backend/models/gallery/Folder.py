
from pydantic import BaseModel
from typing import List, Optional


#PArei aqui

"""
gallery = Gallery(
    id="1",
    title="Gallery 1",
    category="Category 1",
    photosNumber=2,
    defaultSize="1200x800",
    clientAssociated="client1",
    folders=[
        Folder(id="1", title="Folder 1", photos=["http://example.com/photo1.jpg", "http://example.com/photo2.jpg"]),
        Folder(id="2", title="Folder 2", photos=["http://example.com/photo3.jpg", "http://example.com/photo4.jpg"]),
    ],
)
"""

class Folder(BaseModel):
    title: str
    photos: List[str]
    documents: List[str]

