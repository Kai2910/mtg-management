import React from 'react';
import LoginForm from './login-form';

const USERS = [
  {username: 'Kai', password: '123456'},
  {username: 'Alfred', password: '123456'}
];

class LoginContainer extends React.Component {
  componentWillMount() {
    localStorage.setItem('users', JSON.stringify(USERS))
  }

  render() {
    return (
      <LoginForm />
    )
  }
}

export default LoginContainer;