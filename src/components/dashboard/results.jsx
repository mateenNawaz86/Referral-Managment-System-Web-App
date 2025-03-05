import { DashboardCard } from "../../base-component/ui/dashboard-card";
import pointIcon from "../../assets/pngs/point.png";

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
      title: "Referral Bonus",
      icon: pointIcon,
      bgColor: "#28A745",
      link: "#",
    },
    {
      points: "3200",
      title: "Monthly Rewards",
      icon: pointIcon,
      bgColor: "#FFC107",
      link: "#",
    },
    {
      points: "500",
      title: "Daily Login Bonus",
      icon: pointIcon,
      bgColor: "#DC3545",
      link: "#",
    },
    {
      points: "2750",
      title: "Achievement Points",
      icon: pointIcon,
      bgColor: "#6610F2",
      link: "#",
    },
    {
      points: "1800",
      title: "Milestone Completion",
      icon: pointIcon,
      bgColor: "#6C757D",
      link: "#",
    },
  ];

  return (
    <div className="border border-[#E0E0E0] rounded-[14px] bg-white h-screen pt-10 px-[27px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[31px]">
        {cardData?.map((item, index) => (
          <DashboardCard
            key={index}
            bgColor={item.bgColor}
            icon={item.icon}
            link={item.link}
            points={item.points}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};
