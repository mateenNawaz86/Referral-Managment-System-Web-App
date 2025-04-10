import apiServices from "../../../services/requestHandler";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  myRewards: null,
  loading: false,
  error: null,
};

export const readMyRewards = createAsyncThunk(
  "my/rewards",
  async (args, thunkApi) => {
    try {
      const response = await apiServices.myRewards();

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
      if (action?.payload) state.myRewards = action.payload.data;
      state.loading = false;
    });
    builder.addCase(readMyRewards.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default myRewardsSlice.reducer;
export const { setErrorMessage } = myRewardsSlice.actions;
