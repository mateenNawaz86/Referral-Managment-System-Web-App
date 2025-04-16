import { useState, useEffect } from "react";
import { getPageFromURL } from "../../utils/utility";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getLastHeading, getPageTitles } from "../../utils/function";
import { readPremiumUsers } from "../../api/slices/premiumUser/premium-user";
import { FiltersDefaultValues } from "../../utils/static";

export const useMonthlyUses = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams(location.search);
  const page = searchParams.get("page");
  const [currentPage, setCurrentPage] = useState(page || 1);
  const [currentPageRows, setCurrentPageRows] = useState([]);
  const { user, loading: authLoading } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.premiumUsers);
  const [filter, setFilter] = useState({
    sort: FiltersDefaultValues.None,
  });

  const sort = searchParams.get("sort");
  const status = getLastHeading(location.search);

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

    const redeemHistoryRecords = async () => {
      const uid = user?.user?.id;
      if (!uid) return;

      const queryParams = queryStatus || sort;

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
          uid: uid,
          type: "monthly",
          page: (Number(parsedPage) || resetPage) ?? currentPage,
          size: 10,
        };

        if (filteredStatus && filteredStatus.length > 0) {
          filteredData.status = filteredStatus;
        }

        if (sort) {
          filteredData.sort = sort;
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
  }, [location.search, location.key, user, authLoading, sort]);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromURL());
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const lastHeadingValue =
    status === "Cleared"
      ? "clearDate"
      : status === "Cancelled"
      ? "cancelledDate"
      : "clearanceDate";

  const headings = [
    {
      label: "User details",
      value: "name",
    },
    { label: "Installed", value: "installDate" },
    { label: "Subscribed", value: "subscribedDate" },
    { label: status, value: lastHeadingValue },
  ];

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
    setSearchParams(params);
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
    filter,
    sort,
    hanldeSortChange,
  };
};
