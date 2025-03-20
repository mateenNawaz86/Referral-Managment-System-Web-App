import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { generateLoginValidationSchema } from "../../validation/auth-validation";
import { PhoneVarificationFormFields } from "../../components/auth/fields/login-fields";

export const usePhoneVerification = () => {
  const schema = generateLoginValidationSchema();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const loading = false;

  const fields = PhoneVarificationFormFields(register, loading, control);

  const onSubmit = (data) => {
    try {
      console.log("Login Data:", data);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return {
    handleSubmit,
    errors,
    fields,
    onSubmit,
  };
};
