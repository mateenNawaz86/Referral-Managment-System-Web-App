import React, { useEffect } from "react";
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
import { ToastContainer } from "react-toastify";
import { isJSON } from "./utils/function";
import { getUser } from "./utils/auth";
import { setUser } from "./api/slices/authSlice/auth";
import { useDispatch } from "react-redux";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = isJSON(getUser());

  useEffect(() => {
    if (user) {
      dispatch(setUser(user));

      if (location.pathname === "/") {
        navigate("/dashboard?status=ref-guide", { replace: true });
      }
    }
  }, [user, location.pathname, navigate, dispatch]);

  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

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
