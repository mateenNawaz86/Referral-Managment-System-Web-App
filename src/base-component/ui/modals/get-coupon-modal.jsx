import React from "react";
import { BaseModal } from "./base-modal";

export const GetCouponModal = ({ onClose }) => {
  return (
    <BaseModal
      onClose={onClose}
      containerClassName="w-full max-w-[478px] min-h-[472px]"
    >
      <div className="pt-[30px] pb-10 px-[64px]">
        <p className="text-[28px] font-semibold text-[#000719] text-center">
          Choose a coupon
        </p>
      </div>
    </BaseModal>
  );
};
