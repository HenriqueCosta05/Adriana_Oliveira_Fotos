from fastapi import APIRouter, Query
from typing import List
from helpers.client.cliente_existe import cliente_existe
from dotenv import load_dotenv
from redmail import outlook
import os
import logging

router = APIRouter()

load_dotenv() 

logging.basicConfig(level=logging.INFO)

outlook.username = os.getenv('OUTLOOK_EMAIL')
outlook.password = os.getenv('OUTLOOK_PASSWORD')

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM")

@router.post("/app/send-login-email/{client_email}/")
async def send_login_email(client_email: str, galleryId: str = Query(None), folderIds: List[str] = Query(None)):
    try:
        client_exists = cliente_existe(client_email)
        if(client_exists):
            if folderIds is None:
                folderIds = []
            folder_ids_param = ','.join(folderIds)
            outlook.send(
                subject="Escolha suas fotos - Adriana Oliveira Fotos",
                receivers=[str(client_email)],
                html=
                f''' 
                <html>
                    <body>
                        <h1 style="font-family: Arial, sans-serif; color: #333;">Olá, tudo bem?</h1>
                        <p style="font-family: Arial, sans-serif; color: #333;">Para escolher as suas fotos, clique no link abaixo:</p>
                        <p style="font-family: Arial, sans-serif; color: #333;">
                <a href="http://localhost:5173/auth/login-user/{client_email}/{galleryId}/{folder_ids_param}" style="color: #4CAF50; text-decoration: none;">Clique aqui para acessar</a>
            </p>
                        <p style="font-family: Arial, sans-serif; color: #333;">Se você não solicitou acesso, por favor, ignore este e-mail.</p>
                        <p style="font-family: Arial, sans-serif; color: #333;">Atenciosamente,</p>
                        <p style="font-family: Arial, sans-serif; color: #333;">Adriana Oliveira Fotos</p>
                    </body>
                </html>
                '''
            )
    except Exception as e:
        logging.error(f"An error occurred: {e}")