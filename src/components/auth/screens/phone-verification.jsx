import { Form } from "../../../base-component/form/form";
import { BackIcon } from "../../../assets/svgs/components/back-icon";
import { useLogin } from "../../../hooks/auth/useLogin";

export const PhoneVarification = () => {
  const { handleSubmit, errors, fields, onSubmit } = useLogin();
  return (
    <div className="md:border md:border-[#cccccc] md:rounded-[12px] bg-white p-[22px] md:py-[60px] md:px-[130px] md:w-[790px]">
      <span className="md:hidden mt-3">
        <BackIcon />
      </span>
      <p className="text-primary font-semibold md:font-bold text-[20px] md:text-[32px] text-center">
        Phone Verification
      </p>

      <p className="text-[#808080] text-sm font-medium md:font-semibold md:text-[22px] mb-[35px] text-center">
        Enter the OTP code sent to your phone number +5624*****465
        <span className="text-primary text-sm font-medium md:font-semibold md:text-[22px] pl-2 underline cursor-pointer">
          Change phone number
        </span>
      </p>

      <Form
        formFields={fields}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
      />
    </div>
  );
};
