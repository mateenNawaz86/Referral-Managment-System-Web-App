import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { ProfileUpload } from "./custom-drag-and-drop-profile-field";

export const ProfileControllerField = ({
  control,
  id,
  name,
  className,
  iconClasses,
  disabled,
  isMailSetting,
  isMailField,
  isAgent,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <ProfileUpload
          id={id}
          field={field}
          className={className}
          iconClasses={iconClasses}
          disabled={disabled}
          isMailSetting={isMailSetting}
          isMailField={isMailField}
          isAgent={isAgent}
        />
      )}
    />
  );
};

// Prop validation
ProfileControllerField.propTypes = {
  control: PropTypes.any,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  iconClasses: PropTypes.string,
  disabled: PropTypes.bool,
  isMailSetting: PropTypes.bool,
  isMailField: PropTypes.bool,
  isAgent: PropTypes.bool,
};
