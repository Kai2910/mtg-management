import React from 'react';
import { Button, Col, Dropdown, Icon, message, Menu, Modal, Row } from 'antd';
import { connect } from 'react-redux';
import { addCardToDeck, fetchCardRequest, hideModal } from '../../../../redux/card/actions';
import { parseManaCosts } from '../../../../utils/utils';

const menu = (card, currentDecks, onAddCard) => (
  <Menu onClick={deck => onAddCard(card, Number(deck.key))}>
    {
      currentDecks.map(deck => (<Menu.Item key={deck.id}>
        {deck.deckName}
      </Menu.Item>))
    }
  </Menu>
);

const handleAddCardToDeck = (card, deckIndex, dispatch) => {
  dispatch(addCardToDeck(card, deckIndex));
  message.success('Card added successfully.');
};

const mapStateToProps = state => (
  {
    card: state.cardReducer.card,
  }
);

const mapDispatchToProps = dispatch => (
  {
    loadCard: cardId => (dispatch(fetchCardRequest(cardId))),
    onAddCard: (card, deckIndex) => { handleAddCardToDeck(card, deckIndex, dispatch); },
    onHideModal: () => dispatch(hideModal()),
  }
);


class Card extends React.Component {
  componentDidUpdate(prevProps) {
    const { cardId, loadCard, visible } = this.props;

    if (visible && prevProps.cardId !== cardId) {
      loadCard(cardId);
    }
  }

  render() {
    const { card, decks, onAddCard, onHideModal, visible } = this.props;

    return (
      <Modal
        title={card.name}
        visible={visible}
        onCancel={() => onHideModal()}
        cancelText={'Close'}
      >
        <Row>
          <Col span={12} style={{ padding: 5 }}>
            <div className="custom-image">
              <img alt={card.name} width="100%" src={card.imageUrl} />
            </div>
          </Col>
          <Col span={12}>
            <p>{`Card Name: ${card.name}`}</p>
            <p>{'Mana Cost: '}{
              parseManaCosts(card.manaCost).map(cost =>
                (<img
                  alt="Nothing"
                  src={`http://gatherer.wizards.com/Handlers/Image.ashx?size=medium&name=${cost}&type=symbol`}
                />),
              )
            }</p>
            <p>Converted Mana Cost: {card.cmc}</p>
            <p>Types: {card.types}</p>
            <p>Card Text: {card.text}</p>
            <p>Flavor Text: {card.flavor}</p>
            <p>Expansion: {card.setName}</p>
            <p>Rarity: {card.rarity}</p>
            <p>Card Number: {card.number}</p>
            <p>Artist: {card.artist}</p>
            <p>
              <Dropdown overlay={menu(card, decks, onAddCard)}>
                <Button type="primary"><Icon type="plus" /> Add To</Button>
              </Dropdown>
            </p>
          </Col>
        </Row>
      </Modal>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);