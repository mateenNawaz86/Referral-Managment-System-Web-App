import { useState, useEffect, useMemo } from "react";
import { getPageFromURL } from "../../utils/utility";

export const useRedeemHistory = () => {
  const records = [
    { redeemDate: "Mar 05 2025 09:15 AM", redeemPoint: 150, status: "Pending" },
    {
      redeemDate: "Feb 20 2025 03:30 PM",
      redeemPoint: 200,
      status: "Successful",
    },
    {
      redeemDate: "Jan 10 2025 06:45 PM",
      redeemPoint: 300,
      status: "Cancelled",
    },
    {
      redeemDate: "Dec 25 2024 11:00 AM",
      redeemPoint: 400,
      status: "In Progress",
    },
    {
      redeemDate: "Nov 30 2024 02:20 PM",
      redeemPoint: 250,
      status: "Successful",
    },
    { redeemDate: "Oct 15 2024 07:10 AM", redeemPoint: 180, status: "Pending" },
    {
      redeemDate: "Sep 05 2024 05:55 PM",
      redeemPoint: 350,
      status: "Cancelled",
    },
    {
      redeemDate: "Aug 22 2024 10:25 AM",
      redeemPoint: 100,
      status: "In Progress",
    },
    { redeemDate: "Jul 14 2024 08:40 PM", redeemPoint: 275, status: "Pending" },
    {
      redeemDate: "Jun 10 2024 11:35 PM",
      redeemPoint: 100,
      status: "Successful",
    },
    {
      redeemDate: "May 02 2024 01:05 PM",
      redeemPoint: 500,
      status: "Cancelled",
    },
    {
      redeemDate: "Apr 18 2024 04:45 AM",
      redeemPoint: 220,
      status: "In Progress",
    },
    { redeemDate: "Mar 29 2024 09:50 PM", redeemPoint: 390, status: "Pending" },
    {
      redeemDate: "Feb 12 2024 07:20 AM",
      redeemPoint: 175,
      status: "Successful",
    },
    {
      redeemDate: "Jan 05 2024 06:15 PM",
      redeemPoint: 280,
      status: "Cancelled",
    },
  ];

  const headings = ["Redeemed Date", "Redeemed Points", "Status"];

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
