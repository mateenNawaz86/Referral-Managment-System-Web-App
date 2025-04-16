import { useState, useEffect } from "react";
import { getPageFromURL } from "../../utils/utility";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { readCouponHistory } from "../../api/slices/couponHistory/couponHistory";
import { FiltersDefaultValues } from "../../utils/static";

export const useCouponHistory = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { user, loading: authLoading } = useSelector((state) => state.auth);
  const [currentPageRows, setCurrentPageRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(getPageFromURL());
  const [searchParams, setSearchParams] = useSearchParams(location.search);
  const [filter, setFilter] = useState({
    sort: FiltersDefaultValues.None,
  });
  const { couponHistory, loading } = useSelector(
    (state) => state.couponHistory
  );

  const sort = searchParams.get("sort");
  const page = searchParams.get("page");

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

    const couponHistoryRecords = async () => {
      const uid = user?.user?.id;
      if (!uid) return;

      if (sort !== undefined) {
        const filteredData = {
          uid: uid,
          page: (Number(parsedPage) || resetPage) ?? currentPage,
          size: 10,
        };

        if (sort) {
          filteredData.sort = sort;
        }

        try {
          const response = await dispatch(
            readCouponHistory({ params: filteredData })
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

    couponHistoryRecords();
  }, [location.search, location.key, user, authLoading, sort]);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromURL());
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const headings = [
    { label: "Type", value: "type" },
    { label: "Coupon", value: "coupon" },
    { label: "Redeemed Date", value: "createdAt" },
    { label: "Status", value: "status" },
  ];

  const itemsPerPage = 10;
  const totalCount = currentPageRows?.pagination?.total;
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
    currentPageRows,
    totalItems,
    totalCount,
    loading,
    itemsPerPage,
    handlePageChange,
    currentPage,
    headings,
    couponHistory,
    sort,
    filter,
    hanldeSortChange,
  };
};
