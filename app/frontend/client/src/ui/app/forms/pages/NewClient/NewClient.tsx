import { useState } from "react";
import { NewUserFormContext } from "../../../../../contexts/forms/NewUserFormContext";
import { UserDataProps } from "../../../../../types/UserData/UserDataProps";
import { MultiStepForm } from "../index";
import { RegistryType } from "../../../../../enums/registryType";
import { IndividualOrCorporate } from "../../../../../enums/individualOrCorporate";
import { FormStep } from "../../components/FormStep";
import { Form, FormControl, FormField, FormLabel } from "@radix-ui/react-form";
import { getInputType } from "../../../../../utils/getInputType";

export default function NewClient() {

    const [userDataProps, setUserDataProps] = useState<UserDataProps>({
        stepOne: [
            {
                registryType: RegistryType.CLIENTE,
                individualOrCorporate: IndividualOrCorporate.FÍSICA,
                name: "",
                surname: "",
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
      <MultiStepForm>
        <h2>Novo Cliente</h2>
        <Form>
          <FormStep step={0}>
            {userDataProps &&
              userDataProps.stepOne.map((input, index) => (
                <div key={index}>
                  <FormField name={input.registryType}>
                    <FormControl>
                      <FormLabel>{input.registryType}</FormLabel>
                      <input
                        type={getInputType(input.registryType.toString())}
                        value={input.registryType.toString()}
                        title={input.registryType.toString()}
                        onChange={(e) =>
                          setUserDataProps({
                            ...userDataProps,
                            stepOne: [
                              {
                                ...input,
                                registryType: e.target
                                  .value as unknown as RegistryType,
                              },
                            ],
                          })
                        }
                      />
                    </FormControl>
                  </FormField>
                  <FormField name={input.individualOrCorporate}>
                    <FormControl>
                      <FormLabel>{input.individualOrCorporate}</FormLabel>
                      <input
                        type={getInputType(
                          input.individualOrCorporate.toString()
                        )}
                        value={input.individualOrCorporate.toString()}
                        title={input.individualOrCorporate.toString()}
                        onChange={(e) =>
                          setUserDataProps({
                            ...userDataProps,
                            stepOne: [
                              {
                                ...input,
                                individualOrCorporate: e.target
                                  .value as unknown as IndividualOrCorporate,
                              },
                            ],
                          })
                        }
                      />
                    </FormControl>
                  </FormField>
                  <FormField name={input.name}>
                    <FormControl>
                      <FormLabel>{input.name}</FormLabel>
                      <input
                        type={getInputType(input.name)}
                        value={input.name}
                        title={input.name}
                        onChange={(e) =>
                          setUserDataProps({
                            ...userDataProps,
                            stepOne: [{ ...input, name: e.target.value }],
                          })
                        }
                      />
                    </FormControl>
                  </FormField>
                </div>
              ))}
          </FormStep>
        </Form>
      </MultiStepForm>
    </NewUserFormContext.Provider>
  );
}