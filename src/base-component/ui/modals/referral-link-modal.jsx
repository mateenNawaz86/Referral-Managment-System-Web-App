import React from "react";
import { BaseModal } from "./base-modal";
import { CopyIcon } from "../../../assets/svgs/components/copy-icon";
import { ShareIcon } from "../../../assets/svgs/components/share-icon";
import { LinkButton } from "../button/link-icon";

export const ReferralLinkModal = ({ onClose }) => {
  return (
    <BaseModal
      onClose={onClose}
      containerClassName="max-w-[341px] md:max-w-[490.5px] min-h-fit"
    >
      <div className="flex items-center flex-col px-[18px] py-[30px]">
        <p className="text-[#5A5FDC] font-semibold md:font-bold text-[22px] md:text-2xl">
          IOS Appstore Referral Link
        </p>
        <p className="text-[#000AFF] font-medium text-base mt-3 md:mt-[34px] text-center md:hidden">
          apps.apple.com/us/apdisneyt4y5uit4y5
          u6i7oid1446075923pt=123456&ct=20-06-16-IG-Stories-Summer
        </p>

        <p className="text-[#000AFF] font-medium text-base mt-3 md:mt-5 text-center hidden md:block">
          apps.apple.com/us/app/disney/id1446075923?pt=123456&ct=20-06-16-IG-Stories-Summer
        </p>

        <div className="flex items-center gap-x-[15px] md:gap-x-[33px] mt-5 md:mt-[30px]">
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
