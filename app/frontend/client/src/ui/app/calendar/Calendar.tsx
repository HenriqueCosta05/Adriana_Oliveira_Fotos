import FullCalendar from "@fullcalendar/react";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import brLocale from "@fullcalendar/core/locales/pt-br";
import UserNavbar from "../components/UserNavbar";
import Footer from "../../portfolio/components/Sections/Footer";
import { Button, HelperText } from "flowbite-react";
import { FaEdit, FaMinus, FaPlus } from "react-icons/fa";

export default function Agenda() {
  return (
    <div className="flex flex-col">
      <UserNavbar />
      <div className="my-8">
        <h1 className="text-4xl font-black text-center text-secondary italic">
          Agenda
        </h1>
        <HelperText className="text-center">
          Para criar um novo compromisso, clique no botão abaixo. É altamente
          recomendável que se utilize esta seção em dispositivos desktop.
        </HelperText>
        <HelperText className="text-center mt-20">
          Atenção! O Calendário abaixo não é editável, utilize-se dos botões
          abaixo para manipular a visualização.
        </HelperText>
        <div className="flex justify-center my-20">
          <Button
          className="w-max p-2 mx-auto mt-20 flex overflow-x-auto bg-secondary"
          href="/app/novo-compromisso"
        >
          <FaPlus className="mr-2 mt-0.5" />
          Novo compromisso
        </Button>
        <Button
          className="w-max p-2 mx-auto mt-20 flex overflow-x-auto bg-warning text-black"
          href="/app/editar-compromisso"
        >
          <FaEdit className="mr-2 mt-0.5" />
          Editar compromisso
        </Button>
        <Button
          className="w-max p-2 mx-auto mt-20 flex overflow-x-auto bg-error"
          href="/app/excluir-compromisso"
        >
          <FaMinus className="mr-2 mt-0.5" />
          Excluir compromisso
        </Button>
      </div>
        </div>
        
      <div className="w-11/12 mx-auto my-4">
        <FullCalendar
          editable
          plugins={[googleCalendarPlugin, dayGridPlugin, timeGridPlugin]}
          initialView="dayGridMonth"
          locale={brLocale}
          weekends
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          events={{
            googleCalendarApiKey: "AIzaSyDHCwZA-TluXkJcENBSK_lwTYcNd5kFP9Y",
            googleCalendarId: "projetointerdisciplinar2.fatec@gmail.com",
          }}
        />
      </div>
      <Footer />
    </div>
  );
}
