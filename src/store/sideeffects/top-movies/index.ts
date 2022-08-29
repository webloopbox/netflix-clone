import { call, put, takeLatest } from "redux-saga/effects";
import { getGenres } from "../../../api/genres";
import { getTopMovies } from "../../../api/movies";
import { movieActions } from "../../movieSlice";
import { setTopMovieReady } from "../../uiSlice";

function* fetchTopMovies(): any {
  try {
    const categoriesData = yield call(getGenres)
    const topMovieData = yield call(getTopMovies)
    yield put(movieActions.fetchSuccess({ categoriesData, topMovieData }))
    yield put(setTopMovieReady(true));
  } catch (error: any) {
    yield put(movieActions.fetchFailure(error))
  }
}

export default function* topMoviesSagas() {
  yield takeLatest(movieActions.fetch.type, fetchTopMovies);
}


