import { useState } from "react";
import { getMonthName } from "../../../../../../helpers/getMonthName";
import { FaBackward, FaForward } from "react-icons/fa"; // Import your icons
import { HelperText } from "flowbite-react";

export default function DateRange() {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Get the current month name
  const currentMonth = getMonthName(currentDate.getMonth());

  // Get the last day of the current month
  const lastDayOfMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Go to the previous month
  const goToPreviousMonth = () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    setCurrentDate(new Date(currentDate));
  };

  const goToNextMonth = () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    setCurrentDate(new Date(currentDate));
  };

  return (
    <>
      <div className="flex justify-center mx-auto lg:w-9/12 xxs:w-11/12 p-4 bg-gray-50 drop-shadow-sm rounded-3">
        <div className="">
          <button type="button" onClick={goToPreviousMonth}>
            <FaBackward
              size={20}
              className="text-primary text-xl hover:cursor-pointer"
            />
          </button>
        </div>
        <div className="w-max m-auto">
          <HelperText>
            01 -{" "}
            {lastDayOfMonth(currentDate.getMonth(), currentDate.getFullYear())}{" "}
            de {currentMonth} de {currentDate.getFullYear()}
          </HelperText>
        </div>
        <div className="">
          <button type="button" onClick={goToNextMonth}>
            <FaForward
              size={20}
              className="text-primary text-xl hover:cursor-pointer"
            />
          </button>
        </div>
      </div>
    </>
  );
}
