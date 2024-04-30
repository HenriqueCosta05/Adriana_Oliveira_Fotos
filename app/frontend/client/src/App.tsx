import Portfolio from "./ui/portfolio/pages/Portfolio/Portfolio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./components/Shared/BootstrapCustomTheme.scss";
import { UserForm } from "./ui/app/forms/NewClient/pages/UserForm";
import CRUD from "./ui/app/tables/ClientCRUD/pages/CRUD";
import Agenda from "./ui/app/calendar/Calendar";
import { AppointmentForm } from "./ui/app/forms/Appointments/NewApointment/pages/NewApointment";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />

        <Route path="/app/clientes" element={<CRUD />} />
        <Route path="/app/novo-cliente" element={<UserForm />} />
        <Route path="/app/editar-cliente/:id" element={<UserForm />} />

        <Route path="/app/agenda" element={<Agenda />} />
        <Route path="/app/novo-compromisso" element={<AppointmentForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
