import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import designSlice from "./designSlice";
import counterSlice from "./CounterSlice";
import generalSlice from "./generalSlice";
import socialSlice from "./socialSlice";
import panelSlice from "./panelSlice";
import templateSlice from "./templateSlice";
import bannerSlice from "./bannerSlice";
import ToggleSlice from "./toggleSlice";
import thirdPartyImageSlice from "./thirdPartyImageSlice";
import chartData from "./ChartSlice";
import UserSlice from "./UserSlice";

const combinedReducer = combineReducers({
  counter: counterSlice,
  design: designSlice,
  general: generalSlice,
  social: socialSlice,
  panel: panelSlice,
  template: templateSlice,
  banner: bannerSlice,
  toggle: ToggleSlice,
  thirdPartyImages: thirdPartyImageSlice,
  chart: chartData,
  UserSlice: UserSlice,
});

const rootReducer = (state, action) => {
  if (action.type === "logout") {
    state = undefined;
  }
  return combinedReducer(state, action);
};

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// const store = configureStore({
//   reducer: {
//     counter: counterSlice,
//     design: designSlice,
//     general: generalSlice,
//     social: socialSlice,
//     panel: panelSlice,
//     template: templateSlice,
//     banner: bannerSlice,
//     toggle: ToggleSlice,
//     thirdPartyImages: thirdPartyImageSlice,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });

// export default store;
