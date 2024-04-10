import React, { useState } from "react";
import { FormContext } from "../../../../contexts/forms/index";

interface MultiStepFormProps {
  children: React.ReactNode;
}

export const MultiStepForm: React.FC<MultiStepFormProps> = ({ children }) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});

  return (
    <FormContext.Provider value={{ step, setStep, formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
