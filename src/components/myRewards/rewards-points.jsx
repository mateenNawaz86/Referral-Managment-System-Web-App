import { ListIcon } from "../../assets/svgs/components/list-icon";
import { PointIcon } from "../../assets/svgs/components/point-icon";
import { LinkButton } from "../../base-component/ui/button/link-icon";

export const RewardsPoints = () => {
  const pointsData = [
    {
      text: "Total Points Rewarded",
      points: 1700,
    },
    {
      text: "Points Used for Coupons",
      points: 1420,
      icon: ListIcon,
      linkText: "Coupons History",
    },
    {
      text: "Points Redeemed",
      points: 1700,
      icon: ListIcon,
      linkText: "Redeem History",
    },
  ];
  return (
    <div className="flex items-center mt-[44px]">
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

              {item?.linkText && (
                <div className="flex justify-end">
                  <LinkButton icon={item?.icon} text={item?.linkText} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
