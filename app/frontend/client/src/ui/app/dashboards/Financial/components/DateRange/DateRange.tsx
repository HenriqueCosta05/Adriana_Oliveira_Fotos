import { HelperText } from "flowbite-react";
import { FaBackward, FaForward } from "react-icons/fa";

export default function DateRange() {
  return (
    <>
      <div className="flex justify-center mx-auto lg:w-9/12 xxs:w-11/12 p-4 bg-gray-50 drop-shadow-sm rounded-3">
          <div className="">
            <FaBackward className="text-primary text-xl" />
            <input type="hidden" onClick={() => {}} />
          </div>
          <div className="w-max m-auto">
            <HelperText >01 - 31 de Março de 2024</HelperText>
          </div>
          <div className="">
            <FaForward className="text-primary text-xl" />
            <input type="hidden" onClick={() => {}} />
          </div>
        </div>
    </>
  );
}
