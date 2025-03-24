import auth from "../slices/authSlice/auth";
import globalSlice from "../slices/globalSlice/global";
import freeUserSlice from "../slices/freeUserSlice/freeUser";
import couponHistorySlice from "../slices/couponHistory/couponHistory";

const reducer = {
  auth,
  global: globalSlice,
  freeUser: freeUserSlice,
  couponHistory: couponHistorySlice,
};

export default reducer;
