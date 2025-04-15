import apiServices from "../../../services/requestHandler";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  myRewards: null,
  rewardsDiscount: null,
  rewardsCoupon: null,
  loading: true,
  isLoading: false,
  error: null,
  // activeRewardPoints: null,
};

export const readMyRewards = createAsyncThunk(
  "my/rewards",
  async (args, thunkApi) => {
    const { data, setError } = args;
    try {
      const response = await apiServices.myRewards(data);

      return response?.data;
    } catch (e) {
      const errorMessage = e?.response?.data?.message || "Network Error";
      thunkApi.dispatch(setErrorMessage(errorMessage));

      return thunkApi.rejectWithValue({
        message: errorMessage,
        status: e?.response?.status || 500,
      });
    }
  }
);

export const readMyRewardsDiscount = createAsyncThunk(
  "rewards/discount",
  async (args, thunkApi) => {
    try {
      const response = await apiServices.myRewardsDiscount();

      return response?.data;
    } catch (e) {
      const errorMessage = e?.response?.data?.message || "Network Error";
      thunkApi.dispatch(setErrorMessage(errorMessage));

      return thunkApi.rejectWithValue({
        message: errorMessage,
        status: e?.response?.status || 500,
      });
    }
  }
);

export const createCoupon = createAsyncThunk(
  "create/coupon",
  async (args, thunkApi) => {
    const { data, setError } = args;

    try {
      const response = await apiServices.rewardsCoupon(data);
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

const myRewardsSlice = createSlice({
  name: "my-rewards",
  initialState,
  reducers: {
    setErrorMessage: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(readMyRewards.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(readMyRewards.fulfilled, (state, action) => {
      if (action?.payload) {
        state.myRewards = action.payload.data;

        // state.activeRewardPoints = action.payload.data?.reward?.active || null;
      }

      state.loading = false;
    });
    builder.addCase(readMyRewards.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(readMyRewardsDiscount.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(readMyRewardsDiscount.fulfilled, (state, action) => {
      if (action?.payload) state.rewardsDiscount = action.payload.data;
      state.loading = false;
    });
    builder.addCase(readMyRewardsDiscount.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(createCoupon.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createCoupon.fulfilled, (state, action) => {
      if (action?.payload) state.rewardsCoupon = action.payload.data;
      state.isLoading = false;
    });
    builder.addCase(createCoupon.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default myRewardsSlice.reducer;
export const { setErrorMessage } = myRewardsSlice.actions;
