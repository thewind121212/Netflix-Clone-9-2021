import { createSlice } from "@reduxjs/toolkit";

interface dotSliceType {
  [dotQuantity: string]: number;
}

const initialState = {
  dotQuantity: 0,
};

export const dotSlice = createSlice({
  name: "dotsSlice",
  initialState,
  reducers: {
    getDotQuantity: (state, action) => {
      state.dotQuantity = action.payload;
    },
  },
});

export const dotSliceActions = dotSlice.actions;
