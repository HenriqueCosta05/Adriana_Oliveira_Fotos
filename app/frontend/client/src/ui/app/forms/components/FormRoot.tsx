import { Form } from "@radix-ui/react-form";

interface FormRootProps {
      children: ReactNode;
}

export default function FormRoot({children}: FormRootProps) {
  return (
    <Form>
      {children}
    </Form>
  )
}
