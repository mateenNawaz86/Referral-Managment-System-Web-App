import { useState, useEffect } from "react";
import { getPageFromURL } from "../../utils/utility";
import { readPointsHistory } from "../../api/slices/pointHistory/point-history";
import { useDispatch, useSelector } from "react-redux";

export const usePointHistory = () => {
  const dispatch = useDispatch();
  const { user, loading: authLoading } = useSelector((state) => state.auth);
  const [currentPageRows, setCurrentPageRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(getPageFromURL());
  const { pointsHistory, loading } = useSelector(
    (state) => state.pointsHistory
  );

  useEffect(() => {
    if (authLoading) return;

    const pointsHistoryRecords = async () => {
      const uid = user?.user?.id;

      if (!uid) return;

      const formData = new FormData();
      formData.append("uid", uid);

      try {
        await dispatch(
          readPointsHistory({
            data: formData,
          })
        ).then((response) => {
          if (response?.payload) setCurrentPageRows(response?.payload?.data);
        });
      } catch (err) {
        console.error("Error fetching points history record:", err);
      }
    };

    pointsHistoryRecords();
  }, [dispatch, user, authLoading]);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromURL());
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const headings = ["User details", "Installed", "Subscribed", "Points"];

  const itemsPerPage = 5;
  const totalCount = pointsHistory?.length;
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
    pointsHistory,
  };
};
