import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Input, Icon } from 'antd';

const FormItem = Form.Item;

const handleSubmit = (event, form) => {
  event.preventDefault();
  debugger;
  form.validateFields((err, values) => {
    if (!err) {
      console.log('Received values of form: ', values);
    }
  });
};

const LoginForm = ({ form }) => (
  <Form onSubmit={event => handleSubmit(event, form)} className="login-form">
    <FormItem>
      {form.getFieldDecorator('userName', {
        rules: [{ required: true, message: 'Please input your username!' }],
      })(
        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
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
);

export default Form.create()(LoginForm);