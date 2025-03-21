import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { setErrors } from "../../utils/utility";
import { yupResolver } from "@hookform/resolvers/yup";
import { generateOtpValidationSchema } from "../../validation/auth-validation";
import { PhoneVarificationFormFields } from "../../components/auth/fields/login-fields";
import { useNavigate } from "react-router-dom";

export const usePhoneVerification = (onSignUp) => {
  const navigate = useNavigate();
  const { loading, user } = useSelector((state) => state.auth);
  const schema = generateOtpValidationSchema();

  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const enteredOtp = watch("otp");

  useEffect(() => {
    if (user?.data?.otp) {
      const otpString = user?.data?.otp?.toString();
      reset({ otp: otpString });
    }
  }, [user, reset]);

  const fields = PhoneVarificationFormFields(register, loading, control);

  const onSubmit = (data) => {
    try {
      const expectedOtp = user?.data?.otp?.toString();

      if (!expectedOtp) {
        setErrors("otp", {
          type: "manual",
          message: "No OTP available to verify. Please try again.",
        });
        return;
      }

      if (enteredOtp === expectedOtp) {
        navigate("/dashboard?status=ref-guide");
      } else {
        setErrors("otp", {
          type: "manual",
          message: "Invalid OTP. Please try again.",
        });
      }
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
