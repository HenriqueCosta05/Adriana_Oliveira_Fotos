import datetime
from typing import Optional
from pydantic import BaseModel

class Register(BaseModel):
    registryType: str
    installments: Optional[int] = None
    title: str 
    value: float
    dueDate: datetime.datetime
    isPaid: bool
    accountType: str
    categoryType: Optional[str] = None
    client: str
    paymentMethod: str
    automaticPayment: bool
    detailedDescription: str

    