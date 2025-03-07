import { useState, useEffect, useMemo } from "react";
import { getPageFromURL } from "../../utils/utility";

export const useYearlyUsers = () => {
  const dummyData = [
    { title: "Total Users", points: "45.50k" },
    { title: "This Month", points: "35.50k" },
    { title: "This Week", points: "38.50k" },
    { title: "Revenue", points: "$78.6k" },
  ];

  const records = [
    {
      username: "Noah Carter",
      installedDate: "Jun 20 2024 02:15 PM",
      subscribeDate: "Jul 15 2024 05:25 PM",
      clearanceDate: "Aug 15 2024 08:40 PM",
    },
    {
      username: "Liam Mitchell",
      installedDate: "May 10 2024 09:30 AM",
      subscribeDate: "Jun 05 2024 12:45 PM",
      clearanceDate: "Jul 05 2024 03:20 AM",
    },
    {
      username: "Harper Lewis",
      installedDate: "Apr 08 2024 07:50 PM",
      subscribeDate: "May 02 2024 02:35 PM",
      clearanceDate: "Jun 02 2024 06:10 AM",
    },
    {
      username: "Evelyn Scott",
      installedDate: "Mar 12 2024 11:20 AM",
      subscribeDate: "Apr 05 2024 09:15 PM",
      clearanceDate: "May 05 2024 02:50 PM",
    },
    {
      username: "Henry Adams",
      installedDate: "Feb 22 2024 04:40 PM",
      subscribeDate: "Mar 18 2024 08:20 AM",
      clearanceDate: "Apr 18 2024 01:30 AM",
    },
    {
      username: "Grace Nelson",
      installedDate: "Jan 15 2024 10:10 PM",
      subscribeDate: "Feb 10 2024 06:05 AM",
      clearanceDate: "Mar 10 2024 03:55 PM",
    },
    {
      username: "Sebastian White",
      installedDate: "Dec 01 2023 06:50 AM",
      subscribeDate: "Jan 01 2024 12:30 PM",
      clearanceDate: "Feb 01 2024 07:15 AM",
    },
    {
      username: "Avery Baker",
      installedDate: "Nov 18 2023 09:20 PM",
      subscribeDate: "Dec 15 2023 04:45 PM",
      clearanceDate: "Jan 15 2024 02:30 PM",
    },
    {
      username: "Lucas Gonzalez",
      installedDate: "Oct 05 2023 11:30 AM",
      subscribeDate: "Nov 01 2023 07:10 PM",
      clearanceDate: "Dec 01 2023 06:25 AM",
    },
    {
      username: "Mila Reed",
      installedDate: "Sep 25 2023 02:15 PM",
      subscribeDate: "Oct 20 2023 09:50 PM",
      clearanceDate: "Nov 20 2023 03:35 PM",
    },
    {
      username: "Elijah Turner",
      installedDate: "Aug 14 2023 07:40 AM",
      subscribeDate: "Sep 10 2023 05:25 PM",
      clearanceDate: "Oct 10 2023 11:15 AM",
    },
    {
      username: "Zoe Ramirez",
      installedDate: "Jul 10 2023 05:55 PM",
      subscribeDate: "Aug 05 2023 03:30 PM",
      clearanceDate: "Sep 05 2023 10:45 PM",
    },
    {
      username: "Nathan Foster",
      installedDate: "Jun 02 2023 10:35 AM",
      subscribeDate: "Jul 01 2023 08:25 AM",
      clearanceDate: "Aug 01 2023 06:50 PM",
    },
    {
      username: "Penelope Murphy",
      installedDate: "May 22 2023 04:10 PM",
      subscribeDate: "Jun 15 2023 11:45 PM",
      clearanceDate: "Jul 15 2023 09:20 AM",
    },
    {
      username: "Jack Bennett",
      installedDate: "Apr 10 2023 09:50 AM",
      subscribeDate: "May 05 2023 07:30 PM",
      clearanceDate: "Jun 05 2023 05:15 PM",
    },
  ];

  const headings = ["User details", "Installed", "Subscribed", "Clearance"];

  const totalCount = records.length;
  const itemsPerPage = 5;
  const totalItems = totalCount;
  const isLoading = false;

  const [currentPage, setCurrentPage] = useState(getPageFromURL());

  const currentPageRows = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return records?.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage, records]);

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
    dummyData,
    currentPageRows,
    totalItems,
    totalCount,
    isLoading,
    itemsPerPage,
    handlePageChange,
    currentPage,
    headings,
  };
};
