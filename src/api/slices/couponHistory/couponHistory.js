import { setErrors } from "../../../utils/utility";
import apiServices from "../../../services/requestHandler";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  couponHistory: [],
  loading: true,
  error: null,
};

export const readCouponHistory = createAsyncThunk(
  "coupon/history",
  async (args, thunkApi) => {
    const { params, setError } = args;

    try {
      const response = await apiServices.couponHistory(params);
      return response?.data;
    } catch (e) {
      const errorMessage = e?.response?.data?.message || "Network Error";
      thunkApi.dispatch(setErrorMessage(errorMessage));
      setErrors(setError, e?.response?.data || {});

      return thunkApi.rejectWithValue({
        message: errorMessage,
        status: e?.response?.status || 500,
      });
    }
  }
);

const couponHistorySlice = createSlice({
  name: "coupon-history",
  initialState,
  reducers: {
    setErrorMessage: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(readCouponHistory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(readCouponHistory.fulfilled, (state, action) => {
      if (action?.payload) state.couponHistory = action.payload.data;
      state.loading = false;
    });
    builder.addCase(readCouponHistory.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default couponHistorySlice.reducer;
export const { setErrorMessage } = couponHistorySlice.actions;
