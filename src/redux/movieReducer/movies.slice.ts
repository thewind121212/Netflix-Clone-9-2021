import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "./movieReducer.utils";

interface homeMovieType {
  [key: string]: any;
  defaultPage: any;
  tvShow: any;
  movies: any;
}

const initialState: homeMovieType = {
  defaultPage: [],
  movies: [],
  tvShow: [],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action: any) => {
      if (action.payload.typeMovie === "defaultPage") {
        state.defaultPage = action.payload.movies;
      }
      if (action.payload.typeMovie === "tvShow") {
        state.tvShow = action.payload.movies;
      }
      if (action.payload.typeMovie === "movies") {
        state.movies = action.payload.movies;
      }
    });
  },
});
