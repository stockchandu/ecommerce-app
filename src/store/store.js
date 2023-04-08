import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./productSlice";
import { filterProductSlice } from "./filterProductSlice";
import { cartSlice } from "./cartSlice";
export const store = configureStore({
  reducer: {
    // these keys is used in useSelector hooks to get the data
    product: productSlice.reducer,
    filterProduct: filterProductSlice.reducer,
    cart: cartSlice.reducer,
  },
});

// configureStore is same like createStore - its take root
// createSlice - automatically generate action type and action creators
// reducers - think like an function where we can update our state
