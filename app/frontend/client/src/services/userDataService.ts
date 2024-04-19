const API = "http://localhost:8000/app";

const handleErrors = (response) => {
  if (!response.ok) {
    console.error("Algo deu errado", response);
    throw Error(response.statusText);
  }
  return response;
};

export const fetchData = async (email) => {
  const response = await fetch(`${API}/consultar-clientes?email=${email}`);
  const data = await handleErrors(response).json();
  return data;
};

export const sendData = async (email?: string, data) => {
  const url = email ? `${API}/editar-cliente/${email}` : `${API}/novo-cliente`;
  const method = email ? "PUT" : "POST";
  
  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  
  const responseData = await handleErrors(response).json();
  return responseData;
};