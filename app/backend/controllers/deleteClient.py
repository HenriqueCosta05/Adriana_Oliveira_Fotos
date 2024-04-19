from fastapi import APIRouter, HTTPException
from config.mongodb_config import colecao

router = APIRouter()

@router.delete('/app/excluir-cliente/{email}')
def deletar_cliente(email: str):
    try:
        cliente_existente = colecao.find_one({"email": email.lower()})
        if cliente_existente is None:
            raise HTTPException(status_code=404, detail="Cliente não encontrado")
        
        colecao.delete_one(cliente_existente)
        return {"Aviso":"Cliente Excluido com Sucesso"}
            
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))