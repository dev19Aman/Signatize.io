import { createSlice } from "@reduxjs/toolkit";

const ToggleSlice = createSlice({
  name: "toggle",
  initialState: {
    toggleIndex: 1,
    accessToken: "",
    saveSignatureButton: true,
  },
  reducers: {
    getToggleIndex: (state, action) => {
      state.toggleIndex = action.payload;
    },
    getAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    getSaveSignatureButton: (state, action) => {
      state.saveSignatureButton = action.payload;
    },
    logout: (state) => {
      // From here we can take action only at this "counter" state
      // But, as we have taken care of this particular "logout" action
      // in rootReducer, we can use it to CLEAR the complete Redux Store's state
    },
  },
});

export const {
  getToggleIndex,
  logout,
  getAccessToken,
  getSaveSignatureButton,
} = ToggleSlice.actions;

export default ToggleSlice.reducer;
