import { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import * as Form from "@radix-ui/react-form";
import NewUserFormContext from "../../../../../../contexts/forms/NewUserFormContext";
import Button from "react-bootstrap/esm/Button";
import { UserDataProps } from "../../../../../../types/UserData/UserDataProps";

export const StepOne = () => {
  const { data, setData, handleNext } = useContext(NewUserFormContext);
  const { control, handleSubmit, register, formState: {errors}, } = useForm<UserDataProps["stepOne"]>({
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

  const registryTypeOptions = [
    { value: "prospection", label: "Prospecção" },
    { value: "client", label: "Cliente" },
  ];

  const personTypeOptions = [
    { value: "physicalPerson", label: "Pessoa Física" },
    { value: "legalPerson", label: "Pessoa Jurídica" },
  ];

  return (
    <Form.Root
      onSubmit={handleSubmit(onSubmit)}
      className="xs:w-11/12 lg:w-1/2 mx-auto bg-accent p-4 my-4"
    >
      <Form.Field name="registryType" className="mb-[20px]">
        <h1 className="text-3xl font-bold text-center mb-9 text-secondary">
          Novo Cliente{" "}
        </h1>
        <p className="text-3x1 font-bold text-center mb-9 text-secondary">
          {" "}
          Informações Básicas (1/3)
        </p>
        <div className="flex flex-wrap items-baseline justify-center">
          <Form.Label
            htmlFor="registryType"
            className="mb-4 text-[15px] w-11/12 leading-[5px] text-secondary text-center"
          >
            Tipo de cadastro
          </Form.Label>
          <Controller
            name="registryType"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <select
                className="w-11/12 text-center rounded-lg p-2"
                {...register("registryType", {
                  required: "Tipo de cadastro é obrigatório",
                })}
                onChange={(e) => {
                  field.onChange(e);
                  setData({
                    ...data,
                    stepOne: {
                      ...data.stepOne,
                      registryType: {
                        prospection: e.target.value === "prospection",
                        client: e.target.value === "client",
                      },
                    },
                  });
                }}
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
      </Form.Field>
      <Form.Field name="personType" className="mb-[30px]">
        <div className="flex flex-wrap items-baseline justify-center">
          <Form.Label
            htmlFor="personType"
            className="mb-4 text-[15px] w-11/12 leading-[5px] text-secondary text-center"
          >
            Tipo de pessoa
          </Form.Label>
          <Controller
            name="personType"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <select
                className="w-11/12 text-center rounded-lg p-2"
                {...register("personType", {
                  required: "Tipo de pessoa é obrigatório",
                })}
                onChange={(e) => {
                  field.onChange(e);
                  setData({
                    ...data,
                    stepOne: {
                      ...data.stepOne,
                      personType: {
                        physicalPerson: e.target.value === "physicalPerson",
                        legalPerson: e.target.value === "legalPerson",
                      },
                    },
                  });
                }}
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
      </Form.Field>
      <Form.Field name="name" className="mb-[30px]">
        <div className="flex flex-wrap items-baseline justify-center">
          <Form.Label
            htmlFor="name"
            className="mb-4 text-[15px] w-11/12 leading-[5px] text-secondary text-center"
          >
            Nome
          </Form.Label>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={() => (
              <input
                type="text"
                placeholder="Digite seu nome..."
                className="w-11/12 text-center rounded-lg p-2"
                id="name"
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
      </Form.Field>
      <Form.Field name="surname" className="mb-[30px]">
        <div className="flex flex-wrap items-baseline justify-center">
          <Form.Label
            htmlFor="surname"
            className="mb-4 text-[15px] w-11/12 leading-[5px] text-secondary text-center"
          >
            Sobrenome
          </Form.Label>
          <Controller
            name="surname"
            control={control}
            defaultValue=""
            render={() => (
              <input
                type="text"
                id="surname"
                placeholder="Digite seu sobrenome..."
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
      </Form.Field>
      <Form.Field name="email" className="mb-[30px]">
        <div className="flex flex-wrap items-baseline justify-center">
          <Form.Label
            htmlFor="email"
            className="mb-4 text-[15px] w-11/12 leading-[5px] text-secondary text-center"
          >
            E-mail
          </Form.Label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={() => (
              <input
                className="w-11/12 text-center rounded-lg p-2"
                type="email"
                id="email"
                placeholder="Digite seu email..."
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
      </Form.Field>
      <Form.Field name="phone" className="mb-[30px]">
        <div className="flex flex-wrap items-baseline justify-center">
          <Form.Label
            htmlFor="phone"
            className="mb-4 text-[15px] w-11/12 leading-[5px] text-secondary text-center"
          >
            Telefone
          </Form.Label>
          <Controller
            name="phone"
            control={control}
            defaultValue=""
            render={() => (
              <input
                type="text"
                className="w-11/12 text-center rounded-lg p-2"
                id="phone"
               placeholder="Digite seu celular..."
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
      </Form.Field>
      <Form.Field name="birthDate" className="mb-[30px]">
        <div className="flex flex-wrap items-baseline justify-center">
          <Form.Label
            htmlFor="birthDate"
            className="mb-4 text-[15px] w-11/12 leading-[5px] text-secondary text-center"
          >
            Data de nascimento
          </Form.Label>
          <Controller
            name="birthDate"
            control={control}
            defaultValue=""
            render={() => (
              <input
                type="date"
                id="birthDate"
                {...register("birthDate")}
                className="w-11/12 text-center rounded-lg p-2"
              />
            )}
          />
        </div>
      </Form.Field>
      <div className="flex flex-wrap items-baseline justify-center">
              <Button onClick={handleSubmit(onSubmit)} className="w-11/12 bg-success border-none focus:bg-secondary">Próximo</Button>
      </div>
    </Form.Root>
  );
};
