import { createContext } from "react";

const NewUserFormContext = createContext({});

export default NewUserFormContext;

export const { Provider, Consumer } = NewUserFormContext;