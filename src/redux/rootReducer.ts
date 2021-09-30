import { createSlice, configureStore } from "@reduxjs/toolkit";
import { homeMovieSlice } from "./movieReducer/homeMoive.slice";

const store = configureStore({
  reducer: homeMovieSlice.reducer,
});

export default store;
