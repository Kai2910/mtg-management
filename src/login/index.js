import React from 'react';
import { Button, Form, Icon, Input, message } from 'antd';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { checkUserPermissions, loadUsers } from './actions';

const FormItem = Form.Item;

const mapStateToProps = (state) => {
  return ({
    users: state.loginReducer.users,
    isLoggedIn: _.size(state.loginReducer.isLoggedIn) > 0 ? state.loginReducer.isLoggedIn : JSON.parse(localStorage.getItem('isLoggedIn')),
    error: state.loginReducer.error
  })
};

const mapDispatchToProps = (dispatch) => {
  return ({
    onLoadUsers: () => { return (dispatch(loadUsers())); },
    onCheckUser: (currentUser, users) => { return (dispatch(checkUserPermissions(currentUser, users))); },
    onRedirect: () => { return (dispatch(push('/all-cards'))); }
  });
};

const handleSubmit = (event, form, users, onCheckUser, loginError) => {
  event.preventDefault();
  form.validateFields((err, values) => {
    if (!err && !loginError) {
      onCheckUser(values, users)
    }
  });
};

class Login extends React.Component {
  componentWillMount() {
    const { onLoadUsers } = this.props;

    onLoadUsers();
  }

  componentWillReceiveProps({ error }) {
    const { error: lastError, form } = this.props;

    if (error !== lastError) {
      message.error(error);
      form.resetFields(['password']);
      form.getFieldInstance('password').focus();
    }
  }

  render() {
    const {
      error,
      form,
      isLoggedIn,
      onCheckUser,
      onRedirect,
      users,
    } = this.props;

    return (
      <div>
        {
          isLoggedIn ?
            onRedirect() :
            <Form onSubmit={event => handleSubmit(event, form, users, onCheckUser, error)} className="login-form">
              <FormItem>
                {form.getFieldDecorator('email', {
                  rules: [{ required: true, message: 'Please input your email!' }],
                })(
                  <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Email" />
                )}
              </FormItem>
              <FormItem>
                {form.getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                )}
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
                Or <Link to="/register">register now!</Link>
              </FormItem>
            </Form>
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Login));