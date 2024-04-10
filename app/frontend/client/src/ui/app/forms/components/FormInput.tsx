import { FormField, FormControl, FormLabel } from '@radix-ui/react-form'

export default function FormInput({label, type, name, defaultValue, setValue}) {
  return (
    <FormField name={name}>
      <FormControl>
        <FormLabel>{label}</FormLabel>
        <input type={type} value={defaultValue} title={name} onChange={setValue}/>
      </FormControl>
    </FormField>
  )
}
