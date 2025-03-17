import { Field } from "../../../utils/static";

export const SignUpFormFields = (register, loading, control) => {
  let formField = [
    {
      containerClass: "flex justify-center items-center mb-[18px]",
      field: {
        type: Field.profileUploadField,
        className: "!h-[165px] !w-[165px] !rounded-full border border-primary",
        id: "profile",
        name: "profile",
        control,
      },
    },

    {
      field: {
        type: Field.span,
        text: `Upload Profile Image`,
        containerClassName:
          "text-sm md:text-[22px] text-dark font-medium text-center",
        id: "info",
      },
    },

    {
      containerClass: "my-[22px]",
      field: {
        type: Field.input,
        id: "fullName",
        name: "fullName",
        inputType: "text",
        placeholder: "Enter Your Name",
        className: "w-full pl-[18px]",
        register,
      },
    },

    {
      field: {
        className: "pl-4 !border-[#BFBFBF]",
        type: Field.select,
        id: `company.address.city`,
        name: `company.address.city`,
        options: [{ label: "Countries", value: "Countries" }],
        control,
        // value: Object.keys(staticEnums.Country)[0],
      },
    },

    {
      containerClass: "mb-0 mt-[50px]",
      field: {
        type: Field.button,
        id: "button",
        text: "Set up Profile",
        inputType: "submit",
        className: "rounded-xl w-full py-[17px] hover:bg-none",
        loading,
      },
    },
  ];

  return formField;
};
