import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpFormFields } from "../../components/auth/fields/sign-up-fields";
import { generateSignUpValidationSchema } from "../../validation/auth-validation";

export const useSignUp = () => {
  const schema = generateSignUpValidationSchema();

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

  const fields = SignUpFormFields(register, loading, control);

  const onSubmit = (data) => {
    console.log("Sign Data:", data);
  };

  return {
    handleSubmit,
    errors,
    fields,
    onSubmit,
  };
};
