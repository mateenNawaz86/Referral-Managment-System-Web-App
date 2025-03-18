import { DashboardCard } from "../../base-component/ui/dashboard-card";
import { PointIcon } from "../../assets/svgs/components/point-icon";
import { RedeeemHistoryIcon } from "../../assets/svgs/components/redeem-history-icon";
import { UsersIcon } from "../../assets/svgs/components/users-icon";
import { MonthlyPremIcon } from "../../assets/svgs/components/monthly-prem-icon";
import { YearlyPremIcon } from "../../assets/svgs/components/yearly-prem-icon";

export const Results = () => {
  const cardData = [
    {
      points: "2100",
      title: "Total Points Earned",
      icon: <PointIcon iconClassName="#1392A4" />,
      bgColor: "#17A2B7",
      link: "#",
    },
    {
      points: "1500",
      title: "Total Points Redeemed",
      icon: <PointIcon iconClassName="#F3B700" />,
      bgColor: "#F3B700",
      link: "#",
    },
    {
      points: "3200",
      title: "Balance",
      icon: <RedeeemHistoryIcon iconClassName="#048345" />,
      bgColor: "#0F9D58",
      link: "#",
    },
    {
      points: "500",
      title: "Free Users",
      icon: <UsersIcon iconClassName="#055860" />,
      bgColor: "#055860",
      link: "#",
    },
    {
      points: "2750",
      title: "Monthly Premium Users",
      icon: <MonthlyPremIcon iconClassName="#F31A1A" />,
      bgColor: "#F31A1A",
      link: "#",
    },
    {
      points: "1800",
      title: "Yearly Premium Users",
      icon: <YearlyPremIcon iconClassName="#9AA000" />,
      bgColor: "#9AA000",
      link: "#",
    },
  ];

  return (
    <div className="md:border border-[#E0E0E0] rounded-[14px] bg-white h-full pt-[18px] md:pt-10 md:px-[27px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[15px] md:gap-[31px] md:pb-[474px]">
        {cardData?.map((item, index) => (
          <div key={index} className="h-full">
            <DashboardCard
              key={index}
              bgColor={item.bgColor}
              icon={item.icon}
              link={item.link}
              points={item.points}
              title={item.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
