import { all } from "redux-saga/effects";
import { moviesSage } from "./movieSaga";

export default function* rootSage() {
  yield all([...moviesSage]);
}
