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
      state.value = action.payload;
    },
    errProduct: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { loadProduct, getProduct, errProduct } = productSlice.actions;
