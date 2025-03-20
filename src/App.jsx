import React, { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { DashboardPage } from "./pages/dashboard";
import { FreeUserPage } from "./pages/freeUser";
import { MonthlyUserPage } from "./pages/monthlyUsers";
import { YearlyUserPage } from "./pages/yearlyUsers";
import { PointHistoryPage } from "./pages/pointHistory";
import { CouponHistoryPage } from "./pages/couponHistory";
import { MyRewardsPage } from "./pages/myRewards";
import { RequestRedeemPage } from "./pages/requestRedeem";
import { RedeemHistoryPage } from "./pages/redeemHistory";
import { scrollToTop } from "./utils/utility";
import { AuthPage } from "./pages/auth";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);

  const RedirectToDashboard = () => {
    useEffect(() => {
      if (location.pathname === "/") {
        navigate("/dashboard?status=ref-guide", { replace: true });
      }
    }, [location, navigate]);

    return null;
  };

  return (
    <>
      {/* <RedirectToDashboard /> */}
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/free-users" element={<FreeUserPage />} />
        <Route path="/monthly-premium-users" element={<MonthlyUserPage />} />
        <Route path="/yearly-premium-users" element={<YearlyUserPage />} />
        <Route path="/my-rewards" element={<MyRewardsPage />} />
        <Route path="/request-redeem" element={<RequestRedeemPage />} />
        <Route path="/point-history" element={<PointHistoryPage />} />
        <Route path="/coupon-history" element={<CouponHistoryPage />} />
        <Route path="/redeem-history" element={<RedeemHistoryPage />} />
      </Routes>
    </>
  );
};

export default App;
