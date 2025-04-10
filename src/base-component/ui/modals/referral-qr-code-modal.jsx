import React from "react";
import { BaseModal } from "./base-modal";
import { useSelector } from "react-redux";
import { LinkButton } from "../button/link-icon";
import { ShareIcon } from "../../../assets/svgs/components/share-icon";
import QRCode from "react-qr-code";

export const ReferralQRCodeModal = ({ onClose }) => {
  const { onShare, links, deviceType } =
    useSelector((state) => state.global.modal.data) || {};

  const matchedLink = links?.find((item) => item?.deviceType === deviceType);

  return (
    <BaseModal
      onClose={onClose}
      containerClassName="w-full max-w-[341px] md:max-w-[478px] min-h-fit max-h-fit"
    >
      <div className="flex items-center flex-col py-[30px] px-[27px] md:px-[90px]">
        <p className="text-[#055860] font-semibold text-[22px] md:text-[28px] text-center mb-[27px] md:mb-[33px]">
          IOS Appstore Referral QR Code
        </p>

        {/* <img
          src={qrCodeIcon}
          alt="icon"
          className="w-[182px] md:h-[226px] h-[182px] md:w-[226px]"
        /> */}

        <QRCode value={matchedLink.link} size={226} />

        <LinkButton
          icon={ShareIcon}
          text="Share QR Cod"
          onClick={onShare}
          containerClassName="py-[15px] px-6 mt-[32px] md:mt-[45.5px] rounded-[10px] text-lg font -semibold text-white"
        />
      </div>
    </BaseModal>
  );
};
