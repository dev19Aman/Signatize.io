import { createSlice } from "@reduxjs/toolkit";

const thirdPartyImageSlice = createSlice({
  name: "thirdPartyImage",
  initialState: {
    giphy: [],
    pixabay: [],
    youzign: [],
  },
  reducers: {
    getGiphyImages: (state, action) => {
      state.giphy = action.payload;
    },
    getPixabayImages: (state, action) => {
      state.pixabay = action.payload;
    },
    getYouzignImages: (state, action) => {
      state.pixabay = action.payload;
    },
  },
});

export const { getGiphyImages, getPixabayImages, getYouzignImages } =
  thirdPartyImageSlice.actions;

export default thirdPartyImageSlice.reducer;
