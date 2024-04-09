import { createContext, useContext } from "react";
import { UserDataProps } from "../../types/UserData/UserDataProps";

export const NewUserFormContext = createContext<UserDataProps | undefined>(
  undefined
);

export function useNewUserFormContext() {
  const form = useContext(NewUserFormContext);

  if (form === undefined) {
    throw new Error("useFormContext must be used within a FormContext");
  }
}
