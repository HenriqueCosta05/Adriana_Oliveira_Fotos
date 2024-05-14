import { HelperText } from "flowbite-react";
import FolderCard from "../../components/FolderCard/FolderCard";
import UserNavbar from "../../../components/UserNavbar";
import Footer from "../../../../portfolio/components/Sections/Footer";
import ClickZone from "../../components/ClickZone/ClickZone";
import ClientCard from "../../components/ClientCard/ClientCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchGallery } from "../../../../../services/GalleryDataService";

export default function GalleryView() {
  const id = useParams()
  const [galleryData, setGalleryData] = useState({})
  useEffect(() => {
    fetchGallery(id).then((data) => {
      setGalleryData(data)
    })
  }, [id])
  return (
    <>
      <UserNavbar />
      <div className="xs:w-11/12 lg:w-5/6 mx-auto bg-[#f9f9f9] p-4 my-4 rounded-md">
        <h1 className="text-3xl font-bold text-center mb-9 text-secondary">
          {galleryData.title}
        </h1>
        <h4 className="font-bold text-2xl mt-2 text-secondary mb-4">
          Pastas desta galeria
        </h4>
        <HelperText className="mb-4 text-md">
          Adicione pastas para categorizar e organizar as fotos da galeria. Ao
          adicionar uma nova pasta você poderá adicionar fotos a ela.
        </HelperText>
        <div className="flex flex-wrap justify-start">
          <ClickZone isClient={false} />
          <FolderCard />

        </div>
        <h4 className="font-bold text-2xl mt-6 text-secondary mb-4">
          Contratos e Termos de Uso
        </h4>
        <HelperText className="mb-4 text-md">
          Adicione contratos e termos de uso para que o cliente consiga visualizá-lo.
        </HelperText>
        <div className="flex flex-wrap justify-start">
          <ClickZone isClient />
          
        </div>
      </div>
      <Footer />
    </>
  );
}
