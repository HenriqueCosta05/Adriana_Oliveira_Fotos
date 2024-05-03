from fastapi import APIRouter, HTTPException
from typing import List
from helpers.financial.consultar_banco_financial import consultar_banco_financial
from models.financial.Register import Register

router = APIRouter()

@router.get('/app/consultar-registros')
def banco():
    try:
        registros = consultar_banco_financial()
        return registros
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
