import { DashboardCard } from "../../base-component/ui/dashboard-card";
import pointIcon from "../../assets/pngs/point.png";
import managerIcon from "../../assets/pngs/manager-icon.png";

export const Results = () => {
  const cardData = [
    {
      points: "2100",
      title: "Total Points Earned",
      icon: pointIcon,
      bgColor: "#17A2B7",
      link: "#",
    },
    {
      points: "1500",
      title: "Total Points Redeemed",
      icon: pointIcon,
      bgColor: "#F3B700",
      link: "#",
    },
    {
      points: "3200",
      title: "Balance",
      icon: pointIcon,
      bgColor: "#0F9D58",
      link: "#",
    },
    {
      points: "500",
      title: "Free Users",
      icon: managerIcon,
      bgColor: "#055860",
      link: "#",
    },
    {
      points: "2750",
      title: "Monthly Premium Users",
      icon: managerIcon,
      bgColor: "#F31A1A",
      link: "#",
    },
    {
      points: "1800",
      title: "Yearly Premium Users",
      icon: managerIcon,
      bgColor: "#9AA000",
      link: "#",
    },
  ];

  return (
    <div className="border border-[#E0E0E0] rounded-[14px] bg-white h-full pt-10 px-[27px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[31px] pb-[474px]">
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
