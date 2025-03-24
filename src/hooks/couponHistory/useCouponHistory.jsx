import { useState, useEffect, useMemo } from "react";
import { getPageFromURL } from "../../utils/utility";
import { readCouponHistory } from "../../api/slices/couponHistory/couponHistory";
import { useDispatch, useSelector } from "react-redux";

export const useCouponHistory = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [currentPageRows, setCurrentPageRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(getPageFromURL());
  const { couponHistory, loading } = useSelector(
    (state) => state.couponHistory
  );

  // const records = [
  //   {
  //     type: "Monthly",
  //     coupon: "A02GH7652P",
  //     redeemDate: "May 10 2024 11:30 AM",
  //     status: "Redeemed",
  //   },
  //   {
  //     type: "Yearly",
  //     coupon: "B73KF9821X",
  //     redeemDate: "Jun 15 2024 02:45 PM",
  //     status: "Expired",
  //   },
  //   {
  //     type: "Weekly",
  //     coupon: "C56DT6729M",
  //     redeemDate: "Apr 08 2024 09:20 AM",
  //     status: "Pending",
  //   },
  //   {
  //     type: "Monthly",
  //     coupon: "D92PL4306Z",
  //     redeemDate: "Jul 22 2024 04:10 PM",
  //     status: "Redeemed",
  //   },
  //   {
  //     type: "Yearly",
  //     coupon: "E17XN5098Q",
  //     redeemDate: "Aug 05 2024 01:55 PM",
  //     status: "Expired",
  //   },
  //   {
  //     type: "Weekly",
  //     coupon: "F64YH7813T",
  //     redeemDate: "Sep 30 2024 07:45 AM",
  //     status: "Pending",
  //   },
  //   {
  //     type: "Monthly",
  //     coupon: "G35BV2047U",
  //     redeemDate: "Oct 12 2024 03:30 PM",
  //     status: "Redeemed",
  //   },
  //   {
  //     type: "Yearly",
  //     coupon: "H48MK8756J",
  //     redeemDate: "Nov 18 2024 12:20 PM",
  //     status: "Expired",
  //   },
  //   {
  //     type: "Weekly",
  //     coupon: "I59QP3621N",
  //     redeemDate: "Dec 25 2024 06:10 AM",
  //     status: "Pending",
  //   },
  //   {
  //     type: "Monthly",
  //     coupon: "J76DR4895O",
  //     redeemDate: "Jan 05 2025 10:15 AM",
  //     status: "Redeemed",
  //   },
  //   {
  //     type: "Yearly",
  //     coupon: "K89XT7213S",
  //     redeemDate: "Feb 14 2025 05:50 PM",
  //     status: "Expired",
  //   },
  //   {
  //     type: "Weekly",
  //     coupon: "L23YN9842V",
  //     redeemDate: "Mar 20 2025 08:30 AM",
  //     status: "Pending",
  //   },
  //   {
  //     type: "Monthly",
  //     coupon: "M34ZR5127X",
  //     redeemDate: "Apr 08 2025 02:05 PM",
  //     status: "Redeemed",
  //   },
  //   {
  //     type: "Yearly",
  //     coupon: "N45GS6983A",
  //     redeemDate: "May 30 2025 04:55 PM",
  //     status: "Expired",
  //   },
  //   {
  //     type: "Weekly",
  //     coupon: "O57MT3456B",
  //     redeemDate: "Jun 12 2025 11:40 AM",
  //     status: "Pending",
  //   },
  // ];

  useEffect(() => {
    const couponHistoryRecords = async () => {
      const uid = user?.user?.id;
      const formData = new FormData();
      formData.append("uid", 2);

      try {
        await dispatch(
          readCouponHistory({
            data: formData,
          })
        ).then((response) => {
          if (response?.payload) setCurrentPageRows(response?.payload?.data);
        });
      } catch (err) {
        console.error("Error fetching free users:", err);
      }
    };

    couponHistoryRecords();
  }, [dispatch]);

  const headings = ["Type", "Coupon", "Redeemed Date", "Status"];

  const totalCount = couponHistory?.length;
  const itemsPerPage = 5;
  const totalItems = totalCount;

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromURL());
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);

    const params = new URLSearchParams(window.location.search);
    params.set("page", page.toString());
    window.history.pushState({}, "", `?${params.toString()}`);
  };

  return {
    currentPageRows,
    totalItems,
    totalCount,
    loading,
    itemsPerPage,
    handlePageChange,
    currentPage,
    headings,
    couponHistory,
  };
};
