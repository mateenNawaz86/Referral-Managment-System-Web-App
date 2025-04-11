import { setErrors } from "../../../utils/utility";
import apiServices from "../../../services/requestHandler";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  premiumUser: undefined,
  loading: true,
  error: null,
};

export const readPremiumUsers = createAsyncThunk(
  "premium/user",
  async (args, thunkApi) => {
    const { data, setError } = args;

    try {
      const response = await apiServices.premiumUser(data);
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

const premiumUsersSlice = createSlice({
  name: "premium-users",
  initialState,
  reducers: {
    setErrorMessage: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(readPremiumUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(readPremiumUsers.fulfilled, (state, action) => {
      if (action?.payload) state.premiumUser = action.payload.data;
      state.loading = false;
    });
    builder.addCase(readPremiumUsers.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default premiumUsersSlice.reducer;
export const { setErrorMessage } = premiumUsersSlice.actions;
