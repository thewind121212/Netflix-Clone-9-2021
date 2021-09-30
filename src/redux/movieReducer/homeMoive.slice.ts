import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios/axios.api";
import { requestMain } from "../../axios/request.api";

interface homeMovieType {
  uiLoading: boolean;
  movies: any[];
}

export const fetchMovies = createAsyncThunk(
  "fetchMovies",
  async (typeMovie, thunk) => {
    const movieKey = Object.keys(requestMain);
    const moviesData = await Promise.all(
      movieKey.map(async (key: any) => {
        const moviesData = await axios.get(requestMain[key].api);
        return {
          title: requestMain[key].titleName,
          movies: moviesData.data.results,
          big: requestMain[key].big,
        };
      })
    );
    return moviesData;
  }
);

const initialState: homeMovieType = {
  uiLoading: true,
  movies: [],
};

export const homeMovieSlice = createSlice({
  name: "homeMovie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
      state.uiLoading = false;
    });
  },
});
