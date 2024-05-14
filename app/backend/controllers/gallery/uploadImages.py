from fastapi import APIRouter, File, UploadFile, HTTPException, Form
from config.mongodb_config import colecaoGridFs
from config.mongodb_config import colecaoGallery
from models.gallery.Folder import Folder
import bson
from bson import ObjectId

router = APIRouter()

@router.post("/app/galerias/{galeria_id}/upload/")
async def upload_foto(galeria_id: str, nome_pasta: str = Form(...), arquivo: UploadFile = File(...), documento: UploadFile = File(...)):
    try:
        obj_id = ObjectId(galeria_id)
    except bson.errors.InvalidId:
        raise HTTPException(status_code=400, detail="ID de galeria inválido")

    galeria = colecaoGallery.find_one({"_id": obj_id})
    if not galeria:
        raise HTTPException(status_code=404, detail="Galeria não encontrada")

    imagem_bytes = await arquivo.read()
    file_id_imagem = colecaoGridFs.put(imagem_bytes, filename=arquivo.filename)
    str_file_id_imagem = str(file_id_imagem)


    documento_bytes = await documento.read()
    print("Documento recebido:", documento.filename)  # Adiciona um log para verificar se o arquivo PDF está sendo recebido corretamente
    file_id_documento = colecaoGridFs.put(documento_bytes, filename=documento.filename)
    str_file_id_documento = str(file_id_documento)
    print("ID do documento no MongoDB:", str_file_id_documento)  # Adiciona um log para verificar se o arquivo PDF está sendo inserido corretamente no MongoDB

    # Cria uma nova pasta com o nome definido pelo usuário, a imagem e o documento adicionados
    nova_pasta = Folder(titulo=nome_pasta, images=[str_file_id_imagem], documents=[str_file_id_documento], gallery_Id=galeria_id)
    
    # Adiciona a nova pasta à lista de pastas da galeria
    update_result = colecaoGallery.update_one(
        {"_id": obj_id},
        {"$push": {"pastas": nova_pasta.dict()}}
    )

    if update_result.modified_count == 1:
        return {"info": "Foto e documento adicionados com sucesso", "file_id_imagem": str_file_id_imagem, "file_id_documento": str_file_id_documento}
    else:
        raise HTTPException(status_code=500, detail="Erro ao adicionar foto e documento")