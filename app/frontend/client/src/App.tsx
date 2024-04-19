import Portfolio from "./ui/portfolio/pages/Portfolio/Portfolio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./components/Shared/BootstrapCustomTheme.scss";
import { UserForm } from "./ui/app/forms/NewClient/pages/UserForm";
import CRUD from "./ui/app/tables/ClientCRUD/pages/CRUD";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/404" element={<h1>Página não encontrada</h1>} />

        <Route path="/app/clientes" element={<CRUD />} />
        <Route path="/app/novo-cliente" element={<UserForm />} />
        <Route path="/app/editar-cliente/:userEmail" element={<UserForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
