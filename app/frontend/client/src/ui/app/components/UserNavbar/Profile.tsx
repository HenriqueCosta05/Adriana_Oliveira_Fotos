import { Avatar, Dropdown } from "flowbite-react";
import { useUserType } from "../../../../contexts/auth/UserRoleContext";
import { AuthContext } from "../../../../contexts/auth/AuthContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getToken } from "../../../../services/LoginDataService";

export default function Profile() {
  const isAdminLoggedIn = useUserType().userType === "admin";
  const isUserLoggedIn = useUserType().userType === "user";
  const isLoggedIn = isAdminLoggedIn || isUserLoggedIn;
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [email, setEmail] = useState("");

  const handleLogout = () => {
    logout();
    navigate("/auth/login");
  };

  useEffect(() => {
    const getClientName = async () => {
      const email = await getToken()
        .then((data) => {
          return data.email;
        })
        .catch((error) => {
          console.log("Ocorreu um erro: ", error);
        });
      setEmail(email);
      return email;
    };
    getClientName();
  }, []);
  return (
    <>
      {isAdminLoggedIn ? (
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar className="mr-2" alt="Configurações do usuário" rounded />
          }
        >
          <Dropdown.Header>
            <Dropdown.Item className="block text-sm" href="/app">
              Adriana Oliveira
            </Dropdown.Item>
            <span className="block truncate text-sm font-medium"></span>
          </Dropdown.Header>
          <Dropdown.Item href="/app/clientes">
            Gerenciamento de Clientes
          </Dropdown.Item>
          <Dropdown.Item href="/app/galerias">
            Gerenciamento de Galerias
          </Dropdown.Item>
          <Dropdown.Item href="/app/financeiro">
            Gerenciamento de Finanças
          </Dropdown.Item>
          <Dropdown.Item href="/app/agenda">
            Gerenciamento de Compromissos
          </Dropdown.Item>
          <Dropdown.Divider />
          {isLoggedIn && (
            <Dropdown.Item onClick={handleLogout}>Sair</Dropdown.Item>
          )}
        </Dropdown>
      ) : isUserLoggedIn ? (
        <Dropdown arrowIcon={false} inline label={<Avatar rounded />}>
          <Dropdown.Header>
            <Dropdown.Item className="block text-sm">
              {email && email}
            </Dropdown.Item>
            <span className="block truncate text-sm font-medium"></span>
          </Dropdown.Header>
          <Dropdown.Item href={`/app/galerias/${id}/cliente`}>
            Visualizar Galeria
          </Dropdown.Item>

          <Dropdown.Divider />
          {isLoggedIn && (
            <Dropdown.Item onClick={handleLogout}>Sair</Dropdown.Item>
          )}
        </Dropdown>
      ) : null}
    </>
  );
}
