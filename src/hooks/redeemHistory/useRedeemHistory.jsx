import { ModalType } from "../../types/ui";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getPageFromURL } from "../../utils/utility";
import { updateModalType } from "../../api/slices/globalSlice/global";
import { readRedeemHistory } from "../../api/slices/redeemHistory/redeem-history";

export const useRedeemHistory = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [currentPageRows, setCurrentPageRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(getPageFromURL());
  const { redeemHistory, loading } = useSelector(
    (state) => state.redeemHistory
  );

  useEffect(() => {
    const redeemHistoryRecords = async () => {
      const uid = user?.user?.id;
      const formData = new FormData();
      formData.append("uid", uid);

      try {
        await dispatch(
          readRedeemHistory({
            data: formData,
          })
        ).then((response) => {
          if (response?.payload) setCurrentPageRows(response?.payload?.data);
        });
      } catch (err) {
        console.error("Error fetching redeem history records:", err);
      }
    };

    redeemHistoryRecords();
  }, [dispatch]);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromURL());
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const headings = ["Redeemed Date", "Redeemed Points", "Status"];

  const totalCount = redeemHistory?.length;
  const itemsPerPage = 5;
  const totalItems = totalCount;

  const handlePageChange = (page) => {
    setCurrentPage(page);

    const params = new URLSearchParams(window.location.search);
    params.set("page", page.toString());
    window.history.pushState({}, "", `?${params.toString()}`);
  };

  const handlePaymentDetails = () => {
    dispatch(updateModalType({ type: ModalType.PAYMENT_DETIALS }));
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
    redeemHistory,
    handlePaymentDetails,
  };
};
