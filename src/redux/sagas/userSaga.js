import { call, put, takeLatest } from "redux-saga/effects";
import actionTypes from "../actionTypes";
import {
  getUserListSuccess,
  getUserListError,
} from "./../actions/getUserAction";
import { getUser } from "./../../apis/getUser";

function* getUserData(action) {
  try {
    const response = yield call(getUser);
    console.log(response.data);
    if (response && response.status === 200) {
      yield put(getUserListSuccess(response.data));
    }
  } catch (error) {
    yield put(getUserListError(error.response) || error);
  }
}

// watchers

export function* watchGetUserData() {
  yield takeLatest(actionTypes.GET_DATA, getUserData);
}
