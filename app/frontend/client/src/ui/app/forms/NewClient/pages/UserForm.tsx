import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Provider } from "../../../../../contexts/forms/NewUserFormContext";
import { StepOne } from "../components/Steps/StepOne";
import { StepTwo } from "../components/Steps/StepTwo";
import { StepThree } from "../components/Steps/StepThree";
import { Modal, Button } from "flowbite-react";
import { fetchData, sendData } from "../../../../../services/userDataService";

const initialData = {
  stepOne: {
    registryType: "",
    personType: "",
    name: "",
    surname: "",
    email: "",
    phone: "",
    birthDate: "",
  },
  stepTwo: {
    zip: "",
    city: "",
    state: "",
    street: "",
    streetNumber: "",
    complement: "",
    neighborhood: "",
  },
  stepThree: {
    receiveSMS: false,
    receiveEmail: false,
  },
};

export const UserForm = () => {
  const { id } = useParams();
  const [method, setMethod] = useState("POST");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(initialData);
  const [modal, setModal] = useState({
    isOpen: false,
    type: "error",
    message: "",
  });

  useEffect(() => {
    if (id) {
      setMethod("PUT");
      fetchData(id)
        .then((response) => {
          setData(response);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error:", error);
          setModal({
            isOpen: true,
            type: "error",
            message:
              "Erro ao recuperar dados do servidor! Tente novamente mais tarde",
          });
        });
    } else {
      setLoading(false);
    }
  }, [id]);

  const handleNext = async () => {
    if (step === 3) {
      try {
        await sendData(id, data);
        setModal({
          isOpen: true,
          type: "success",
          message: "Cliente cadastrado ou atualizado com sucesso.",
        });
      } catch (error) {
        setModal({
          isOpen: true,
          type: "error",
          message:
            "Erro ao cadastrar ou atualizar cliente! Tente novamente mais tarde!",
        });
      }
    } else {
      setStep(step + 1);
    }
  };

  const handleCloseModal = () => {
    setModal({ ...modal, isOpen: false });
    window.location.href = "/app/clientes";
  };

  const prev = () => setStep(step - 1);

  if (loading) return <div>Carregando...</div>;

  return (
    <>
      <Provider value={{ data, setData, step, setStep, handleNext, prev }}>
        {renderStep(step, method, data)}
      </Provider>
      <Modal
        show={modal.isOpen}
        onClose={() => setModal({ ...modal, isOpen: false })}
      >
        <Modal.Header>
          {modal.type === "success" ? "Sucesso!" : "Erro"}
        </Modal.Header>
        <Modal.Body>
          <p>{modal.message}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseModal}>Fechar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

function renderStep(step, method, data) {
  switch (step) {
    case 1:
      return method === "POST" ? (
        <StepOne method={method} />
      ) : (
        <StepOne prevData={data} method={method} />
      );
    case 2:
      return method === "POST" ? (
        <StepTwo method={method} />
      ) : (
        <StepTwo prevData={data} method={method} />
      );
    case 3:
      return method === "POST" ? (
        <StepThree method={method} />
      ) : (
        <StepThree prevData={data} method={method} />
      );
    default:
      return method === "POST" ? (
        <StepOne />
      ) : (
        <StepOne prevData={data} method={method} />
      );
  }
}
