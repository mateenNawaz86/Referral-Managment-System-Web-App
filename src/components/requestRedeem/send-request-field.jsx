import { RewardBalanceIcon } from "../../assets/svgs/components/reward-balance-icon";
import { BaseButton } from "../../base-component/ui/button/base-button";
import { LinkButton } from "../../base-component/ui/button/link-icon";

export const SendRequestField = ({ onSendRedeemRequest }) => {
  return (
    <div className="flex items-center gap-x-3">
      <input
        type="text"
        placeholder="Enter points you want to redeem"
        className="py-[10px] px-3 border border-[#BDBDBD] rounded-[5px] w-full text-xs font-medium outline-none focus:border-primary"
      />
      <div className="hidden md:block">
        <LinkButton
          icon={RewardBalanceIcon}
          text="Send Request"
          containerClassName="gap-x-[5px] px-[10px] h-[36px]"
          size={20}
          onClick={onSendRedeemRequest}
        />
      </div>

      <BaseButton
        text="Send Request"
        onClick={onSendRedeemRequest}
        containerClassName="p-[10px] text-[10px] text-white w-[150px] md:hidden"
      />
    </div>
  );
};
