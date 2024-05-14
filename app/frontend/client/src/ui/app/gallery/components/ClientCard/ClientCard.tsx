import { Button } from 'flowbite-react';
import React from 'react';

const ClientCard = () => {
    return (
        <div className="flex flex-col h-64 p-4 border-1 m-4 border-gray-300 rounded-md">
            <div className="flex-1">
                <h4 className="text-lg font-bold text-gray-700">Nome do Cliente</h4>
                <p className="mt-2 text-sm text-gray-600">Fotografias selecionadas - 10</p>
            </div>
            <Button className="bg-success text-white rounded-md hover:bg-blue-600 transition-colors duration-200 ease-in-out">
                Enviar link de acesso
            </Button>
        </div>
    );
};

export default ClientCard;