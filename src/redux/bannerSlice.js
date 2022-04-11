import { createSlice } from "@reduxjs/toolkit";

const bannerSlice = createSlice({
  name: "banner",
  initialState: {
    banner: [],
  },
  reducers: {
    getBanner: (state, action) => {
      state.banner = action.payload;
    },
  },
});

export const { getBanner } = bannerSlice.actions;

export default bannerSlice.reducer;
