import React from 'react';
import { connect } from 'react-redux';
import RegisterForm from './register-form';
import { createUser, setConfirmDirty } from './actions';

const mapStateToProps = state => (
  {
    confirmDirty: state.registerReducer.confirmDirty,
    redirect: state.registerReducer.redirect,
  }
);

const mapDispatchToProps = dispatch => ({
  confirmDirtySet: status => (dispatch(setConfirmDirty(status))),
  saveUser: values => (createUser(values, dispatch)),
});

const RegisterContainer = ({ confirmDirtySet, confirmDirty, saveUser }) => (
  <div>
    <RegisterForm
      confirmDirtySet={confirmDirtySet}
      confirmDirty={confirmDirty}
      createUser={saveUser}
    />
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
