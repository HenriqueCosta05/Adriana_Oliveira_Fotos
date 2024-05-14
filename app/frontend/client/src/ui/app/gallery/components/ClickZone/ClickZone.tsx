import { useState } from 'react';
import { FaFolder, FaPeopleArrows } from 'react-icons/fa'
import NewFolderModal from '../../../modals/gallery/Forms/NewFolder/NewFolderModal';
import AssociateClientModal from '../../../modals/gallery/Forms/AssociateClient/AssociateClientModal';

interface ClickZoneProps {
  isClient: boolean
}

export default function ClickZone({ isClient }: ClickZoneProps) {
  const [modal, setModal] = useState({
    isOpen: false,
    type: ''
  })

  const handleCloseModal = () => {
    setModal({
      isOpen: false,
      type: ''
    })
  }

  return (
    <>
      {isClient ? (
        <section
          className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-200 ease-in-out cursor-pointer h-64 m-4"
          onClick={() => {
            setModal({
              isOpen: true, 
              type: 'AssociateClientForm'
            })
          }}
        >
          <FaPeopleArrows className="text-4xl text-gray-400" />
          <p className="mt-2 text-sm text-gray-600">
            Clique para associar arquivos ao cliente
          </p>
        </section>
      ) : (
        <section
          className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-200 ease-in-out cursor-pointer h-64 m-4"
          onClick={() => {
            setModal({
              isOpen: true, 
              type: 'NewFolderForm'
            })
          }}
        >
          <FaFolder className="text-4xl text-gray-400" />
          <p className="mt-2 text-sm text-gray-600">
            Clique para associar a galeria a uma pasta
          </p>
        </section>
      )}
      {renderModal(modal, setModal, handleCloseModal)}
    </>
  );
}

function renderModal(modal, setModal, handleCloseModal) {
  switch (modal.type) {
    case 'NewFolderForm':
      return <NewFolderModal handleCloseModal={handleCloseModal} modal={modal} setModal={setModal} />
    case 'AssociateClientForm':
      return <AssociateClientModal handleCloseModal={handleCloseModal} modal={modal} setModal={setModal} />
    default:
      return null
  }
}