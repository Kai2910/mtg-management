import { push } from 'react-router-redux';
import SET_CONFIRM_DIRTY from './types';

const createUser = (values, dispatch) => {
  const user = [{
    email: values.email,
    nickname: values.nickname,
    password: values.password,
  }];

  localStorage.setItem('users', JSON.stringify(user));

  dispatch(push('/'));
};

const setConfirmDirty = confirmDirty => ({
  type: SET_CONFIRM_DIRTY,
  confirmDirty,
});

export {
  createUser,
  setConfirmDirty,
};
