from fastapi import APIRouter
from fastapi import HTTPException
from config.mongodb_config import colecaoFinacial
from models.financial.Register import Register
from helpers.financial.consultar_banco_financial import consultar_banco_financial

router = APIRouter()

@router.post('/app/novo-registro')
def cadastrar_banco(novo_registro: Register):
    financeiro = consultar_banco_financial()
    
    novo_registro = {
                "tipo": novo_registro.tipo,
                "titulo": novo_registro.titulo,
                "valor": novo_registro.valor,
                "dataVencimento": novo_registro.dataVencimento,
                "situacao": novo_registro.situacao,
                "conta": novo_registro.conta,
                "categoria": novo_registro.categoria,
                "cliente": novo_registro.cliente,
                "formaPagamento": novo_registro.formaPagamento,
                "automatico": novo_registro.automatico,
                "descricao": novo_registro.descricao
        }




    result = colecaoFinacial.insert_one(novo_registro)
    
    novo_registro['_id'] = str(result.inserted_id)
    return {"aviso": "Registro cadastrado com sucesso", "Registro": novo_registro}
