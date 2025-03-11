import { useDispatch } from "react-redux";
import { ModalType } from "../../types/ui";
import { updateModalType } from "../../api/slices/globalSlice/global";

export const useRedeemRequest = () => {
  const dispatch = useDispatch();

  const handleRedeemRequest = () => {
    dispatch(updateModalType({ type: ModalType.REDEEM_REQUEST_SUCCESS }));
  };

  return {
    handleRedeemRequest,
  };
};
