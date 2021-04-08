import actionTypes from "./../actionTypes";

export const getPosts = () => {
  return {
    type: actionTypes.GET_POSTS,
  };
};

export const getPostsSuccess = (payload) => {
  return {
    type: actionTypes.GET_POSTS_SUCCESS,
    payload,
  };
};

export const getPostsError = (payload) => {
  return {
    type: actionTypes.GET_POSTS_ERROR,
    payload,
  };
};
