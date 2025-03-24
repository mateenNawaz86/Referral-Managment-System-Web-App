import {
  AsyncThunk,
  PayloadAction,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import apiServices from "../../../services/requestHandler";
import { setErrors } from "../../../utils/utility";
import { saveUser, setRefereshToken, setToken } from "../../../utils/auth";

const initialState = {
  user: undefined,
  loading: false,
  error: null,
  errorData: null,
};

export const logIn: AsyncThunk<boolean, object, object> | any =
  createAsyncThunk("login/user", async (args, thunkApi) => {
    const { data, setError } = args as any;

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
        setRefereshToken(refreshToken);
      } else {
        console.warn("No access token found in response headers");
      }

      if (userData) {
        saveUser(userData?.data);
        thunkApi.dispatch(setUser(userData?.data));
      } else {
        console.warn("No user data found in response");
      }

      return userData;
    } catch (e: any) {
      thunkApi.dispatch(setErrorMessage(e?.data?.message || "Login failed"));
      setErrors(setError, e?.data?.data || {});

      return thunkApi.rejectWithValue({
        error: e?.response?.data?.message || "Login failed",
        data: e?.response?.data?.data,
      });
    }
  });

export const signUp: AsyncThunk<boolean, object, object> | any =
  createAsyncThunk("signup/user", async (args, thunkApi) => {
    const { data, setError } = args as any;
    try {
      const response = await apiServices.signUp(data);
      thunkApi.dispatch(setErrorMessage(null));
      return response.data;
    } catch (e: any) {
      setErrors(setError, e?.data.data);
      thunkApi.dispatch(setErrorMessage(e?.data?.data?.message));
      return e;
    }
  });

export const logout: AsyncThunk<boolean, object, object> | any =
  createAsyncThunk("user/logout", async (data, thunkApi) => {
    try {
      apiServices.logoutUser({ data });
      return true;
    } catch (e: any) {
      return false;
    }
  });

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUp.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signUp.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      if (action?.payload) state.user = action.payload.user;
    });
    builder.addCase(signUp.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(logIn.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(logIn.rejected, (state, action) => {
      state.loading = false;

      state.errorData = action.payload?.data || null;
    });
  },
});
export default authSlice.reducer;
export const { setUser, setErrorMessage } = authSlice.actions;
