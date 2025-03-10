import { useMyRewards } from "../../hooks/myRewards/useMyRewards";
import { RewardsCard } from "./rewards-card";
import { RewardsPoints } from "./rewards-points";

export const MyRewards = () => {
  const { rewardsActions } = useMyRewards();
  return (
    <div className="bg-white p-[60px] border border-[#E0E0E0] rounded-lg h-full mb-[50px] pb-[254px]">
      <RewardsCard cardAction={rewardsActions} />
      <RewardsPoints />
    </div>
  );
};
