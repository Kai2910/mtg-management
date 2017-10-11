import React from 'react';
import { Button, Form, Icon, Input, message } from 'antd';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { checkUserPermissions,
  login,
  loadUsers,
} from '../../redux/login/actions';
import Page from '../../modules/components/widgets/page/page';

const FormItem = Form.Item;

const mapStateToProps = state => ({
  users: state.loginReducer.users,
  // what?
  // 1. Why do you need to look for the size?
  // 2. If it is not stored, you should just have set it up to false... :/ Because your app is not working :)
  isLoggedIn: _.size(state.loginReducer.isLoggedIn) > 0 ? state.loginReducer.isLoggedIn : JSON.parse(localStorage.getItem('isLoggedIn')),
  loginError: state.loginReducer.loginError,
  loggingIn: state.loginReducer.loggingIn,
});

const mapDispatchToProps = dispatch => ({
  onLogin: () => (dispatch(login())),
  onLoadUsers: () => (dispatch(loadUsers())),
  onCheckUser: (currentUser, users) => (dispatch(checkUserPermissions(currentUser, users))),
  onRedirect: () => (dispatch(push('/all-cards'))),
});

const handleSubmit = (event, form, users, onCheckUser, onLogin) => {
  event.preventDefault();
  form.validateFields((err, values) => {
    if (!err) {
      onLogin();
      onCheckUser(values, users);
    }
  });
};

class Login extends React.Component {
  componentWillMount() {
    const { onLoadUsers } = this.props;

    onLoadUsers();
  }

  // Taken from the Carento project?
  componentWillReceiveProps({ loginError }) {
    const { loginError: lastLoginError, form } = this.props;

    if (loginError !== lastLoginError) {
      message.error(loginError.message);
      form.resetFields(['password']);
      form.getFieldInstance('password').focus();
    }
  }

  render() {
    const {
      loginError,
      loggingIn,
      form,
      isLoggedIn,
      onCheckUser,
      onLogin,
      onRedirect,
      users,
    } = this.props;

    return (
      <div>
        {
          isLoggedIn ?
            onRedirect() :
            <Page header={'Login'}>
              <Form
                onSubmit={event => handleSubmit(event, form, users, onCheckUser, onLogin, loginError)}
                className="login-form"
              >
                <FormItem>
                  {form.getFieldDecorator('email', {
                    rules: [{ required: true, message: 'Please input your email!' }],
                  })(
                    <Input
                      prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                      placeholder="Email"
                    />,
                  )}
                </FormItem>
                <FormItem>
                  {form.getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                  })(
                    <Input
                      prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                      type="password"
                      placeholder="Password"
                    />,
                  )}
                </FormItem>
                <FormItem>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    loading={loggingIn}
                  >
                    Log in
                  </Button>
                  Or <Link to="/register">register now!</Link>
                </FormItem>
              </Form>
            </Page>
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Login));
