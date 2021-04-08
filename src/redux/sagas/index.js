import { all } from "redux-saga/effects";

import { watchGetUserData } from "./userSaga";

import { watchPostData } from "./postSaga";

const rootSaga = function* () {
  yield all([watchGetUserData(), watchPostData()]);
};

export default rootSaga;
