from fastapi import APIRouter
from models.gallery.Gallery import Gallery
from config.mongodb_config import colecaoGallery


router = APIRouter()

@router.post("/app/galerias/")
async def criar_galeria(galeria: Gallery):
    result = colecaoGallery.insert_one(galeria.dict())
    return {"_id": str(result.inserted_id)}
