import { createSlice } from "@reduxjs/toolkit";

export const filterProductSlice = createSlice({
  name: "filterProduct",
  initialState: {
    value: { filterByRating: [], filterByPrice: [], isFiltered: false },
  },
  reducers: {
    filterProduct: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { filterProduct } = filterProductSlice.actions;
