import React, { useRef } from "react";
import html2canvas from "html2canvas";
import { BaseModal } from "./base-modal";
import { LinkButton } from "../button/link-icon";
import { SaveIcon } from "../../../assets/svgs/components/save-icon";
import { ShareDetailIcon } from "../../../assets/svgs/components/share-details-icon";
import { useSelector } from "react-redux";
import { formatDate } from "../../../utils/function";
import { getRedeemStatusStyles } from "../../../utils/utility";

export const PaymentDetailsModal = ({ onClose }) => {
  const modalRef = useRef(null);
  const {
    reqSentDate,
    points,
    reqApprovedDate,
    paymentMethod,
    paymentDate,
    status,
    onShare,
  } = useSelector((state) => state.global.modal.data) || {};

  const paymentDetailsData = [
    {
      heading: "Request Sent",
      data: reqSentDate ? formatDate(reqSentDate) : "N/A",
    },
    {
      heading: "Points Redeemed",
      data: points ?? "N/A",
    },
    {
      heading: "Request Approved",
      data: reqApprovedDate ? formatDate(reqApprovedDate) : "N/A",
    },
    {
      heading: "Payment Method",
      data: paymentMethod ?? "N/A",
    },
    {
      heading: "Payment Date",
      data: paymentDate ? formatDate(paymentDate) : "N/A",
    },
  ];

  const handleSaveToGallery = async () => {
    if (modalRef.current) {
      const canvas = await html2canvas(modalRef.current);
      const image = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = image;
      link.download = "payment_details.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const { bg, text } = getRedeemStatusStyles(status);

  return (
    <BaseModal
      onClose={onClose}
      containerClassName="w-full max-w-[341px] md:max-w-[478px] min-h-fit"
    >
      <div ref={modalRef} className="p-[22px] md:p-[30px]">
        <div className="flex items-center justify-between mb-[7px]">
          <span className="text-[20px] md:text-[28px] font-semibold">
            Payment Details
          </span>
          <div
            className={`px-[4.5px] md:px-[7.5px] py-[2.5px] md:py-[5px] rounded-[3px] text-center  ${bg} ${text}`}
          >
            <span className={`text-xs font-medium ${bg} ${text}`}>
              {status}
            </span>
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
              <p className="text-xs md:text-base font-semibold text-[#333333]">
                {item?.heading}
              </p>
              <span className="text-base font-semibold text-[#727272]">
                {item?.data}
              </span>
            </div>
          );
        })}

        <div className="mt-[25px] md:mt-[35px] flex items-center gap-x-[15px] md:gap-x-[33px]">
          <LinkButton
            icon={SaveIcon}
            text="Save to Gallery"
            onClick={handleSaveToGallery}
            containerClassName="rounded-[10px] md:py-[17px] md:px-[18.5px] w-full text-base md:text-lg font-semibold text-white"
          />
          <LinkButton
            icon={ShareDetailIcon}
            text="Share details"
            onClick={onShare}
            containerClassName="rounded-[10px] md:py-[17px] md:px-[27px] w-full text-base md:text-lg font-semibold text-white"
          />
        </div>
      </div>
    </BaseModal>
  );
};
