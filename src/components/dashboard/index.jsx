import { Results } from "./results";
import { useLocation } from "react-router-dom";
import { ReferralGuide } from "./referral-guide";
import { useDashboard } from "../../hooks/dashboard/useDashboard";

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
    <div className="mb-10">
      {status === "ref-guide" && <ReferralGuide iosHandler={iosHandler} />}
      {status === "results" && <Results />}
    </div>
  );
};
