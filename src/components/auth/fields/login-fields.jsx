import { Field } from "../../../utils/static";

export const LoginContactFormFields = (register, loading, control) => {
  let formField = [
    {
      containerClass: "mb-2",
      field: {
        type: Field.phone,
        id: "CONTACT_NUMBER",
        name: "CONTACT_NUMBER",
        // value: user?.company?.mobileNumber,
        control,
        className: "!px-4 h-[42px]",
      },
    },

    {
      containerClass: "mb-0 mt-10",
      field: {
        type: Field.button,
        id: "button",
        text: "Send Code",
        inputType: "submit",
        className: "rounded-[12px] w-full py-[17px] hover:bg-none",
        loading,
      },
    },
  ];

  return formField;
};
