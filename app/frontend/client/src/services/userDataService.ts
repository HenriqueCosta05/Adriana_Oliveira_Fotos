const API = "http://localhost:8000/app";

const handleErrors = (response) => {
  if (!response.ok) {
    console.error("Algo deu errado", response);
    throw Error(response.statusText);
  }
  return response;
};

export const fetchData = async (id: string) => {
  const response = await fetch(`${API}/consultar-cliente?id=${id}`);
  const data = await response.json();
  return data;
};

export const sendData = async (id?: string, data) => {
  const url = id ? `${API}/editar-cliente/${id}` : `${API}/novo-cliente`;
  const method = id ? "PUT" : "POST";
  
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