import { createSlice } from "@reduxjs/toolkit";

const generalSlice = createSlice({
  name: "general",
  initialState: {
    name: "Tanya Bisskut ",
    company: "Real Estate Agent",
    position: "",
    phonenumber: "+1 2291 8372",
    mobilenumber: "+1 9281 7726 ",
    website: "www.gimm.io",
    email: "example@gmail.com",
    address: "Level 12, 69 Example Street, WA 6029",
    images:
      "https://y5t6h9a6.stackpathcdn.com/79318bf3-8738-4bae-9f3d-fb4921563044/img.png",
    imageAnimation: "",
    imageAnimationDesign: "",
  },
  reducers: {
    getName: (state, action) => {
      state.name = action.payload;
    },
    getCompany: (state, action) => {
      state.company = action.payload;
    },
    getPosition: (state, action) => {
      state.position = action.payload;
    },
    getPhonenumber: (state, action) => {
      state.phonenumber = action.payload;
    },
    getMobilenumber: (state, action) => {
      state.mobilenumber = action.payload;
    },

    getWebsite: (state, action) => {
      state.website = action.payload;
    },
    getEmail: (state, action) => {
      state.email = action.payload;
    },
    getAddress: (state, action) => {
      state.address = action.payload;
    },
    getImages: (state, action) => {
      state.images = action.payload;
    },
    getImageAnimation: (state, action) => {
      state.imageAnimation = action.payload;
    },
    getImageAnimationDesign: (state, action) => {
      state.imageAnimationDesign = action.payload;
    },
    resetGeneral: (state, action) => {
      state.name = "Tanya Bisskut";
      state.company = "Real Estate Agent";
      state.phonenumber = "+1 2291 8372 ";
      state.mobilenumber = "+1 9281 7726";
      state.website = "www.gimm.io";
      state.email = "example@gmail.com";
      state.address = ".Level 12, 69 Example Street, WA 6029";
      state.images =
        "https://y5t6h9a6.stackpathcdn.com/79318bf3-8738-4bae-9f3d-fb4921563044/img.png";
    },
  },
});

export const {
  getName,
  getCompany,
  getPosition,
  getPhonenumber,
  getMobilenumber,
  getWebsite,
  getEmail,
  getAddress,
  getImages,
  resetGeneral,
  getImageAnimation,
  getImageAnimationDesign,
} = generalSlice.actions;
export default generalSlice.reducer;
