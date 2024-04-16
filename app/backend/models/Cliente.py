from typing import Optional
from models.TipoPessoa import TipoPessoa
from models.Conta import Conta
from models.TipoRegistro import TipoRegistro
from pydantic import BaseModel

class Cliente(BaseModel):
    registryType: str
    personType: str
    name: str
    surname: str
    email: str
    phone: str
    birthDate: Optional[str] = None
    zip: str
    city: str
    state: str
    street: str
    streetNumber: str
    complement: Optional[str] = None
    neighborhood: str
    receiveSMS: bool
    receiveEmail: bool
    accountType: Optional[Conta] = None