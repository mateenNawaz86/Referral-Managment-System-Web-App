import React from "react";
import { BaseModal } from "./base-modal";
import discountCodeIcon from "../../../assets/pngs/discount-code-icon.png";
import { CopyIcon } from "../../../assets/svgs/components/copy-icon";
import { ShareIcon } from "../../../assets/svgs/components/share-icon";
import { LinkButton } from "../button/link-icon";

export const ReferralDiscountModal = ({ onClose }) => {
  return (
    <BaseModal
      onClose={onClose}
      containerClassName="w-full max-w-[490.5px] min-h-[294px] max-h-[294px]"
    >
      <div className="flex items-center flex-col py-[30px] px-[48px]">
        <p className="text-[#055860] font-bold text-2xl">
          IOS Appstore Discount Code
        </p>

        <div className="flex flex-col items-center gap-y-4 mt-[19px] mb-[15px]">
          <img
            src={discountCodeIcon}
            alt="icon"
            className="w-[97px] h-[55px]"
          />
          <span className="text-[#000AFF] font-normal text-[27px]">
            14587542
          </span>
        </div>

        <div className="flex items-center gap-x-[33px]">
          <LinkButton
            icon={CopyIcon}
            text="Copy Code"
            containerClassName="py-[11px] px-[17px] rounded-[10px] text-white font-normal text-lg"
          />
          <LinkButton
            icon={ShareIcon}
            text="Share Code"
            containerClassName="py-[11px] px-[17px] rounded-[10px] text-white font-normal text-lg"
          />
        </div>
      </div>
    </BaseModal>
  );
};
