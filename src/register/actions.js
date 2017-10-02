import {
  SET_CONFIRM_DIRTY
} from './types';
import { push } from 'react-router-redux';

const createUser = (values, dispatch) => {
  const user = {
    email: values.email,
    nickname: values.nickname,
    password: values.password,
  };

  localStorage.setItem('user', JSON.stringify(user));

  dispatch(push('/'));
};

const setConfirmDirty = (confirmDirty) => {
  return ({
    type: SET_CONFIRM_DIRTY,
    confirmDirty
  });
};

export {
  createUser,
  setConfirmDirty
}