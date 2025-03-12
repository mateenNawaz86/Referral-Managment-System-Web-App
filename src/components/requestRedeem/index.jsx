import { RewardBalanceIcon } from "../../assets/svgs/components/reward-balance-icon";
import { WarningIcon } from "../../assets/svgs/components/warning-icon";
import { useRedeemRequest } from "../../hooks/redeemRequest/useRedeemRequest";
import { SendRequestField } from "./send-request-field";

export const RequestRedeem = () => {
  const { handleRedeemRequest } = useRedeemRequest();

  return (
    <div className="flex items-center justify-center md:p-10 maxSize:py-[139px] maxSize:px-[185px]">
      <div className="pt-3 md:pt-[60px] md:pb-[126px] md:px-10 maxSize:px-[135px] md:bg-white md:border md:border-[#E0E0E0] rounded-lg h-screen">
        <p className="text-[20px] font-semibold mb-3">Redeem Reward Points</p>
        <div className="flex items-center justify-center rounded-lg bg-gradient-to-r from-[#691188] to-[#490063] py-[34px] md:py-[37px] md:px-[125px]">
          <div className="flex flex-col gap-y-3">
            <div className="flex items-center gap-x-2 md:gap-x-[10px]">
              <RewardBalanceIcon iconClassName="#fff" size={30} />
              <span className="text-[36px] md:text-[38.4px] font-semibold text-white">
                280
              </span>
            </div>
            <span className="text-base font-semibold text-white text-center">
              Your total points
            </span>
          </div>
        </div>

        <p className="text-[#333333] font-medium text-sm md:text-[15px] my-3 md:mt-[18px] md:mb-[14px]">
          You can redeem your points by sending a request to the admin and the
          admin will connect you for the payment withdrawal method.
        </p>

        <p className="text-base font-semibold text-primary">1 Point = 1 USD</p>

        <div className="mt-3 mb-[18px] border border-warning py-[9px] px-[11px] rounded-[4px] flex items-center gap-x-[6px] w-fit">
          <WarningIcon />
          <span className="font-medium text-xs text-warning">
            Minimum redeem points is 100
          </span>
        </div>

        <SendRequestField onSendRedeemRequest={handleRedeemRequest} />
      </div>
    </div>
  );
};
