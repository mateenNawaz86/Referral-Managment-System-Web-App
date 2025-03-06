import { del, post } from "./HttpProvider";
import featureConstants from "./features-constants";

const SERVICE_URLS = {
  login: "/auth/login",
  logout: "/auth/logout",
};

const login = (data) =>
  post(SERVICE_URLS.login, data, { feature: featureConstants.login });
const logoutUser = (data) =>
  del(SERVICE_URLS.logout, data, { feature: featureConstants.login });
const resetPassword = ({ otp, data }) =>
  post(
    SERVICE_URLS.resetPassword,
    { otp: otp, password: data?.password },
    { feature: featureConstants.login }
  );
const forgotPassword = (data) =>
  post(SERVICE_URLS.forgotPassword, data, { feature: featureConstants.login });

const singUp = (data) =>
  post(SERVICE_URLS.userSignup, data, { feature: featureConstants.login });

const sendEmailOtp = (data) =>
  post(SERVICE_URLS.sendEmailOtp, data, { feature: featureConstants.login });

const generateOtp = (data) =>
  post(SERVICE_URLS.generateOtp, data, { feature: featureConstants.login });

const verifyEmailOtp = (data) =>
  post(
    `${SERVICE_URLS.verifyEmailOtp}`,
    { otp: data },
    { feature: featureConstants.login }
  );

const apiServices = {
  login,
  singUp,
  logoutUser,
  forgotPassword,
  resetPassword,
  sendEmailOtp,
  generateOtp,
  verifyEmailOtp,
};

export default apiServices;
