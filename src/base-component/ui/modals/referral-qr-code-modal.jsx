import React from "react";
import { BaseModal } from "./base-modal";
import arrowIcon from "../../../assets/pngs/modal-arrow-icon.png";
import qrCodeIcon from "../../../assets/pngs/qr-code-icon.png";

export const ReferralQRCodeModal = ({ onClose }) => {
  return (
    <BaseModal
      onClose={onClose}
      containerClassName="w-full max-w-[490.5px] min-h-fit max-h-fit"
    >
      <div className="flex items-center flex-col py-[30px] px-[90px]">
        <p className="text-[#055860] font-bold text-2xl text-center mb-[47px]">
          IOS Appstore Referral QR Code
        </p>

        <img src={qrCodeIcon} alt="icon" className="h-[226px] w-[226px]" />

        <button className="py-[9px] px-[23px] border border-[#E0E0E0] text-white rounded-md flex items-center gap-x-[9px] mt-[66px]">
          <img src={arrowIcon} alt="icon" className="h-[21px] w-[21px]" />
          <span className="text-[#055860] font-normal text-lg">
            Share QR Code
          </span>
        </button>
      </div>
    </BaseModal>
  );
};
