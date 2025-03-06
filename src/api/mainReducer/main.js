import auth from "../slices/authSlice/auth";
import globalSlice from "../slices/globalSlice/global";

const reducer = {
  global: globalSlice,
  auth,
};

export default reducer;
