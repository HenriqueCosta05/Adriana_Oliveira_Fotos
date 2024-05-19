export const handleUpload = (acceptedFiles, id, pastaId, setPhotos) => {
  const url = `http://localhost:8003/app/galerias/${id}/pasta/${pastaId}/upload-imagem/`;
  const formData = new FormData();

  acceptedFiles.forEach((file) => {
    formData.append("photos", file);
  });

  // Get the current photos before the upload
  setPhotos((currentPhotos) => {
    fetch(url, {
      method: "PUT",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.photos) {
          // Filter out the photos that were already in the state
          const newPhotosData = data.photos.filter((photo) => !currentPhotos.includes(photo));

          const newPhotosPromises = newPhotosData.map(async (photo) => {
            const downloadUrl = `http://localhost:8003/app/galerias/${id}/fotos/${photo}/download/`;
            const response = await fetch(downloadUrl);
            const blob = await response.blob();
            return URL.createObjectURL(blob);
          });

          Promise.all(newPhotosPromises)
            .then((newPhotos) => {
              return [...currentPhotos, ...newPhotos];
            });
        }
      });

    return currentPhotos;
  });
};