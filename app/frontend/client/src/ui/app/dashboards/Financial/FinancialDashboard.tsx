import Footer from "../../../portfolio/components/Sections/Footer"
import UserNavbar from "../../components/UserNavbar"
import ButtonGroup from "./components/ButtonGroup/ButtonGroup";
import DateRange from "./components/DateRange/DateRange";
import RevenueComponent from "./components/RevenueComponent/RevenueComponent";
import Searchbar from "./components/Searchbar/Searchbar";

export default function FinancialDashboard() {
  return (
      <>
          <UserNavbar />
          <h1 className="text-center text-4xl font-bold mt-10 text-secondary italic">Gerenciamento Financeiro</h1>
          <ButtonGroup />
      <Searchbar />
      <DateRange />
      <RevenueComponent />
      <RevenueComponent />
      <RevenueComponent />
          <Footer   />
      </>
  )
}
