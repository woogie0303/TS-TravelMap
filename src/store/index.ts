import { configureStore } from "@reduxjs/toolkit";
import financeReducer from "./locationAPI/locationSlice";

export const store = configureStore({
  reducer: {
    financeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
