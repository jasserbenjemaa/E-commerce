import { createSlice } from "@reduxjs/toolkit";

const pageNumbers = {
  value: 0,
};
const pageNumbersSlice = createSlice({
  name: "pageNumbers",
  initialState: pageNumbers,
  reducers: {
    setPageNumbers: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { setPageNumbers } = pageNumbersSlice.actions;
export default pageNumbersSlice.reducer;
