import FullCalendar from "@fullcalendar/react";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import brLocale from "@fullcalendar/core/locales/pt-br";
import UserNavbar from "../components/UserNavbar";
import Footer from "../../portfolio/components/Sections/Footer";
import { Button, HelperText } from "flowbite-react";
import { FaPlus } from "react-icons/fa";

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
        <Button
          className="w-max p-2 mx-auto mt-20 flex overflow-x-auto bg-secondary"
          href="/app/novo-cliente"
        >
          <FaPlus className="mr-2 mt-0.5" />
          Novo compromisso
        </Button>
      </div>
      <div className="w-11/12 mx-auto my-4">
        <FullCalendar
          plugins={[googleCalendarPlugin, dayGridPlugin, timeGridPlugin]}
          initialView="dayGridMonth"
          locale={brLocale}
          weekends
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
        />
      </div>
      <Footer />
    </div>
  );
}
