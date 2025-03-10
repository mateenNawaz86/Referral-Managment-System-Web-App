import { ModalType } from "../../types/ui";
import { useDispatch, useSelector } from "react-redux";
import { updateModalType } from "../../api/slices/globalSlice/global";
import { ReferralLinkModal } from "../../base-component/ui/modals/referral-link-modal";
import { ReferralQRCodeModal } from "../../base-component/ui/modals/referral-qr-code-modal";
import { ReferralDiscountModal } from "../../base-component/ui/modals/referral-discount-modal";
import { GetCouponModal } from "../../base-component/ui/modals/get-coupon-modal";
import { PaymentDetailsModal } from "../../base-component/ui/modals/payment-details-modal";
import { LogoutModal } from "../../base-component/ui/modals/logout-modal";
import { RedeemPointsModal } from "../../base-component/ui/modals/redeem-points-modal";
import { RedeemSuccessModal } from "../../base-component/ui/modals/redeem-success-modal";
import { RedeemRequestSuccessModal } from "../../base-component/ui/modals/redeem-req-success-modal";

export const useModalManager = () => {
  const dispatch = useDispatch();
  const { type } = useSelector(({ global: { modal } }) => modal);

  const closeModal = () => {
    dispatch(updateModalType({ type: ModalType.NONE }));
  };

  const MODAL_CONFIG = {
    [ModalType.REFERRAL_LINK_MODAL]: <ReferralLinkModal onClose={closeModal} />,
    [ModalType.REFERRAL_QR_CODE_MODAL]: (
      <ReferralQRCodeModal onClose={closeModal} />
    ),
    [ModalType.REFERRAL_DISCOUNT_CODE_MODAL]: (
      <ReferralDiscountModal onClose={closeModal} />
    ),
    [ModalType.GET_COUPON_MODAL]: <GetCouponModal onClose={closeModal} />,
    [ModalType.PAYMENT_DETIALS]: <PaymentDetailsModal onClose={closeModal} />,
    [ModalType.LOGOUT]: <LogoutModal onClose={closeModal} />,
    [ModalType.COUPON_POINTS]: <RedeemPointsModal onClose={closeModal} />,
    [ModalType.REDEEM_SUCCESS]: <RedeemSuccessModal onClose={closeModal} />,
    [ModalType.REDEEM_REQUEST_SUCCESS]: <RedeemRequestSuccessModal onClose={closeModal} />,
  };

  const renderModal = () => {
    return MODAL_CONFIG[type] || null;
  };

  return {
    renderModal,
  };
};
