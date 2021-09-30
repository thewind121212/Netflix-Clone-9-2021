import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios/axios.api";
import { requestMain } from "../../axios/request.api";

export const fetchMovies = createAsyncThunk(
  "fetchMovies",
  async (typeMovie, thunk) => {
    const movieKey = Object.keys(requestMain);
    const moviesData = await Promise.all(
      movieKey.map(async (key: any) => {
        const moviesData = await axios.get(key.api);
        return {
          title: key.titleName,
          movies: moviesData.data.results,
          big: key.big,
        };
      })
    );
    return moviesData;
  }
);
