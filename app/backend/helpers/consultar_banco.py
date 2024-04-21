from config.mongodb_config import colecao
from models.Cliente import Cliente

def consultar_banco():
    try:
        result = list(colecao.find())
        
        clientes = []
        for cliente in result:
           
            cliente['id'] = str(cliente['_id'])
            del cliente['_id']
            cliente_model = Cliente(**cliente)
            clientes.append(cliente_model)
            
        return clientes
    except Exception as e:
        print(f"Erro ao consultar o banco: {e}")
        return []
