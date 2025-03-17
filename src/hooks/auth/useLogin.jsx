import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  LoginContactFormFields,
  PhoneVarificationFormFields,
} from "../../components/auth/fields/login-fields";
import { generateLoginValidationSchema } from "../../validation/auth-validation";

export const useLogin = () => {
  const schema = generateLoginValidationSchema();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
    setError,
    resetField,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const loading = false;

  const fields = PhoneVarificationFormFields(register, loading, control);

  const onSubmit = (data) => {
    console.log("Login Data:", data);
  };

  return {
    handleSubmit,
    errors,
    fields,
    onSubmit,
  };
};
