import { createSlice } from "@reduxjs/toolkit";

const designSlice = createSlice({
  name: "Design",
  initialState: {
    fontsize: "",
    colors: "",
    fontFamily: "",
    spacings: "",
    images: "",
    imgShape: "",
    imgSize: "",
    lineHeight: "",
    styleChangeA: "",
    styleChangeB: "",
    styleChangeC: "",
    imageAnimationDesign: "",
    imageLink: "",
    borderRight: "",
    borderColor: "",
  },
  reducers: {
    getFontSize: (state, action) => {
      state.fontsize = action.payload;
    },
    getColors: (state, action) => {
      state.colors = action.payload;
    },
    getFontFamily: (state, action) => {
      state.fontFamily = action.payload;
    },

    getSpacing: (state, action) => {
      state.spacings = action.payload;
    },

    getImages: (state, action) => {
      state.images = action.payload;
    },
    getImgShape: (state, action) => {
      state.imgShape = action.payload;
    },
    getImgSize: (state, action) => {
      state.imgSize = action.payload;
    },
    getLineHeight: (state, action) => {
      state.lineHeight = action.payload;
    },
    getStyleChangeA: (state, action) => {
      state.styleChangeA = action.payload;
    },
    getStyleChangeB: (state, action) => {
      state.styleChangeB = action.payload;
    },
    getStyleChangeC: (state, action) => {
      state.styleChangeC = action.payload;
    },
    getImageAnimationDesign: (state, action) => {
      state.imageAnimationDesign = action.payload;
    },
    getImageLink: (state, action) => {
      state.imageLink = action.payload;
    },
    getBorderRight: (state, action) => {
      state.borderRight = action.payload;
    },
    getBorderColor: (state, action) => {
      state.borderColor = action.payload;
    },
  },
});

export const {
  getFontSize,
  getColors,
  getFontFamily,
  getImages,
  getImgShape,
  getImgSize,
  getSpacing,
  getStyleChangeA,
  getStyleChangeB,
  getStyleChangeC,
  getLineHeight,
  getImageAnimationDesign,
  getImageLink,
  getBorderRight,
  getBorderColor,
} = designSlice.actions;

export default designSlice.reducer;
