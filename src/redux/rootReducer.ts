import { movieSlice } from "./movieReducer/movies.slice";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import { dotSlice } from "./globalResponsive/dotSlider.slice";

const store = configureStore({
  reducer: {
    movies: movieSlice.reducer,
    dot: dotSlice.reducer,
  },
});

export default store;
