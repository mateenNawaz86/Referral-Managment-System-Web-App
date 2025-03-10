import React from "react";

export const RadioButtonField = ({
  id,
  value,
  name,
  register,
  className = "",
  label,
  checked,
  setValue,
  disabled,
  onClick,
  onChange,
  fieldIndex,
  colorClasses = "",
}) => {
  const defaultClasses =
    "border-2 border-lightGray rounded-lg w-5 h-5 px-4 py-3 text-primary bg-secondary cursor-pointer";
  const classes = `${defaultClasses} ${className}`;

  const defaultColorClasses = `flex gap-x-2 items-center bg-white ${colorClasses}`;

  const registerOnChange = register ? register(name)?.onChange : undefined;

  const conditionalOnChange = (e) => {
    if (onChange) {
      onChange(e.target.value, fieldIndex);
    } else if (registerOnChange) {
      registerOnChange(e);
    }
  };

  return (
    <div className={defaultColorClasses}>
      <input
        id={id}
        type="radio"
        checked={checked}
        {...(register ? register(name) : {})}
        className={classes}
        value={value}
        onChange={conditionalOnChange}
        disabled={disabled}
      />
      <span className="ms-0 text-sm">{label}</span>
    </div>
  );
};
