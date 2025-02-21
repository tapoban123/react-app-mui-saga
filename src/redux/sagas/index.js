import { all } from "redux-saga/effects";
import { watchUserAsync } from "../sagas/user";

export function* rootSaga() {
    yield all([
        watchUserAsync()
    ])
}