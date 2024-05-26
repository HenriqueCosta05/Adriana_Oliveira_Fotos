export const handleUpload = async (
  acceptedFiles,
  id,
  pastaId,
  setPhotos,
  currentPhotos
) => {
  const url = `http://localhost:8003/app/galerias/${id}/pasta/${pastaId}/upload-imagem/`;
  const formData = new FormData();

  acceptedFiles.forEach((file) => {
    formData.append("photos", file);
  });

  const response = await fetch(url, {
    method: "PUT",
    body: formData,
  });

  const data = await response.json();

  if (data.photos) {
    const newPhotosData = data.photos.filter(
      (photo) => !currentPhotos.includes(photo)
    );

    const newPhotosPromises = newPhotosData.map(async (photo) => {
      const downloadUrl = `http://localhost:8003/app/galerias/${id}/fotos/${photo}/download/`;
      const response = await fetch(downloadUrl);
      const blob = await response.blob();
      return URL.createObjectURL(blob);
    });

    const newPhotos = await Promise.all(newPhotosPromises);
    setPhotos((currentPhotos) => [...currentPhotos, ...newPhotos]);
  }
  setModal({
    isOpen: true,
    message:
      "Imagens enviadas com sucesso! Recarregue a página para visualizar as novas fotos.",
    handleCloseModal: () => setModal({ isOpen: false }),
  });
  window.location.reload();
};
