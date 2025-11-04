import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./reducer/weatherslice"; // ✅ default reducer import

export const store = configureStore({
  reducer: {
    weather: weatherReducer, // ✅ reducer, not thunk
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});


