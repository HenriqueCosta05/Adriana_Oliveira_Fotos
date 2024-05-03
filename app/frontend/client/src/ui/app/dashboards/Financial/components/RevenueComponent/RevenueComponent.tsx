import { HelperText } from "flowbite-react";

export default function RevenueComponent() {
  return (
      <div className="my-10">
          <HelperText className="flex justify-center mb-2">19 de março de 2024</HelperText>
          <div className="flex justify-between mx-auto lg:w-9/12 xxs:w-11/12 p-4 bg-gray-50 drop-shadow-sm rounded-3">
              <HelperText>Saldo inicial da conta</HelperText>
              <HelperText>R$ 1.500,00</HelperText>
              </div>
      </div>
  )
}
