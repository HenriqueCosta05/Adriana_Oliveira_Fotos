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
                "tipo": novo_registro.registryType,
                "titulo": novo_registro.title,
                "valor": novo_registro.value,
                "dataVencimento": novo_registro.dueDate,
                "pago": novo_registro.isPaid,
                "conta": novo_registro.accountType,
                "categoria": novo_registro.categoryType,
                "cliente": novo_registro.client,
                "formaPagamento": novo_registro.paymentMethod,
                "pagamentoAutomatico": novo_registro.automaticPayment,
                "descricao": novo_registro.detailedDescription
        }




    result = colecaoFinacial.insert_one(novo_registro)
    
    novo_registro['_id'] = str(result.inserted_id)
    return {"aviso": "Registro cadastrado com sucesso", "Registro": novo_registro}
