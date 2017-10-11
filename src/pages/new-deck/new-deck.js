import React from 'react';
import { message } from 'antd';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { createDeck } from '../../redux/decks/actions';
import NewDeckForm from '../../modules/components/widgets/deck-form/deck-form';

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
