from fastapi import APIRouter, HTTPException
from helpers.encriptar_senha import encriptar_senha
from config.mongodb_config import colecao
from models.Cliente import Cliente

router = APIRouter()

@router.put('/cliente/{email}')
def atualizar_cliente(email: str, cliente: Cliente):
    try:
        cliente_existente = colecao.find_one({"email": email.lower()})
        if cliente_existente is None:
            raise HTTPException(status_code=404, detail="Cliente não encontrado")

        update_data = {
            "$set": {
                "name": cliente.name.lower(),
                "email": cliente.email.lower(),
                "subname": cliente.subname.lower(),
                "birthdate": cliente.birthdate,
                "cpf": cliente.cpf,
                "phone": cliente.phone,
                "cep": cliente.cep,
                "addres": cliente.addres.lower(),
                "addresNumber": cliente.addresNumber,
                "complement": cliente.neighborhood.lower(),
                "neighborhood": cliente.neighborhood.lower(),
                "city": cliente.city.lower(),
                "state": cliente.state.lower(),
                "password": encriptar_senha(cliente.password),
            }
        }
        colecao.update_one({"email": email.lower()}, update_data)

        cliente_atualizado = colecao.find_one({"email": email.lower()})
        cliente_atualizado['_id'] = str(cliente_atualizado['_id'])
        return {"aviso": "Cliente atualizado com sucesso", "cliente": cliente_atualizado}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    