from typing import Optional
from models.TipoPessoa import TipoPessoa
from models.Conta import Conta
from models.TipoRegistro import TipoRegistro
from pydantic import BaseModel

class Cliente(BaseModel):
    registryType: TipoRegistro
    personType: TipoPessoa
    name: str
    surname: str
    email: str
    phone: str
    birthDate: Optional[str]
    zip: str
    city: str
    state: str
    street: str
    streetNumber: str
    complement: Optional[str]
    neighborhood: str
    receiveSMS: bool
    receiveEmail: bool
    accountType: Optional[Conta]