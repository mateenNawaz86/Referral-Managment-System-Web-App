import React from "react";
import { BaseModal } from "./base-modal";
import copyIcon from "../../../assets/pngs/copy-icon.png";
import arrowIcon from "../../../assets/pngs/modal-arrow-icon.png";

export const ReferralLinkModal = ({ onClose }) => {
  return (
    <BaseModal
      onClose={onClose}
      containerClassName="w-full max-w-[490.5px] min-h-[294px] max-h-[294px]"
    >
      <div className="flex items-center flex-col py-[30px]">
        <p className="text-[#055860] font-bold text-2xl">
          IOS Appstore Referral Link
        </p>
        <p className="text-[#000AFF] font-normal text-base mt-[34px] text-center">
          apps.apple.com/us/app/disney/id1446075923?pt=123456&ct=20-06-16-IG-Stories-Summer
        </p>

        <div className="flex items-center gap-x-[33px] mt-[78px]">
          <button className="py-[9px] px-[23px] border border-[#E0E0E0] text-white rounded-md flex items-center gap-x-[9px]">
            <img src={copyIcon} alt="icon" className="h-[30px] w-[30px]" />
            <span className="text-[#055860] font-normal text-lg">
              Copy Link
            </span>
          </button>
          <button className="py-[9px] px-[23px] border border-[#E0E0E0] text-white rounded-md flex items-center gap-x-[9px]">
            <img src={arrowIcon} alt="icon" className="h-[21px] w-[21px]" />
            <span className="text-[#055860] font-normal text-lg">
              Share Link
            </span>
          </button>
        </div>
      </div>
    </BaseModal>
  );
};
