import { useState } from "react";
import { NewUserFormContext } from "../../../../../contexts/forms/NewUserFormContext";
import { UserDataProps } from "../../../../../types/UserData/UserDataProps";
import MultiStepForm from "../index";
import { RegistryType } from "../../../../../enums/registryType";
import { IndividualOrCorporate } from "../../../../../enums/individualOrCorporate";

export default function NewClient() {

    const [userDataProps, setUserDataProps] = useState<UserDataProps>({
        stepOne: [
            {
                registryType: RegistryType.CLIENTE,
                individualOrCorporate: IndividualOrCorporate.FÍSICA,
                name: "",
                email: "",
                birthDate: new Date(),
                cpf: "",
                phoneNumber: "",
            }
        ],
        stepTwo: [
            {
                cep: "",
                address: "",
                addressNumber: 0,
                complement: "",
                neighborhood: "",
                city: "",
                state: "",
            }
        ],
        stepThree: [
            {
                receiveSMS: false,
                receiveEmail: false,
            }
        ]
    })

  return (
      <NewUserFormContext.Provider value={userDataProps}>
          <MultiStepForm numberOfSteps={3} inputs={userDataProps} name="Novo Cliente" buttonText={undefined} buttonType={undefined}  />
        </NewUserFormContext.Provider>
  )
}