import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartValue",
  initialState: { value: { cart: [] } },
  reducers: {
    addToCart: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addToCart } = cartSlice.actions;
