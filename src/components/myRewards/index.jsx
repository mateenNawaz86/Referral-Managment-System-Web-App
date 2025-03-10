import { RewardsCard } from "./rewards-card";
import { PointIcon } from "../../assets/svgs/components/point-icon";
import { GetCouponIcon } from "../../assets/svgs/components/get-coupon-icon";
import { RewardsPoints } from "./rewards-points";

export const MyRewards = () => {
  const rewardsActions = [
    {
      icon: PointIcon,
      text: "Points History",
      onClick: () => {},
    },
    {
      icon: GetCouponIcon,
      text: "Get a coupon",
      onClick: () => {},
    },
    {
      icon: PointIcon,
      text: "Request Redeem",
      onClick: () => {},
    },
  ];

  return (
    <div className="bg-white p-[60px] border border-[#E0E0E0] rounded-lg h-full mb-[50px] pb-[254px]">
      <RewardsCard cardAction={rewardsActions} />
      <RewardsPoints />
    </div>
  );
};
