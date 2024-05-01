from fastapi import APIRouter
from config.calendarAPI_config import conectaApi
import datetime


router = APIRouter()



@router.get('/app/consultar-compromisso/{id}')
def obter_compromisso(id: str):
    service = conectaApi()
    if service:
       event = service.events().get(calendarId='projetointerdisciplinar2.fatec@gmail.com', eventId=id).execute()
       print(event)
       return(event)
    else:
        return("Failed to connect to Google Calendar API.")