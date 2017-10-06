import React from 'react';
import { Card, Col, Row, Modal } from 'antd';

const parseManaCosts = (manaCosts) => {
  const found = [];
  if (manaCosts !== undefined) {
    const rxp = /{([^}]+)}/g;
    let curMatch;

    while (curMatch = rxp.exec(manaCosts)) {
      found.push(curMatch[1]);
    }
  }

  return found;
};

class DetailModal extends React.Component {
  componentDidUpdate(prevProps) {
    const { cardId, loadCard, visible } = this.props;
    if (visible && prevProps.cardId !== cardId) {
      loadCard(cardId);
    }
  }

  render() {
    const { card, visible, loading, onHideModal } = this.props;
    return (
      <Modal
        title={card.name}
        visible={visible}
        onCancel={() => onHideModal()}
        cancelText="Close"
      >
        <Row>
          <Col span={12}>
            <Card
              style={{ width: 240 }}
              bodyStyle={{ padding: 0 }}
              key={card.id}
              loading={loading}
            >
              <div className="custom-image">
                <img alt={card.name} width="100%" src={card.imageUrl} />
              </div>
            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={false} style={{ width: 240 }} noHovering loading={loading}>
              <p>{`Card Name: ${card.name}`}</p>
              <p>{'Mana Cost: '}{
                parseManaCosts(card.manaCost).map(cost => <img alt="Nothing" src={`http://gatherer.wizards.com/Handlers/Image.ashx?size=medium&name=${cost}&type=symbol`} />)
              }</p>
              <p>{`Converted Mana Cost: ${card.cmc}`}</p>
              <p>{`Types: ${card.types}`}</p>
              <p>{'Card Text: '}{card.text}</p>
              <p>{`Flavor Text: ${card.flavor}`}</p>
              <p>{`Expansion: ${card.setName}`}</p>
              <p>{`Rarity: ${card.rarity}`}</p>
              <p>{`Card Number: ${card.number}`}</p>
              <p>{`Artist: ${card.artist}`}</p>
            </Card>
          </Col>
        </Row>
      </Modal>
    );
  }
}

export default DetailModal;
