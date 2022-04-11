import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./CounterSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
