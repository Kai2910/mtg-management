import {
  FETCH_USERS,
  CREATE_SESSION_FAILURE,
  CREATE_SESSION_SUCCESS, CREATE_SESSION_REQUEST
} from './types';

const initialState = {
  users: [],
  currentUser: {},
  isLoggedIn: false,
  loggingIn: false,
};

function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.users,
      };
    case CREATE_SESSION_FAILURE:
      return ({
        ...state,
        isLoggedIn: false,
        loggingIn: false,
        loginError: action.loginError
      });
    case CREATE_SESSION_REQUEST:
      return ({
        ...state,
        loggingIn: true,
      });
    case CREATE_SESSION_SUCCESS:
      return ({
        ...state,
        isLoggedIn: true,
        loggingIn: false,
        currentUser: action.user
      });
    default:
      return state
  }
}

export default LoginReducer;