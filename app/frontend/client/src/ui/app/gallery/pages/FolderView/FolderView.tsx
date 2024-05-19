import UserNavbar from "../../../components/UserNavbar";
import DropZone from "../../components/DropZone/DropZone";
import Image from "../../../../../components/Shared/Image/Image";
import { useEffect, useState } from "react";
import {
  fetchFolderById,
  fetchGallery,
  fetchImageById,
} from "../../../../../services/GalleryDataService";
import { useLocation, useParams } from "react-router-dom";
import Footer from "../../../../portfolio/components/Sections/Footer";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import { getImageWidth, getImageHeight } from "../../../../../helpers/gallery/getImageDimensions";

export default function FolderView() {
  const { id, pastaId } = useParams();
  const [galleryFetched, setGalleryFetched] = useState({});
  const [folderFetched, setFolderFetched] = useState({});
  const [pictures, setPictures] = useState(folderFetched.photos || []);
  const [dimensions, setDimensions] = useState({});

  const location = useLocation();
  const photosNumber = location.state.maxPhotosNumber;

useEffect(() => {
  fetchGallery(id).then((response) => {
    setGalleryFetched(response);
  });

  fetchFolderById(id, pastaId).then((response) => {
    setFolderFetched(response);

    if (response.photos) {
      Promise.all(response.photos.map((photo) => fetchImageById(id, photo)))
        .then((responses) => {
          const blobUrls = responses
            .map((response) => {
              if (response) {
                return URL.createObjectURL(response);
              }
              return null;
            })
            .filter(Boolean);
          setPictures(blobUrls);

          // Fetch image dimensions
          Promise.all(blobUrls.map((blobUrl) => Promise.all([getImageWidth(blobUrl), getImageHeight(blobUrl)])))
            .then((results) => {
              const newDimensions = {};
              results.forEach(([width, height], index) => {
                newDimensions[blobUrls[index]] = { width, height };
              });
              setDimensions(newDimensions);
            })
            .catch((error) => {
              console.error("Error getting image dimensions:", error);
            });
        })
        .catch((error) => {
          console.error("Error fetching images:", error);
        });
    }
  });
}, [id, pastaId]);

  return (
    <>
      <UserNavbar />
      <BreadCrumb
        home={["Página Inicial", "/app"]}
        currentSection={["Galerias", "/app/galerias/"]}
        currentSubsection={[galleryFetched.title, "/app/galerias/" + id]}
        currentSubsection2={[
          folderFetched.title,
          "/app/galerias/" + id + "/pastas/" + pastaId,
        ]}
      />
      <div className="xs:w-11/12 lg:w-5/6 mx-auto bg-[#f9f9f9] p-4 my-4 rounded-md">
        <h4 className="text-3xl font-bold text-center mb-9 text-secondary">
          {folderFetched && folderFetched.title}
        </h4>
        <p className="mt-2 mb-4">
          Lista de imagens adicionadas na {folderFetched && folderFetched.title}
        </p>
        <div className="w-full">
          <DropZone
            setPhotos={setPictures}
            acceptedFileTypes={{
              "image/jpeg": [],
              "image/jpg": [],
              "image/png": [],
            }}
            currentPhotosNumber={pictures.length}
            photosNumber={photosNumber}
            introText="Arraste e solte arquivos aqui, ou clique para selecionar imagens."
            supportedFiles="Formatos suportados: .jpeg, .jpg, .png"
          />
        </div>
        <div className="w-full grid grid-cols-3 gap-4">
          {pictures.map((blobUrl, index) => (
            <Image
              key={index}
              src={blobUrl}
              width={dimensions[blobUrl] && dimensions[blobUrl].width}
              height={dimensions[blobUrl] && dimensions[blobUrl].height}
              alt={`Foto ${index + 1}`}
              className={"w-full h-64 object-cover rounded-md"}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
