from config.mongodb_config import colecao
from models.TipoRegistro import TipoRegistro
from models.Conta import Conta



def consultar_banco():
    try:
        result = list(colecao.find({}))
        
        clientes = []
        for cliente in result:
            cliente['_id'] = str(cliente['_id'])
            cliente['name'] = cliente.get('name', '')
            cliente['email'] = cliente.get('email', '')
            cliente['status'] = cliente.get('status', TipoRegistro.prospeccao.value)
            cliente['tipo'] = cliente.get('tipo', Conta.user.value)
            cliente['birthdate'] = cliente.get('birthdate', '')
            cliente['cpf'] = cliente.get('cpf', 0)
            cliente['phone'] = cliente.get('phone', 0)
            cliente['cep'] = cliente.get('cep', 0)
            cliente['address'] = cliente.get('address', '')
            cliente['addressNumber'] = cliente.get('addressNumber', 0)
            cliente['complement'] = cliente.get('complement', '')
            cliente['neighborhood'] = cliente.get('neighborhood', '')
            cliente['city'] = cliente.get('city', '')
            cliente['state'] = cliente.get('state', '')
            cliente['password'] = cliente.get('password', '')
            clientes.append(cliente)
        
        return clientes
    except Exception as e:
        print(f"Erro ao consultar o banco: {e}")
        return []
