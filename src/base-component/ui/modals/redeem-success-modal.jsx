import React from "react";
import { BaseModal } from "./base-modal";
import checkIcon from "../../../assets/svgs/check-icon.svg";
import { CopiedTextField } from "../copy-field";

export const RedeemSuccessModal = ({ onClose }) => {
  return (
    <BaseModal
      onClose={onClose}
      containerClassName="w-full max-w-[451px] min-h-fit"
    >
      <div className="py-[32px] px-[43px] flex flex-col items-center">
        <img src={checkIcon} alt="icon" />
        <p className="text-primary text-2xl font-bold mt-[15px] mb-5">
          Redeemed Successfully
        </p>

        <CopiedTextField couponCode="6465456" text="Coupon Code" />
      </div>
    </BaseModal>
  );
};
