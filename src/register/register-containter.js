import React from 'react'
import { connect } from 'react-redux';
import RegisterForm from './register-form';
import { createUser, setConfirmDirty } from './actions';

const mapStateToProps = (state) => {
  return (
    {
      confirmDirty: state.registerReducer.confirmDirty,
      redirect: state.registerReducer.redirect,
    }
  )
};

const mapDispatchToProps = (dispatch) => {
  return ({
    confirmDirtySet: (status) => {return (dispatch(setConfirmDirty(status)));},
    saveUser: (values) => { return (createUser(values, dispatch));},
  });
};

const RegisterContainer = ({ confirmDirtySet, confirmDirty, saveUser }) => {
  return (
    <div>
      <RegisterForm
        confirmDirtySet={confirmDirtySet}
        confirmDirty={confirmDirty}
        createUser={saveUser}
      />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);