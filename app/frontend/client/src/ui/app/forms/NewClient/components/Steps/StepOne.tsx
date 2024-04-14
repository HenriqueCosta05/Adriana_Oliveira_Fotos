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
    <Form.Root onSubmit={handleSubmit(onSubmit)}>
      <Form.Field name="registryType">
        <Form.Label htmlFor="registryType">Tipo de cadastro</Form.Label>
        <Controller
          name="registryType"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <select
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
                    }
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
      </Form.Field>
      <Form.Field name="personType">
        <Form.Label htmlFor="personType">Tipo de pessoa</Form.Label>
        <Controller
          name="personType"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <select
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
                    }
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
      </Form.Field>
      <Form.Field name="name">
        <Form.Label htmlFor="name">Nome</Form.Label>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={() => (
            <input
              type="text"
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
      </Form.Field>
      <Form.Field name="surname">
        <Form.Label htmlFor="surname">Sobrenome</Form.Label>
        <Controller
          name="surname"
          control={control}
          defaultValue=""
          render={() => <input type="text" id="surname" {...register("surname", {required: "Sobrenome é obrigatório"})} />}
              />
                {errors && errors.surname && (
                  <span className="text-red-500 font-medium text-[14px]">
                    {errors.surname.message}
                  </span>
                )}
          </Form.Field>
          <Form.Field name="email">
            <Form.Label htmlFor="email">E-mail</Form.Label>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={() => (
                <input
                  type="email"
                  id="email"
                  {...register("email", { required: "E-mail é obrigatório" })}
                />
              )}
            />
            {errors && errors.email && (
              <span className="text-red-500 font-medium text-[14px]">
                {errors.email.message}
              </span>
              )}
          </Form.Field>
            <Form.Field name="phone">
                <Form.Label htmlFor="phone">Telefone</Form.Label>
                <Controller
                name="phone"
                control={control}
                defaultValue=""
                render={() => (
                    <input
                    type="text"
                    id="phone"
                    {...register("phone", { required: "Telefone é obrigatório" })}
                    />
                )}
                />
                {errors && errors.phone && (
                <span className="text-red-500 font-medium text-[14px]">
                    {errors.phone.message}
                </span>
              )}
          </Form.Field>
            <Form.Field name="birthDate">
                <Form.Label htmlFor="birthDate">Data de nascimento</Form.Label>
                <Controller
                name="birthDate"
                control={control}
                defaultValue=""
                render={() => (
                    <input
                    type="date"
                    id="birthDate"
                    {...register("birthDate")}
                    />
                )}
                />
            </Form.Field>
      <Button onClick={handleSubmit(onSubmit)}>Próximo</Button>
    </Form.Root>
  );
};
