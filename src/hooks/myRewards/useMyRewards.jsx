import { useDispatch, useSelector } from "react-redux";
import { ModalType } from "../../types/ui";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { PointIcon } from "../../assets/svgs/components/point-icon";
import { updateModalType } from "../../api/slices/globalSlice/global";
import { GetCouponIcon } from "../../assets/svgs/components/get-coupon-icon";
import { GetCouponFormFields } from "../../components/myRewards/get-coupon-fields";
import {
  readMyRewards,
  readMyRewardsDiscount,
} from "../../api/slices/myRewards/myRewardsSlice";
import { useEffect, useState } from "react";

export const useMyRewards = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [myRewards, setMyRewards] = useState(null);
  const { loading } = useSelector((state) => state.myRewards);
  const [myRewardsDiscount, setMyRewardsDiscount] = useState(null);
  const { user, loading: authLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (authLoading) return;

    const fetchMyRewards = async () => {
      const uid = user?.user?.id;
      if (!uid) return;

      const formData = new FormData();
      formData.append("uid", 4);

      try {
        const response = await dispatch(readMyRewards({ data: formData }));

        if (response?.payload?.data) {
          setMyRewards(response?.payload?.data);
        }
      } catch (err) {
        console.error("Error fetching dashboard links:", err);
      }
    };

    fetchMyRewards();
  }, [dispatch, authLoading, user]);

  useEffect(() => {
    const fetchMyRewardsDiscount = async () => {
      try {
        const response = await dispatch(readMyRewardsDiscount({}));
        if (response?.payload?.data) {
          setMyRewardsDiscount(response?.payload?.data);
        }
      } catch (err) {
        console.error("Error fetching dashboard links:", err);
      }
    };

    fetchMyRewardsDiscount();
  }, [dispatch]);

  const handleGetCouponModal = () => {
    dispatch(updateModalType({ type: ModalType.GET_COUPON_MODAL }));
  };

  const handleRedeemPoints = () => {
    dispatch(
      updateModalType({
        type: ModalType.COUPON_POINTS,
        data: { actionType: "REDEEM_SUCCESS" },
      })
    );
  };

  const rewardsActions = [
    {
      icon: PointIcon,
      text: "Points History",
      onClick: () => navigate("/point-history"),
    },
    {
      icon: GetCouponIcon,
      text: "Get a coupon",
      onClick: handleGetCouponModal,
    },
    {
      icon: PointIcon,
      text: "Request Redeem",
      onClick: () => navigate("/request-redeem"),
    },
  ];

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({});

  const fields = GetCouponFormFields(register);

  const onSubmit = async (data) => {
    console.log(data, "data");

    handleRedeemPoints();
  };

  return {
    rewardsActions,
    handleGetCouponModal,
    fields: fields,
    onSubmit,
    control,
    handleSubmit,
    errors,
    loading,
    myRewards,
  };
};
