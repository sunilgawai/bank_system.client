import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import customerSlice from "./customerSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    store: customerSlice
  },
  devTools: true,
});

export default store;
