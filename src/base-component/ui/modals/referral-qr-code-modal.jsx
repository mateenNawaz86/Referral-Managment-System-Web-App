import React from "react";
import { BaseModal } from "./base-modal";
import qrCodeIcon from "../../../assets/pngs/qr-code-icon.png";
import { ShareIcon } from "../../../assets/svgs/components/share-icon";
import { LinkButton } from "../button/link-icon";

export const ReferralQRCodeModal = ({ onClose }) => {
  return (
    <BaseModal
      onClose={onClose}
      containerClassName="w-full max-w-[341px] md:max-w-[478px] min-h-fit max-h-fit"
    >
      <div className="flex items-center flex-col py-[30px] px-[27px] md:px-[90px]">
        <p className="text-[#055860] font-semibold text-[22px] md:text-[28px] text-center mb-[27px] md:mb-[33px]">
          IOS Appstore Referral QR Code
        </p>

        <img
          src={qrCodeIcon}
          alt="icon"
          className="w-[182px] md:h-[226px] h-[182px] md:w-[226px]"
        />

        <LinkButton
          icon={ShareIcon}
          text="Share QR Cod"
          containerClassName="py-[15px] px-6 mt-[32px] md:mt-[45.5px] rounded-[10px] text-lg font-semibold text-white"
        />
      </div>
    </BaseModal>
  );
};
