import { useDispatch } from "react-redux";
import { ModalType } from "../../types/ui";
import { updateModalType } from "../../api/slices/globalSlice/global";

export const useDashboard = () => {
  const dispatch = useDispatch();

  const handleRefLinkModal = () => {
    console.log("clicked");

    dispatch(updateModalType({ type: ModalType.REFERRAL_LINK_MODAL }));
  };

  return {
    handleRefLinkModal,
  };
};
