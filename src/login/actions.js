import _ from 'lodash';
import { push } from 'react-router-redux';
import {
  CREATE_SESSION_FAILURE,
  CREATE_SESSION_REQUEST,
  CREATE_SESSION_SUCCESS,
  FETCH_USERS,
} from './types';

const loadUsers = () => ({
  type: FETCH_USERS,
  users: localStorage.getItem('users'),
});

const checkUserPermissions = (currentUser, users) => {
  const user = _.find(JSON.parse(users), u => (
    u.email === currentUser.email && u.password === currentUser.password),
  );

  if (user !== undefined) {
    localStorage.setItem('isLoggedIn', true);

    return ({
      type: CREATE_SESSION_SUCCESS,
      currentUser: user,
    });
  }
  localStorage.setItem('isLoggedIn', false);

  return ({
    type: CREATE_SESSION_FAILURE,
    loginError: { message: 'Die Anmeldeinformationen sind falsch.' },
  });
};

const login = () => ({
  type: CREATE_SESSION_REQUEST,
});

const logout = (dispatch) => {
  localStorage.setItem('isLoggedIn', false);

  dispatch(push('/'));
};

export {
  checkUserPermissions,
  loadUsers,
  login,
  logout,
};
