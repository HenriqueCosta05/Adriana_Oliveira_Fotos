from fastapi import FastAPI
from controllers import createNewClient, deleteClient, getAllClients, updateClient

app = FastAPI()

app.include_router(deleteClient.router)
app.include_router(createNewClient.router)
app.include_router(getAllClients.router)
app.include_router(updateClient.router)