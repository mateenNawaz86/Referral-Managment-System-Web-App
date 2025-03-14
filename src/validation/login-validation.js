import * as yup from "yup";

export const login = {
  CONTACT_NUMBER: "CONTACT_NUMBER",
};

export const generateLoginValidationSchema = () => {
  return yup.object().shape({
    [login.CONTACT_NUMBER]: yup
      .string()
      .required("validationMessages.required"),
  });
};
