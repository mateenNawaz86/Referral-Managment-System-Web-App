import { useForm } from "react-hook-form";
import { ModalType } from "../../types/ui";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { updateModalType } from "../../api/slices/globalSlice/global";
import { redeemRequest } from "../../api/slices/redeemRequest/redeem-request";
import { RedeemRequestFormFields } from "../../components/requestRedeem/redeem-request-fields";
import { generateRedeemPointsValidationSchema } from "../../validation/redeem-points-validation";

export const useRedeemRequest = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.redeemRequest);

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
      }
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  return {
    handleSubmit,
    errors,
    fields,
    onSubmit,
  };
};
