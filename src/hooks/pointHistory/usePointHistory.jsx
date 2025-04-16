import { useState, useEffect } from "react";
import { getPageFromURL } from "../../utils/utility";
import { readPointsHistory } from "../../api/slices/pointHistory/point-history";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { FiltersDefaultValues } from "../../utils/static";

export const usePointHistory = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { user, loading: authLoading } = useSelector((state) => state.auth);
  const [currentPageRows, setCurrentPageRows] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams(location.search);
  const [currentPage, setCurrentPage] = useState(getPageFromURL());
  const { pointsHistory, loading } = useSelector(
    (state) => state.pointsHistory
  );

  const [filter, setFilter] = useState({
    sort: FiltersDefaultValues.None,
  });

  const page = searchParams.get("page");
  const sort = searchParams.get("sort");

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

    const pointsHistoryRecords = async () => {
      const uid = user?.user?.id;
      if (!uid) return;

      if (sort !== undefined) {
        const filteredData = {
          uid: 1,
          page: (Number(parsedPage) || resetPage) ?? currentPage,
          size: 10,
        };

        if (sort) {
          filteredData.sort = sort;
        }

        try {
          const response = await dispatch(
            readPointsHistory({ params: filteredData })
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

    pointsHistoryRecords();
  }, [location.search, location.key, user, authLoading, sort]);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromURL());
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const itemsPerPage = 10;
  const totalCount = currentPageRows?.pagination?.totalRecords;
  const totalItems = totalCount;

  const headings = [
    { label: "User details", value: "name" },
    { label: "Installed", value: "installedDate" },
    { label: "Subscribed", value: "subscribedDate" },
    { label: "Points", value: "points" },
  ];
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
    pointsHistory,
    hanldeSortChange,
    sort,
    filter,
  };
};
