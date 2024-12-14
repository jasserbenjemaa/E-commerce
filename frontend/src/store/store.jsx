import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./pageNumber";
import cartSlice from "./carte";
export const store = configureStore({
  reducer: {
    pageNumbers: pageReducer,
    cart: cartSlice,
  },
});
