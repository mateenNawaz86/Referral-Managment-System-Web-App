import React from "react";
import { BaseModal } from "./base-modal";
import logoutIcon from "../../../assets/svgs/logout.svg";
import { BaseButton } from "../button/base-button";
import { logout } from "../../../utils/auth";
import { useNavigate } from "react-router-dom";

export const LogoutModal = ({ onClose }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await dispatch(logoutUser());
    logout();
    navigate("/");
  };

  return (
    <BaseModal
      onClose={onClose}
      containerClassName="w-full max-w-[341px] md:max-w-[689px] min-h-fit"
    >
      <div className="p-6 md:px-[111px] md:py-[75px] flex flex-col items-center">
        <div className="bg-[#ebebeb] p-[15px] md:p-[25px] rounded-[20px] md:rounded-[31px]">
          <img src={logoutIcon} alt="icon" />
        </div>
        <p className="text-xl md:text-[36px] font-semibold mt-[21px] mb-[18px]">
          Logout Account
        </p>
        <p className="text-[14px] md:text-[26px] font-medium text-[#525451] text-center mb-[50px]">
          Are you absolutely certain you wish to proceed with logging out?
        </p>

        <BaseButton
          text="Yes, Logout"
          onClick={handleLogout}
          containerClassName="px-5 md:py-[18px] md:px-[66px] text-[16px] md:text-[26px] font-extrabold rounded-[10px] text-white"
        />
      </div>
    </BaseModal>
  );
};
