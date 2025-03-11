import React from "react";
import { BaseModal } from "./base-modal";
import { CopyIcon } from "../../../assets/svgs/components/copy-icon";
import { ShareIcon } from "../../../assets/svgs/components/share-icon";
import { LinkButton } from "../button/link-icon";

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
          <LinkButton
            icon={CopyIcon}
            text="Copy Link"
            containerClassName="py-[11px] px-[22.5px] rounded-[10px] text-white font-normal text-lg"
          />
          <LinkButton
            icon={ShareIcon}
            text="Share Link"
            containerClassName="py-[11px] px-[22.5px] rounded-[10px] text-white font-normal text-lg"
          />
        </div>
      </div>
    </BaseModal>
  );
};
