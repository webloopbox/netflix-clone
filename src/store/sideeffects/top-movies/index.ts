import { call, put, takeLatest } from "redux-saga/effects";
import { getGenres } from "../../../api/genres";
import { getTopMovies } from "../../../api/movies";
import { movieActions } from "../../movieSlice";

function* fetchTopMovies(): any {
  try {
    const genresData = yield call(getGenres);
    const topMovieData = yield call(getTopMovies);

    yield put(movieActions.fetchTopMoviesSuccess({ genresData, topMovieData }));
  } catch (error) {
    yield put(movieActions.fetchFailure((error as Error).message));
  }
}

export default function* topMoviesSagas() {
  yield takeLatest(movieActions.fetch.type, fetchTopMovies);
}
