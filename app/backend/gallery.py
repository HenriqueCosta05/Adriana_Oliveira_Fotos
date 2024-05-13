from fastapi import FastAPI
from controllers.gallery import createGallery, getGallerys, deleteGallery, uploadImages, downloadImages, updateGalley, deleteImage, getGalleryById
from middlewares.cors import setup_cors

app = FastAPI()
setup_cors(app)

app.include_router(createGallery.router)
app.include_router(getGallerys.router)
app.include_router(deleteGallery.router)
app.include_router(uploadImages.router)
app.include_router(downloadImages.router)
app.include_router(updateGalley.router)
app.include_router(deleteImage.router)
app.include_router(getGalleryById.router)