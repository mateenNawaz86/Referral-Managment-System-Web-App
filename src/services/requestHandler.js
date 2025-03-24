import { del, post } from "./HttpProvider";
import featureConstants from "./features-constants";

const SERVICE_URLS = {
  sign_up: "/auth/signup",
  login: "/auth/send-otp",
  logout: "/auth/logout",
  freeUser: "/referrals/users/free",
};

const signUp = (data) =>
  post(SERVICE_URLS.sign_up, data, { feature: featureConstants.login });

const login = (data) =>
  post(SERVICE_URLS.login, data, { feature: featureConstants.login });

const logout = (data) =>
  del(SERVICE_URLS.logout, data, { feature: featureConstants.login });

const freeUser = (data) =>
  post(SERVICE_URLS.freeUser, data, { feature: featureConstants.login });

const apiServices = {
  signUp,
  login,
  logout,
  freeUser,
};

export default apiServices;
