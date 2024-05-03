from fastapi import APIRouter, HTTPException
from config.mongodb_config import colecaoFinacial
from models.financial.Register import Register
from bson.objectid import ObjectId

router = APIRouter()

@router.put('/app/editar-registro/{id}')
def atualizar_registro(id, registro: Register):
    try:
        registro_existente = colecaoFinacial.find_one({"_id": ObjectId(id)})
        if registro_existente is None:
            raise HTTPException(status_code=404, detail="Registro não encontrado")
    
        update_data = {
            "$set": {               
                "tipo": registro.tipo,
                "titulo": registro.titulo,
                "valor": registro.valor,
                "dataVencimento": registro.dataVencimento,
                "situacao": registro.situacao,
                "conta": registro.conta,
                "categoria": registro.categoria,
                "cliente": registro.cliente,
                "formaPagamento": registro.formaPagamento,
                "automatico": registro.automatico,
                "descricao": registro.descricao
                
            }
        }
        colecaoFinacial.update_one({"_id": ObjectId(id)}, update_data)
    
        registro_atualizado = colecaoFinacial.find_one({"_id": ObjectId(id)})
        registro_atualizado['_id'] = str(registro_atualizado['_id'])
        return {"aviso": "Registro atualizado com sucesso", "Registro": registro_atualizado}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))