import { createSlice } from "@reduxjs/toolkit";

let productInitialState = {
  value: { loading: false, product: [], err: false },
};

export const productSlice = createSlice({
  name: "product",
  initialState: productInitialState,
  reducers: {
    loadProduct: (state, action) => {
      state.value = action.payload;
    },
    getProduct: (state, action) => {
      // state is the previos value and action where we can get data
      state.value = action.payload;
    },
    errProduct: (state, action) => {
      state.value = action.payload;
    },
  },
});

// here we have to export the productSlice

export const { loadProduct, getProduct, errProduct } = productSlice.actions;
