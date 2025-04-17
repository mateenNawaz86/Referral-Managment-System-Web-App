import { ModalType } from "../../types/ui";
import { useState, useEffect } from "react";
import { getPageFromURL } from "../../utils/utility";
import { useDispatch, useSelector } from "react-redux";
import { updateModalType } from "../../api/slices/globalSlice/global";
import { readRedeemHistory } from "../../api/slices/redeemHistory/redeem-history";
import { useLocation, useSearchParams } from "react-router-dom";
import { FiltersDefaultValues } from "../../utils/static";

export const useRedeemHistory = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [currentPageRows, setCurrentPageRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(getPageFromURL());
  const { user, loading: authLoading } = useSelector((state) => state.auth);
  const [searchParams, setSearchParams] = useSearchParams(location.search);
  const [filter, setFilter] = useState({
    sort: FiltersDefaultValues.None,
  });
  const { redeemHistory, loading } = useSelector(
    (state) => state.redeemHistory
  );

  const sort = searchParams.get("sort");
  const page = searchParams.get("page");

  const handleShare = () => {
    dispatch(updateModalType({ type: ModalType.SHARE_MODAL }));
  };

  useEffect(() => {
    if (authLoading) return;
    const parsedPage = parseInt(page, 10);

    let resetPage = null;
    if (!isNaN(parsedPage)) {
      setCurrentPage(parsedPage);
    } else {
      resetPage = 1;
      setCurrentPage(1);
    }

    const redeemHistoryRecords = async () => {
      const uid = user?.user?.id;
      if (!uid) return;

      if (sort !== undefined) {
        const filteredData = {
          uid: 2,
          page: (Number(parsedPage) || resetPage) ?? currentPage,
          size: 10,
        };

        if (sort) {
          filteredData.sort = sort;
        }

        try {
          const response = await dispatch(
            readRedeemHistory({ params: filteredData })
          );
          if (response?.payload) {
            const data = response?.payload;
            setCurrentPageRows(data);
          }
        } catch (err) {
          console.error("Error fetching monthly premium users:", err);
        }
      }
    };

    redeemHistoryRecords();
  }, [location.search, location.key, user, authLoading, sort]);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromURL());
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const headings = [
    { label: "Redeemed Date", value: "approvedDate" },
    { label: "Redeemed Points", value: "points" },
    { label: "Status", value: "status" },
  ];

  const totalCount = currentPageRows?.pagination?.total;
  const itemsPerPage = 10;
  const totalItems = totalCount;

  const handlePageChange = (page) => {
    setCurrentPage(page);

    const params = new URLSearchParams(window.location.search);
    params.set("page", page.toString());
    setSearchParams(params);
  };

  const handlePaymentDetails = (
    reqSentDate,
    points,
    reqApprovedDate,
    paymentMethod,
    paymentDate,
    status
  ) => {
    dispatch(
      updateModalType({
        type: ModalType.PAYMENT_DETAILS,
        data: {
          reqSentDate,
          points,
          reqApprovedDate,
          paymentMethod,
          paymentDate,
          status,
          onShare: handleShare,
        },
      })
    );
  };

  const hanldeSortChange = (value) => {
    const params = new URLSearchParams(window.location.search);

    if (value === "None") {
      params.delete("sort");
    } else {
      params.set("sort", value);
    }

    params.set("page", "1");
    setSearchParams(params);
    setCurrentPage(1);

    setFilter((prev) => {
      const updatedFilter = { ...prev, sort: value };
      return updatedFilter;
    });
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
    sort,
    filter,
    handlePaymentDetails,
    hanldeSortChange,
  };
};
