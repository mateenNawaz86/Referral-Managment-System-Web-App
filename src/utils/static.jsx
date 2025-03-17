export const sideBar = [
  {
    icon: "Dashboard",
    title: "Dashboard",
    pathname: "/dashboard",
    query: "ref-guide",
    queryName: "status",
    role: [0],
    inner: [
      {
        title: "Referral Guide",
        pathname: "/dashboard",
        query: "ref-guide",
      },
      {
        title: "View Results",
        pathname: "/dashboard",
        query: "results",
      },
    ],
  },
  {
    icon: "Users",
    title: "Free Users Listing",
    pathname: "/free-users",
    role: [0],
  },
  {
    icon: "MonthlyPrem",
    title: "Monthly Premium",
    pathname: "/monthly-premium-users",
    query: "None",
    queryName: "status",
    role: [0],
    inner: [
      {
        title: "Monthly Trial",
        pathname: "/monthly-premium-users",
        query: "trial",
      },
      {
        title: "Monthly Subscribed",
        pathname: "/monthly-premium-users",
        query: "subscribed",
      },
      {
        title: "Monthly Cancelled",
        pathname: "/monthly-premium-users",
        query: "cancelled",
      },
    ],
  },
  {
    icon: "YearlyPrem",
    title: "Yearly Premium",
    pathname: "/yearly-premium-users",
    query: "None",
    queryName: "status",
    role: [0],
    inner: [
      {
        title: "Yearly Trial",
        pathname: "/yearly-premium-users",
        query: "trial",
      },
      {
        title: "Yearly Subscribed",
        pathname: "/yearly-premium-users",
        query: "subscribed",
      },
      {
        title: "Yearly Cancelled",
        pathname: "/yearly-premium-users",
        query: "cancelled",
      },
    ],
  },
  {
    icon: "MyRewards",
    title: "My Reward",
    pathname: "/my-rewards",
    role: [0],
  },
  {
    icon: "RequestRedeem",
    title: "Request Redeem",
    pathname: "/request-redeem",
    role: [0],
  },
  {
    icon: "Point",
    title: "Point History",
    pathname: "/point-history",
    role: [0],
  },
  {
    icon: "Coupon",
    title: "Coupon History",
    pathname: "/coupon-history",
    role: [0],
  },
  {
    icon: "RedeemHistory",
    title: "Redeemed History",
    pathname: "/redeem-history",
    role: [0],
  },
];

export const staticEnums = {
  User: {
    role: {
      Admin: 0,
      Company: 1,
      Employee: 2,
      Agent: 3,
    },

    oAuthIds: {
      google: "google",
      facebook: "facebook",
      apple: "apple",
    },
    idVerificationStatus: {
      notSubmitted: 0,
      submittedProcessing: 1,
      approved: 2,
      rejected: 3,
    },
  },
  OTP: {
    purpose: {
      resetPwd: 0,
      emailVerification: 1,
      phoneVerification: 2,
    },
  },
};

export const Field = {
  input: "input",
  password: "password",
  select: "select",
  phone: "phone",
  date: "date",
  checkbox: "checkbox",
  radio: "radio",
  span: "span",
  div: "div",
  button: "button",
  profileUploadField: "profileUploadField",
  otpField: "otpField",
};

export const DetailScreenStages = {
  NUMBER_STAGE: "NUMBER_STAGE",
  PHONE_VERIFICATION: "PHONE_VERIFICATION",
  PROFILE_CREATION: "PROFILE_CREATION",
};
