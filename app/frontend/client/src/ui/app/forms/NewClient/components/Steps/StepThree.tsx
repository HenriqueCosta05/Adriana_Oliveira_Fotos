import { useContext, useEffect} from "react";
import { Controller, useForm } from "react-hook-form";
import NewUserFormContext from "../../../../../../contexts/forms/NewUserFormContext";
import Button from "react-bootstrap/esm/Button";
import * as Form from "@radix-ui/react-form";
import * as Switch from "@radix-ui/react-switch";
import { UserDataProps } from "../../../../../../types/UserData/UserDataProps";

interface StepThreeProps {
  prevData?: any;
  method?: any;
}

export const StepThree = ({prevData, method}: StepThreeProps) => {
  const { data, setData, handleNext, prev } = useContext(NewUserFormContext);

  const { control, handleSubmit, register } = useForm<
    UserDataProps["stepThree"]
  >({
    defaultValues: data.stepThree || prevData,
  });
  
 const onSubmit = (formData) => {
   setData((prevFormData) => ({
     ...prevFormData,
    stepThree: formData,
   }));
   handleNext();
 };

  return (
    <Form.Root
      onSubmit={handleSubmit(onSubmit)}
      className="xs:w-11/12 lg:w-1/2 mx-auto bg-accent p-3 m-4"
    >
      <h1 className="text-3xl font-bold text-center mb-4 text-secondary">
        Formulário de Cliente{" "}
      </h1>
      <p className="text-3x1 font-bold text-center mb-9 text-secondary">
        {" "}
        Preferências de Contato (3/3)
      </p>
      <Form.Field name="SMS-Preferences">
        <div className="flex flex-wrap items-baseline justify-evenly">
          <Form.Label
            htmlFor="sms"
            className="text-secondary text-[15px] leading-none pr-[15px]"
          >
            Receber avisos por SMS?
          </Form.Label>
          <Controller
            control={control}
            {...register("receiveSMS")}
            render={({ field }) => (
              <Switch.Root
                className="w-[42px] h-[25px] bg-neutral A6 rounded-full relative shadow-[0_2px_10px] shadow-neutral A4 focus:shadow-[0_0_0_2px] focus:shadow-neutral data-[state=checked]:bg-secondary outline-none cursor-default "
                id="sms"
                {...field}
                onCheckedChange={(checked) => {
                  setData((prevFormData) => ({
                    ...prevFormData,
                    stepThree: {
                      ...prevFormData.stepThree,
                      receiveSMS: checked,
                    },
                  }));
                }}
              >
                <Switch.Thumb className="block w-[21px] h-[21px] bg-neutral rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
              </Switch.Root>
            )}
          />
        </div>
      </Form.Field>
      <Form.Field name="Email-Preferences">
        <div className="flex flex-wrap items-center justify-evenly my-6">
          <Form.Label
            htmlFor="receive-email"
            className="text-secondary text-[15px] leading-none pr-[15px]"
          >
            Receber avisos por E-mail?
          </Form.Label>
          <Controller
            name="receiveEmail"
            control={control}
            {...register("receiveEmail")}
            render={({ field }) => (
              <Switch.Root
                className="w-[42px] h-[25px] bg-neutral A6 rounded-full relative shadow-[0_2px_10px] shadow-neutral A4 focus:shadow-[0_0_0_2px] focus:shadow-neutral data-[state=checked]:bg-secondary outline-none cursor-default "
                id="sms"
                {...field}
                onCheckedChange={(checked) => {
                  setData((prevFormData) => ({
                    ...prevFormData,
                    stepThree: {
                      ...prevFormData.stepThree,
                      receiveEmail: checked,
                    },
                  }));
                }}
              >
                <Switch.Thumb className="block w-[21px] h-[21px] bg-neutral rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
              </Switch.Root>
            )}
          />
        </div>
      </Form.Field>
      <div className="flex flex-wrap items-baseline justify-between">
        <Button
          onClick={prev}
          className="w-5/12 bg-success border-none focus:bg-secondary"
        >
          Voltar
        </Button>
        <Button
          onClick={handleSubmit(onSubmit)}
          className="w-5/12 bg-success border-none focus:bg-secondary"
        >
          Enviar
        </Button>
      </div>
    </Form.Root>
  );
};

