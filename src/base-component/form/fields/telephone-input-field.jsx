import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { combineClasses } from "../../../utils/utility";

export const TelephoneInputField = ({
  country,
  name,
  value,
  onChange,
  success,
  disabled,
  className,
}) => {
  const classes = combineClasses(
    "!w-full !h-[48px] !border-0 !rounded-lg",
    className
  );

  const [phoneNumber, setPhoneNumber] = useState(value || "");

  const handleChange = (val) => {
    const numberWithPlus = "+" + val;
    setPhoneNumber(numberWithPlus);
    if (onChange) {
      onChange(numberWithPlus);
    }
  };

  return (
    <div className="relative w-full">
      <PhoneInput
        country={country}
        onChange={handleChange}
        countryCodeEditable={true}
        enableAreaCodeStretch={false}
        inputProps={{ name: name }}
        placeholder="+41 - _ _  _ _ _  _ _ _ _"
        value={phoneNumber}
        containerClass="!border !rounded-lg !border-lightGray focus-within:!border-primary"
        inputClass={classes}
        onlyCountries={["ch", "de", "at", "fr", "it", "pk"]}
        disabled={disabled}
      />
    </div>
  );
};
