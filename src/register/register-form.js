import React from 'react';
import { Button, Form, Input, Icon, Tooltip } from 'antd';

const FormItem = Form.Item;

const handleSubmit = (event, form, createUser) => {
  event.preventDefault();
  form.validateFieldsAndScroll((err, values) => {
    if (!err) {
      createUser(values);
    }
  });
};

const handleConfirmBlur = (event, confirmDirtySet) => {
  const value = event.target.value;

  if (value) {
    confirmDirtySet(true);
  }
};

const checkConfirm = (rule, value, callback, form, confirmDirty) => {
  if (value && confirmDirty) {
    form.validateFields(['confirm'], { force: true });
  }
  callback();
};

const checkPassword = (rule, value, callback, form) => {
  if (value && value !== form.getFieldValue('password')) {
    callback('Two passwords that you enter is inconsistent!');
  } else {
    callback();
  }
};

const RegisterForm = ({ form, confirmDirtySet, confirmDirty, createUser }) => (
  <Form onSubmit={event => handleSubmit(event, form, createUser)}>
    <FormItem
      label="E-mail"
    >
      {form.getFieldDecorator('email', {
        rules: [{
          type: 'email', message: 'The input is not valid E-mail!',
        }, {
          required: true, message: 'Please input your E-mail!',
        }],
      })(
        <Input />,
      )}
    </FormItem>
    <FormItem
      label="Password"
    >
      {form.getFieldDecorator('password', {
        rules: [{
          required: true, message: 'Please input your password!',
        }, {
          validator: (rule, value, callback) => {
            checkConfirm(rule, value, callback, form, confirmDirty);
          },
        }],
      })(
        <Input type="password" />,
      )}
    </FormItem>
    <FormItem
      label="Confirm Password"
    >
      {form.getFieldDecorator('confirm', {
        rules: [{
          required: true, message: 'Please confirm your password!',
        }, {
          validator: (rule, value, callback) => { checkPassword(rule, value, callback, form); },
        }],
      })(
        <Input type="password" onBlur={event => handleConfirmBlur(event, confirmDirtySet)} />,
      )}
    </FormItem>
    <FormItem
      label={(
        <span>
              Nickname&nbsp;
          <Tooltip title="What do you want other to call you?">
            <Icon type="question-circle-o" />
          </Tooltip>
        </span>
      )}
    >
      {form.getFieldDecorator('nickname', {
        rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
      })(
        <Input />,
      )}
    </FormItem>
    <FormItem>
      <Button type="primary" htmlType="submit">Register</Button>
    </FormItem>
  </Form>
);


export default Form.create()(RegisterForm);
