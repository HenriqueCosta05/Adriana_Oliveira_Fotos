import { IndividualOrCorporate } from "../../enums/individualOrCorporate";
import { RegistryType } from "../../enums/registryType";

export interface UserDataProps {
    stepOne: [
        {
            registryType: RegistryType;
            individualOrCorporate: IndividualOrCorporate;
            name: string;
            surname: string;
            email: string;
            birthDate: Date;
            cpf: string;
            phoneNumber: string;
        }
    ];
    stepTwo: [
        {
            cep: string;
            address: string;
            addressNumber: number;
            complement: string;
            neighborhood: string;
            city: string;
            state: string;
        }
    ];
    stepThree: [
        {
            receiveSMS: boolean;
            receiveEmail: boolean;
        }
    ];
}