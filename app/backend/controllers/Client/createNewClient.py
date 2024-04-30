from fastapi import APIRouter, HTTPException
from config.mongodb_config import colecao
from models.Client.Cliente import Cliente
from helpers.consultar_banco import consultar_banco

router = APIRouter()

@router.post('/app/novo-cliente')
def cadastrar_banco(novo_cliente: Cliente):
    clientes = consultar_banco()
    
    for cliente_existente in clientes:
        if cliente_existente.email == novo_cliente.email.lower():
            raise HTTPException(status_code=400, detail="Email já cadastrado no sistema. Tente novamente com outro.")
    
    cliente_novo = {
    "registryType": novo_cliente.registryType,
    "personType": novo_cliente.personType,
    "name": novo_cliente.name.lower(),
    "surname": novo_cliente.surname.lower(),
    "email": novo_cliente.email.lower(),
    "phone": novo_cliente.phone,
    "birthDate": novo_cliente.birthDate if novo_cliente.birthDate else None,
    "zip": novo_cliente.zip,
    "city": novo_cliente.city.lower(),
    "state": novo_cliente.state.lower(),
    "street": novo_cliente.street.lower(),
    "streetNumber": novo_cliente.streetNumber,
    "complement": novo_cliente.complement.lower() if novo_cliente.complement else None,
    "neighborhood": novo_cliente.neighborhood.lower(),
    "receiveSMS": novo_cliente.receiveSMS,
    "receiveEmail": novo_cliente.receiveEmail,
    "accountType": novo_cliente.accountType
}

    result = colecao.insert_one(cliente_novo)
    
    cliente_novo['_id'] = str(result.inserted_id)
    return {"aviso": "Cliente cadastrado com sucesso", "cliente": cliente_novo}