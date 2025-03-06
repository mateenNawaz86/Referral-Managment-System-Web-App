import { IosLinks } from "./ios-links";
import { AndriodLinks } from "./android-links";
import { useDashboard } from "../../hooks/dashboard/useDashboard";

export const ReferralGuide = () => {
  const { handleRefLinkModal, handleQRCodeModal, handleRefDiscountCodeModal } =
    useDashboard();

  const iosHandler = [
    handleRefLinkModal,
    handleRefDiscountCodeModal,
    handleQRCodeModal,
  ];

  return (
    <div className="bg-white h-full py-[45px] border border-[#E0E0E0] rounded-[14px] flex flex-col items-center">
      <h1 className="text-[21px] font-semibold text-center">
        How to get paid by sharing this app?
      </h1>

      <div className="ml-[200px] mr-[147px] mt-[33.8px]">
        <p className="px-3 py-[7.2px] border border-[#E0E0E0] rounded-[7.2px] text-xs font-medium">
          This is your custom marketing link/ QR code/ discount code created
          specially for you. Market this app using any option below to get paid
          subscribers for this app.
        </p>

        <div className="flex items-center mt-[27px]">
          <IosLinks iosHandler={iosHandler} />
          <AndriodLinks iosHandler={iosHandler} />
        </div>

        <div className="flex flex-col gap-y-[26px] mt-[34px]">
          <p className="px-3 py-[7.2px] border border-[#E0E0E0] rounded-[7.2px] text-xs font-medium">
            Any one can download and install the app using this link and will
            get 2$ discount on monthly subscription or 20$ discount on yearly
            subscription
          </p>
          <div className="px-3 py-[7.2px] border border-[#E0E0E0] rounded-[7.2px] text-xs font-medium flex flex-col gap-y-2">
            <p>
              You will get 2 reward points every month for a monthly referred
              subscription on each renewal including first month.
            </p>
            <p>
              You will get 20 reward points every year for a yearly referred
              subscription on each renewal including first month.
            </p>
          </div>
          <p className="px-3 py-[7.2px] border border-[#E0E0E0] rounded-[7.2px] text-xs font-medium">
            You can redeem points from My Rewards page and get payment in your
            account. 1 point = 1 USD
          </p>
        </div>
      </div>
    </div>
  );
};
