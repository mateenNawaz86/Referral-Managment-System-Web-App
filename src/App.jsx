import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { DashboardPage } from "./pages/dashboard";
import { FreeUserPage } from "./pages/freeUser";
import { MonthlyUserPage } from "./pages/monthlyUsers";
import { YearlyUserPage } from "./pages/yearlyUsers";
import { PointHistoryPage } from "./pages/pointHistory";
import { CouponHistoryPage } from "./pages/couponHistory";

const App = () => {
  const RedirectToDashboard = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
      if (location.pathname === "/") {
        navigate("/dashboard?status=ref-guide", { replace: true });
      }
    }, [location, navigate]);

    return null;
  };

  return (
    <Router>
      <RedirectToDashboard />
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/free-users" element={<FreeUserPage />} />
        <Route path="/monthly-premium-users" element={<MonthlyUserPage />} />
        <Route path="/yearly-premium-users" element={<YearlyUserPage />} />
        <Route path="/my-rewards" element={<DashboardPage />} />
        <Route path="/request-redeem" element={<DashboardPage />} />
        <Route path="/point-history" element={<PointHistoryPage />} />
        <Route path="/coupon-history" element={<CouponHistoryPage />} />
        <Route path="/redeem-history" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
};

export default App;
