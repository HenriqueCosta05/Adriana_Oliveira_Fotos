import { useContext } from "react";
import { FormContext } from "../contexts/forms/NewUserFormContext";

export default const useFormContext = () => {
    return useContext(FormContext);
}