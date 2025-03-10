import React from "react";
import { BaseModal } from "./base-modal";
import { LinkButton } from "../button/link-icon";
import { SaveIcon } from "../../../assets/svgs/components/save-icon";

export const PaymentDetailsModal = ({ onClose }) => {
  const paymentDetailsData = [
    {
      heading: "Request Sent",
      data: "May 14, 2023 / 12:45 AM",
    },
    {
      heading: "Points Redeemed",
      data: 180,
    },
    {
      heading: "Request Approved",
      data: "May 15, 2023 / 12:45 AM",
    },
    {
      heading: "Payment Method",
      data: "JazzCash",
    },
    {
      heading: "Payment Date",
      data: "May 15, 2023 / 12:45 AM",
    },
  ];
  return (
    <BaseModal
      onClose={onClose}
      containerClassName="w-full max-w-[478px] min-h-fit"
    >
      <div className="p-[30px]">
        <div className="flex items-center justify-between mb-[7px]">
          <span className="text-[28px] font-semibold">Payment Details</span>
          <div
            className={`px-[7.5px] py-[5px] rounded-[3px] text-center cursor-pointer bg-primary`}
          >
            <span className={`text-xs font-medium text-white`}>Successful</span>
          </div>
        </div>
        {paymentDetailsData?.map((item, index) => {
          return (
            <div
              key={index}
              className={`flex items-center justify-between py-[15px] ${
                index !== paymentDetailsData.length - 1
                  ? "border-b border-b-[#d9d9d9]"
                  : "pb-0"
              }`}
            >
              <p className="text-base font-semibold text-[#333333]">
                {item?.heading}
              </p>
              <span className="text-base font-semibold text-[#727272]">
                {item?.data}
              </span>
            </div>
          );
        })}

        <div className="mt-[35px] flex items-center gap-x-[33px]">
          <LinkButton
            icon={SaveIcon}
            text="Save to Gallery"
            onClick={() => {}}
            containerClassName="rounded-[10px] py-[17px] px-[18.5px] w-full text-lg font-semibold text-white"
          />
          <LinkButton
            icon={SaveIcon}
            text="Share details"
            onClick={() => {}}
            containerClassName="rounded-[10px] py-[17px] px-[27px] w-full text-lg font-semibold text-white"
          />
        </div>
      </div>
    </BaseModal>
  );
};
