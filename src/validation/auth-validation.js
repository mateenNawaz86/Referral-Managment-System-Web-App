import * as yup from "yup";

export const login = {
  phoneNo: "phoneNo",
};

export const phoneVarification = {
  OTP_CODE: "OTP_CODE",
};

export const signup = {
  imageUrl: "imageUrl",
  name: "name",
  country: "country",
};

export const generateLoginValidationSchema = () => {
  return yup.object().shape({
    [login.phoneNo]: yup.string().required("validationMessages.required"),
  });
};

export const generateOtpValidationSchema = () => {
  return yup.object().shape({
    [phoneVarification.OTP_CODE]: yup
      .string()
      .required("validationMessages.required"),
  });
};

export const generateSignUpValidationSchema = () => {
  return yup.object().shape({
    [signup.imageUrl]: yup.string().required("validationMessages.required"),
    [signup.name]: yup.string().required("validationMessages.required"),
    [signup.country]: yup.string().required("validationMessages.required"),
  });
};
