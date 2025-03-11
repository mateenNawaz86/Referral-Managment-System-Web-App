import { IosLinks } from "./ios-links";
import { AndriodLinks } from "./android-links";
import { useDashboard } from "../../hooks/dashboard/useDashboard";
import { StepIndecator } from "../../base-component/ui/step-indecator";
import { BorderLine } from "../../base-component/ui/border-line";

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

      <div className="px-10 xMaxSize:pl-[200px] xMaxSize:pr-[147px] mt-[33.8px]">
        <div className="relative">
          <StepIndecator
            heading={1}
            containerClassName="absolute -left-[50px]"
          />
          <BorderLine />

          <p className="px-3 py-[7.2px] border border-[#E0E0E0] rounded-[7.2px] text-xs font-medium">
            This is your custom marketing link/ QR code/ discount code created
            specially for you. Market this app using any option below to get
            paid subscribers for this app.
          </p>

          <div className="grid grid-cols-2 mt-[27px] w-full">
            <IosLinks iosHandler={iosHandler} />
            <AndriodLinks iosHandler={iosHandler} />
          </div>
        </div>

        <div className="relative mt-[36px]">
          <StepIndecator
            heading={2}
            containerClassName="absolute -left-[50px]"
          />
          <BorderLine />
          <p className="px-3 py-[7.2px] border border-[#E0E0E0] rounded-[7.2px] text-xs font-medium">
            Any one can download and install the app using this link and will
            get 2$ discount on monthly subscription or 20$ discount on yearly
            subscription
          </p>
        </div>

        <div className="relative mt-[36px]">
          <StepIndecator
            heading={3}
            containerClassName="absolute -left-[50px]"
          />
          <BorderLine />
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
        </div>

        <div className="relative mt-[36px]">
          <StepIndecator
            heading={4}
            containerClassName="absolute -left-[50px]"
          />

          <p className="px-3 py-[7.2px] border border-[#E0E0E0] rounded-[7.2px] text-xs font-medium">
            You can redeem points from My Rewards page and get payment in your
            account. 1 point = 1 USD
          </p>
        </div>
      </div>
    </div>
  );
};
