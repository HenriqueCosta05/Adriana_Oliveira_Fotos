import { Avatar, Dropdown } from "flowbite-react";

export default function Profile() {
  return (
    <Dropdown
      arrowIcon={false}
      inline
      label={<Avatar alt="Configurações de Usuário" rounded />}
    >
      <Dropdown.Header>
        <span className="block text-sm">Adriana Oliveira</span>
      </Dropdown.Header>
      <Dropdown.Item href="#">Tela Inicial</Dropdown.Item>
      <Dropdown.Item href="/app/clientes">Clientes</Dropdown.Item>
      <Dropdown.Item href="#">Galerias</Dropdown.Item>
      <Dropdown.Item href="#">Agenda</Dropdown.Item>
      <Dropdown.Item href="#">Despesas/Receitas</Dropdown.Item>
    </Dropdown>
  );
}
