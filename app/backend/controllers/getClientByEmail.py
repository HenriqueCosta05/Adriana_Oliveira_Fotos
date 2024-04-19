from fastapi import APIRouter, HTTPException, Depends
from fastapi.param_functions import Query
from helpers.consultar_documento import consultar_documento
from models.Cliente import Cliente

router = APIRouter()

@router.get('/app/consultar-cliente', response_model=Cliente)
def buscarClientePorEmail(email: str = Query(None, alias="email")): 
    try:
        cliente = consultar_documento(email) 
        if cliente is None:
            raise HTTPException(status_code=404, detail="Cliente não encontrado")
        return cliente
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))