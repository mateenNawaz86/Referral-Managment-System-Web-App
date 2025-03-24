import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  modal: {
    type: "NONE",
    data: null,
  },
};

const BASEURL = "https://apis.famocare.com/api";
export const uploadFile = createAsyncThunk(
  "file/upload",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(BASEURL + "/upload/image", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response?.data?.data.imageUrl;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    updateModalType: (state, action) => {
      state.modal.type = action.payload.type;
      state.modal.data = action.payload.data;
    },
  },
});

export default globalSlice.reducer;
export const { updateModalType } = globalSlice.actions;
