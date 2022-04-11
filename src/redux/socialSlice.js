import { createSlice } from "@reduxjs/toolkit";

const socialSlice = createSlice({
  name: "social",
  initialState: {
    facebooklinks: "https://www.facebook.com/id",
    twitterlinks: "https://www.twitter.com/id",
    linkedInLinklinks: "https://www.linkedin.com/company/id",
    instalinks: "https://www.instagram.com/company/id",
    pintrest: "https://www.pintrest.com/company/id",
    raddit: "https://www.reddit.com/company/id",
    Stackoverflowlinks: "",
    Youtubelink: "",
    custemlink: "",
    socialImages: "",
    singleTextField: [],
  },
  reducers: {
    getFacebooklinks: (state, action) => {
      state.facebooklinks = action.payload;
    },
    getTwitterlinks: (state, action) => {
      state.twitterlinks = action.payload;
    },
    getInstalinks: (state, action) => {
      state.instalinks = action.payload;
    },
    getLinkedInLink: (state, action) => {
      state.linkedInLinklinks = action.payload;
    },
    getPintrestLink: (state, action) => {
      state.pintrest = action.payload;
    },
    getRadditLink: (state, action) => {
      state.raddit = action.payload;
    },
    getStackoverflowlinks: (state, action) => {
      state.Stackoverflowlinks = action.payload;
    },

    getYoutubelink: (state, action) => {
      state.Youtubelink = action.payload;
    },
    getCustemlink: (state, action) => {
      state.custemlink = action.payload;
    },
    getSocialImages: (state, action) => {
      state.socialImages = action.payload;
    },
    getSingleTextField: (state, action) => {
      state.singleTextField = action.payload;
    },
  },
});

export const {
  getFacebooklinks,
  getYoutubelink,
  getLinkedInLink,
  getTwitterlinks,
  getStackoverflowlinks,
  getInstalinks,
  getCustemlink,
  getSocialImages,
  getPintrestLink,
  getRadditLink,
  getSingleTextField,
} = socialSlice.actions;

export default socialSlice.reducer;
