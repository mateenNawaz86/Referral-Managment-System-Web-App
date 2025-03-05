import { useDispatch } from "react-redux";
import { ModalType } from "../../types/ui";
import { updateModalType } from "../../api/slices/globalSlice/global";

export const useDashboard = () => {
  const dispatch = useDispatch();

  const handleRefLinkModal = () => {
    dispatch(updateModalType({ type: ModalType.REFERRAL_LINK_MODAL }));
  };

  const handleQRCodeModal = () => {
    dispatch(updateModalType({ type: ModalType.REFERRAL_QR_CODE_MODAL }));
  };

  const handleRefDiscountCodeModal = () => {
    dispatch(updateModalType({ type: ModalType.REFERRAL_DISCOUNT_CODE_MODAL }));
  };

  return {
    handleRefLinkModal,
    handleQRCodeModal,
    handleRefDiscountCodeModal,
  };
};
