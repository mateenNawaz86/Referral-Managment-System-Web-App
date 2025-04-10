import React, { useState } from "react";
import { BaseModal } from "./base-modal";
import { useSelector } from "react-redux";
import { LinkButton } from "../button/link-icon";
import { CopyIcon } from "../../../assets/svgs/components/copy-icon";
import { ShareIcon } from "../../../assets/svgs/components/share-icon";

export const ReferralLinkModal = ({ onClose }) => {
  const [copied, setCopied] = useState(false);
  const { links, deviceType, onShare } =
    useSelector((state) => state.global.modal.data) || {};

  const matchedLink = links?.find((item) => item?.deviceType === deviceType);

  const referralLink = matchedLink?.link
    ? `https://${matchedLink.link}`
    : "https://apps.apple.com/us/app/disney/id1446075923?pt=123456&ct=default";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <BaseModal
      onClose={onClose}
      containerClassName="max-w-[341px] md:max-w-[490.5px] min-h-fit"
    >
      <div className="flex items-center flex-col px-[18px] py-[30px]">
        <h3 className="text-[#5A5FDC] font-semibold md:font-bold text-[22px] md:text-2xl">
          IOS Appstore Referral Link
        </h3>

        <p className="text-[#000AFF] font-medium text-base mt-3 md:mt-5 text-center break-all">
          {referralLink}
        </p>

        {copied && <p className="text-green-600 font-medium mt-2">Copied!</p>}

        <div className="flex items-center gap-x-[15px] md:gap-x-[33px] mt-5 md:mt-[30px]">
          <LinkButton
            icon={CopyIcon}
            text="Copy Link"
            containerClassName="p-5 md:py-[11px] md:px-[22.5px] rounded-[10px] text-white font-normal text-lg"
            onClick={handleCopy}
          />
          <LinkButton
            icon={ShareIcon}
            onClick={onShare}
            text="Share Link"
            containerClassName="p-5 md:py-[11px] md:px-[22.5px] rounded-[10px] text-white font-normal text-lg"
          />
        </div>
      </div>
    </BaseModal>
  );
};
