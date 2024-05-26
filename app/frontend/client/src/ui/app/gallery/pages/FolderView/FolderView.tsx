import UserNavbar from "../../../components/UserNavbar";
import DropZone from "../../components/DropZone/DropZone";
import Image from "../../../../../components/Shared/Image/Image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../../../portfolio/components/Sections/Footer";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import Loading from "../../../../loading/Loading";
import {
  fetchGalleryData,
  handleImageDelete,
  handleImageSelect,
} from "../../../../../helpers/gallery/retrieveGalleryInfo";
import {
  acceptedImageTypes,
  acceptedDocumentTypes,
} from "../../../../../lib/gallery/filetypes/filtetypes";
import { Button } from "flowbite-react";
import SuccessModal from "../../../modals/gallery/Infos/Success/Success";
import ErrorModal from "../../../modals/gallery/Infos/Error/Error";
import ConfirmDeleteModal from "../../../modals/gallery/Warnings/ConfirmDelete/ConfirmDelete";

export default function FolderView() {
  const { id, pastaId } = useParams();
  const [state, setState] = useState({
    galleryFetched: {},
    folderFetched: {},
    pictures: [],
    selectedImages: [],
    loading: true,
    modal: {
      isOpen: false,
      message: "",
      handleCloseModal: () => {},
      handleConfirmAction: () => {},
    },
  });

  const fetchGalleryDataCallback = useCallback(async () => {
    const { galleryResponse, folderResponse, pictures } =
      await fetchGalleryData(id, pastaId);
    setState((prevState) => ({
      ...prevState,
      galleryFetched: galleryResponse,
      folderFetched: folderResponse,
      pictures,
      loading: false,
    }));
  }, [id, pastaId]);

  const handleImageSelectCallback = (index) => {
    setState((prevState) => {
      const selectedImageId = state.folderFetched.photos[index];

      let newSelectedImages;
      if (prevState.selectedImages.includes(selectedImageId)) {
        // If the image is already selected, remove it from the selection
        newSelectedImages = prevState.selectedImages.filter(
          (id) => id !== selectedImageId
        );
      } else {
        // If the image is not selected, add it to the selection
        newSelectedImages = [...prevState.selectedImages, selectedImageId];
      }

      return {
        ...prevState,
        selectedImages: newSelectedImages,
      };
    });
  };

  const handleImageDeleteCallback = useCallback(async () => {
    await handleImageDelete(id, state.selectedImages);
  }, [id, state.selectedImages]);

  const setPictures = (newPictures) => {
    setState((prevState) => ({
      ...prevState,
      pictures: newPictures,
    }));
  };

  const setModal = (newModalState) => {
    setState((prevState) => ({
      ...prevState,
      modal: {
        ...prevState.modal,
        ...newModalState,
      },
    }));
  };

  useEffect(() => {
    fetchGalleryDataCallback();
  }, [fetchGalleryDataCallback]);

  const blobUrls = useMemo(
    () => state.pictures.map((blob) => URL.createObjectURL(blob)),
    [state.pictures]
  );

  if (state.loading) {
    return <Loading />;
  }

  return (
    <>
      <UserNavbar />
      <BreadCrumb
        home={["Página Inicial", "/app"]}
        currentSection={["Galerias", "/app/galerias/"]}
        currentSubsection={[state.galleryFetched.title, "/app/galerias/" + id]}
        currentSubsection2={[
          state.folderFetched.title,
          "/app/galerias/" + id + "/pastas/" + pastaId,
        ]}
      />
      <div className="xs:w-11/12 lg:w-5/6 mx-auto bg-[#f9f9f9] p-4 my-4 rounded-md">
        <h4 className="text-3xl font-bold text-center mb-9 text-secondary">
          {state.folderFetched && state.folderFetched.title}
        </h4>
        <h4 className="text-2xl font-bold text-center mb-9 text-secondary">
          Fotos
        </h4>

        <div className="w-full">
          <DropZone
            setPhotos={setPictures}
            acceptedFileTypes={acceptedImageTypes}
            introText="Arraste e solte arquivos aqui, ou clique para selecionar imagens."
            supportedFiles="Formatos suportados: .jpeg, .jpg, .png"
            handleDrop={() => {
              setModal({
                isOpen: true,
                type: "Success",
                message:
                  "Imagens enviadas com sucesso! Recarregue a página para visualização.",
                handleCloseModal: () => {
                  setModal({ ...state.modal, isOpen: false });
                  window.location.reload();
                },
              });
            }}
            handleDropRejected={() => {
              setModal({
                isOpen: true,
                type: "Error",
                message:
                  "Arquivo não suportado. Tente novamente com os formatos de arquivos suportados.",
                handleCloseModal: () => {
                  setModal({ ...state.modal, isOpen: false });
                  window.location.reload();
                },
              });
            }}
          />
        </div>
        <p className="mt-2 mb-4">
          Ao selecionar as fotos, você poderá excluí-las em lote, e, ao
          finalizar o upload na pasta, deverá enviar o link de acesso para o
          cliente; caso o cliente não selecione as fotos em até sete dias úteis,
          a galeria será automaticamente excluída.{" "}
        </p>
        {Object.keys(state.selectedImages).length > 0 && (
          <Button
            className="bg-red-400 lg:w-1/3 xxs:w-11/12 my-12 mx-auto hover:bg-red-600"
            onClick={() => {
              setModal({
                isOpen: true,
                type: "ConfirmDelete",
                message:
                  "Tem certeza que deseja excluir as fotos selecionadas?",
                handleCloseModal: () => {
                  setModal({ ...state.modal, isOpen: false });
                },
                handleConfirmAction: () => {
                  handleImageDeleteCallback();
                  setModal({
                    ...state.modal,
                    isOpen: true,
                    type: "Success",
                    message:
                      "Imagens excluídas com sucesso! Recarregue a página.",
                    handleCloseModal: () => {
                      isOpen: false;
                      window.location.reload();
                    },
                  });
                },
              });
            }}
          >
            Excluir fotos selecionadas
          </Button>
        )}
        <div className="lg:w-full grid lg:grid-cols-3 gap-8 md:grid-cols-2 xxs:grid-cols-1">
          {!state.loading && state.pictures.length === 0 && (
            <div className="flex justify-center w-full"></div>
          )}
          {!state.loading && state.pictures.length === 0 && (
            <div className="flex justify-center w-full">
              <p className="text-center">Nenhuma imagem adicionada.</p>
            </div>
          )}
          {blobUrls.map((blobUrl, index) => (
            <ImageComponent
              key={index}
              src={blobUrl}
              alt={`Foto ${index + 1}`}
              isSelected={
                state.selectedImages.includes(
                  state.folderFetched.photos[index]
                ) || false
              }
              onSelect={() => handleImageSelectCallback(index)}
            />
          ))}
        </div>
        <div className="w-full">
          <h4 className="text-2xl font-bold text-center mt-20 text-secondary">
            Documentos
          </h4>
          <DropZone
            acceptedFileTypes={acceptedDocumentTypes}
            introText="Arraste e solte arquivos aqui, ou clique para selecionar documentos."
            supportedFiles="Formatos suportados: .pdf"
          />
        </div>
        <p className="mt-2 mb-4">
          Lista de documentos adicionados na pasta{" "}
          {state.folderFetched && state.folderFetched.title}:
        </p>
      </div>
      <Footer />
      <RenderModal modal={state.modal} setModal={setModal} />
    </>
  );
}

const RenderModal = ({ modal, setModal }) => {
  switch (modal.type) {
    case "Success":
      return (
        <SuccessModal
          modal={modal}
          setModal={setModal}
          handleCloseModal={modal.handleCloseModal}
        />
      );
    case "Error":
      return (
        <ErrorModal
          modal={modal}
          setModal={setModal}
          handleCloseModal={modal.handleCloseModal}
        />
      );
    case "ConfirmDelete":
      return (
        <ConfirmDeleteModal
          modal={modal}
          setModal={setModal}
          handleCloseModal={modal.handleCloseModal}
          handleConfirmAction={modal.handleConfirmAction}
        />
      );
    default:
      return null;
  }
};

const ImageComponent = React.memo(({ src, alt, isSelected, onSelect }) => (
  <div className="relative">
    <input
      type="checkbox"
      checked={isSelected}
      onChange={onSelect}
      className="absolute top-0 right-0 m-2 h-6 w-6 rounded-full z-10"
    />
    <Image
      src={src}
      alt={alt}
      className={`w-full h-64 object-cover rounded-md transform transition-transform duration-500 ${
        isSelected ? "scale-105" : ""
      }`}
    />
  </div>
));
