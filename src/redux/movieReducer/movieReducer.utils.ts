import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios/axios.api";
import { dataMovie } from "../../axios/request.api";
import { actions } from "./movies.slice";

export const fetchMovies = createAsyncThunk(
  "fetchMovies",
  async (typeMovie: string, { dispatch }) => {
    dispatch(actions.loadingStart());
    const movieKey = Object.keys(dataMovie[typeMovie]);
    const moviesData = await Promise.all(
      movieKey.map(async (key: any) => {
        let moviesDataSummary = null;
        const moviesData = axios.get(dataMovie[typeMovie][key].api);
        const moviesData2 = axios.get(dataMovie[typeMovie][key].api1);
        await Promise.all([moviesData, moviesData2]).then((value: any) => {
          moviesDataSummary = value[0].data.results.concat(
            value[1].data.results
          );
        });
        return {
          id: dataMovie[typeMovie][key].id,
          title: dataMovie[typeMovie][key].titleName,
          movies: moviesDataSummary,
          big: dataMovie[typeMovie][key].big,
        };
      })
    );
    console.log("123");
    dispatch(actions.loadingEnd());
    return { typeMovie: typeMovie, movies: moviesData };
  }
);
