import { useState } from "react";
import { SelectBox } from "./custom-select";

export const SelectField = ({
  id,
  options,
  value = "",
  svg,
  onItemChange,
  className,
  disabled,
  fieldIndex,
  isLocalCustomer,
  onSearchCustomer,
}) => {
  const [selectedValue, setSelectedValue] = useState(value);

  const handleSelectChange = (newValue) => {
    setSelectedValue(newValue);
    if (onItemChange) {
      onItemChange(newValue, fieldIndex);
    }
  };

  return (
    <SelectBox
      id={id}
      svg={svg}
      onItemChange={handleSelectChange}
      options={options}
      value={selectedValue}
      className={className}
      disabled={disabled}
      fieldIndex={fieldIndex}
      isLocalCustomer={isLocalCustomer}
      onSearchCustomer={onSearchCustomer}
    />
  );
};
