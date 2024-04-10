interface FormContextProps {
  step: number;
  setStep: (step: number) => void;
  formData: Record<string, any>;
  setFormData: (data: Record<string, any>) => void;
}

export const FormContext = React.createContext<FormContextProps | undefined>(
  undefined
);
