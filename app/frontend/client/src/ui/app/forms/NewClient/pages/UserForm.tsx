import React, { useState } from 'react'
import { Provider } from '../../../../../contexts/forms/NewUserFormContext'
import { StepOne } from '../components/Steps/StepOne'
import { StepTwo } from '../components/Steps/StepTwo'
import StepThree from '../components/Steps/StepThree'


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
        console.log(data);
      setData({
        stepOne: stepOneInitialData,
        stepTwo: stepTwoInitialData,
        stepThree: stepThreeInitialData,
      });
    };
    

    return (
        <Provider value={{ data, setData, step, setStep, handleNext, prev }}>
            <h2>Novo Cliente</h2>
            <main>{renderStep(step)}</main>
        </Provider>
    )
}
