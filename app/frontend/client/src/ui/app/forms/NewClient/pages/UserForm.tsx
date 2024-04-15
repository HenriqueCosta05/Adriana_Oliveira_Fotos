import React, { useState } from 'react'
import { Provider } from '../../../../../contexts/forms/NewUserFormContext'
import { StepOne } from '../components/Steps/StepOne'
import { StepTwo } from '../components/Steps/StepTwo'
import StepThree from '../components/Steps/StepThree'
import { useFetch } from '../../../../../hooks/useFetch'


const stepOneInitialData = {
    registryType: { prospection: false, client: false },
    personType: { physicalPerson: false, legalPerson: false },
    name: '',
    surname: '',
    email: '',
    phone: '',
    birthDate: ''
}

const stepTwoInitialData = {    
    zip: '',
    city: '',
    state: '',
    street: '',
    streetNumber: '',
    complement: '',
    neighborhood: ''
}

const stepThreeInitialData = {
    receiveSMS: false,
    receiveEmail: false
}

const renderStep = (step) => {
    switch (step) {
        case 1:
            return <StepOne />
        case 2:
            return <StepTwo />
        case 3:
            return <StepThree />
        default:
            return <StepOne />
    }
}
export const UserForm = () => {
    const [data, setData] = useState({
        stepOne: stepOneInitialData,
        stepTwo: stepTwoInitialData,
        stepThree: stepThreeInitialData
    })    

    const [step, setStep] = useState(1);

    const handleNext = () => {
        if (step === 3) {
          sendData()
        setStep(1);
        return;
      }
      setStep(step + 1);
    };

    const prev = () => setStep(step - 1);

    const sendData = () => {
        console.log(data)
        /* fetch('http://localhost:8000/app/novo-cliente', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log('Sucesso:', data);
            setData({
        stepOne: stepOneInitialData,
        stepTwo: stepTwoInitialData,
        stepThree: stepThreeInitialData,
      });
        })
        .catch((error) => {
            console.error('Error:', error);
        });
      */
    };
    
    

    return (
        <Provider value={{ data, setData, step, setStep, handleNext, prev }}>
            <main>{renderStep(step)}</main>
        </Provider>
    )
}
