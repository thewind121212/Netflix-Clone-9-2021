import { movieSlice } from "./movieReducer/movies.slice";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    movies: movieSlice.reducer,
  },
});

export default store;
