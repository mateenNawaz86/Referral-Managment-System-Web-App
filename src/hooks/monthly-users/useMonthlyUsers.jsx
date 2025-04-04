import { useState, useEffect } from "react";
import { getPageFromURL } from "../../utils/utility";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getLastHeading, getPageTitles } from "../../utils/function";
import { readPremiumUsers } from "../../api/slices/premiumUser/premium-user";

export const useMonthlyUses = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");
  const [currentPage, setCurrentPage] = useState(page || 1);
  const [currentPageRows, setCurrentPageRows] = useState([]);
  const { user, loading: authLoading } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.premiumUsers);

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

    const queryStatus = searchParams.get("status");
    const querySort = searchParams.get("sort");

    const redeemHistoryRecords = async () => {
      const uid = user?.user?.id;
      if (!uid) return;

      const queryParams = queryStatus || querySort;

      if (queryParams !== undefined) {
        const filteredStatus =
          queryStatus === "None"
            ? ""
            : queryStatus === "subscribed"
            ? "active"
            : queryStatus === "cancelled"
            ? "canceled"
            : queryParams;
        const filteredData = {
          uid: 1,
          type: "monthly",
          page: (Number(parsedPage) || resetPage) ?? currentPage,
          size: 10,
        };

        if (filteredStatus && filteredStatus.length > 0) {
          filteredData.status = filteredStatus;
        }

        if (querySort) {
          filteredData.sort = querySort;
        }

        try {
          const response = await dispatch(
            readPremiumUsers({ data: filteredData })
          );
          if (response?.payload) {
            const data = response.payload;
            setCurrentPageRows(data);
          }
        } catch (err) {
          console.error("Error fetching monthly premium users:", err);
        }
      }
    };

    redeemHistoryRecords();
  }, [searchParams, user, authLoading]);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromURL());
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const lastHeading = getLastHeading(location.search);
  const headings = ["User details", "Installed", "Subscribed", lastHeading];
  const { mobilePageTitle, pageTitle } = getPageTitles(location);

  const dummyData = [
    { title: "Total Users", points: currentPageRows?.metrics?.total },
    { title: "This Month", points: currentPageRows?.metrics?.thisMonth },
    { title: "This Week", points: currentPageRows?.metrics?.thisWeek },
    { title: "Revenue", points: currentPageRows?.metrics?.totalrevenue },
  ];

  const totalCount = currentPageRows?.pagination?.total;
  const itemsPerPage = 10;
  const totalItems = totalCount;

  const handlePageChange = (page) => {
    setCurrentPage(page);

    const params = new URLSearchParams(window.location.search);
    params.set("page", page.toString());
    window.history.pushState({}, "", `?${params.toString()}`);
  };

  return {
    dummyData,
    currentPageRows,
    totalItems,
    totalCount,
    loading,
    itemsPerPage,
    handlePageChange,
    currentPage,
    headings,
    pageTitle,
    mobilePageTitle,
  };
};
