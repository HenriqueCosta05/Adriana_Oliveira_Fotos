import { useState } from "react"
import { UserDataProps } from "../../../../../types/UserData/UserDataProps"
import { NewUserFormContext } from "../../../../../contexts/forms/NewUserFormContext";
import UserMultiStepForm from "./UserMultiStepForm";

export default function NewClientContainer() {
    const [form, setForm] = useState(UserDataProps)

    return (
        <NewUserFormContext.Provider value={{form, setForm}}>
            <UserMultiStepForm />
        </NewUserFormContext.Provider>
    )
}
