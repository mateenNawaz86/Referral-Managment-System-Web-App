import { del, post, get } from "./HttpProvider";
import featureConstants from "./features-constants";

const SERVICE_URLS = {
  sign_up: "/auth/signup",
  login: "/auth/send-otp",
  logout: "/auth/logout",
  free_user: "/referrals/users/free",
  points_history: "/referrals/points/get",
  coupon_history: "/referrals/coupons/all",
  redeem_request: "/referrals/points/redeem",
  redeem_history: "/referrals/redeem/history",
  prem_user: "/referrals/users/details",
  view_results: "/referrals/get/counts",
  view_links: "/referrals/apps/links",
  my_rewards: "/referrals/reward",
  my_rewards_discounts: "/referrals/discounts",
  rewards_coupon: "/referrals/coupon/add",
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

const redeemRequest = (data) =>
  post(SERVICE_URLS.redeem_request, data, { feature: featureConstants.login });

const redeemHistory = (data) =>
  post(SERVICE_URLS.redeem_history, data, { feature: featureConstants.login });

const premiumUser = (data) =>
  post(SERVICE_URLS.prem_user, data, { feature: featureConstants.login });

const viewResults = (data) =>
  post(SERVICE_URLS.view_results, data, { feature: featureConstants.login });

const rewardsCoupon = (data) =>
  post(SERVICE_URLS.rewards_coupon, data, { feature: featureConstants.login });

const myRewards = (data) =>
  post(SERVICE_URLS.my_rewards, data, { feature: featureConstants.login });

const viewLinks = () =>
  get(
    SERVICE_URLS.view_links,
    {},
    { feature: featureConstants.login },
    { detail: false }
  );

const myRewardsDiscount = () =>
  get(
    SERVICE_URLS.my_rewards_discounts,
    {},
    { feature: featureConstants.login },
    { detail: false }
  );

const apiServices = {
  signUp,
  login,
  logout,
  freeUser,
  pointsHistory,
  couponHistory,
  redeemRequest,
  redeemHistory,
  premiumUser,
  viewResults,
  viewLinks,
  myRewards,
  rewardsCoupon,
  myRewardsDiscount,
};

export default apiServices;
