import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpFormFields } from "../../components/auth/fields/sign-up-fields";
import { generateSignUpValidationSchema } from "../../validation/auth-validation";
import { useDispatch } from "react-redux";
import { signUp } from "../../api/slices/authSlice/auth";
import { useNavigate } from "react-router-dom";

export const useSignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const schema = generateSignUpValidationSchema();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const loading = false;

  const fields = SignUpFormFields(register, loading, control);

  const onSubmit = (data) => {
    console.log("Sign Data Before Dispatch:", data);
    dispatch(signUp({ data, navigate, setError }));
  };

  return {
    handleSubmit,
    errors,
    fields,
    onSubmit,
  };
};
