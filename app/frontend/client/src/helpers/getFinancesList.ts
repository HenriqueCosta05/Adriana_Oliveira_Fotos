import { fetchAllData } from "../services/FinancialDataService";

export async function getFinancesList() {
  const result = await fetchAllData();
  return result;
}

export async function getFinancesListByMonth(month: number, year: number) {
  const result = await fetchAllData();
  return result.filter((item) => {
    const itemDate = new Date(item.dueDate);
    return itemDate.getMonth() === month && itemDate.getFullYear() === year;
  });
}