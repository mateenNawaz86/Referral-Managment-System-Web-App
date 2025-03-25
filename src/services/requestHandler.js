import { del, post } from "./HttpProvider";
import featureConstants from "./features-constants";

const SERVICE_URLS = {
  sign_up: "/auth/signup",
  login: "/auth/send-otp",
  logout: "/auth/logout",
  free_user: "/referrals/users/free",
  points_history: "/referrals/points/get",
  coupon_history: "/referrals/coupons/all",
};

const signUp = (data) =>
  post(SERVICE_URLS.sign_up, data, { feature: featureConstants.login });

const login = (data) =>
  post(SERVICE_URLS.login, data, { feature: featureConstants.login });

const logout = (data) =>
  del(SERVICE_URLS.logout, data, { feature: featureConstants.login });

const freeUser = (data) =>
  post(SERVICE_URLS.free_user, data, { feature: featureConstants.login });

const pointsHistory = (data) =>
  post(SERVICE_URLS.points_history, data, { feature: featureConstants.login });

const couponHistory = (data) =>
  post(SERVICE_URLS.coupon_history, data, { feature: featureConstants.login });

const apiServices = {
  signUp,
  login,
  logout,
  freeUser,
  pointsHistory,
  couponHistory,
};

export default apiServices;
