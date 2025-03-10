import React from "react";
import { BaseModal } from "./base-modal";
import logoutIcon from "../../../assets/svgs/logout.svg";
import { BaseButton } from "../button/base-button";

export const LogoutModal = ({ onClose }) => {
  return (
    <BaseModal
      onClose={onClose}
      containerClassName="w-full max-w-[689px] min-h-fit"
    >
      <div className="px-[111px] py-[75px] flex flex-col items-center">
        <div className="bg-[#ebebeb] p-[25px] rounded-[31px]">
          <img src={logoutIcon} alt="icon" />
        </div>
        <p className="text-[36px] font-semibold mt-[21px] mb-[18px]">
          Logout Account
        </p>
        <p className="text-[26px] font-medium text-[#525451] text-center mb-[50px] ">
          Are you absolutely certain you wish to proceed with logging out?
        </p>

        <BaseButton
          text="Yes, Logout"
          containerClassName="py-[18px] px-[66px] text-[26px] font-extrabold rounded-[10px] text-white"
        />
      </div>
    </BaseModal>
  );
};
