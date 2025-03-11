import { useLocation } from "react-router-dom";
import profileIcon from "../assets/pngs/profile.jpg";
import { HambugerIcon } from "../assets/svgs/components/hamburger-icon";

export const Header = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const status = queryParams.get("status");

  const pathSegment = location.pathname.split("/")[1];
  const isMonthly = pathSegment === "monthly-premium-users";
  const isYearly = pathSegment === "yearly-premium-users";

  const titleMap = {
    trial: isYearly ? "Yearly Trial Users" : "Monthly Trial Users",
    subscribed: isYearly
      ? "Yearly Subscribed Users"
      : "Monthly Subscribed Users",
    cancelled: isYearly ? "Yearly Cancelled Users" : "Monthly Cancelled Users",
    "ref-guide": "Referral Guide",
    "free-users": "Free Users Listing",
    "my-rewards": "My Rewards",
    "request-redeem": "Redeem Request",
    "point-history": "Points History",
    "coupon-history": "Coupon History",
    "redeem-history": "Redeem History",
  };

  let pageTitle = titleMap[status] || titleMap[pathSegment] || "Dashboard";

  if (status === "None") {
    pageTitle = isMonthly
      ? "Monthly Users"
      : isYearly
      ? "Yearly Users"
      : pageTitle;
  }

  return (
    <div
      className={`flex items-center justify-between mb-[33px] px-[30px] pt-[31px] transition-all duration-300 ${
        isSidebarOpen ? "ml-[312px]" : "ml-0"
      }`}
    >
      <div className="flex items-center gap-x-[28px]">
        <button onClick={() => setIsSidebarOpen((prev) => !prev)}>
          <HambugerIcon />
        </button>
        <span className="text-lg lg:text-2xl xMaxSize:text-[40px] font-bold">
          {pageTitle}
        </span>
      </div>

      <div className="flex items-center gap-x-4">
        <img
          src={profileIcon}
          alt="icon"
          className="h-[58px] w-[58px] rounded-full object-cover"
        />
        <span className="text-[22px] font-semibold">Nathan Collins</span>
      </div>
    </div>
  );
};
