import React, { useContext, useEffect } from 'react'
import { produce } from "immer";
import { useForm, useFormState } from 'react-hook-form';
import { NewUserFormContext } from '../../../../../../contexts/forms/NewUserFormContext';

export default function Step1(props: React.PropsWithChildren<{ onNext: () => void; }>) {
  const {form, setForm} = useContext(NewUserFormContext);
  
  const { register, handleSubmit, control } = useForm({
    shouldUseNativeValidation: true,
    defaultValues: {
      registryType: form.steps[1].fields.registryType.value,
      individualOrCorporate: form.steps[1].fields.individualOrCorporate.value,
      name: form.steps[1].fields.name.value,
      email: form.steps[1].fields.email.value,
      cpf: form.steps[1].fields.cpf.value,
      phone: form.steps[1].fields.phone.value,
      birthDate: form.steps[1].fields.birthdate.value,
    },
  });

  const { isDirty } = useFormState({
    control,
  });

  useEffect(() => {
    setForm(
      produce((form) => {
        form.steps[1].dirty = isDirty;
      })
    );
  }, [isDirty, setForm]);
  
  return (
    <div className='container'>
      <form 
        onSubmit={handleSubmit((values) => {
          setForm(
            produce((formState) => {
              formState.steps[1].fields = {
                ...formState.steps[1].fields,
                ...values,
              };
            })
          );
          props.onNext();
        })}
      >
        <div className='form-group'>
          <label htmlFor='registryType'>Tipo de Cadastro</label>
          <select
            {...register('registryType', { required: true })}
            className='form-control'
            id='registryType'
          >
            <option value=''>Selecione</option>
            <option value='Prospecção'>Prospecção</option>
            <option value='Cliente'>Cliente</option>
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='individualOrCorporate'>Tipo de pessoa</label>
          <select
            {...register('individualOrCorporate')}
            className='form-control'
            id='individualOrCorporate'
          >
            <option value=''>Selecione</option>
            <option value='Fisica'>Pessoa Física</option>
            <option value='Juridica'>Pessoa Jurídica</option>
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='name'>Nome</label>
          <input
            {...register('name', { required: true })}
            className='form-control'
            id='name'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            {...register('email', { required: true })}
            className='form-control'
            id='email'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='cpf'>CPF</label>
          <input
            {...register('cpf', { required: true })}
            className='form-control'
            id='cpf'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='phone'>Telefone Celular</label>
          <input
            {...register('phone', { required: true })}
            className='form-control'
            id='phone'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='birthdate'>Data de Nascimento</label>
          <input
            {...register('birthDate')}
            className='form-control'
            id='birthdate'
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Próximo
        </button>
      </form>
    </div>
  )
}