import {
  FETCH_USERS,
  CREATE_SESSION_FAILURE,
  CREATE_SESSION_SUCCESS
} from './types';

const initialState = {
  users: [],
  currentUser: {},
  isLoggedIn: false,
  error: ''
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
        error: action.error
      });
    case CREATE_SESSION_SUCCESS:
      return ({
        ...state,
        isLoggedIn: true,
        currentUser: action.user
      });
    default:
      return state
  }
}

export default LoginReducer;