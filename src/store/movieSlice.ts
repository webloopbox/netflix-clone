import { createAction, createSlice } from '@reduxjs/toolkit';
import { numbers } from '../components/MovieRankingNumbers';
import { CategoriesDataType, MoviesInitState, TopMovieDataType } from '../models/Movies';

const initialState: MoviesInitState = {
  topMovies: []
}

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    fetchSuccess: (state, { payload }) => {

      const sortedMovies = payload.topMovieData.results.sort((a: any, b: any) => b.popularity - a.popularity) // sort movies by popularity
      const only10Movies = sortedMovies.slice(0, 10)

      const changeGenre = only10Movies.map((item: any) => {

        const newGenreIds = item.genre_ids.map((genreId: any) => {
          return payload.categoriesData.find((genre: any) => {
            if (genreId === genre.id) return genre.name
          })

        })

        return {
          ...item,
          genre_ids: newGenreIds
        }
      })

      const mappedMovies = changeGenre.map((movie: any, index: number) => {
        return {
          id: movie.id,
          title: movie.title,
          overview: movie.overview,
          poster: 'https://image.tmdb.org/t/p/w500/' + movie.poster_path,
          genres: movie.genre_ids,
          RankingNumber: numbers[index]
        }
      })

      state.topMovies = mappedMovies
    },
    fetchFailure: (state, { payload }) => {
      console.log(payload)
    }
  }
});

export const movieActions = {
  fetch: createAction("movie/fetch"),
  fetchSuccess: createAction<{ categoriesData: CategoriesDataType, topMovieData: TopMovieDataType }>("movie/fetchSuccess"),
  fetchFailure: createAction<any>("movie/fetchFailure")
};

export default movieSlice.reducer;
