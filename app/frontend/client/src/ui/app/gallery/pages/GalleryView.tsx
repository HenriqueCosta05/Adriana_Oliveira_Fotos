import { HelperText } from "flowbite-react";
import DropZone from "../components/DropZone/DropZone";
import FolderCard from "../components/FolderCard/FolderCard";
import UserNavbar from "../../components/UserNavbar";
import Footer from "../../../portfolio/components/Sections/Footer";
import ClickZone from '../components/ClickZone/ClickZone'
import ClientCard from "../components/ClientCard/ClientCard";

export default function GalleryView() {
  return (
    <>
      <UserNavbar />
      <div className="xs:w-11/12 lg:w-5/6 mx-auto bg-[#f9f9f9] p-4 my-4 rounded-md">
        <h1 className="text-3xl font-bold text-center mb-9 text-secondary">
          Nome da Galeria
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
          <FolderCard />
          <FolderCard />
        </div>
        <h4 className="font-bold text-2xl mt-6 text-secondary mb-4">
          Clientes desta galeria
        </h4>
        <HelperText className="mb-4 text-md">
          Adicione clientes na galeria e gerencie as configurações de seleção
          por cliente.
        </HelperText>
        <div className="flex flex-wrap justify-start">
          <ClickZone isClient />
          <ClientCard />
          <ClientCard />
          <ClientCard />
        </div>
      </div>
      <Footer />
    </>
  );
}
