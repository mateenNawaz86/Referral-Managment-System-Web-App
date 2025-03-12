import React from "react";
import { BaseModal } from "./base-modal";
import checkIcon from "../../../assets/svgs/check-icon.svg";
import { CopiedTextField } from "../copy-field";
import { LinkButton } from "../button/link-icon";
import { CopyIcon } from "../../../assets/svgs/components/copy-icon";
import { ShareIcon } from "../../../assets/svgs/components/share-icon";

export const RedeemSuccessModal = ({ onClose }) => {
  return (
    <BaseModal
      onClose={onClose}
      containerClassName="w-full max-w-[341px] md:max-w-[451px] min-h-fit"
    >
      <div className="py-[32px] px-[18px] md:px-[43px] flex flex-col items-center">
        <img src={checkIcon} alt="icon" />
        <p className="text-primary text-[22px] md:text-2xl font-bold mt-[15px] mb-5">
          Redeemed Successfully
        </p>

        <CopiedTextField couponCode="6465456" text="Coupon Code" />

        <div className="border-2 border-[#989898] rounded-[5px] py-[9px] px-4 flex items-center md:hidden gap-x-2">
          <span className="text-[#989898] font-semibold text-lg">
            Coupon Code:
          </span>
          <span className="text-[#989898] font-semibold text-lg">
            A02GH7652P
          </span>
        </div>
        <div className="flex items-center md:hidden gap-x-[15px] md:gap-x-[33px] mt-5 md:mt-[30px]">
          <LinkButton
            icon={CopyIcon}
            text="Copy Link"
            containerClassName="p-5 md:py-[11px] md:px-[22.5px] rounded-[10px] text-white font-normal text-lg"
          />
          <LinkButton
            icon={ShareIcon}
            text="Share Link"
            containerClassName="p-5 md:py-[11px] md:px-[22.5px] rounded-[10px] text-white font-normal text-lg"
          />
        </div>
      </div>
    </BaseModal>
  );
};
