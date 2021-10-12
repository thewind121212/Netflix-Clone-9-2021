import { movieSlice } from "./movieReducer/movies.slice";
import { configureStore } from "@reduxjs/toolkit";
import { dotSlice } from "./globalResponsive/dotSlider.slice";
import { previewMovieSlice } from "./previewMovie/previewMovie.slice";

const store = configureStore({
  reducer: {
    movies: movieSlice.reducer,
    dot: dotSlice.reducer,
    previewMovie: previewMovieSlice.reducer,
  },
});

export default store;
