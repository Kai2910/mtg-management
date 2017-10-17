import React from 'react';
import { isEmpty } from 'lodash';
import { message, Row } from 'antd';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { removeCard, updateDeck } from '../../redux/decks/actions';
import DeckForm from '../../modules/components/widgets/deck-form/deck-form';
import Page from '../../modules/components/widgets/page/page';
import { findDeck } from '../../utils/utils';
import Column from '../../modules/components/widgets/column/column';
import { showModal } from '../../redux/card/actions';
import Card from '../../modules/components/widgets/card/card';

const mapDispatchToProps = dispatch => ({
  onRedirect: () => (dispatch(push('/decks'))),
  onShowModal: cardId => dispatch(showModal(cardId)),
  onRemoveCard: (cardId, deckId) => { dispatch(removeCard(cardId, deckId)); },
});

const mapStateToProps = state => ({
  visible: state.cardReducer.visible,
  cardId: state.cardReducer.cardId,
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

const EditDeckContainer = ({ cardId, onRedirect, onRemoveCard, onShowModal, match, visible }) => {
  const deckId = match.params.deckId;
  const deck = findDeck(deckId);

  return (
    <Page header={'Edit Deck'}>
      <DeckForm
        handleSubmit={(event, form) => handleSubmit(event, form, deckId)}
        onRedirect={onRedirect}
        deck={deck}
      />
      <Row>
        { !isEmpty(deck.cards) ?
          deck.cards.map(card => (
            <Column
              style={{ width: 100 }}
              key={card.id}
              card={card}
              onShowModal={onShowModal}
            >
              <div className="custom-image">
                <img alt={card.name} width="100%" src={card.imageUrl} />
              </div>
            </Column>
          )) :
          <h3>No Cards</h3>
        }
      </Row>
      <Card
        cardId={cardId}
        decks={[]}
        visible={visible}
        deckId={deckId}
        onRemoveCard={onRemoveCard}
      />
    </Page>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(EditDeckContainer);
