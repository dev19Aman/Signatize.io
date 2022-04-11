import { createSlice } from "@reduxjs/toolkit";

const chartData = createSlice({
  name: "chartSlice",
  initialState: {
    chartData: {},
  },
  reducers: {
    getChartdata: (state, action) => {
      state.chartData = action.payload;
    },
  },
});

export const { getChartdata } = chartData.actions;
export default chartData.reducer;
