import { RewardBalanceIcon } from "../../assets/svgs/components/reward-balance-icon";
import { LinkButton } from "../../base-component/ui/button/link-icon";

export const SendRequestField = ({ onSendRedeemRequest }) => {
  return (
    <div className="flex items-center gap-x-3">
      <input
        type="text"
        placeholder="Enter points you want to redeem"
        className="py-[10px] px-3 border border-[#BDBDBD] rounded-[5px] w-full text-xs font-medium  outline-none focus:border-primary"
      />
      <LinkButton
        icon={RewardBalanceIcon}
        text="Send Request"
        containerClassName="gap-x-[5px] px-[10px] h-[36px]"
        size={20}
        onClick={onSendRedeemRequest}
      />
    </div>
  );
};
