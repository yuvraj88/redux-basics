import { call, put, takeLatest } from "redux-saga/effects";
import actionTypes from "../actionTypes";
import { getPostsSuccess, getPostsError } from "./../actions/getPostAction";
import { getPost } from "./../../apis/getPost";

function* getUserPost(action) {
  try {
    const response = yield call(getPost);
    if (response && response.status === 200) {
      yield put(getPostsSuccess(response.data));
    }
  } catch (error) {
    yield put(getPostsError(error.response) || error);
  }
}

// watchers

export function* watchPostData() {
  yield takeLatest(actionTypes.GET_POSTS, getUserPost);
}
