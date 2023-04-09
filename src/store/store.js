import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./productSlice";
import { filterProductSlice } from "./filterProductSlice";
import { cartSlice } from "./cartSlice";
import { cartCountSlice } from "./cartCountSlice";
export const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    filterProduct: filterProductSlice.reducer,
    cart: cartSlice.reducer,
    cartCount: cartCountSlice.reducer,
  },
});
