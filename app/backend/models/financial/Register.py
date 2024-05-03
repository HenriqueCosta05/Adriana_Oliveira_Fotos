from pydantic import BaseModel

class Register(BaseModel):
    tipo: str
    titulo: str
    valor: float
    dataVencimento: str
    situacao: bool
    conta: str
    categoria: str
    cliente: str
    formaPagamento: str
    automatico: bool
    descricao: str

    