from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

uri = "mongodb+srv://projetointerdisciplinar2fatec:nZ7FxgCTn1V7LjG6@projetointerdisciplinar.tc1hzfl.mongodb.net/?retryWrites=true&w=majority&appName=ProjetoInterdisciplinarIII"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))


database = client['CRUDfotos']

# Acessa as coleções
colecaoClient = database['Clientes']
colecaoFinacial = database['Financeiro']

# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)
