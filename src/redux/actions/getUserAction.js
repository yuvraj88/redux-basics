import actionTypes from "./../actionTypes";

export const getUserList = () => {
  console.log("calling is actions");
  return {
    type: actionTypes.GET_DATA,
  };
};

export const getUserListSuccess = (payload) => {
  return {
    type: actionTypes.GET_DATA_SUCCESS,
    payload,
  };
};

export const getUserListError = (payload) => {
  return {
    type: actionTypes.GET_DATA_ERROR,
    payload,
  };
};
