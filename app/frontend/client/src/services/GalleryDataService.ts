const API = "http://localhost:8003/app";

const handleErrors = async (response) => {
  if (!response.ok) {
    let errorMessage;
    try {
      const errorBody = await response.json();
      errorMessage = errorBody.detail;
    } catch (e) {
      console.error("Erro ao converter mensagem de erro", e);
    }
    throw Error(errorMessage);
  }
  return response;
};

export const fetchGallery = async (id: string) => {
  const response = await fetch(`${API}/galerias?id=${id}`);
  await handleErrors(response);
  const data = await response.json();
  return data;
};

export const fetchAllGalleries = async () => {
  const response = await fetch(`${API}/galerias`);
  await handleErrors(response);
  const data = await response.json();
  return data;
};

export const createGallery = async (galleryData) => {
  const response = await fetch(`${API}/galerias`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(galleryData),
  });
  await handleErrors(response);
  const data = await response.json();
  return data;
};

export const updateGallery = async (id, galleryData) => {
  const response = await fetch(`${API}/galerias/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(galleryData),
  });
  await handleErrors(response);
  const data = await response.json();
  return data;
};

export const deleteGallery = async (id) => {
  const response = await fetch(`${API}/galerias/${id}/delete`, {
    method: "DELETE",
  });
  await handleErrors(response);
  return response;
};

export const uploadImages = async (galleryId, images) => {
  const formData = new FormData();
  images.forEach((image) => {
    formData.append("images", image);
  });

  const response = await fetch(`${API}/galerias/${galleryId}/upload`, {
    method: "POST",
    body: formData,
  });
  await handleErrors(response);
  return response;
}

export const deleteImage = async (galleryId, imageId) => {
  const response = await fetch(`${API}/galerias/${galleryId}/fotos/${imageId}`, {
    method: "DELETE",
  });
  await handleErrors(response);
  return response;
}

export const downloadImage = async (galleryId, imageId) => {
    const response = await fetch(`${API}/galerias/${galleryId}/fotos/${imageId}/download`);
    await handleErrors(response);
    return response;
    }