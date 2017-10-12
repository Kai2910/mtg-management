import React from 'react';
import { message } from 'antd';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { updateDeck } from '../../redux/decks/actions';
import DeckForm from '../../modules/components/widgets/deck-form/deck-form';
import Page from '../../modules/components/widgets/page/page';
import { findDeck } from '../../utils/utils';

const mapDispatchToProps = dispatch => ({
  onRedirect: () => (dispatch(push('/decks'))),
});

const handleSubmit = (event, form, deckId) => {
  event.preventDefault();
  form.validateFields((err, values) => {
    if (!err) {
      updateDeck(deckId, values);
      message.success('The deck has been successfully updated');
    }
  });
};

const EditDeckContainer = ({ onRedirect, match }) => {
  const deckId = match.params.deckId;

  return (
    <Page header={'Edit Deck'}>
      <DeckForm
        handleSubmit={(event, form) => handleSubmit(event, form, deckId)}
        onRedirect={onRedirect}
        deck={findDeck(deckId)}
      />
    </Page>
  );
};

export default connect(null, mapDispatchToProps)(EditDeckContainer);
