import * as yup from "yup";

export const redeemPoints = {
  points: "points",
};

export const generateRedeemPointsValidationSchema = () => {
  return yup.object().shape({
    [redeemPoints.points]: yup.string().required("This field is required"),
  });
};
