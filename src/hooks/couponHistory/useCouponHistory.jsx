import { useState, useEffect } from "react";
import { getPageFromURL } from "../../utils/utility";
import { readCouponHistory } from "../../api/slices/couponHistory/couponHistory";
import { useDispatch, useSelector } from "react-redux";

export const useCouponHistory = () => {
  const dispatch = useDispatch();
  const { user, loading: authLoading } = useSelector((state) => state.auth);
  const [currentPageRows, setCurrentPageRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(getPageFromURL());
  const { couponHistory, loading } = useSelector(
    (state) => state.couponHistory
  );

  useEffect(() => {
    if (authLoading) return;

    const couponHistoryRecords = async () => {
      const uid = user?.user?.id;
      if (!uid) return;

      const formData = new FormData();
      formData.append("uid", uid);

      try {
        await dispatch(
          readCouponHistory({
            data: formData,
          })
        ).then((response) => {
          if (response?.payload) setCurrentPageRows(response?.payload?.data);
        });
      } catch (err) {
        console.error("Error fetching coupon history records:", err);
      }
    };

    couponHistoryRecords();
  }, [dispatch, user, authLoading]);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromURL());
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const headings = ["Type", "Coupon", "Redeemed Date", "Status"];

  const itemsPerPage = 5;
  const totalCount = couponHistory?.length;
  const totalItems = totalCount;

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
