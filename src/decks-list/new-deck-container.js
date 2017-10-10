import React from 'react';
import { message } from 'antd';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { createDeck } from './actions';
import NewDeckForm from './componenten/new-deck-form';

const mapDispatchToProps = dispatch => ({
  onRedirect: () => (dispatch(push('/decks'))),
});

const handleSubmit = (event, form) => {
  event.preventDefault();
  form.validateFields((err, values) => {
    if (!err) {
      createDeck(values);
      message.success('Das Deck wurde erfolgreich gespeichert.');
      form.resetFields(['deckName', 'description']);
      form.getFieldInstance('deckName').focus();
    }
  });
};

const NewDeckContainer = ({ onRedirect }) => (
  <div>
    <h2>New Deck</h2>
    <NewDeckForm
      handleSubmit={handleSubmit}
      onRedirect={onRedirect}
    />
  </div>
);

export default connect(null, mapDispatchToProps)(NewDeckContainer);
