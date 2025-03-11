import React from "react";
import { BaseModal } from "./base-modal";
import couponPointIcon from "../../../assets/svgs/coupon-points-icon.svg";
import { PointIcon } from "../../../assets/svgs/components/point-icon";
import { BaseButton } from "../button/base-button";
import { useDispatch, useSelector } from "react-redux";
import { updateModalType } from "../../../api/slices/globalSlice/global";
import { ModalType } from "../../../types/ui";

export const RedeemPointsModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const { actionType } = useSelector((state) => state.global.modal.data) || {};

  const handleRedeem = () => {
    if (actionType === "REDEEM_SUCCESS") {
      dispatch(updateModalType({ type: ModalType.REDEEM_SUCCESS }));
    }
  };

  return (
    <BaseModal
      onClose={onClose}
      containerClassName="w-full max-w-[451px] min-h-fit"
    >
      <div className="mt-5 mb-6 px-[65px] flex flex-col items-center">
        <img src={couponPointIcon} alt="icon" />

        <div className="flex items-center gap-x-[6px] mb-[6px] mt-[10px]">
          <PointIcon iconClassName="#691188" />
          <span className="font-bold text-2xl text-primary">40 Points</span>
        </div>
        <p className="font-medium text-[15px] text-[#333333] mb-5 text-center">
          Anyone can use this coupon to get a free subscription
        </p>

        <div className="flex items-center gap-x-5 w-full">
          <BaseButton
            text="Cancel"
            onClick={onClose}
            containerClassName="py-[14px] text-lg] font-semibold rounded-[10px] text-white w-full"
          />
          <BaseButton
            text="Redeem"
            onClick={handleRedeem}
            containerClassName="py-[14px] text-lg] font-semibold rounded-[10px] text-white w-full"
          />
        </div>
      </div>
    </BaseModal>
  );
};
