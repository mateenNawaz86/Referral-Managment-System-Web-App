import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { combineClasses } from "../../../utils/utility";
import { Controller } from "react-hook-form";
import { CallIcon } from "../../../assets/svgs/components/call-icon";

export const TelephoneInputField = ({
  country,
  name,
  control,
  value,
  disabled,
  className,
}) => {
  const classes = combineClasses(
    "!w-full !h-[48px] !pl-[50px] !pr-[50px] !border-0 !rounded-[5px] !text-gray-500 !text-[16px]",
    className
  );

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={value}
      render={({ field: { onChange } }) => {
        return (
          <div className="relative w-full">
            <PhoneInput
              country={country}
              onChange={(value) => {
                const numberWithPlus = "+" + value;
                onChange(numberWithPlus);
              }}
              countryCodeEditable={false}
              enableAreaCodeStretch={false}
              inputProps={{ name: name }}
              placeholder="+92 - _ _  _ _ _  _ _ _ _"
              value={value}
              containerClass="!border !rounded-[5px] !border-[#cccccc] focus-within:!border-primary"
              inputClass={classes}
              buttonClass="custom-flag-dropdown"
              disabled={disabled}
            />

            <CallIcon iconClassName="absolute top-1/4 right-[18px]" />
          </div>
        );
      }}
    />
  );
};
