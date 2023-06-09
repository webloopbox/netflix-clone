import { createAction, createSlice } from "@reduxjs/toolkit";
import { numbers } from "../components/MovieRankingNumbers";
import {
  CategoriesDataType,
  MoviesInitState,
  TmdbMovie,
  TopMovieDataResponse,
} from "../models/Movies";

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

      const mappedMovies = only10Movies.map(
        (movie: TmdbMovie, index: number) => {
          return {
            id: movie.id,
            title: movie.title,
            overview: movie.overview,
            poster: "https://image.tmdb.org/t/p/w500/" + movie.poster_path,
            genres: movie.genre_ids,
            RankingNumber: numbers[index],
          };
        }
      );

      state.topMovies = mappedMovies;
    },
    fetchFailure: (state, { payload }) => {
      console.log(payload);
    },
  },
});

export const movieActions = {
  fetch: createAction("movie/fetch"),
  fetchTopMoviesSuccess: createAction<{
    categoriesData: CategoriesDataType;
    topMovieData: TopMovieDataResponse;
  }>("movie/fetchTopMoviesSuccess"),
  fetchFailure: createAction<any>("movie/fetchFailure"),
};

export default movieSlice.reducer;
