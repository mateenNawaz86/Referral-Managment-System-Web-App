import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { uploadFileToFirebase } from "@/api/slices/globalSlice/global";
import edit_circle from "@/assets/svgs/edit_circle.svg";
// import fileUploadIcon from "@/assets/pngs/file-upload-icon.png";
import { combineClasses } from "../../../../utils/utility";
export const ProfileUpload = ({
  id,
  field,
  className,
  iconClasses,
  disabled,
  isMailSetting,
  isMailField,
  isAgent,
}) => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileSelected = async (e) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      if (
        isMailField &&
        (file.name.endsWith(".svg") || file.type === "image/webp")
      ) {
        setErrorMessage(translate("common.img_upload_error_message"));
        return;
      }

      setErrorMessage("");
      const formData = new FormData();
      formData.append("file", file);
      const res = await dispatch(uploadFileToFirebase(formData));
      field.onChange(res?.payload);
    }
  };

  const defaultClasses = "relative";
  const classes = combineClasses(defaultClasses, className);
  const isSVG =
    typeof field?.value === "string" && field.value.endsWith(".svg");

  return (
    <div>
      <div className="w-full">
        {field?.value ? (
          <div className={classes}>
            {isSVG ? (
              <object
                data={field?.value}
                width={241}
                height={241}
                className={`${classes} object-contain`}
              />
            ) : (
              <img
                src={field?.value}
                width={241}
                height={241}
                alt="Uploaded Preview"
                className={`${classes} object-contain`}
              />
            )}

            {!isAgent && (
              <label
                className={`absolute ${iconClasses} ${disabled && "hidden"}`}
              >
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileSelected}
                  disabled={disabled}
                />
                <img
                  src={edit_circle}
                  alt="Edit Icon"
                  className="cursor-pointer"
                />
              </label>
            )}
          </div>
        ) : (
          <div className={`${classes} flex justify-center items-center`}>
            <input
              id={id}
              type="file"
              className="hidden"
              onChange={handleFileSelected}
              disabled={disabled}
            />
            <label className="absolute">
              <div className="flex flex-col items-center gap-y-[10px]">
                {/* <img src={fileUploadIcon} alt="Upload Icon" /> */}
                <span
                  className={`bg-primary px-3 py-2 ${
                    !disabled && "cursor-pointer"
                  } text-white text-sm font-medium rounded-lg`}
                  onClick={() => document.getElementById(id)?.click()}
                >
                  {translate("common.upload_button")}
                </span>
              </div>
            </label>
          </div>
        )}
      </div>
      {errorMessage && <p className="text-red text-sm mt-2">{errorMessage}</p>}
    </div>
  );
};
