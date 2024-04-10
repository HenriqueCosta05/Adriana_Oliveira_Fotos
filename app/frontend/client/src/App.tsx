import Portfolio from "./ui/portfolio/pages/Portfolio/Portfolio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./components/Shared/BootstrapCustomTheme.scss";
import NewClient from "./ui/app/forms/pages/NewClient/Container";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/404" element={<h1>Página não encontrada</h1>} />
        <Route path="/app/novo-cliente" element={<NewClient/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
