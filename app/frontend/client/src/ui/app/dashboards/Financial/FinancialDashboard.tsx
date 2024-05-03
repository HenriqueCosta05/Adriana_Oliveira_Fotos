import Footer from "../../../portfolio/components/Sections/Footer"
import UserNavbar from "../../components/UserNavbar"
import ButtonGroup from "./components/ButtonGroup/ButtonGroup";

export default function FinancialDashboard() {
  return (
      <>
          <UserNavbar />
          <h1 className="text-center text-4xl font-bold mt-10 text-secondary italic">Gerenciamento Financeiro</h1>
          <ButtonGroup />
          <Footer   />
      </>
  )
}
