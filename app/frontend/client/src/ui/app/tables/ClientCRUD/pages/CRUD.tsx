import { Table, Dropdown, Button } from "flowbite-react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDeleteModal } from "../helpers/handleDelete";
import { useFillData } from "../helpers/fillData";
import { FaPlus } from "react-icons/fa";


export default function CRUD() {
  const { handleDelete } = useDeleteModal();
  const tableRows = useFillData();
  return (
    
    <><Button className="bg-primary w-max p-2 mx-auto" href="/app/novo-cliente">
      <FaPlus className="mr-2 mt-0.5" />
      Novo Cliente
      </Button>
      <div className="w-11/12 flex flex-col justify-center mx-auto my-36 py-20">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell className="text-center">Nome</Table.HeadCell>
            <Table.HeadCell className="text-center">Email</Table.HeadCell>
            <Table.HeadCell className="text-center">Telefone</Table.HeadCell>
            <Table.HeadCell className="text-center">Ações</Table.HeadCell>
          </Table.Head>
          <Table.Body className="overflow-x-auto bg-white">{tableRows}</Table.Body>
        </Table>
      </div>
    </>
  );
}
