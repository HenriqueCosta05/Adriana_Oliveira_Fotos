import { useContext, useEffect} from "react";
import { Controller, useForm } from "react-hook-form";
import NewUserFormContext from "../../../../../../contexts/forms/NewUserFormContext";
import {
  Button,
  TextInput,
  Label,
} from "flowbite-react";
import { UserDataProps } from "../../../../../../types/UserData/UserDataProps";

export const StepTwo = ({ prevData }: { prevData?: any }) => {
  const { data, setData, handleNext, prev } = useContext(NewUserFormContext);

  const {
    control,
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm<UserDataProps["stepTwo"]>({
    defaultValues: data.stepTwo || prevData,
  });

  const zipCode = watch("zip");

  useEffect(() => {
    const refactoredZipCode =
      zipCode && zipCode.replace("-", "").replace(" ", "");
    if (refactoredZipCode && refactoredZipCode.length === 8) {
      fetch(`https://viacep.com.br/ws/${refactoredZipCode}/json/`)
        .then((response) => response.json())
        .then((data) => {
          setValue("street", data.logradouro);
          setValue("city", data.localidade);
          setValue("state", data.uf);
          setValue("neighborhood", data.bairro);
        })
        .catch((error) => console.error(error));
    }
  }, [zipCode, setValue]);

  const onSubmit = (data) => {
    setData((prevFormData) => ({
      ...prevFormData,
      stepTwo: {
        ...prevFormData.stepTwo,
        ...data,
      },
    }));
    handleNext();
  };

  return (
    <form
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
      <div className="mb-[30px]">
        <div className="flex flex-wrap items-baseline justify-center">
          <Label
            htmlFor="zip"
            className="mb-4 text-[15px] w-11/12 leading-[5px] text-secondary text-center"
            value="CEP:"
          />

          <Controller
            name="zip"
            control={control}
            render={({ field }) => (
              <TextInput
                type="text"
                placeholder="Digite o CEP do Cliente..."
                color={errors.zip ? "failure" : "success"}
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
      </div>
      <div className="mb-[30px]">
        <div className="flex flex-wrap items-baseline justify-center">
          <Label
            htmlFor="street"
            className="mb-4 text-[15px] w-11/12 leading-[5px] text-secondary text-center"
            value="Logradouro:"
          />
          <Controller
            name="street"
            control={control}
            render={({ field }) => (
              <TextInput
                type="text"
                id="street"
                color={errors.street ? "failure" : "success"}
                className="w-11/12 text-center rounded-lg p-2"
                placeholder="Digite o logradouro..."
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
      </div>
      <div className="mb-[30px]">
        <div className="flex flex-wrap items-baseline justify-center">
          <Label
            htmlFor="streetNumber"
            className="mb-4 text-[15px] w-11/12 leading-[5px] text-secondary text-center"
            value="Número do logradouro:"
          />
          <Controller
            name="streetNumber"
            control={control}
            render={({ field }) => (
              <TextInput
                type="text"
                color={errors.streetNumber ? "failure" : "success"}
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
      </div>
      <div className="mb-[30px]">
        <div className="flex flex-wrap items-baseline justify-center">
          <Label
            htmlFor="complement"
            className="mb-4 text-[15px] w-11/12 leading-[5px] text-secondary text-center"
            value="Complemento:"
          />
          <Controller
            name="complement"
            control={control}
            render={({ field }) => (
              <TextInput
                type="text"
                id="complement"
                placeholder="Digite o complemento, se necessário..."
                className="w-11/12 text-center rounded-lg p-2"
                {...field}
              />
            )}
          />
        </div>
      </div>
      <div className="mb-[30px]">
        <div className="flex flex-wrap items-baseline justify-center">
          <Label
            htmlFor="neighborhood"
            className="mb-4 text-[15px] w-11/12 leading-[5px] text-secondary text-center"
            value="Bairro:"
          />
          <Controller
            name="neighborhood"
            control={control}
            render={({ field }) => (
              <TextInput
                type="text"
                color={errors.neighborhood ? "failure" : "success"}
                id="neighborhood"
                placeholder="Digite o bairro..."
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
      </div>
      <div className="mb-[30px]">
        <div className="flex flex-wrap items-baseline justify-center">
          <Label
            htmlFor="city"
            className="mb-4 text-[15px] w-11/12 leading-[5px] text-secondary text-center"
            value="Cidade:"
          />
          <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <TextInput
                type="text"
                defaultValue=""
                color={errors.city ? "failure" : "success"}
                placeholder="Digite a cidade..."
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
      </div>
      <div className="mb-[30px]">
        <div className="flex flex-wrap items-baseline justify-center">
          <Label
            htmlFor="state"
            className="mb-4 text-[15px] w-11/12 leading-[5px] text-secondary text-center"
            value="Estado:"
          />
          <Controller
            name="state"
            control={control}
            render={({ field }) => (
              <TextInput
                color={errors.state ? "failure" : "success"}
                type="text"
                id="state"
                placeholder="Digite o estado..."
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
      </div>
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
    </form>
  );
};

export default StepTwo;