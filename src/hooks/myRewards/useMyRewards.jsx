import { ModalType } from "../../types/ui";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyRewardsUtil } from "../../utils/utility";
import { PointIcon } from "../../assets/svgs/components/point-icon";
import { updateModalType } from "../../api/slices/globalSlice/global";
import { GetCouponIcon } from "../../assets/svgs/components/get-coupon-icon";
import { GetCouponFormFields } from "../../components/myRewards/get-coupon-fields";
import { readMyRewardsDiscount } from "../../api/slices/myRewards/myRewardsSlice";
import { generateGetCouponValidationSchema } from "../../validation/redeem-points-validation";

export const useMyRewards = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [myRewards, setMyRewards] = useState(null);
  const { loading } = useSelector((state) => state.myRewards);
  const [myRewardsDiscount, setMyRewardsDiscount] = useState(null);
  const { user, loading: authLoading } = useSelector((state) => state.auth);

  const schema = generateGetCouponValidationSchema();

  useEffect(() => {
    fetchMyRewardsUtil({ dispatch, user, authLoading, setMyRewards });
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

  const handleRedeemPoints = (type, points, loading) => {
    dispatch(
      updateModalType({
        type: ModalType.COUPON_POINTS,
        data: { actionType: "REDEEM_SUCCESS", type, points, loading },
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
  } = useForm({
    resolver: yupResolver(schema),
  });

  const fields = GetCouponFormFields(register, loading);

  const onSubmit = async (data) => {
    if (!myRewardsDiscount) {
      return;
    }

    const type = data?.couponType;
    let points;
    if (type === "monthly") {
      points = myRewardsDiscount?.referralPointsForMonthlySubscription;
    } else {
      points = myRewardsDiscount?.referralPointsForYearlySubscription;
    }
    handleRedeemPoints(type, points, loading);
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
