export const getInputType = (key: string) => {
  switch (key) {
    case "registryType":
    case "individualOrCorporate":
      return "select";
    case "email":
      return "email";
    case "phoneNumber":
    case "cep":
      return "tel";
    case "birthDate":
      return "date";
    case "receiveSMS":
    case "receiveEmail":
      return "checkbox";
    default:
      return "text";
  }
};
