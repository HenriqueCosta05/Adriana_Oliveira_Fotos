import { HelperText } from "flowbite-react";
import { useEffect, useState } from "react";
import { getFinancesList, getFinancesListByMonth } from "../../../../../../helpers/getFinancesList";
import { formatFinanceData } from "../../../../../../helpers/formatFinanceData";

export default function RevenueComponent() {
  const [financeData, setFinanceData] = useState(null);

  useEffect(() => {

    getFinancesListByMonth(new Date().getMonth()).then((data) => {
      setFinanceData(data);
      formatFinanceData(data);
    });
  }, []);

  const getClassName = (isDebit) => {
    return isDebit ? "text-red-500" : "text-green-500";
  }

  return (
    financeData &&
    Array.from(financeData).map((finance, index) => (
      <div className="my-10" key={index}>
        <HelperText className="flex justify-center mb-2">
          {finance && finance.dueDate}
        </HelperText>
        <div className="flex justify-between mx-auto lg:w-9/12 xxs:w-11/12 p-4 bg-gray-50 drop-shadow-sm rounded-3">
          <HelperText> {finance && finance.title}</HelperText>
          <HelperText className={getClassName(finance.isDebit)}>R$ {finance && finance.value}</HelperText>
        </div>
      </div>
    ))
  );
}