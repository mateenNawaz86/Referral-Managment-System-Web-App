import { useState, useEffect, useMemo } from "react";
import { getPageFromURL } from "../../utils/utility";
import { getPageTitles } from "../../utils/function";
import { useLocation } from "react-router-dom";

export const useMonthlyUses = () => {
  const location = useLocation();
  const dummyData = [
    { title: "Total Users", points: "45.50k" },
    { title: "This Month", points: "35.50k" },
    { title: "This Week", points: "38.50k" },
    { title: "Revenue", points: "$78.6k" },
  ];

  const records = [
    {
      username: "James Anderson",
      installedDate: "May 15 2024 11:35 PM",
      subscribeDate: "Jun 10 2024 11:35 PM",
      clearanceDate: "Jul 10 2024 11:35 PM",
    },
    {
      username: "Sophia Martinez",
      installedDate: "Apr 20 2024 09:15 AM",
      subscribeDate: "May 15 2024 02:45 PM",
      clearanceDate: "Jun 20 2024 06:30 PM",
    },
    {
      username: "Michael Johnson",
      installedDate: "Mar 10 2024 07:25 AM",
      subscribeDate: "Apr 05 2024 01:20 PM",
      clearanceDate: "May 05 2024 08:55 PM",
    },
    {
      username: "Emma Wilson",
      installedDate: "Feb 05 2024 05:50 PM",
      subscribeDate: "Mar 01 2024 04:35 PM",
      clearanceDate: "Apr 01 2024 12:10 AM",
    },
    {
      username: "Daniel Brown",
      installedDate: "Jan 22 2024 10:10 AM",
      subscribeDate: "Feb 18 2024 11:00 AM",
      clearanceDate: "Mar 18 2024 03:45 PM",
    },
    {
      username: "Olivia Davis",
      installedDate: "Dec 12 2023 06:20 PM",
      subscribeDate: "Jan 10 2024 08:30 AM",
      clearanceDate: "Feb 10 2024 10:45 PM",
    },
    {
      username: "William Taylor",
      installedDate: "Nov 08 2023 09:40 AM",
      subscribeDate: "Dec 02 2023 05:25 PM",
      clearanceDate: "Jan 02 2024 07:10 PM",
    },
    {
      username: "Isabella Moore",
      installedDate: "Oct 03 2023 11:15 PM",
      subscribeDate: "Nov 01 2023 01:55 PM",
      clearanceDate: "Dec 01 2023 09:20 AM",
    },
    {
      username: "Ethan Thomas",
      installedDate: "Sep 25 2023 08:05 AM",
      subscribeDate: "Oct 20 2023 04:10 PM",
      clearanceDate: "Nov 20 2023 06:55 PM",
    },
    {
      username: "Ava Harris",
      installedDate: "Aug 14 2023 03:50 PM",
      subscribeDate: "Sep 10 2023 09:40 AM",
      clearanceDate: "Oct 10 2023 02:30 PM",
    },
    {
      username: "Liam Walker",
      installedDate: "Jul 10 2023 07:30 AM",
      subscribeDate: "Aug 01 2023 06:15 PM",
      clearanceDate: "Sep 01 2023 10:05 PM",
    },
    {
      username: "Mia Robinson",
      installedDate: "Jun 05 2023 05:20 PM",
      subscribeDate: "Jul 01 2023 01:45 AM",
      clearanceDate: "Aug 01 2023 04:20 PM",
    },
    {
      username: "Benjamin Hall",
      installedDate: "May 01 2023 02:40 PM",
      subscribeDate: "May 28 2023 11:30 AM",
      clearanceDate: "Jun 28 2023 07:55 PM",
    },
    {
      username: "Charlotte Young",
      installedDate: "Apr 18 2023 09:10 AM",
      subscribeDate: "May 15 2023 06:20 PM",
      clearanceDate: "Jun 15 2023 12:05 PM",
    },
    {
      username: "Alexander King",
      installedDate: "Mar 12 2023 11:45 PM",
      subscribeDate: "Apr 10 2023 03:35 PM",
      clearanceDate: "May 10 2023 09:25 AM",
    },
  ];

  const headings = ["User details", "Installed", "Subscribed", "Clearance"];

  const { mobilePageTitle, pageTitle } = getPageTitles(location);

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
    records,
    pageTitle,
    mobilePageTitle,
  };
};
