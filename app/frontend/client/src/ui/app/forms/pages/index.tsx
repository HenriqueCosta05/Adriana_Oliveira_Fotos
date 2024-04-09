import { Form } from "../components";


export default function MultiStepForm({numberOfSteps, inputs, name, buttonText, buttonType}) {
  return (
    <>
      <Form.Root>
        {Array(numberOfSteps).fill(null).map((_, stepIndex) => (
          <Form.Step key={stepIndex} step={stepIndex} totalOfSteps={numberOfSteps}>
            {Object.entries(inputs[`step${stepIndex+1}`][0]).map(([key, value], inputIndex) => {
              const type = getInputType(key);
              const label = key.charAt(0).toUpperCase() + key.slice(1);
              return (
                <Form.Input name={key} type={type} label={label} key={inputIndex} defaultValue={value} />
              );
            })}
            <Form.Button buttonText={buttonText} buttonType={buttonType} />
          </Form.Step>
        ))}
      </Form.Root>
    </>
  )
}