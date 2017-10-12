import React from 'react';
import { Button, Form, Icon, Input } from 'antd';

const FormItem = Form.Item;
const { TextArea } = Input;

const DeckForm = ({ form, handleSubmit, onRedirect }) => (
  <div>
    <div style={{ marginBottom: '16px' }}>
      <Button type="primary" onClick={() => onRedirect()}>
        <Icon type="left" />Backward
      </Button>
    </div>
    <Form onSubmit={event => handleSubmit(event, form)} className="login-form">
      <FormItem>
        {form.getFieldDecorator('deckName', {
          rules: [{ required: true, message: 'Please input your deckname!' }],
        })(
          <Input placeholder="Deckname" />,
        )}
      </FormItem>
      <FormItem>
        {form.getFieldDecorator('description', {
          rules: [{ required: true, message: 'Please input your Description!' }],
        })(
          <TextArea placeholder="Description" autosize />,
        )}
      </FormItem>
      <FormItem>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </FormItem>
    </Form>
  </div>
);

const mapPropsToFields = ({ deck = {} }) => {
  return ({
    deckName: { value: deck.deckName },
    description: { value: deck.description },
  });
};

export default Form.create({ mapPropsToFields })(DeckForm);
