import { useDispatch } from "react-redux";
import { updateModalType } from "../../api/slices/globalSlice/global";
import { GetCouponIcon } from "../../assets/svgs/components/get-coupon-icon";
import { PointIcon } from "../../assets/svgs/components/point-icon";
import { ModalType } from "../../types/ui";

export const useMyRewards = () => {
  const dispatch = useDispatch();

  const handleGetCouponModal = () => {
    dispatch(updateModalType({ type: ModalType.GET_COUPON_MODAL }));
  };

  const handleRedeemPoints = () => {
    dispatch(updateModalType({ type: ModalType.COUPON_POINTS }));
  };

  const handleRedeemSuccess = () => {
    dispatch(updateModalType({ type: ModalType.REDEEM_SUCCESS }));
  };

  const rewardsActions = [
    {
      icon: PointIcon,
      text: "Points History",
      onClick: () => {},
    },
    {
      icon: GetCouponIcon,
      text: "Get a coupon",
      onClick: handleRedeemSuccess,
    },
    {
      icon: PointIcon,
      text: "Request Redeem",
      onClick: () => {},
    },
  ];

  return {
    rewardsActions,
    handleGetCouponModal,
  };
};
