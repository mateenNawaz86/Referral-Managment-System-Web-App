import { ModalType } from "../../types/ui";
import { useDispatch, useSelector } from "react-redux";
import { updateModalType } from "../../api/slices/globalSlice/global";
import { ReferralLinkModal } from "../../base-component/ui/modals/referral-link-modal";

export const useModalManager = () => {
  const { type } = useSelector(({ global: { modal } }) => modal);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(updateModalType({ type: ModalType.NONE }));
  };

  const MODAL_CONFIG = {
    [ModalType.REFERRAL_LINK_MODAL]: <ReferralLinkModal onClose={closeModal} />,
  };

  const renderModal = () => {
    return MODAL_CONFIG[type] || null;
  };

  return {
    renderModal,
  };
};
