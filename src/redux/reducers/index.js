import { combineReducers } from "redux";
import post from "./post";
import user from "./user";

const reducer = combineReducers({
  post,
  user,
});

export default reducer;
