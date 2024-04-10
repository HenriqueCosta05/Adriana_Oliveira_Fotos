import { produce } from "immer";
import { useContext, useEffect } from "react";
import { NewUserFormContext } from "../../../../../../contexts/forms/NewUserFormContext";
import { useForm, useFormState } from "react-hook-form";

export default function Step2(props: React.PropsWithChildren<{ onNext: () => void; onPrev: () => void; }>) {
    const { form, setForm } = useContext(NewUserFormContext);
    const { register, handleSubmit, control } = useForm({
        shouldUseNativeValidation: true,
        defaultValues: {
            address: form.steps[2].fields.street.value,
            number: form.steps[2].fields.number.value,
            complement: form.steps[2].fields.complement.value,
            city: form.steps[2].fields.city.value,
            state: form.steps[2].fields.state.value,
            zipCode: form.steps[2].fields.cep.value,
            
        },
    });
    
    const {isDirty} = useFormState({
        control,
    });

    useEffect(() => {
      setForm(
        produce((form) => {
          form.steps[2].dirty = isDirty;
        })
      );
    }, [isDirty, setForm]);
    
  return (
    <div>
      <form
        onSubmit={handleSubmit((values) => {
          setForm(
            produce((formState) => {
              formState.steps[2].fields = {
                ...formState.steps[2].fields,
                ...values,
              };
            })
          );
          props.onNext();
        })}
      >
        <div className="form-group">
          <label htmlFor="address">Endereço</label>
          <input
            {...register("address", { required: true })}
            className="form-control"
            id="address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="number">Número</label>
          <input
            {...register("number", { required: true })}
            className="form-control"
            id="address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="number">Complemento</label>
          <input
            {...register("number", { required: true })}
            className="form-control"
            id="address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">Cidade</label>
          <input
            {...register("city", { required: true })}
            className="form-control"
            id="city"
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">Estado</label>
          <input
            {...register("state", { required: true })}
            className="form-control"
            id="state"
          />
        </div>
        <div className="form-group">
          <label htmlFor="zipCode">CEP</label>
          <input
            {...register("zipCode", { required: true })}
            className="form-control"
            id="zipCode"
          />
        </div>
        <div className="form-group">
          <button
            type="button"
            className="btn btn-primary"
            onClick={props.onPrev}
          >
            Anterior
          </button>
          <button type="submit" className="btn btn-primary">
            Próximo
          </button>
        </div>
      </form>
    </div>
  );
}
