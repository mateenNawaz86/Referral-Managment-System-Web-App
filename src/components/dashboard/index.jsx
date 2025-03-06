import { Results } from "./results";
import { useLocation } from "react-router-dom";
import { ReferralGuide } from "./referral-guide";
import profileIcon from "../../assets/pngs/profile.jpg";
import { useDashboard } from "../../hooks/dashboard/useDashboard";
import { HambugerIcon } from "../../assets/svgs/components/hamburger-icon";

export const Dashboard = () => {
  const location = useLocation();
  const { handleRefLinkModal, handleQRCodeModal, handleRefDiscountCodeModal } =
    useDashboard();

  const queryParams = new URLSearchParams(location.search);
  const status = queryParams.get("status");

  const iosHandler = [
    handleRefLinkModal,
    handleRefDiscountCodeModal,
    handleQRCodeModal,
  ];

  return (
    <div className="pt-[31px] mb-10">
      <div className="flex items-center justify-between mb-[33px]">
        <div className="flex items-center gap-x-[28px]">
          <HambugerIcon />
          <span className="text-[40px] font-bold">
            {status === "ref-guide" ? "Referral Guide" : "Dashboard"}
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

      {status === "ref-guide" && <ReferralGuide iosHandler={iosHandler} />}
      {status === "results" && <Results />}
    </div>
  );
};
