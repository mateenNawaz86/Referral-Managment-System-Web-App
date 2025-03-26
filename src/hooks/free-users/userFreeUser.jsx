import { useState, useEffect } from "react";
import { getPageFromURL } from "../../utils/utility";
import { useDispatch, useSelector } from "react-redux";
import { readFreeUserListing } from "../../api/slices/freeUserSlice/freeUser";

export const useFreeUser = () => {
  const dispatch = useDispatch();
  const { user, loading: authLoading } = useSelector((state) => state.auth);
  const [currentPageRows, setCurrentPageRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(getPageFromURL());
  const { freeUser, loading } = useSelector((state) => state.freeUser);

  const dummyData = [
    { title: "Total Users", points: "45.50k" },
    { title: "This Month", points: "35.50k" },
    { title: "This Week", points: "38.50k" },
    { title: "Revenue", points: "$78.6k" },
  ];

  const headings = ["User details", "Installed", "Status"];

  const totalCount = freeUser?.length;
  const itemsPerPage = 5;
  const totalItems = totalCount;

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromURL());
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    if (authLoading) return;

    const fetchFreeUsers = async () => {
      const uid = user?.user?.id;
      if (!uid) return;

      const formData = new FormData();
      formData.append("uid", uid);

      try {
        await dispatch(
          readFreeUserListing({
            data: formData,
          })
        ).then((response) => {
          if (response?.payload) setCurrentPageRows(response?.payload?.data);
        });
      } catch (err) {
        console.error("Error fetching free users:", err);
      }
    };

    fetchFreeUsers();
  }, [dispatch, user, authLoading]);

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
    freeUser,
  };
};
