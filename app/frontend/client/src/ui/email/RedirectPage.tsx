import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Redirecting from "../loading/Redirecting";
import { getToken } from "../../services/LoginDataService";
import { AuthContext } from "../../contexts/auth/AuthContext";
import { useUserType } from "../../contexts/auth/UserRoleContext";

const RedirectPage = () => {
  const navigate = useNavigate();
  const { email, id, pastaId } = useParams();
  const { setAuthState } = useContext(AuthContext);
  const { setUserType } = useUserType();

  useEffect(() => {
    try {
      fetch(
        `http://localhost:8000/app/login-user/${email}?galleryId=${id}&folderIds=${pastaId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      )
        .then(() => {
          getToken().then((data) => {
            if (data.role) {
              setAuthState(true, data.role);
              setUserType(data.role);
              navigate(`/app/galerias/${id}/cliente`);
            }
          });
        })
        .catch((error) => {
          console.log("Ocorreu um erro: ", error);
        });
    } catch (error) {
      console.log("Ocorreu um erro: ", error);
    }
  }, [email, id, pastaId, setAuthState, setUserType, navigate]);

  return <Redirecting />;
};

export default RedirectPage;
