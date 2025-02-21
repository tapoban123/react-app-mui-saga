import {
  createUserAPI,
  deleteUserByIdAPI,
  getUsersAPI,
  getUserByIdAPI,
  updateUserAPI,
} from "../../apis/index";
import {
  addUserSlice,
  deleteUserSlice,
  editUserSlice,
  getUsersSlice,
} from "../slice/users";
import {
  CREATE_USER,
  DELETE_USER_BY_ID,
  GET_USER_BY_ID,
  GET_USERS,
  UPDATE_USER_BY_ID,
} from "../types";

import { put, takeEvery } from "redux-saga/effects";

export function* getUsersSaga() {
  const users = yield getUsersAPI();
  yield put(getUsersSlice(users.data));
}
export function* getUserByIdSaga(action) {
  yield getUserByIdAPI(action.id);
  yield put(getUsersSlice(action.id));
}
export function* createUserSaga(action) {
  yield createUserAPI(action.user);
  yield put(addUserSlice(action.user));
}
export function* updateUserSaga(action) {
  yield updateUserAPI(action.user);
  yield put(editUserSlice(action.user));
}
export function* deleteUserSaga(action) {
  yield deleteUserByIdAPI(action.id);
  yield put(deleteUserSlice(action.id));
}

export function* watchUserAsync() {
  yield takeEvery(GET_USERS, getUsersSaga);
  yield takeEvery(GET_USER_BY_ID, getUserByIdSaga);
  yield takeEvery(CREATE_USER, createUserSaga);
  yield takeEvery(UPDATE_USER_BY_ID, updateUserSaga);
  yield takeEvery(DELETE_USER_BY_ID, deleteUserSaga);
}
