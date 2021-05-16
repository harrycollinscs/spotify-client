import { UPDATE_LOGGED_IN_STATUS, SET_ACCESS_TOKEN } from "../actions/actionTypes";

const initialState = {
  isLoggedIn: false,
  accessToken: null,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_LOGGED_IN_STATUS:
      return Object.assign({}, state, {
        isLoggedIn: action.payload
      });
    case SET_ACCESS_TOKEN:
      return Object.assign({}, state, {
        accessToken: action.payload
      });
  }

  return state;
};

export default rootReducer;