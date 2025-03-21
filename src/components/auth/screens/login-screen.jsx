import logo from "../../../assets/svgs/logo.svg";
import { Form } from "../../../base-component/form/form";
import { useLogin } from "../../../hooks/auth/useLogin";

export const Login = ({ onLoginSuccess, onSignUp }) => {
  const { handleSubmit, errors, fields, onSubmit } = useLogin({
    onLoginSuccess,
    onSignUp,
  });
  return (
    <div className="bg-white rounded-[12px] border border-[#CFD6E9] p-[22px] md:px-[140px] md:py-[60px]">
      <div className="flex items-center flex-col">
        <img
          src={logo}
          alt="logo"
          className="min-w-[162px] min-h-[165px] max-w-[162px] max-h-[165px]"
        />
        <p className="font-medium text-[22px] text-[#808080] mt-5 mb-[30px] text-center">
          Please enter your phone number so we can send you an authentication
          code!
        </p>
      </div>

      <Form
        formFields={fields}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
      />
    </div>
  );
};
