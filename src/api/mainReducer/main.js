import auth from "../slices/authSlice/auth";
import globalSlice from "../slices/globalSlice/global";
import freeUserSlice from "../slices/freeUserSlice/freeUser";

const reducer = {
  auth,
  global: globalSlice,
  freeUser: freeUserSlice,
};

export default reducer;
