import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "./movieReducer.utils";

interface homeMovieType {
  [key: string]: any;
  defaultPage: any;
  tvShow: any;
  movies: any;
  loading: boolean;
}

const initialState: homeMovieType = {
  loading: true,
  defaultPage: [],
  movies: [],
  tvShow: [],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    loadingStart: (state) => {
      state.loading = true;
    },
    loadingEnd: (state) => {
      state.loading = false;
    },
  },
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

export const actions = movieSlice.actions;
