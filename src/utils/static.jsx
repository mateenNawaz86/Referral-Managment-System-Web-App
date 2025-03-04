export const sideBar = [
  {
    icon: "Dashboard",
    title: "Dashboard",
    pathname: "/dashboard",
  },
  {
    icon: "User",
    title: "Free Users",
    pathname: "/free-users",
  },
  {
    icon: "User",
    title: "Monthly Premium Users",
    pathname: "/monthly-premium-users",
    inner: [
      {
        title: "Monthly Trial Users",
        pathname: "/monthly-premium-users",
        query: "0",
      },
      {
        title: "Monthly Subscribed Users",
        pathname: "/monthly-premium-users",
        query: "0",
      },
      {
        title: "Monthly Cancelled Users",
        pathname: "/monthly-premium-users",
        query: "0",
      },
    ],
  },
  {
    icon: "User",
    title: "Yearly Premium Users",
    pathname: "/yearly-premium-users",
    inner: [
      {
        title: "Yearly Trial Users",
        pathname: "/yearly-premium-users",
        query: "0",
      },
      {
        title: "Yearly Subscribed Users",
        pathname: "/yearly-premium-users",
        query: "0",
      },
      {
        title: "Yearly Cancelled Users",
        pathname: "/yearly-premium-users",
        query: "0",
      },
    ],
  },
  {
    icon: "Reward",
    title: "My Reward",
    pathname: "/my-reward",
  },
  {
    icon: "request_redeem",
    title: "Request Redeem",
    pathname: "/request-redeem",
  },
  {
    icon: "point_history",
    title: "Point History",
    pathname: "/point-history",
  },
  {
    icon: "coupon_history",
    title: "Coupon History",
    pathname: "/coupon-history",
  },
  {
    icon: "redeem_history",
    title: "Redeemed History",
    pathname: "/redeem-history",
  },
];
