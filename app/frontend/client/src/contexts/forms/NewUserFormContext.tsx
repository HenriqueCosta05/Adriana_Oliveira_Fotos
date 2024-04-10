import { createContext } from "react";
import { UserDataProps } from "../../types/UserData/UserDataProps";

export const NewUserFormContext = createContext({
  form: UserDataProps,
  setForm: (
    form: typeof UserDataProps | ((form: typeof UserDataProps) => typeof UserDataProps)
  ) => {},
});
