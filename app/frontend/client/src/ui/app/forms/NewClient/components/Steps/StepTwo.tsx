import { useContext, useEffect} from "react";
import { Controller, useForm } from "react-hook-form";
import NewUserFormContext from "../../../../../../contexts/forms/NewUserFormContext";
import Button from "react-bootstrap/esm/Button";
import * as Form from "@radix-ui/react-form";
import { UserDataProps } from "../../../../../../types/UserData/UserDataProps";
import { useFetch } from "../../../../../../hooks/useFetch";

export const StepTwo = () => {
  const { data, setData, handleNext, prev } = useContext(NewUserFormContext);

    const { control, handleSubmit, register, watch, setValue, formState: {errors}} = useForm<UserDataProps["stepTwo"]>({
  defaultValues: data.stepTwo,
});

    const zipCode = watch("zip");

useEffect(() => {
  const refactoredZipCode = zipCode && zipCode.replace("-", "").replace(" ", "");
  if (refactoredZipCode && refactoredZipCode.length === 8) {
    fetch(`https://viacep.com.br/ws/${refactoredZipCode}/json/`)
      .then(response => response.json())
      .then(data => {
        setValue("street", data.logradouro);
        setValue("city", data.localidade);
        setValue("state", data.uf);
        setValue("neighborhood", data.bairro);
      })
      .catch(error => console.error(error));
  }
}, [zipCode, setValue]);

const onSubmit = (data) => {
  setData((prevData) => ({
    ...prevData,
    stepTwo: {
      ...prevData.stepTwo,
      ...data,
    },
  }));
  handleNext();
    };


  return (
    <Form.Root
      onSubmit={handleSubmit(onSubmit)}
      className="xs:w-11/12 lg:w-1/2 mx-auto bg-accent p-4 m-4"
    >
      <h1 className="text-3xl font-bold text-center mb-8 text-secondary">
        Novo Cliente
      </h1>
      <p className="text-3x1 font-bold text-center mb-9 text-secondary">
        {" "}
        Dados de Endereço (2/3)
      </p>
      <Form.Field name="zip" className="mb-[30px]">
        <div className="flex flex-wrap items-baseline justify-center">
          <Form.Label
            htmlFor="zip"
            className="mb-4 text-[15px] w-11/12 leading-[5px] text-secondary text-center"
          >
            CEP
          </Form.Label>

          <Controller
            name="zip"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                type="text"
                placeholder="Digite seu CEP..."
                className="w-11/12 text-center rounded-lg p-2"
                id="zip"
                {...field}
                {...register("zip", { required: "CEP é obrigatório" })}
              />
            )}
          />
          {errors && errors.zip && (
            <span className="text-red-500 font-medium text-[14px]">
              {errors.zip.message}
            </span>
          )}
        </div>
      </Form.Field>
      <Form.Field name="street" className="mb-[30px]">
        <div className="flex flex-wrap items-baseline justify-center">
          <Form.Label
            htmlFor="street"
            className="mb-4 text-[15px] w-11/12 leading-[5px] text-secondary text-center"
          >
            Rua
          </Form.Label>
          <Controller
            name="street"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                type="text"
                id="street"
                className="w-11/12 text-center rounded-lg p-2"
                placeholder="Digite seu logradouro..."
                {...field}
                {...register("street", {
                  required: "O logradouro é obrigatório",
                })}
              />
            )}
          />
          {errors && errors.street && (
            <span className="text-red-500 font-medium text-[14px]">
              {errors.street.message}
            </span>
          )}
        </div>
      </Form.Field>
      <Form.Field name="streetNumber" className="mb-[30px]">
        <div className="flex flex-wrap items-baseline justify-center">
          <Form.Label
            htmlFor="streetNumber"
            className="mb-4 text-[15px] w-11/12 leading-[5px] text-secondary text-center"
          >
            Número
          </Form.Label>
          <Controller
            name="streetNumber"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                type="text"
                placeholder="Digite o número do seu logradouro..."
                id="streetNumber"
                className="w-11/12 text-center rounded-lg p-2"
                {...field}
                {...register("streetNumber", {
                  required: "Número do logradouro é obrigatório",
                })}
              />
            )}
          />
          {errors && errors.streetNumber && (
            <span className="text-red-500 font-medium text-[14px]">
              {errors.streetNumber.message}
            </span>
          )}
        </div>
      </Form.Field>
      <Form.Field name="complement" className="mb-[30px]">
        <div className="flex flex-wrap items-baseline justify-center">
          <Form.Label
            htmlFor="complement"
            className="mb-4 text-[15px] w-11/12 leading-[5px] text-secondary text-center"
          >
            Complemento
          </Form.Label>
          <Controller
            name="complement"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                type="text"
                id="complement"
                placeholder="Digite o complemento, se necessário..."
                className="w-11/12 text-center rounded-lg p-2"
                {...field}
              />
            )}
          />
        </div>
      </Form.Field>
      <Form.Field name="neighborhood" className="mb-[30px]">
        <div className="flex flex-wrap items-baseline justify-center">
          <Form.Label
            htmlFor="neighborhood"
            className="mb-4 text-[15px] w-11/12 leading-[5px] text-secondary text-center"
          >
            Bairro
          </Form.Label>
          <Controller
            name="neighborhood"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                type="text"
                id="neighborhood"
                placeholder="Digite seu bairro..."
                className="w-11/12 text-center rounded-lg p-2"
                {...field}
                {...register("neighborhood", {
                  required: "Bairro é obrigatório",
                })}
              />
            )}
          />
          {errors && errors.neighborhood && (
            <span className="text-red-500 font-medium text-[14px]">
              {errors.neighborhood.message}
            </span>
          )}
        </div>
      </Form.Field>
      <Form.Field name="city" className="mb-[30px]">
        <div className="flex flex-wrap items-baseline justify-center">
          <Form.Label
            htmlFor="city"
            className="mb-4 text-[15px] w-11/12 leading-[5px] text-secondary text-center"
          >
            Cidade
          </Form.Label>
          <Controller
            name="city"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                type="text"
                placeholder="Digite sua cidade..."
                className="w-11/12 text-center rounded-lg p-2"
                id="city"
                {...field}
                {...register("city", { required: "Cidade é obrigatória" })}
              />
            )}
          />
          {errors && errors.city && (
            <span className="text-red-500 font-medium text-[14px]">
              {errors.city.message}
            </span>
          )}
        </div>
      </Form.Field>
      <Form.Field name="state" className="mb-[30px]">
        <div className="flex flex-wrap items-baseline justify-center">
          <Form.Label
            htmlFor="state"
            className="mb-4 text-[15px] w-11/12 leading-[5px] text-secondary text-center"
          >
            Estado
          </Form.Label>
          <Controller
            name="state"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                type="text"
                id="state"
                placeholder="Digite seu estado..."
                className="w-11/12 text-center rounded-lg p-2"
                {...field}
                {...register("state", { required: "Estado é obrigatório" })}
              />
            )}
          />
          {errors && errors.state && (
            <span className="text-red-500 font-medium text-[14px]">
              {errors.state.message}
            </span>
          )}
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
          Próximo
        </Button>
      </div>
    </Form.Root>
  );
};

export default StepTwo;