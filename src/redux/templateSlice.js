import { createSlice } from "@reduxjs/toolkit";
import Template1 from "Component/MainComponent/CreateSignature/AllTemplates/Template1";
import Template502 from "Component/MainComponent/CreateSignature/AllTemplates/Template502";

const templateSlice = createSlice({
  name: "template",
  initialState: {
    Templates: Template502,
    allTemplates: [],
    templateCode: "",
    id: "",
    apiTemplate: [],
    singleTemplate: "",
    updateTemplateData: false,
  },
  reducers: {
    getTemplate: (state, action) => {
      state.Templates = action.payload;
    },
    getAllTemplates: (state, action) => {
      state.allTemplates = action.payload;
    },
    getTemplateCode: (state, action) => {
      state.templateCode = action.payload;
    },
    getTemplateId: (state, action) => {
      state.id = action.payload;
    },
    getTemplateFromApi: (state, action) => {
      state.apiTemplate = action.payload;
    },
    getSingleTemplate: (state, action) => {
      state.singleTemplate = action.payload;
    },
    getUpdateTemplateData: (state, action) => {
      state.updateTemplateData = action.payload;
    },
  },
});

export const {
  getTemplate,
  getAllTemplates,
  getTemplateCode,
  getTemplateId,
  getTemplateFromApi,
  getSingleTemplate,
  getUpdateTemplateData,
} = templateSlice.actions;

export default templateSlice.reducer;
