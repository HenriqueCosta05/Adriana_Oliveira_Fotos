import React from 'react'
import Step1 from './Step1';
import { useContext, useCallback } from 'react';
import { NewUserFormContext } from '../../../../../../contexts/forms/NewUserFormContext';
import { produce } from 'immer';
import Step2 from './Step2';

export default function Stepper() {
    const { form, setForm } = useContext(NewUserFormContext);

    const next = useCallback(() => {
      setForm(
        produce((form) => {
          form.step += 1;
        })
      );
    }, [setForm]);

    const prev = useCallback(() => {
      setForm(
        produce((form) => {
          form.step -= 1;
        })
      );
    }, [setForm]);

    console.log(form)
  return (
    <div>
      <div className="">
        <h2></h2>
        {form.step === 1 && <Step1 onNext={next} />}
        {form.step === 2 && <Step2 onNext={next} onPrev={prev} />}
      </div>
    </div>
  );
}
