import { setErrors } from "../../../utils/utility";
import apiServices from "../../../services/requestHandler";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  redeemHistory: [],
  loading: true,
  error: null,
};

export const readRedeemHistory = createAsyncThunk(
  "redeem/history",
  async (args, thunkApi) => {
    const { params, setError } = args;

    try {
      const response = await apiServices.redeemHistory(params);

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

const redeemHistorySlice = createSlice({
  name: "redeem-history",
  initialState,
  reducers: {
    setErrorMessage: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(readRedeemHistory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(readRedeemHistory.fulfilled, (state, action) => {
      if (action?.payload) state.redeemHistory = action.payload.data;
      state.loading = false;
    });
    builder.addCase(readRedeemHistory.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default redeemHistorySlice.reducer;
export const { setErrorMessage } = redeemHistorySlice.actions;
