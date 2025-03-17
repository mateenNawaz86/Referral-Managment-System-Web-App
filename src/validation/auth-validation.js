import * as yup from "yup";

export const login = {
  CONTACT_NUMBER: "CONTACT_NUMBER",
};

export const signup = {
  PROFILE: "PROFILE",
  NAME: "NAME",
  COUNTRY: "COUNTRY",
};

export const generateLoginValidationSchema = () => {
  return yup.object().shape({
    [login.CONTACT_NUMBER]: yup
      .string()
      .required("validationMessages.required"),
  });
};

export const generateSignUpValidationSchema = () => {
  return yup.object().shape({
    [signup.PROFILE]: yup.string().required("validationMessages.required"),
    [signup.NAME]: yup.string().required("validationMessages.required"),
    [signup.COUNTRY]: yup.string().required("validationMessages.required"),
  });
};
