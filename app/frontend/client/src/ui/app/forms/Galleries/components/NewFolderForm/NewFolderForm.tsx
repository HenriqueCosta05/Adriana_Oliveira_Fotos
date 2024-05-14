import { Button, Label, TextInput } from "flowbite-react";
import { Controller, useForm } from "react-hook-form";

export default function NewFolderForm() {
const {
  handleSubmit,
  register,
  control,
  formState: { errors },
} = useForm();

    const submitForm = (data: any) => {
        console.log(data);
    }

  return (
       <>
      <form
        className="xs:w-11/12 mx-auto p-4 my-4 rounded-md"
        onSubmit={handleSubmit(submitForm)}
      >
        <div className="mb-[30px]">
          <div className="flex flex-wrap items-baseline justify-center">
            <Label
              htmlFor="title"
              className="mb-4 text-[15px] w-11/12 leading-[5px] text-secondary text-center"
              value="Título:"
            />
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  {...register("title", {
                    required: "Obrigatório preencher o título da pasta.",
                  })}
                  type="text"
                  placeholder="Dê um título à pasta..."
                  className="w-11/12"
                  color={errors.title ? "failure" : "primary"}
                />
              )}
            />

            {errors && errors.title && (
              <span className="text-red-500 font-medium text-[14px]">
                {errors.title.message}
              </span>
            )}
                  </div>
              </div>
              <div className="flex justify-center">
                  <Button
                        type="submit"
                      className="bg-success text-white rounded-md hover:bg-green-600 transition-colors duration-200 ease-in-out w-11/12"
                  >Salvar</Button>
              </div>
          </form>
          </>
  )
}
