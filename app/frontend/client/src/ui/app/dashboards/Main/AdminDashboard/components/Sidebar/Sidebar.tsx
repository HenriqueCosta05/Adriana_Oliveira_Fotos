import { useState } from "react";
import Home from "../Home/Home";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Cadastro de Clientes", src: "User", gap: true },
    { title: "Gerenciamento Financeiro", src: "Chart" },
    { title: "Agenda ", src: "Calendar" },
    { title: "Busca", src: "Search" },
    { title: "Contratos ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];

  //Ajustar
  return (
    <div className="flex container min-w-full">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-sidebar min-h-screen p-5  pt-8 relative duration-300`}
      >
        <a
          href=""
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`m-4 text-primary origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
         
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-success text- text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-ligth-white"
              } `}
            >
              <img src={`./assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full">
        <Home/>
        
      </div>
    </div>
  );
};
export default Sidebar;
