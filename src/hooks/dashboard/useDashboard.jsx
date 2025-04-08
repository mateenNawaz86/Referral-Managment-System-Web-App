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
  const { user, loading: authLoading } = useSelector((state) => state.auth);

  const queryParams = new URLSearchParams(location.search);
  const status = queryParams.get("status");

  const handleRefLinkModal = (deviceType) => {
    console.log(deviceType, "deviceType");

    dispatch(
      updateModalType({
        type: ModalType.REFERRAL_LINK_MODAL,
        data: { links, linkLoading: loading?.links, deviceType },
      })
    );
  };

  const handleQRCodeModal = () => {
    dispatch(updateModalType({ type: ModalType.REFERRAL_QR_CODE_MODAL }));
  };

  const handleRefDiscountCodeModal = () => {
    dispatch(updateModalType({ type: ModalType.REFERRAL_DISCOUNT_CODE_MODAL }));
  };

  useEffect(() => {
    if (authLoading) return;

    const fetchDashboardResults = async () => {
      const uid = user?.user?.id;
      if (!uid) return;

      try {
        const response = await dispatch(
          readDashboardResults({ data: { uid: uid } })
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
  }, [dispatch, user, authLoading]);

  useEffect(() => {
    if (status !== "ref-guide") return;

    const fetchDashboardLinks = async () => {
      try {
        const response = await dispatch(readDashboardLinks({}));

        if (response?.payload?.data) {
          setLinks(response?.payload?.data);
        }
      } catch (err) {
        console.error("Error fetching dashboard links:", err);
      }
    };

    if (status === "ref-guide") {
      fetchDashboardLinks();
    }
  }, [dispatch, status]);

  return {
    handleRefLinkModal,
    handleQRCodeModal,
    handleRefDiscountCodeModal,
    results,
    links,
    loading,
  };
};
