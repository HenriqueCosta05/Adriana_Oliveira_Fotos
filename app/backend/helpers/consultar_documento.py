from config.mongodb_config import colecao

def consultar_documento(email: str):
    try:
        result = colecao.find_one({"email": email.lower()})
        return result
    except Exception as e:
        print(f"Erro ao consultar o documento: {e}")
        return 