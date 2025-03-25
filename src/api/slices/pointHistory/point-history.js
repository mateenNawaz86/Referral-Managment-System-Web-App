import { setErrors } from "../../../utils/utility";
import apiServices from "../../../services/requestHandler";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  pointsHistory: [],
  loading: false,
  error: null,
};

export const readPointsHistory = createAsyncThunk(
  "points/history",
  async (args, thunkApi) => {
    const { data, setError } = args;

    try {
      const response = await apiServices.pointsHistory(data);

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

const pointsHistorySlice = createSlice({
  name: "points-history",
  initialState,
  reducers: {
    setErrorMessage: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(readPointsHistory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(readPointsHistory.fulfilled, (state, action) => {
      if (action?.payload) state.pointsHistory = action.payload.data;
      state.loading = false;
    });
    builder.addCase(readPointsHistory.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default pointsHistorySlice.reducer;
export const { setErrorMessage } = pointsHistorySlice.actions;
