import { useNavigate } from "react-router-dom";
import { ListIcon } from "../../assets/svgs/components/list-icon";
import { PointIcon } from "../../assets/svgs/components/point-icon";
import { LinkButton } from "../../base-component/ui/button/link-icon";
import { PointCard } from "../../base-component/ui/point-card";

export const RewardsPoints = () => {
  const navigate = useNavigate();
  const pointsData = [
    {
      text: "Total Points Rewarded",
      points: 1700,
      linkText: "Points History",
      onClick: () => navigate("/point-history"),
    },
    {
      text: "Points Used for Coupons",
      points: 1420,
      icon: ListIcon,
      linkText: "Coupons History",
      onClick: () => navigate("/coupon-history"),
    },
    {
      text: "Points Redeemed",
      points: 1700,
      icon: ListIcon,
      linkText: "Redeem History",
      onClick: () => navigate("/redeem-history"),
    },
  ];
  return (
    <>
      <div className="hidden md:flex items-center mt-[44px]">
        <div className="flex flex-col  w-full">
          {pointsData?.map((item, index) => {
            return (
              <div
                key={index}
                className="py-[18px] grid grid-cols-3 border-b border-b-[#d9d9d9]"
              >
                <div className="col-span-2 flex items-center gap-x-[14px] w-full">
                  <PointIcon iconClassName="#691188" />
                  <div className="flex items-center justify-between w-full">
                    <p className="text-2xl font-semibold text-primary">
                      {item.text}
                    </p>
                    <span className="text-2xl font-semibold text-primary">
                      {item?.points}
                    </span>
                  </div>
                </div>

                {index !== 0 && (
                  <div className="flex justify-end">
                    <LinkButton
                      icon={item?.icon}
                      text={item?.linkText}
                      onClick={item?.onClick}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-[15px] mx-[18px] md:hidden">
        <p className="text-[20px] font-semibold mb-3">Points History</p>
        <div className="flex flex-col gap-y-3">
          {pointsData?.map((item, index) => {
            return (
              <PointCard
                key={index}
                linkText={item?.linkText}
                points={item?.points}
                text={item?.text}
                onClick={item?.onClick}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
