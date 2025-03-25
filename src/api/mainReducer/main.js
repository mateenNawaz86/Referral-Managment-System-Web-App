import auth from "../slices/authSlice/auth";
import globalSlice from "../slices/globalSlice/global";
import freeUserSlice from "../slices/freeUserSlice/freeUser";
import pointsHistory from "../slices/pointHistory/point-history";
import couponHistorySlice from "../slices/couponHistory/couponHistory";
import { redeemRequest } from "../slices/redeemRequest/redeem-request";

const reducer = {
  auth,
  global: globalSlice,
  freeUser: freeUserSlice,
  redeemRequest: redeemRequest,
  pointsHistory: pointsHistory,
  couponHistory: couponHistorySlice,
};

export default reducer;
