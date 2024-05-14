import UserNavbar from '../../../components/UserNavbar';
import { Footer } from 'flowbite-react/components/Footer';
import DropZone from '../../components/DropZone/DropZone';
import Image from '../../../../../components/Shared/Image/Image';

export default function FolderView({ folderTitle }) {
  return (
    <>
      <UserNavbar />
      <div className="xs:w-11/12 lg:w-5/6 mx-auto bg-[#f9f9f9] p-4 my-4 rounded-md">
        <h4 className="text-3xl font-bold text-center mb-9 text-secondary">
          Pasta da Galeria
        </h4>
        <p className="mt-2 mb-4">
          Lista de imagens adicionadas na pasta {folderTitle}
        </p>
        <div className="w-full">
          <DropZone />
        </div>
        <div className="w-full">
          <Image src={"/rota/do/backend"} alt={""} className={""} />
          <Image src={"/rota/do/backend"} alt={""} className={""} />
          <Image src={"/rota/do/backend"} alt={""} className={""} />
          <Image src={"/rota/do/backend"} alt={""} className={""} />
        </div>
      </div>
      <Footer />
    </>
  );
}
