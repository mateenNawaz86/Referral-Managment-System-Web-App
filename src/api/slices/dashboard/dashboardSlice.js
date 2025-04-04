import { setErrors } from "../../../utils/utility";
import apiServices from "../../../services/requestHandler";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  results: null,
  loading: false,
  error: null,
};

export const readDashboardResults = createAsyncThunk(
  "dashboard/results",
  async (args, thunkApi) => {
    const { data, setError } = args;

    try {
      const response = await apiServices.viewResults(data);
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

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setErrorMessage: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(readDashboardResults.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(readDashboardResults.fulfilled, (state, action) => {
      if (action?.payload) state.results = action.payload.data;
      state.loading = false;
    });
    builder.addCase(readDashboardResults.rejected, (state) => {
      state.loading = false;
      state.error = action.payload?.message || "Failed to fetch data";
    });
  },
});

export default dashboardSlice.reducer;
export const { setErrorMessage } = dashboardSlice.actions;
