import { all, fork } from "redux-saga/effects";
import topMoviesSagas from "./top-movies";

const combinedSagas = [
  fork(topMoviesSagas),
];

export default function* rootSaga() {
  yield all(combinedSagas);
}
