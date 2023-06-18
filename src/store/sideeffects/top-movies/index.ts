import { call, put, takeLatest } from "redux-saga/effects";
import { getGenres } from "../../../api/genres";
import { getTopMovies } from "../../../api/movies";
import { movieActions } from "../../movieSlice";
import { Genre } from "models/Genres";
import { TopMovieDataResponse } from "models/Movies";

function* fetchTopMovies() {
  try {
    const genresData: Genre[] = yield call(getGenres);
    const topMovieData: TopMovieDataResponse = yield call(getTopMovies);

    yield put(movieActions.fetchTopMoviesSuccess({ genresData, topMovieData }));

  } catch (error) {
    yield put(movieActions.fetchFailure((error as Error).message));
  }
}

export default function* topMoviesSagas() {
  yield takeLatest(movieActions.fetch.type, fetchTopMovies);
}
