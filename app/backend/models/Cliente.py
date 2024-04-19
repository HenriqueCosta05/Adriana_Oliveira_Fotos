from typing import Optional
from datetime import datetime
from models.Conta import Conta
from pydantic import BaseModel, validator
import dateutil.parser as dt_parser


class Cliente(BaseModel):
    registryType: str
    personType: str
    name: str
    surname: str
    email: str
    phone: str
    birthDate: Optional[datetime] = None
    zip: str
    city: str
    state: str
    street: str
    streetNumber: str
    complement: Optional[str] = None
    neighborhood: str
    receiveSMS: bool
    receiveEmail: bool
    accountType: Optional[dict] = Conta(user=True, administrador=False).dict()
    
    @validator('birthDate', pre=True)
    def parse_birthDate(cls, value):
        return datetime.fromisoformat(value.replace("Z", "+00:00"))