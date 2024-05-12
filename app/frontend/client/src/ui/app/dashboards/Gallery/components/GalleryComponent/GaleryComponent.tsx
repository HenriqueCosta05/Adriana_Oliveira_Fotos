import { HelperText } from "flowbite-react";

export default function GaleryComponent() {
  return (
    <div className="flex justify-between items-center mx-auto my-4 lg:w-9/12 xxs:w-11/12 p-4 bg-gray-50 drop-shadow-sm rounded-3 hover:bg-accent hover:cursor-pointer">
      <div className="flex flex-column">
        <HelperText>Galeria de Exemplo</HelperText>
        <HelperText>2 pastas - 18 fotos</HelperText>
      </div>
      <HelperText>Henrique Costa</HelperText>
    </div>
  );
}
