import {
  AsyncThunk,
  PayloadAction,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import apiServices from "../../../services/requestHandler";
import { updateQuery } from "../../../utils/update-query";
import { conditionHandlerLogin, setErrors } from "../../../utils/utility";
import { saveUser, setRefreshToken, setToken } from "../../../utils/auth";

const initialState = {
  user: undefined,
  userRole: null,
  loading: false,
  error: null,
  email: null,
};

export const loginUser: AsyncThunk<boolean, object, object> | any =
  createAsyncThunk("login/user", async (args, thunkApi) => {
    const { data, router, setError, translate } = args as any;

    try {
      const response = await apiServices.login(data);
      setToken(response?.headers?.accesstoken);
      setRefreshToken(response?.headers?.refreshtoken);
      saveUser(response?.data?.data?.User);
      thunkApi.dispatch(setUser(response.data.data.User));
      thunkApi.dispatch(setErrorMessage(null));
      conditionHandlerLogin(router, response);
      return true;
    } catch (e: any) {
      thunkApi.dispatch(setErrorMessage(e?.data?.message));
      setErrors(setError, e?.data.data, translate);
      return false;
    }
  });

export const resetPassword: AsyncThunk<boolean, object, object> | any =
  createAsyncThunk("reset/user", async (args, thunkApi) => {
    const { router, data } = args as any;
    try {
      const response = await apiServices.resetPassword({
        otp: router.asPath?.split("=")[1],
        data,
      });

      router.pathname = "/login";
      updateQuery(router, "en");

      return true;
    } catch (e: any) {
      thunkApi.dispatch(setErrorMessage(e?.data?.message));

      return false;
    }
  });

export const forgotPassword: AsyncThunk<boolean, object, object> | any =
  createAsyncThunk("forgot/user", async (args, thunkApi) => {
    const { translate, data, setError } = args as any;
    try {
      await apiServices.forgotPassword(data);
      return true;
    } catch (e: any) {
      setErrors(setError, e?.data.data, translate);
      thunkApi.dispatch(setErrorMessage(e?.data?.message));

      return false;
    }
  });

export const signUp: AsyncThunk<boolean, object, object> | any =
  createAsyncThunk("signup/user", async (args, thunkApi) => {
    const { data, router, setError, translate } = args as any;
    try {
      const response = await apiServices.singUp(data);
      thunkApi.dispatch(setErrorMessage(null));
      router.pathname = "/login-success";
      updateQuery(router, router.locale as string);
      saveUser(response.data.data.User);
      return response;
    } catch (e: any) {
      setErrors(setError, e?.data.data, translate);
      thunkApi.dispatch(setErrorMessage(e?.data?.data?.message));
      return e;
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
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.loading = false;
    });
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
    builder.addCase(forgotPassword.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(forgotPassword.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(forgotPassword.rejected, (state) => {
      state.loading = false;
    });
  },
});
export default authSlice.reducer;
export const { setUser, setErrorMessage, setEmail } = authSlice.actions;
