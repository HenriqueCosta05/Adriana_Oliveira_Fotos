import React, { useContext, ReactNode} from "react";
import { FormContext } from "../../../../contexts/forms/index";

interface FormStepProps {
  step: number;
  children: ReactNode;
}

export const FormStep: React.FC<FormStepProps> = ({ step, children }) => {
  const formContext = useContext(FormContext);
  const currentStep = formContext?.step;

  return currentStep === step ? <>{children}</> : null;
};
