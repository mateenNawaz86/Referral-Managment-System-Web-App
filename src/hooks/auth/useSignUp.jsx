import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpFormFields } from "../../components/auth/fields/sign-up-fields";
import { generateSignUpValidationSchema } from "../../validation/auth-validation";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../api/slices/authSlice/auth";
import { useNavigate } from "react-router-dom";

export const useSignUp = (onSignupSuccess) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading } = useSelector((state) => state.auth);

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

  const fields = SignUpFormFields(register, loading, control);

  const onSubmit = async (data) => {
    try {
      const res = await dispatch(signUp({ data, navigate, setError }));
      if (res?.payload) {
        onSignupSuccess();
      }
    } catch (error) {
      console.error("Sign up error:", error);
    }
  };

  return {
    handleSubmit,
    errors,
    fields,
    onSubmit,
  };
};
