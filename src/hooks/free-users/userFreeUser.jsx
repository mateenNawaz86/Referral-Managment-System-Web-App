import { useState, useEffect, useMemo } from "react";
import { getPageFromURL } from "../../utils/utility";

export const useFreeUser = () => {
  const dummyData = [
    { title: "Total Users", points: "45.50k" },
    { title: "This Month", points: "35.50k" },
    { title: "This Week", points: "38.50k" },
    { title: "Revenue", points: "$78.6k" },
  ];

  const records = [
    {
      username: "James Anderson",
      date: "May 15 2024 11:35 PM",
      status: "Free",
    },
    {
      username: "Sophia Martinez",
      date: "June 10 2024 09:20 AM",
      status: "Subscribed",
    },
    {
      username: "Michael Johnson",
      date: "April 5 2024 03:45 PM",
      status: "Trial",
    },
    {
      username: "Emma Wilson",
      date: "March 28 2024 07:10 AM",
      status: "Cancelled",
    },
    {
      username: "Daniel Brown",
      date: "July 2 2024 05:50 PM",
      status: "Subscribed",
    },
    {
      username: "Olivia Davis",
      date: "August 18 2024 02:30 PM",
      status: "Free",
    },
    {
      username: "William Taylor",
      date: "September 25 2024 10:15 AM",
      status: "Trial",
    },
    {
      username: "Isabella Moore",
      date: "October 12 2024 08:40 PM",
      status: "Cancelled",
    },
    {
      username: "Ethan Thomas",
      date: "November 6 2024 06:25 AM",
      status: "Subscribed",
    },
    {
      username: "Ava Harris",
      date: "December 30 2024 04:50 PM",
      status: "Trial",
    },
  ];

  const headings = ["User details", "Installed", "Status"];

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
  };
};
