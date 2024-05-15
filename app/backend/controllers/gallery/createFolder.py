from models.gallery.Folder import Folder
from fastapi import APIRouter
from models.gallery.Gallery import Gallery
from config.mongodb_config import colecaoGallery
from bson.objectid import ObjectId

router = APIRouter()

@router.put("/app/galerias/{id}/pastas/nova-pasta")
async def criar_pasta(pasta: Folder, galeria: Gallery):
    result = colecaoGallery.updateOne(galeria.dict, {"$push": {"Folders": pasta.dict}})
    inserted_id = str(result.inserted_id)
    colecaoGallery.update_one({"_id": ObjectId(inserted_id)}, {"$set": {"id": inserted_id}})
    return {"id": inserted_id}