import { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import NewUserFormContext from "../../../../../../contexts/forms/NewUserFormContext";
import Button from "react-bootstrap/esm/Button";
import * as Form from "@radix-ui/react-form";
import { UserDataProps } from "../../../../../../types/UserData/UserDataProps";

export const StepTwo = () => {
  const { data, setData, handleNext, prev } = useContext(NewUserFormContext);

  const { control, handleSubmit, register} = useForm<UserDataProps["stepThree"]>({
    defaultValues: data.stepThree,
  });

  const onSubmit = (formData) => {
    setData((prevData) => ({
      ...prevData,
      stepThree: {
        ...prevData.stepThree,
        ...formData,
      },
    }));
    handleNext();
  };
  return (
    <Form.Root onSubmit={handleSubmit(onSubmit)}>
      <Form.Field name="SMS-Preferences">
        <Form.Label htmlFor="sms">Receber avisos por SMS?</Form.Label>
        <Controller
          name="receiveSMS"
          control={control}
          defaultValue=""
          {...register("receiveSMS")}
          render={({ field }) => (
            <input
              type="checkbox"
              id="sms"
              {...field}
              onChange={(e) => {
                field.onChange(e);
                setData((prevData) => ({
                  ...prevData,
                  stepThree: {
                    ...prevData.stepThree,
                    receiveSMS: e.target.checked,
                  },
                }));
              }}
            />
          )}
        />
      </Form.Field>
      <Form.Field name="Email-Preferences">
        <Form.Label htmlFor="street">Receber avisos por E-mail?</Form.Label>
        <Controller
          name="receiveEmail"
          control={control}
          defaultValue=""
          {...register("receiveEmail")}
          render={({ field }) => (
            <input
              type="checkbox"
              id="email"
              {...field}
              onChange={(e) => {
                field.onChange(e);
                setData((prevData) => ({
                  ...prevData,
                  stepThree: {
                    ...prevData.stepThree,
                    receiveEmail: e.target.checked,
                  },
                }));
              }}
            />
          )}
        />
      </Form.Field>
      <Button onClick={prev}>Voltar</Button>
      <Button onClick={handleSubmit(onSubmit)}>Enviar</Button>
    </Form.Root>
  );
};

export default StepTwo;
