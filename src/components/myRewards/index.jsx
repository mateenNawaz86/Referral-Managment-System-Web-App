import { useMyRewards } from "../../hooks/myRewards/useMyRewards";
import { RewardsCard } from "./rewards-card";
import { RewardsPoints } from "./rewards-points";

export const MyRewards = () => {
  const { rewardsActions } = useMyRewards();
  return (
    <div className="md:bg-white md:p-[50px] md:border border-[#E0E0E0] rounded-lg h-full md:mb-[50px] md:pb-[254px] -mx-[30px] md:mx-0">
      <RewardsCard cardAction={rewardsActions} />
      <RewardsPoints />
    </div>
  );
};
