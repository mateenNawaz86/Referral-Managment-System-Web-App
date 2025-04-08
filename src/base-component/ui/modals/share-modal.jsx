import React from "react";
import { BaseModal } from "./base-modal";
import { CopyField } from "../copy-link-field";

export const ShareModal = ({ onClose }) => {
  return (
    <BaseModal
      onClose={onClose}
      containerClassName="w-full max-w-[341px] md:max-w-[728px] min-h-fit"
    >
      <div className="px-[30px] pt-[28px] pb-[50px]">
        <p className="text-[36px] font-semibold mb-[22px]">
          Share Referral Link
        </p>

        <CopyField value="https://project-link-demo.web.app/xyz123" />
      </div>
    </BaseModal>
  );
};
