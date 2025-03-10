import rewIcon from "../../assets/svgs/rew-img.svg";
import { IconButton } from "../../base-component/ui/button/icon-button";
import { RewardBalanceIcon } from "../../assets/svgs/components/reward-balance-icon";

export const RewardsCard = ({ cardAction }) => {
  return (
    <div className="bg-primary rounded-lg flex justify-between items-end py-[44px] pl-[56px] pr-[23px]">
      <div className="flex flex-col">
        <div className="flex items-baseline gap-x-2">
          <span className="font-semibold text-[72px] text-white">280</span>
          <span className="font-medium text-[28px] text-white">Points</span>
        </div>
        <div className="flex items-center gap-x-[10px]">
          <RewardBalanceIcon iconClassName="#fff" />
          <span className="font-medium text-[28px] text-white">
            Rewards balance
          </span>
        </div>
      </div>
      <div className="relative">
        <img src={rewIcon} alt="icon" className="pr-[71px]" />
        <div className="flex flex-col gap-y-4 absolute bottom-0 right-0">
          {cardAction?.map((item, index) => (
            <IconButton
              icon={item.icon}
              key={index}
              onClick={item.onClick}
              text={item.text}
              containerClassName="w-[210px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
