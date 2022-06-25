import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { favsAreVidible: false },
  reducers: {
    toggle(state) {
      state.favsAreVidible = !state.favsAreVidible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
