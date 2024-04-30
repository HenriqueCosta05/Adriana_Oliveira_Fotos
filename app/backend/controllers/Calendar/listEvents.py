from fastapi import APIRouter
from config.calendarAPI_config import conectaApi
import datetime


router = APIRouter()



@router.get('/app/listar-eventos')
def listar():
    service = conectaApi()
    if service:
        now = datetime.datetime.utcnow().isoformat() + "Z"
        print("Obtendo os últimos eventos...")
        events_result = (
            service.events()
            .list(
                calendarId="primary",
                singleEvents=True,
                orderBy="startTime",
            )
            .execute()
        )

        events = events_result.get("items", [])

        if not events:
            return("No upcoming events found.")
        else:
            # Prints the ID, start, and name of the next 10 events
            for event in events:
                event_id = event["id"]
                start = event["start"].get("dateTime", event["start"].get("date"))
                return(f"Event ID: {event_id}\nStart: {start}\nSummary: {event['summary']}")
    else:
        return("Failed to connect to Google Calendar API.")