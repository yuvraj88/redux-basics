import actionTypes from "../actionTypes";

const initialState = {
  post: [],
  isLoading: false,
};

const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_POSTS:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.GET_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        post: payload,
      };
    default:
      return state;
  }
};

export default postReducer;
