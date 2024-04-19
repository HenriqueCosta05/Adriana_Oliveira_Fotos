from fastapi import APIRouter, HTTPException, Depends
from fastapi.param_functions import Query
from helpers.consultar_banco import colecao
from models.Cliente import Cliente

router = APIRouter()

@router.get('/app/consultar-clientes', response_model=Cliente)
def buscarClientePorEmail(email: str = Depends(Query(None, alias="email"))): 
    try:
        cliente = colecao.find_one({"email": email.lower()})  
        if cliente is None:
            raise HTTPException(status_code=404, detail="Cliente não encontrado")
        cliente['_id'] = str(cliente['_id']) 
        return cliente
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))