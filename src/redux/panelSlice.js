import { createSlice } from "@reduxjs/toolkit";

const panelSlice = createSlice({
  name: "users",
  initialState: {
    isPanelOpen: false,
  },
  reducers: {
    getPanelOpen: (state, action) => {
      state.isPanelOpen = action.payload;
    },
  },
});

export const { getPanelOpen } = panelSlice.actions;

export default panelSlice.reducer;
