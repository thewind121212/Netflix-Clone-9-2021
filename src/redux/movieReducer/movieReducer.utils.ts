import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios/axios.api";
import { dataMovie } from "../../axios/request.api";

export const fetchMovies = createAsyncThunk(
  "fetchMovies",
  async (typeMovie: string, thunk) => {
    const movieKey = Object.keys(dataMovie[typeMovie]);
    const moviesData = await Promise.all(
      movieKey.map(async (key: any) => {
        const moviesData = await axios.get(dataMovie[typeMovie][key].api);
        return {
          id: dataMovie[typeMovie][key].id,
          title: dataMovie[typeMovie][key].titleName,
          movies: moviesData.data.results,
          big: dataMovie[typeMovie][key].big,
        };
      })
    );
    return { typeMovie: typeMovie, movies: moviesData };
  }
);
