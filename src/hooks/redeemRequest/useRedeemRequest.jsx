import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ModalType } from "../../types/ui";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyRewardsUtil } from "../../utils/utility";
import { updateModalType } from "../../api/slices/globalSlice/global";
import { redeemRequest } from "../../api/slices/redeemRequest/redeem-request";
import { RedeemRequestFormFields } from "../../components/requestRedeem/redeem-request-fields";
import { generateRedeemPointsValidationSchema } from "../../validation/redeem-points-validation";

export const useRedeemRequest = () => {
  const dispatch = useDispatch();
  const { user, loading: authLoading } = useSelector((state) => state.auth);
  const [myRewards, setMyRewards] = useState(null);
  const { loading } = useSelector((state) => state.redeemRequest);
  const { loading: myRewardsLoading } = useSelector((state) => state.myRewards);

  useEffect(() => {
    fetchMyRewardsUtil({ dispatch, user, authLoading, setMyRewards });
  }, [dispatch, authLoading, user]);

  const handleRedeemRequest = () => {
    dispatch(updateModalType({ type: ModalType.REDEEM_REQUEST_SUCCESS }));
  };

  const schema = generateRedeemPointsValidationSchema();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setError,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const fields = RedeemRequestFormFields(register, loading, control);

  const onSubmit = async (data) => {
    const formData = new FormData();
    const uid = user?.user?.id;
    if (!uid) return;

    formData.append("points", data?.points);
    formData.append("uid", uid);

    try {
      const res = await dispatch(redeemRequest({ data: formData, setError }));
      if (res?.payload) {
        handleRedeemRequest();
        reset();
      }
    } catch (error) {
      toast.error(errors);
      throw error;
    }
  };

  return {
    handleSubmit,
    errors,
    fields,
    onSubmit,
    myRewards,
    myRewardsLoading,
  };
};
