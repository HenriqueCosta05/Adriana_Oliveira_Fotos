import { useContext, useState, useEffect } from "react";
import { initialData } from "../../pages/UserForm";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  TextInput,
  Label,
  Select,
  Datepicker,
  Flowbite,
} from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import NewUserFormContext from "../../../../../../contexts/forms/NewUserFormContext";
import { UserDataProps } from "../../../../../../types/UserData/UserDataProps";
import { customTheme } from "../../../../../../components/Shared/FlowbiteCustomTheme/FlowbiteCustomTheme";

export const StepOne = () => {
  const { data, setData, handleNext } = useContext(NewUserFormContext);

  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<UserDataProps["stepOne"]>({
    defaultValues: data.stepOne,
  });

  const onSubmit = (data) => {
    setData((prevData) => ({
      ...prevData,
      stepOne: {
        ...prevData.stepOne,
        ...data,
      },
    }));
    handleNext();
  };

  useEffect(() => {
    reset({
      registryType: data.stepOne.registryType,
      personType: data.stepOne.personType,
      name: data.stepOne.name,
      surname: data.stepOne.surname,
      email: data.stepOne.email,
      phone: data.stepOne.phone,
      birthDate: data.stepOne.birthDate,
    });
  }, [reset]);

  //Transferir para outra pasta
  const registryTypeOptions = [
    { value: "Prospecção", label: "Prospecção" },
    { value: "Cliente", label: "Cliente" },
  ];

  const personTypeOptions = [
    { value: "Pessoa Física", label: "Pessoa Física" },
    { value: "Pessoa Jurídica", label: "Pessoa Jurídica" },
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="xs:w-11/12 lg:w-1/2 mx-auto bg-accent p-4 my-4"
    >
      <div className="mb-[20px]">
        <h1 className="text-3xl font-bold text-center mb-9 text-secondary">
          Formulário de Cliente{" "}
        </h1>
        <p className="text-3x1 font-bold text-center mb-9 text-secondary">
          {" "}
          Informações Básicas (1/3)
        </p>
        <div className="flex flex-wrap items-baseline justify-center">
          <Label
            htmlFor="registryType"
            className="mb-4 text-[15px] w-11/12 leading-[5px] text-secondary text-center"
            value="Tipo de cadastro:"
          />
          <Controller
            name="registryType"
            control={control}
            defaultValue={data.stepOne.registryType || ""}
            rules={{ required: "Tipo de cadastro é obrigatório" }}
            render={({ field }) => (
              <select
                id="registryType"
                name="registryType"
                value={field.value}
                onChange={field.onChange}
                color={errors.registryType ? "failure" : "primary"}
                className="w-11/12 text-center rounded-lg p-2"
              >
                <option disabled value="">
                  Selecione...
                </option>
                {registryTypeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            )}
          />

          {errors && errors.registryType && (
            <span className="text-red-500 font-medium text-[14px]">
              {errors.registryType.message}
            </span>
          )}
        </div>
      </div>
      <div className="mb-[30px]">
        <div className="flex flex-wrap items-baseline justify-center">
          <Label
            htmlFor="personType"
            className="mb-4 text-[15px] w-11/12 leading-[5px] text-secondary text-center"
            value="Tipo de pessoa:"
          />
          <Controller
            name="personType"
            control={control}
            defaultValue={data.stepOne.personType || ""}
            rules={{ required: "Tipo de pessoa é obrigatório" }}
            render={({ field }) => (
              <select
                id="personType"
                name="personType"
                value={field.value}
                onChange={field.onChange}
                color={errors.personType ? "failure" : "primary"}
                className="w-11/12 text-center rounded-lg p-2"
              >
                <option disabled value="">
                  Selecione...
                </option>
                {personTypeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            )}
          />

          {errors && errors.personType && (
            <span className="text-red-500 font-medium text-[14px]">
              {errors.personType.message}
            </span>
          )}
        </div>
      </div>
      <div className="mb-[30px]">
        <div className="flex flex-wrap items-baseline justify-center">
          <Label
            htmlFor="name"
            className="mb-4 text-[15px] w-11/12 leading-[5px] text-secondary text-center"
            value="Nome:"
          />
          <Controller
            name="name"
            control={control}
            defaultValue={data.stepOne.name || ""}
            render={() => (
              <TextInput
                color={errors.name ? "failure" : "primary"}
                type="text"
                placeholder="Digite o nome do cliente..."
                className="w-11/12 text-center rounded-lg p-2"
                id="name"
                name="name"
                {...register("name", { required: "Nome é obrigatório" })}
              />
            )}
          />
          {errors && errors.name && (
            <span className="text-red-500 font-medium text-[14px]">
              {errors.name.message}
            </span>
          )}
        </div>
      </div>
      <div className="mb-[30px]">
        <div className="flex flex-wrap items-baseline justify-center">
          <Label
            htmlFor="surname"
            className="mb-4 text-[15px] w-11/12 leading-[5px] text-secondary text-center"
            value="Sobrenome:"
          />
          <Controller
            name="surname"
            control={control}
            defaultValue={data.stepOne.surname || ""}
            render={() => (
              <TextInput
                type="text"
                name="surname"
                color={errors.surname ? "failure" : "primary"}
                id="surname"
                placeholder="Digite o sobrenome do cliente..."
                className="w-11/12 text-center rounded-lg p-2"
                {...register("surname", {
                  required: "Sobrenome é obrigatório",
                })}
              />
            )}
          />
          {errors && errors.surname && (
            <span className="text-red-500 font-medium text-[14px]">
              {errors.surname.message}
            </span>
          )}
        </div>
      </div>
      <div className="mb-[30px]">
        <div className="flex flex-wrap items-baseline justify-center">
          <Label
            htmlFor="email"
            className="mb-4 text-[15px] w-11/12 leading-[5px] text-secondary text-center"
            value="E-mail:"
          />
          <Controller
            name="email"
            control={control}
            defaultValue={data.stepOne.email || ""}
            render={() => (
              <TextInput
                icon={HiMail}
                color={errors.email ? "failure" : "primary"}
                className="w-11/12 text-center rounded-lg p-2"
                type="email"
                name="surname"
                id="email"
                placeholder="Digite o e-mail do cliente..."
                {...register("email", { required: "E-mail é obrigatório" })}
              />
            )}
          />
          {errors && errors.email && (
            <span className="text-red-500 font-medium text-[14px]">
              {errors.email.message}
            </span>
          )}
        </div>
      </div>
      <div className="mb-[30px]">
        <div className="flex flex-wrap items-baseline justify-center">
          <Label
            htmlFor="phone"
            className="mb-4 text-[15px] w-11/12 leading-[5px] text-secondary text-center"
            value="Telefone:"
          />
          <Controller
            name="phone"
            control={control}
            defaultValue={data.stepOne.phone || ""}
            render={() => (
              <TextInput
                type="text"
                name="phone"
                color={errors.phone ? "failure" : "primary"}
                icon={FaPhoneAlt}
                className="w-11/12 text-center rounded-lg p-2"
                id="phone"
                placeholder="Digite o celular do cliente..."
                {...register("phone", { required: "Telefone é obrigatório" })}
              />
            )}
          />
          {errors && errors.phone && (
            <span className="text-red-500 font-medium text-[14px]">
              {errors.phone.message}
            </span>
          )}
        </div>
      </div>
      <div className="mb-[30px]">
        <div className="flex flex-wrap items-baseline justify-center">
          <Label
            htmlFor="birthDate"
            className="mb-4 text-[15px] w-11/12 leading-[5px] text-secondary text-center"
            value="Data de nascimento:"
          />
          <Controller
            control={control}
            name="birthDate"
            defaultValue={data.stepOne.birthDate || ""}
            render={({ field }) => (
              <>
                <Flowbite theme={{ theme: customTheme }}>
                  <Datepicker
                    maxDate={new Date()}
                    language="pt-BR"
                    id="birthDate"
                    name="birthDate"
                    placeholder="Selecione a data de nascimento..."
                    labelTodayButton="Hoje"
                    labelClearButton="Limpar"
                    onSelectedDateChanged={(date) => field.onChange(date)}
                    className="w-11/12 rounded-lg p-2"
                  />
                </Flowbite>
                <input
                  type="hidden"
                  value={field.value ? field.value : ""}
                  {...register("birthDate")}
                />
              </>
            )}
          />
        </div>
      </div>
      <div className="flex flex-wrap items-baseline justify-center">
        <Button
          onClick={handleSubmit(onSubmit)}
          className="w-11/12 bg-success border-none focus:bg-secondary"
        >
          Próximo
        </Button>
      </div>
    </form>
  );
};
