from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


# Configuração do CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configurar qual origem pode acessar(necessario configurar ainda)
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)