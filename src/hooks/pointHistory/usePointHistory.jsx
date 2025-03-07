import { useState, useEffect, useMemo } from "react";
import { getPageFromURL } from "../../utils/utility";

export const usePointHistory = () => {
  const dummyData = [
    { title: "Total Users", points: "45.50k" },
    { title: "This Month", points: "35.50k" },
    { title: "This Week", points: "38.50k" },
    { title: "Revenue", points: "$78.6k" },
  ];

  const records = [
    {
      username: "Liam Johnson",
      installedDate: "May 10 2024 11:30 AM",
      subscribeDate: "Jun 05 2024 03:45 PM",
      points: "15",
    },
    {
      username: "Olivia Brown",
      installedDate: "Apr 22 2024 08:15 AM",
      subscribeDate: "May 18 2024 12:50 PM",
      points: "30",
    },
    {
      username: "Emma Wilson",
      installedDate: "Mar 05 2024 04:45 PM",
      subscribeDate: "Apr 01 2024 06:20 PM",
      points: "25",
    },
    {
      username: "Noah Carter",
      installedDate: "Jun 20 2024 02:15 PM",
      subscribeDate: "Jul 15 2024 05:25 PM",
      points: "20",
    },
    {
      username: "Ava Martinez",
      installedDate: "Jan 29 2024 09:10 AM",
      subscribeDate: "Feb 22 2024 01:40 PM",
      points: "40",
    },
    {
      username: "William Anderson",
      installedDate: "Dec 15 2023 07:30 PM",
      subscribeDate: "Jan 10 2024 02:10 PM",
      points: "18",
    },
    {
      username: "Sophia Thomas",
      installedDate: "Feb 10 2024 06:00 PM",
      subscribeDate: "Mar 05 2024 09:25 AM",
      points: "35",
    },
    {
      username: "James White",
      installedDate: "May 01 2024 10:20 AM",
      subscribeDate: "May 25 2024 04:30 PM",
      points: "22",
    },
    {
      username: "Benjamin Hall",
      installedDate: "Jun 12 2024 03:15 PM",
      subscribeDate: "Jul 08 2024 07:45 AM",
      points: "27",
    },
    {
      username: "Mia Clark",
      installedDate: "Jul 04 2024 01:50 PM",
      subscribeDate: "Jul 30 2024 06:10 PM",
      points: "19",
    },
    {
      username: "Elijah Lewis",
      installedDate: "Aug 14 2024 05:40 AM",
      subscribeDate: "Sep 09 2024 11:55 AM",
      points: "23",
    },
    {
      username: "Charlotte Walker",
      installedDate: "Sep 25 2024 12:30 PM",
      subscribeDate: "Oct 20 2024 08:05 AM",
      points: "29",
    },
    {
      username: "Daniel Young",
      installedDate: "Oct 31 2024 06:20 PM",
      subscribeDate: "Nov 25 2024 10:15 AM",
      points: "31",
    },
    {
      username: "Amelia King",
      installedDate: "Nov 17 2024 02:10 PM",
      subscribeDate: "Dec 12 2024 05:55 PM",
      points: "26",
    },
    {
      username: "Lucas Scott",
      installedDate: "Dec 05 2024 09:45 AM",
      subscribeDate: "Dec 30 2024 04:20 PM",
      points: "28",
    },
  ];

  const headings = ["User details", "Installed", "Subscribed", "Points"];

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
