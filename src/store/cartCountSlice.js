import { createSlice } from "@reduxjs/toolkit";

export const cartCountSlice = createSlice({
  name: "cartValue",
  initialState: { countCart: 0 },
  reducers: {
    increaseCount: (state) => {
      state.countCart += 1;
    },
  },
});

export const { increaseCount } = cartCountSlice.actions;
