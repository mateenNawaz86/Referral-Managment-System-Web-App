import { setErrors } from "../../../utils/utility";
import apiServices from "../../../services/requestHandler";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  freeUser: [],
  loading: true,
  error: null,
};

export const readFreeUserListing = createAsyncThunk(
  "free/user",
  async (args, thunkApi) => {
    const { params, setError } = args;

    try {
      const response = await apiServices.freeUsers(params);
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

const freeUserSlice = createSlice({
  name: "free-user",
  initialState,
  reducers: {
    setErrorMessage: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(readFreeUserListing.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(readFreeUserListing.fulfilled, (state, action) => {
      if (action?.payload) state.freeUser = action.payload.data;
      state.loading = false;
    });
    builder.addCase(readFreeUserListing.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default freeUserSlice.reducer;
export const { setErrorMessage } = freeUserSlice.actions;
