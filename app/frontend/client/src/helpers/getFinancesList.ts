import { fetchAllData } from "../services/FinancialDataService";

export async function getFinancesList() {
  const result = await fetchAllData();
  return result;
}

export async function getFinancesListByMonth(month: number) {
  const result = await fetchAllData();
  return result.filter((item) => new Date(item.dueDate).getMonth() === month);
}