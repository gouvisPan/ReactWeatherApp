import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";
import favsSlice from "./favs-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    favs: favsSlice.reducer,
  },
});

export default store;
