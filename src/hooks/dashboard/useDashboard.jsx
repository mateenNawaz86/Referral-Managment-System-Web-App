import { useDispatch, useSelector } from "react-redux";
import { ModalType } from "../../types/ui";
import { updateModalType } from "../../api/slices/globalSlice/global";
import { useEffect, useState } from "react";
import { readDashboardResults } from "../../api/slices/dashboard/dashboardSlice";

export const useDashboard = () => {
  const dispatch = useDispatch();
  const [results, setResults] = useState(null);
  const { loading } = useSelector((state) => state.dashboard);

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
          console.log(response?.payload?.counts, "response payload data");

          setResults(response?.payload?.counts);
        }
      } catch (err) {
        console.error("Error fetching dashboard results:", err);
      }
    };

    fetchDashboardResults();
  }, [dispatch]);

  return {
    handleRefLinkModal,
    handleQRCodeModal,
    handleRefDiscountCodeModal,
    results,
    loading,
  };
};
