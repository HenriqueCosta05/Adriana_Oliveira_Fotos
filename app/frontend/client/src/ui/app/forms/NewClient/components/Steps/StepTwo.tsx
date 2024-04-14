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
    <Form.Root onSubmit={handleSubmit(onSubmit)}>
      <Form.Field name="zip">
        <Form.Label htmlFor="zip">CEP</Form.Label>
        <Controller
          name="zip"
          control={control}
          defaultValue=""
          render={({field}) => (
            <input
              type="text"
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
      </Form.Field>
      <Form.Field name="street">
        <Form.Label htmlFor="street">Rua</Form.Label>
        <Controller
          name="street"
          control={control}
          defaultValue=""
                  render={({ field }) => <input type="text" id="street" {...field} {...register("street", { required: "O logradouro é obrigatório" })} />}
        />
        {errors && errors.street && (
          <span className="text-red-500 font-medium text-[14px]">
            {errors.street.message}
          </span>
        )}
      </Form.Field>
      <Form.Field name="streetNumber">
        <Form.Label htmlFor="streetNumber">Número</Form.Label>
        <Controller
          name="streetNumber"
          control={control}
          defaultValue=""
          render={({field}) => (
            <input
              type="text"
              id="streetNumber"
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
      </Form.Field>
      <Form.Field name="complement">
        <Form.Label htmlFor="complement">Complemento</Form.Label>
        <Controller
          name="complement"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input type="text" id="complement" {...field} />
          )}
        />
      </Form.Field>
      <Form.Field name="neighborhood">
        <Form.Label htmlFor="neighborhood">Bairro</Form.Label>
        <Controller
          name="neighborhood"
          control={control}
          defaultValue=""
          render={({field}) => (
            <input
              type="text"
                  id="neighborhood"
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
      </Form.Field>
      <Form.Field name="city">
        <Form.Label htmlFor="city">Cidade</Form.Label>
        <Controller
          name="city"
          control={control}
          defaultValue=""
          render={({field}) => (
            <input
              type="text"
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
      </Form.Field>
      <Form.Field name="state">
        <Form.Label htmlFor="state">Estado</Form.Label>
        <Controller
          name="state"
          control={control}
          defaultValue=""
          render={({field}) => (
            <input
              type="text"
                  id="state"
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
      </Form.Field>

      <Button onClick={prev}>Voltar</Button>
      <Button onClick={handleSubmit(onSubmit)}>Próximo</Button>
    </Form.Root>
  );
};

export default StepTwo;