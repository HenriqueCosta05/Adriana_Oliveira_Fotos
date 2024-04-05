import { Button, Form } from 'react-bootstrap';

interface InputProps {
    label: string;
    placeholder: string;
    type: string;
}

interface CadastroProps {
    title: string;
    step: string;
    currentStep: number;
    numberOfSteps: number;
    inputs: InputProps[];
    buttonText: string;
    buttonAction: () => void;
}

export default function Cadastro({ title, step, inputs, currentStep, numberOfSteps, buttonText, buttonAction }: CadastroProps) {
  return (
      <>
          <h1 className='text-center font-extrabold text-3xl'>{title}</h1>
          <Form>
              {inputs.map((input, index) => {
                    return (
                        <Form.Group key={index} controlId={`input-${index}`}>
                            <Form.Label>{input.label}</Form.Label>
                            <Form.Control type={input.type} placeholder={input.placeholder} />
                        </Form.Group>
                    );
              })}
              <Button variant="primary" onClick={buttonAction}>
                  {buttonText}
              </Button>
          </Form>
      </>
  )
}