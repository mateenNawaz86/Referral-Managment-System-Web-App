import { BaseButton } from "../../base-component/ui/button/base-button";
import appStoreIcon from "../../assets/pngs/app-store-icon.png";

export const IosLinks = ({ iosHandler }) => {
  const [handleRefLinkModal, handleRefDiscountCodeModal, handleQRCodeModal] =
    iosHandler;

  const linksData = [
    {
      text: "Show Referral link",
      onClick: handleRefLinkModal,
    },
    {
      text: "Show Discount code",
      onClick: handleRefDiscountCodeModal,
    },
    {
      text: "Show QR code",
      onClick: handleQRCodeModal,
    },
  ];

  return (
    <div className="flex flex-col gap-y-4 border-r borderf-r-[#E0E0E0] pr-[87px]">
      <div className="flex flex-col gap-y-1 items-center">
        <img src={appStoreIcon} alt="icon" className="h-[43px] w-[43px]" />
        <span className="text-base font-bold text-[#055860]">iOS Appstore</span>
      </div>

      <div className="flex flex-col gap-y-4">
        {linksData?.map(({ text, onClick }, index) => (
          <BaseButton text={text} onClick={onClick} key={index} />
        ))}
      </div>
    </div>
  );
};
