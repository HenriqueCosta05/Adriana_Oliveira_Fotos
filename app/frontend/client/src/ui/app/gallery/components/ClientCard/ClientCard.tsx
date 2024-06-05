import { Button } from "flowbite-react";
import React, { useState, useEffect } from "react";
import { retrieveClientInfo } from "../../../../../helpers/gallery/retrieveClientInfo";
import { capitalize } from "../../../../../utils/capitalize";
import { sendEmail } from "../../../../../services/LoginDataService";
import SuccessModal from "../../../modals/gallery/Infos/Success/Success";
import ErrorModal from "../../../modals/gallery/Infos/Error/Error";

const ClientCard = ({ clientId, photosNumber, galleryId, folderIds }) => {
  const [clientData, setClientData] = useState({});
  const [modal, setModal] = useState({
    isOpen: false,
    type: "",
    message: "",
    handleClose: null,
  });
  const BASE_URL = "http://localhost:8000/app/send-login-email";
  const folderIdsParam =
    folderIds && folderIds.length > 0 ? folderIds.join(",") : "";
  console.log(folderIdsParam);
  const link = `${BASE_URL}/${clientData.email}?galleryId=${galleryId}&folderIds=${folderIdsParam}`;

  useEffect(() => {
    retrieveClientInfo(clientId).then((data) => {
      setClientData(data);
    });
  }, []);

  return (
    <div className="flex flex-col h-64 p-4 border-1 m-4 border-gray-300 rounded-md">
      <div className="flex-1">
        <h4 className="text-lg font-bold text-gray-700">
          {clientData.fullName && capitalize(clientData.fullName)}
        </h4>
        <p className="mt-2 text-sm text-gray-600">
          Fotografias do Pacote - {photosNumber}
        </p>
      </div>
      <Button
        className="bg-success text-white rounded-md transition-colors duration-200 ease-in-out"
        onClick={() => {
          sendEmail(link)
            .then((data) => {
              setModal({
                isOpen: true,
                type: "Success",
                message: "Link de acesso enviado com sucesso!",
                handleClose: () => setModal({ ...modal, isOpen: false }),
              });
            })
            .catch((error) => {
              setModal({
                isOpen: true,
                type: "Error",
                message:
                  "Erro ao enviar link de acesso, tente novamente mais tarde.",
                handleClose: () => setModal({ ...modal, isOpen: false }),
              });
            });
        }}
      >
        Enviar link de acesso
      </Button>
      {renderModal(modal, setModal)}
    </div>
  );
};

const renderModal = (modal, setModal) => {
  switch (modal.type) {
    case "Success":
      return (
        <SuccessModal
          modal={modal}
          setModal={setModal}
          handleCloseModal={modal.handleClose}
        />
      );
    case "Error":
      return (
        <ErrorModal
          modal={modal}
          setModal={setModal}
          handleCloseModal={modal.handleClose}
        />
      );
    default:
      return null;
  }
};
export default ClientCard;
