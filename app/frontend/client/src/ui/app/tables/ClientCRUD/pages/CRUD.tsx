import { Table, Button } from "flowbite-react";
import { useDeleteModal } from "../helpers/handleDelete";
import { useFillData } from "../helpers/fillData";
import { FaPlus } from "react-icons/fa";
import UserNavbar from "../../../components/UserNavbar";
import Footer from "../../../../portfolio/components/Sections/Footer";

export default function CRUD() {
  const { handleDelete } = useDeleteModal();
  const tableRows = useFillData();
  return (
    <>
      <UserNavbar />
      <h1 className="text-3xl font-bold text-center my-8 text-cyan-800">
        Gerenciamento de Clientes
      </h1>
      <Button
        className="w-max p-2 mx-auto mt-20 flex overflow-x-auto"
        href="/app/novo-cliente"
      >
        <FaPlus className="mr-2 mt-0.5" />
        Novo Cliente
      </Button>
      <div className="w-11/12 flex flex-col justify-center mx-auto py-20 overflow-x-auto">
        <Table hoverable className="xxs:overflow-x-scroll">
          <Table.Head>
            <Table.HeadCell className="text-center">
              Tipo de Cadastro
            </Table.HeadCell>
            <Table.HeadCell className="lg:text-center">Nome</Table.HeadCell>
            <Table.HeadCell className="lg:text-center">Email</Table.HeadCell>
            <Table.HeadCell className="lg:text-center">Telefone</Table.HeadCell>
            <Table.HeadCell className="lg:text-center">Ações</Table.HeadCell>
          </Table.Head>
          <Table.Body className=" bg-white">{tableRows}</Table.Body>
        </Table>
      </div>
      <Footer />
    </>
  );
}
