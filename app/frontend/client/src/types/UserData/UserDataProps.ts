export const UserDataProps = {
  step: 1,
  steps: {
    1: {
      title: "Dados Pessoais",
      dirty: true,
      fields: {
        registryType: {
          label: "Tipo de Cadastro",
          type: "select",
          options: [
            {
              value: "Prospecção",
              label: "Prospecção",
            },
            {
              value: "Cliente",
              label: "Cliente",
            },
          ],
          required: true,
          value: "",
        },
        individualOrCorporate: {
          label: "Tipo de pessoa",
          type: "select",
          options: [
            {
              value: "Fisica",
              label: "Pessoa Física",
            },
            {
              value: "Juridica",
              label: "Pessoa Jurídica",
            },
          ],
          value: "",
        },
        name: {
          label: "Nome",
          type: "text",
          required: true,
          value: "",
        },
        email: {
          label: "Email",
          type: "email",
          required: true,
          value: "",
        },
        cpf: {
          label: "CPF",
          type: "text",
          required: true,
          value: "",
        },
        phone: {
          label: "Telefone Celular",
          type: "tel",
          required: true,
          value: "",
        },
        birthdate: {
          label: "Data de Nascimento",
          type: "date",
          required: true,
          value: "",
        },
      },
    },
    2: {
      dirty: true,
      title: "Endereço",
      fields: {
        cep: {
          label: "CEP",
          type: "text",
          required: true,
          value: "",
        },
        street: {
          label: "Rua",
          type: "text",
          required: true,
          value: "",
        },
        number: {
          label: "Número",
          type: "text",
          required: true,
          value: "",
        },
        complement: {
          label: "Complemento",
          type: "text",
          value: "",
        },
        neighborhood: {
          label: "Bairro",
          type: "text",
          required: true,
          value: "",
        },
        city: {
          label: "Cidade",
          type: "text",
          required: true,
          value: "",
        },
        state: {
          label: "Estado",
          type: "text",
          required: true,
          value: "",
        },
      },
    },
    3: {
      dirty: true,
      title: "Preferências",
      fields: {
        receiveSMS: {
          label: "Deseja receber SMS?",
          type: "checkbox",
          value: false,
        },
        receiveEmail: {
          label: "Deseja receber Email?",
          type: "checkbox",
          value: false,
        },
      },
    },
  },
};