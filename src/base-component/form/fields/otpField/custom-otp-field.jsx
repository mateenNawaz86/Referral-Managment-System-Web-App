import React, { useState, useRef } from "react";

export const CustomOtpField = ({
  length = 6,
  onComplete,
  field, // Controlled by React Hook Form
  id,
  className,
  disabled,
}) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef(new Array(length).fill(null));

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return; // Only allow numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Update React Hook Form field value
    field.onChange(newOtp.join(""));

    // Move to the next input
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Call onComplete when all fields are filled
    if (newOtp.every((digit) => digit !== "")) {
      onComplete?.(newOtp.join(""));
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className={`flex gap-x-[15px] ${className}`}>
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          maxLength="1"
          value={digit}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          className="w-[48px] h-[54px] md:w-[76px] md:h-[76px] border border-borderColor text-center text-xl rounded-md focus:border-primary outline-none"
          disabled={disabled}
        />
      ))}
    </div>
  );
};
