import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userslice",
  initialState: {
    editUserName: "",
    editUserID: "",
  },

  reducers: {
    getEditUserName: (state, action) => {
      state.editUserName = action.payload;
    },
    getEditUserID: (state, action) => {
      state.editUserID = action.payload;
    },
  },
});
export const { getEditUserName, getEditUserID } = userSlice.actions;
export default userSlice.reducer;
