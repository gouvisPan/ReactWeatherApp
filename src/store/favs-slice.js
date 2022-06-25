import { createSlice } from "@reduxjs/toolkit";

const favsSlice = createSlice({
  name: "favs",
  initialState: {
    cities: [],
  },
  reducers: {
    addCity(state, action) {
      const newCity = action.payload;
      const existingCity = state.cities.find((city) => city === newCity);
      if (!existingCity) {
        state.cities.push(newCity);
      } else {
      }
    },
    removeCity(state, action) {
      const cityName = action.payload;
      state.cities = state.cities.filter((city) => city !== cityName);
    },
  },
});

export const favsActions = favsSlice.actions;

export default favsSlice;
