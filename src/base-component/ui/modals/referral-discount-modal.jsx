import React from "react";
import { BaseModal } from "./base-modal";
import copyIcon from "../../../assets/pngs/copy-icon.png";
import discountCodeIcon from "../../../assets/pngs/discount-code-icon.png";
import arrowIcon from "../../../assets/pngs/modal-arrow-icon.png";

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
          <button className="py-[9px] px-[23px] border border-[#E0E0E0] text-white rounded-md flex items-center gap-x-[9px]">
            <img src={copyIcon} alt="icon" className="h-[30px] w-[30px]" />
            <span className="text-[#055860] font-normal text-lg">
              Copy Code
            </span>
          </button>
          <button className="py-[9px] px-[23px] border border-[#E0E0E0] text-white rounded-md flex items-center gap-x-[9px]">
            <img src={arrowIcon} alt="icon" className="h-[21px] w-[21px]" />
            <span className="text-[#055860] font-normal text-lg">
              Share Code
            </span>
          </button>
        </div>
      </div>
    </BaseModal>
  );
};
