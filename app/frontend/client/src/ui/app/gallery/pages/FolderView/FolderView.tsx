import UserNavbar from '../../../components/UserNavbar';
import { Footer } from 'flowbite-react/components/Footer';
import DropZone from '../../components/DropZone/DropZone';
import Image from '../../../../../components/Shared/Image/Image';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function FolderView() {
  const { id, pastaId } = useParams();
  const [folderFetched, setFolderFetched] = useState({});
  const [photos, setPhotos] = useState([]);

  return (
    <>
      <UserNavbar />
      <div className="xs:w-11/12 lg:w-5/6 mx-auto bg-[#f9f9f9] p-4 my-4 rounded-md">
        <h4 className="text-3xl font-bold text-center mb-9 text-secondary">
          {folderFetched && folderFetched.title}
        </h4>
        <p className="mt-2 mb-4">
          Lista de imagens adicionadas na {folderFetched && folderFetched.title}
        </p>
        <div className="w-full">
          <DropZone setPhotos={setPhotos} />
        </div>
        <div className="w-full">
          {photos.map((blobUrl, index) => (
            <Image key={index} src={blobUrl} alt={`Foto ${index + 1}`} className={""} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
