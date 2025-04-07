import { useDispatch, useSelector } from "react-redux";
import { ModalType } from "../../types/ui";
import { updateModalType } from "../../api/slices/globalSlice/global";
import { useEffect, useState } from "react";
import {
  readDashboardLinks,
  readDashboardResults,
} from "../../api/slices/dashboard/dashboardSlice";
import { useLocation } from "react-router-dom";

export const useDashboard = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [links, setLinks] = useState(null);
  const [results, setResults] = useState(null);
  const { loading } = useSelector((state) => state.dashboard);

  const queryParams = new URLSearchParams(location.search);

  const status = queryParams.get("status");

  const handleRefLinkModal = () => {
    dispatch(updateModalType({ type: ModalType.REFERRAL_LINK_MODAL }));
  };

  const handleQRCodeModal = () => {
    dispatch(updateModalType({ type: ModalType.REFERRAL_QR_CODE_MODAL }));
  };

  const handleRefDiscountCodeModal = () => {
    dispatch(updateModalType({ type: ModalType.REFERRAL_DISCOUNT_CODE_MODAL }));
  };

  useEffect(() => {
    const fetchDashboardResults = async () => {
      try {
        const response = await dispatch(
          readDashboardResults({ data: { uid: 2 } })
        );
        if (response?.payload) {
          setResults(response?.payload?.counts);
        }
      } catch (err) {
        console.error("Error fetching dashboard results:", err);
      }
    };

    if (status === "results") {
      fetchDashboardResults();
    }
  }, [dispatch]);

  useEffect(() => {
    const fetchDashboardLinks = async () => {
      try {
        const response = await dispatch(readDashboardLinks({ params: {} }));

        if (response?.payload) {
          setLinks(response?.payload?.data);
        }
      } catch (err) {
        console.error("Error fetching dashboard links:", err);
      }
    };

    if (status === "ref-guide") {
      fetchDashboardLinks();
    }
  }, [dispatch]);

  return {
    handleRefLinkModal,
    handleQRCodeModal,
    handleRefDiscountCodeModal,
    results,
    links,
    loading,
  };
};
