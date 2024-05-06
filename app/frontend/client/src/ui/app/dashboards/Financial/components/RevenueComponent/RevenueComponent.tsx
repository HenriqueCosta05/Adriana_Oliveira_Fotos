import { HelperText } from "flowbite-react";


export default function RevenueComponent({ currentDate, setCurrentDate, financeData, setFinanceData, setEditModalOpen}) {

  const getClassName = (isDebit) => {
    return isDebit ? "text-red-500" : "text-green-500";
  }

  return (
    <>
      {financeData ? (
        Array.from(financeData).map((finance, index) => (
          <div className="my-10 hover:cursor-pointer" key={index} onClick={() => { setEditModalOpen(finance) }}>
            <HelperText className="flex justify-center mb-2">
              {finance && finance.dueDate}
            </HelperText>
            <div className="flex justify-between mx-auto lg:w-9/12 xxs:w-11/12 p-4 bg-gray-50 drop-shadow-sm rounded-3">
              <HelperText> {finance && finance.title}</HelperText>
              <HelperText className={getClassName(finance.isDebit)}>R$ {finance && finance.value}</HelperText>
            </div>
          </div>
        ))
      ) : (
        <HelperText className="flex justify-center mb-2 text-[15px]">
          Nenhum dado encontrado
        </HelperText>
      )}
    </>
  );
}