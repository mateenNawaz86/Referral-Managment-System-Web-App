import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  modal: {
    type: "NONE",
    data: null,
  },
};

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
