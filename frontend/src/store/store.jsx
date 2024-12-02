import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./pageNumber";
export const store = configureStore({
  reducer: {
    pageNumbers: pageReducer,
  },
});
