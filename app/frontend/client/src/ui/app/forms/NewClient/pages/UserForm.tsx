import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Provider } from "../../../../../contexts/forms/NewUserFormContext";
import { StepOne } from "../components/Steps/StepOne";
import { StepTwo } from "../components/Steps/StepTwo";
import StepThree  from "../components/Steps/StepThree";
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
  const { userEmail } = useParams();
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
    if (userEmail) {
      setMethod("PUT");
      fetchData(userEmail)
        .then((response) => {
          setData(response);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error:", error);
          setModal({
            isOpen: true,
            type: "error",
            message: "Error fetching data",
          });
        });
    } else {
      setLoading(false);
    }
  }, [userEmail]);

  const handleNext = async () => {
    if (step === 3) {
      try {
        const flattenedData = {
          ...data.stepOne,
          ...data.stepTwo,
          ...data.stepThree,
        };
        await sendData(userEmail, flattenedData);
        setModal({
          isOpen: true,
          type: "success",
          message: "Cliente cadastrado com sucesso.",
        });
      } catch (error) {
        setModal({
          isOpen: true,
          type: "error",
          message: "Erro ao cadastrar cliente!",
        });
      }
    } else {
      setStep(step + 1);
    }
  };

  const prev = () => setStep(step - 1);

  if (loading) return <div>Carregando...</div>;

  return (
    <Provider value={{ data, setData, step, setStep, handleNext, prev }}>
      <div>
        {renderStep(step)}
        <Modal
          open={modal.isOpen}
          onClose={() => setModal({ ...modal, isOpen: false })}
        >
          <Modal.Header>
            {modal.type === "success" ? "Sucesso!" : "Erro"}
          </Modal.Header>
          <Modal.Body>
            <p>{modal.message}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setModal({ ...modal, isOpen: false })}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Provider>
  );
};

function renderStep(step) {
  switch (step) {
    case 1:
      return <StepOne />;
    case 2:
      return <StepTwo />;
    case 3:
      return <StepThree />;
    default:
      return <StepOne />;
  }
}
