import { setErrors } from "../../../utils/utility";
import apiServices from "../../../services/requestHandler";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  freeUser: [],
  loading: false,
  error: null,
};

export const freeUserListing = createAsyncThunk(
  "free/user",
  async (args, thunkApi) => {
    const { data, setError } = args;

    try {
      const response = await apiServices.freeUser(data);

      return response?.data;
    } catch (e) {
      thunkApi.dispatch(setErrorMessage(e?.data?.response?.message));
      setErrors(setError, e?.data?.response?.data || {});
      return e;
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
    builder.addCase(freeUserListing.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(freeUserListing.fulfilled, (state, action) => {
      if (action?.payload) state.freeUser = action.payload.data;
      state.loading = false;
    });
    builder.addCase(freeUserListing.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default freeUserSlice.reducer;
export const { setErrorMessage } = freeUserSlice.actions;
