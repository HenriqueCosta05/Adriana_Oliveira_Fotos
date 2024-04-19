import { useFetch } from "../../../../../hooks/useFetch";
import { Table } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDeleteModal } from "../helpers/handleDelete";

export const useFillData = () => {
  const data = useFetch("http://localhost:8000/app/consultar-clientes");
  const { DeleteModal, handleDelete } = useDeleteModal();

  return (
    data &&
    data.map((client, index) => {
        return (
          <>
            <DeleteModal />
            <Table.Row key={index}>
              <Table.Cell className="text-center">
                {client.name} {client.surname}
              </Table.Cell>
              <Table.Cell className="text-center">{client.email}</Table.Cell>
              <Table.Cell className="text-center">{client.phone}</Table.Cell>
              <Table.Cell className="flex justify-center">
                <Dropdown label="Ações">
                  <Dropdown.Item
                    href={`/app/editar-cliente/${client.email}`}
                    icon={FaEdit}
                  >
                    Editar
                  </Dropdown.Item>
                  <Dropdown.Item
                    icon={MdDelete}
                    onClick={() => handleDelete(client.email)}
                  >
                    Excluir
                  </Dropdown.Item>
                </Dropdown>
              </Table.Cell>
            </Table.Row>
          </>
        );
    })
  );
};