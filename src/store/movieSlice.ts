import { createAction, createSlice } from "@reduxjs/toolkit";
import {
  MoviesInitState,
  TmdbMovie,
  TopMovieDataResponse,
} from "../models/Movies";
import { Genre } from "../models/Genres";
import { mapToMoviesAttached } from "helpers/mapToMoviesAttached.helper";

const initialState: MoviesInitState = {
  topMovies: [],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    fetchTopMoviesSuccess: (state, { payload }) => {
      const sortedMovies = payload.topMovieData.results.sort(
        (a: TmdbMovie, b: TmdbMovie) => b.popularity - a.popularity
      ); // sort movies by popularity

      const only10Movies = sortedMovies.slice(0, 10);

      const mappedMovies = mapToMoviesAttached(only10Movies);

      state.topMovies = mappedMovies;
    },
    fetchFailure: (state, { payload }) => {
      console.error(payload);
    },
  },
});

export const movieActions = {
  fetch: createAction("movie/fetch"),
  fetchTopMoviesSuccess: createAction<{
    genresData: Genre[];
    topMovieData: TopMovieDataResponse;
  }>("movie/fetchTopMoviesSuccess"),
  fetchFailure: createAction<string>("movie/fetchFailure"),
};

export default movieSlice.reducer;
