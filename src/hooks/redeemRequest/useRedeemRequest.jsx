import { useDispatch, useSelector } from "react-redux";
import { ModalType } from "../../types/ui";
import { updateModalType } from "../../api/slices/globalSlice/global";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { generateRedeemPointsValidationSchema } from "../../validation/redeem-points-validation";
import { RedeemRequestFormFields } from "../../components/requestRedeem/redeem-request-fields";
import { redeemRequest } from "../../api/slices/redeemRequest/redeem-request";

export const useRedeemRequest = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.redeemRequest);
  const { user } = useSelector((state) => state.auth);

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
