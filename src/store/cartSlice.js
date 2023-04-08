import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "cartValue",
  initialState: { value: { cart: [], count: 0 } },
  reducers: {
    addToCart: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addToCart } = cartSlice.actions;
