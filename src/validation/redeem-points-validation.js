import * as yup from "yup";

export const redeemPoints = {
  REDEEM_POINTS: "REDEEM_POINTS",
};

export const generateRedeemPointsValidationSchema = () => {
  return yup.object().shape({
    [redeemPoints.REDEEM_POINTS]: yup
      .string()
      .required("validationMessages.required"),
  });
};
