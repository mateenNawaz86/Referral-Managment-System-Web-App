import { del, post } from "./HttpProvider";
import featureConstants from "./features-constants";

const SERVICE_URLS = {
  sign_up: "/auth/signup",
  login: "/auth/login",
  logout: "/auth/logout",
};

const singUp = (data) =>
  post(SERVICE_URLS.sign_up, data, { feature: featureConstants.login });

const login = (data) =>
  post(SERVICE_URLS.login, data, { feature: featureConstants.login });

const logout = (data) =>
  del(SERVICE_URLS.logout, data, { feature: featureConstants.login });

// const forgotPassword = (data) =>
//   post(SERVICE_URLS.forgotPassword, data, { feature: featureConstants.login });

// const sendEmailOtp = (data) =>
//   post(SERVICE_URLS.sendEmailOtp, data, { feature: featureConstants.login });

// const generateOtp = (data) =>
//   post(SERVICE_URLS.generateOtp, data, { feature: featureConstants.login });

// const verifyEmailOtp = (data) =>
//   post(
//     `${SERVICE_URLS.verifyEmailOtp}`,
//     { otp: data },
//     { feature: featureConstants.login }
//   );

const apiServices = {
  singUp,
  login,
  logout,
};

export default apiServices;
