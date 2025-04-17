import { Field } from "../../utils/static";

export const RedeemRequestFormFields = (register, loading, control) => {
  let formField = [
    {
      field: {
        type: Field.div,
        id: "div-field",
        className: "flex items-center gap-x-3 w-full",
        children: [
          {
            containerClass: "mb-0 flex-1",
            field: {
              type: Field.input,
              id: "points",
              name: "points",
              inputType: "number",
              placeholder: "Enter points you want to redeem",
              className: "w-full pl-[18px]",
              register,
            },
          },

          {
            containerClass: "mb-0",
            field: {
              type: Field.button,
              id: "button",
              text: "Send Request",
              inputType: "submit",
              className:
                "rounded-[4.8px] w-auto min-w-[140px] !h-10 xMini:!h-[48px] hover:bg-none",
              loading,
            },
          },
        ],
      },
    },
  ];

  return formField;
};
