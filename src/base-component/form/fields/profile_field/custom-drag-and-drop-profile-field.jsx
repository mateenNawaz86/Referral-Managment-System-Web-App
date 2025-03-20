import React, { useState } from "react";
import { useDispatch } from "react-redux";
import edit_circle from "../../../../assets/svgs/edit_circle.svg";
import profileDummy from "../../../../assets/svgs/profile_dummy.svg";
import { combineClasses } from "../../../../utils/utility";
import { uploadFile } from "../../../../api/slices/globalSlice/global";

export const ProfileUpload = ({
  id,
  field,
  className,
  iconClasses,
  disabled,
  isMailSetting,
  isMailField,
}) => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const [previewImage, setPreviewImage] = useState(
    field?.value || profileDummy
  );

  const handleFileSelected = async (e) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      if (
        isMailField &&
        (file.name.endsWith(".svg") || file.type === "image/webp")
      ) {
        setErrorMessage(
          "WebP files are not allowed. Please upload a different file format."
        );
        return;
      }

      setErrorMessage("");
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);

      const formData = new FormData();
      formData.append("image", file);

      try {
        const res = await dispatch(uploadFile(formData));

        if (res.payload) {
          field.onChange(res.payload);
          setPreviewImage(res.payload);
        }
      } catch (error) {
        console.error("Upload failed:", error);
      }
    }
  };

  const defaultClasses = "relative";
  const classes = combineClasses(defaultClasses, className);
  const isSVG =
    typeof previewImage === "string" && previewImage.endsWith(".svg");

  return (
    <div>
      <div className={`w-full`}>
        <div className={`${classes} flex justify-center items-center`}>
          {isSVG ? (
            <object
              data={previewImage}
              width={160}
              height={160}
              className="h-[160px] w-[160px] rounded-full object-cover"
            />
          ) : (
            <img
              src={previewImage}
              width={160}
              height={160}
              alt="Uploaded Preview"
              className="h-[160px] w-[160px] rounded-full object-cover"
            />
          )}

          <label
            className={`absolute ${iconClasses} ${
              disabled && "hidden"
            } right-[2px] bottom-0`}
          >
            <input
              type="file"
              className="hidden"
              onChange={handleFileSelected}
              disabled={disabled}
            />
            <img src={edit_circle} alt="Edit Icon" className="cursor-pointer" />
          </label>
        </div>
      </div>
      {errorMessage && <p className="text-red text-sm mt-2">{errorMessage}</p>}
    </div>
  );
};
