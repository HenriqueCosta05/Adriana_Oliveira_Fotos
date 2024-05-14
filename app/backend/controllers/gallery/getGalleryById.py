from fastapi import APIRouter, HTTPException
from models.gallery.Gallery import Gallery
from config.mongodb_config import colecaoGallery
from bson import ObjectId

router = APIRouter()

@router.get("/app/galerias/{galeria_id}", response_model=Gallery)
async def buscar_galeria_por_id(galeria_id: str):
    try:
        obj_id = ObjectId(galeria_id)
        galeria = colecaoGallery.find_one({"_id": obj_id})
        if galeria:
            galeria['_id'] = str(galeria['_id'])
            return Gallery(**galeria)
        else:
            raise HTTPException(status_code=404, detail="Galeria não encontrada")
    except Exception as e:
        print(f"Erro ao consultar o banco: {e}")
        raise HTTPException(status_code=500, detail="Erro ao acessar o banco de dados")