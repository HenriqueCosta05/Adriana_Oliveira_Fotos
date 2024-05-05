import { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import FormContext from "../../../../../contexts/forms/FormContext";
import Button from "react-bootstrap/esm/Button";
import * as Form from "@radix-ui/react-form";
import * as Switch from "@radix-ui/react-switch";
import { RevenueDataProps } from "../../../../../types/RevenueData/RevenueDataProps";
import { Label, TextInput, Textarea } from "flowbite-react";

interface StepThree {
  prevData?: any;
  method?: any;
}

export const StepThree = ({ prevData, method }: StepThree) => {
  const { data, setData, handleNext, prev } = useContext(FormContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RevenueDataProps["StepThree"]>({
    defaultValues: data || prevData,
  });

  const onSubmit = (formData) => {
    setData((prevFormData) => ({
      ...prevFormData,
      ...formData,
    }));
    handleNext();
  };

  return (
    <Form.Root
      onSubmit={handleSubmit(onSubmit)}
      className="xs:w-11/12 lg:w-1/2 mx-auto bg-accent p-3 m-4"
    >
      <h1 className="text-3xl font-bold text-center mb-4 text-secondary">
        {method === "POST" ? "Nova Despesa" : "Editar Despesa"}
      </h1>
      <p className="text-3x1 font-bold text-center mb-9 text-secondary">
        Informações Adicionais (3/3)
      </p>
      <div className="mb-[30px]">
        <div className="flex flex-wrap items-baseline justify-center">
          <Label
            htmlFor="paymentMethod"
            className="mb-4 text-[15px] w-11/12 leading-[5px] text-secondary text-center"
            value="Forma de Pagamento:"
          />
          <Controller
            name="paymentMethod"
            control={control}
            rules={{ required: "Tipo de pagamamento é obrigatório" }}
            render={({ field }) => (
              <>
                <TextInput
                  {...field}
                  id="paymentMethod"
                  placeholder="Insira a forma de pagamento..."
                  name="paymentMethod"
                  color={errors.paymentMethod ? "failure" : "primary"}
                  className="w-11/12 text-center rounded-lg p-2"
                />
              </>
            )}
          />

          {errors && errors.paymentMethod && (
            <span className="text-red-500 font-medium text-[14px]">
              {errors.paymentMethod.message}
            </span>
          )}
        </div>
      </div>
      <div className="mb-[30px]">
        <div className="flex flex-wrap items-baseline justify-center">
          <Label
            htmlFor="detailedDescription"
            className="mb-4 text-[15px] w-11/12 leading-[5px] text-secondary text-center"
            value="Descrição detalhada:"
          />
          <Controller
            name="detailedDescription"
            control={control}
            render={({ field }) => (
              <>
                <Textarea
                  {...field}
                  color={errors.detailedDescription ? "failure" : "primary"}
                  id="detailedDescription"
                  placeholder="Insira uma descrição detalhada..."
                  className="w-11/12 text-center rounded-lg p-2"
                />
              </>
            )}
          />
          {errors && errors.detailedDescription && (
            <span className="text-red-500 font-medium text-[14px]">
              {errors.detailedDescription.message}
            </span>
          )}
        </div>
      </div>
      <Form.Field name="automaticPayment" className="mb-[30px]">
        <div className="flex flex-wrap items-baseline justify-evenly">
          <Form.Label
            htmlFor="sms"
            className="text-secondary text-[15px] leading-none pr-[15px]"
          >
            Pagamento Automático
          </Form.Label>
          <Controller
            control={control}
            name="automaticPayment"
            render={({ field }) => (
              <>
                <Switch.Root
                  {...field}
                  id="automaticPayment"
                  className="w-[42px] h-[25px] bg-neutral A6 rounded-full relative shadow-[0_2px_10px] shadow-neutral A4 focus:shadow-[0_0_0_2px] focus:shadow-neutral data-[state=checked]:bg-secondary outline-none cursor-default"
                  onCheckedChange={(checked) => {
                    setData((prevFormData) => ({
                      ...prevFormData,
                      automaticPayment: checked,
                    }));
                  }}
                >
                  <Switch.Thumb className="block w-[21px] h-[21px] bg-neutral rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                </Switch.Root>
              </>
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
          type="submit"
          className="w-5/12 bg-success border-none focus:bg-secondary"
        >
          Enviar
        </Button>
      </div>
    </Form.Root>
  );
};
