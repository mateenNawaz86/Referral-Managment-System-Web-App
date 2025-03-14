import { useForm } from "react-hook-form";
import { generateLoginValidationSchema } from "../../validation/login-validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginContactFormFields } from "../../components/auth/fields/login-fields";

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

  const fields = LoginContactFormFields(register, loading, control);

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
