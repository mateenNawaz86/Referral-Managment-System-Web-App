import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiServices from "../../../services/requestHandler";
import { setErrors } from "../../../utils/utility";
import { saveUser, setRefreshToken, setToken } from "../../../utils/auth";

const initialState = {
  user: undefined,
  loading: false,
  error: null,
  errorData: null,
  signedUser: null,
};

export const logIn = createAsyncThunk("login/user", async (args, thunkApi) => {
  const { data, setError } = args;

  try {
    const response = await apiServices.login(data);

    const accessToken =
      response?.headers?.["access-token"] || response?.headers?.accessToken;

    const refreshToken =
      response?.headers?.["refresh-token"] || response?.headers?.refreshToken;
    const userData = response?.data;

    if (accessToken) {
      setToken(accessToken);
    }
    if (refreshToken) {
      setRefreshToken(refreshToken);
    } else {
      console.warn("No access token found in response headers");
    }

    if (userData) {
      saveUser(userData?.data);
      thunkApi.dispatch(setUser(userData));
    } else {
      console.warn("No user data found in response");
    }

    return userData;
  } catch (e) {
    thunkApi.dispatch(setErrorMessage(e?.data?.message || "Login failed"));
    setErrors(setError, e?.data?.data || {});

    return thunkApi.rejectWithValue({
      error: e?.response?.data?.message || "Login failed",
      data: e?.response?.data?.data,
    });
  }
});

export const signUp = createAsyncThunk(
  "signup/user",
  async (args, thunkApi) => {
    const { data, setError } = args;
    try {
      const response = await apiServices.signUp(data);
      thunkApi.dispatch(setErrorMessage(null));
      return response.data;
    } catch (e) {
      setErrors(setError, e?.data.data);
      thunkApi.dispatch(setErrorMessage(e?.data?.data?.message));
      return e;
    }
  }
);

export const logoutUser = createAsyncThunk(
  "user/logout",
  async (data, thunkApi) => {
    try {
      await apiServices.logoutUser({ data });
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");
      Cookies.remove("referralUser");
      thunkApi.dispatch(setUser(undefined));
      thunkApi.dispatch(setSignedUser(null));
      thunkApi.dispatch(setErrorMessage(null));
      return true;
    } catch (e) {
      return false;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setSignedUser: (state, action) => {
      state.signedUser = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUp.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.loading = false;
      if (action?.payload) state.signedUser = action.payload.data;
    });
    builder.addCase(signUp.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(logIn.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.loading = false;
      if (action?.payload) {
        state.user = action.payload.data;
        state.signedUser = action.payload.data;
      }
    });
    builder.addCase(logIn.rejected, (state, action) => {
      state.loading = false;

      state.errorData = action.payload?.data || null;
    });

    builder.addCase(logoutUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(logoutUser.rejected, (state) => {
      state.loading = false;
    });
  },
});
export default authSlice.reducer;
export const { setUser, setSignedUser, setErrorMessage } = authSlice.actions;
