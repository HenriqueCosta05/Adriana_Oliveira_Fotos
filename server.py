from fastapi import FastAPI
from pydantic import BaseModel
from uuid import uuid4
import json



app = FastAPI()

class cliente(BaseModel):
    name: str
    email: str
    password: str



def ler_cliente():
    try:
        with open("clientes.json", "r") as file:
            clientes = json.load(file)
            return clientes
    except FileNotFoundError:
        clientes = []
        return clientes
    

def gravar_cliente(clientes):
    with open("clientes.json", "w") as file:
        json.dump(clientes, file, indent=4)


def buscar_cliente_por_nome(nome: str, clientes: list):
    for cliente_existente in clientes:
        if cliente_existente["name"] == nome.upper():
            return cliente_existente
    return None


@app.post('/cliente')
def criar_cliente(cliente: cliente):
    clientes = ler_cliente()
    novo_uuid = str(uuid4())
    cliente_novo = {
        "uuid": novo_uuid,
        "name": cliente.name.upper(),
        "email": cliente.email.lower(),
        "password": cliente.password
    }
    for cliente_existente in clientes:
        if cliente_existente["email"] == cliente.email.lower():
            return {"aviso": "Cliente já possui conta criada"}
    
    clientes.append(cliente_novo)
    gravar_cliente(clientes)
    return {"aviso": "Cliente cadastrado com sucesso", "cliente": cliente_novo}

@app.put('/cliente/{nome}')
def atualizar_cliente(nome:str, cliente_novo: cliente):
    clientes = ler_cliente()
    cliente_atualizado = buscar_cliente_por_nome(nome, clientes)
    
    if cliente_atualizado:
        cliente_atualizado["name"] = cliente_novo.name.upper() if cliente_novo.name else cliente_atualizado["name"]
        cliente_atualizado["email"] = cliente_novo.email.lower() if cliente_novo.email else cliente_atualizado["email"]
        cliente_atualizado["password"] = cliente_novo.password if cliente_novo.password else cliente_atualizado["password"]

        gravar_cliente(clientes)
        return {"aviso": f"{nome} Atualizado com sucesso", "cliente": cliente_atualizado}
    else:
        return{"aviso": f"{nome} Não Encontrado"}

@app.get('/cliente')
def listar_cliente():
    clientes = ler_cliente()
    return clientes

@app.delete('/cliente/{email}')
def remover_cliente(email: str):
    clientes = ler_cliente()
    cliente_encontrado = None
    for cliente in clientes:
        if cliente["email"] == email.lower():
            cliente_encontrado = cliente
            break
    
    if cliente_encontrado:
        clientes.remove(cliente_encontrado)
        gravar_cliente(clientes)
        return{"alerta": "Cliente Removido com sucesso"}
    else:
        return{"Error":FileNotFoundError}