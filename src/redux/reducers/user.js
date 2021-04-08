import actionTypes from "../actionTypes";

const initialState = {
  userData: [],
  isLoading: false,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_DATA:
      return {
        isLoading: true,
        userData: payload,
      };

    case actionTypes.GET_DATA_SUCCESS:
      return {
        isLoading: false,
        userData: payload,
      };

    default:
      return state;
  }
};

export default userReducer;
