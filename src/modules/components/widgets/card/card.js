import React from 'react';
import { Col } from 'antd';

const Card = ({ card, children, key, onShowModal }) => (
  <Col
    style={{ width: 240, padding: 5 }}
    key={key}
    onClick={() => onShowModal(card.multiverseid)}
    xs={13}
    sm={10}
    md={7}
    lg={5}
    xl={4}
  >
    {children}
  </Col>
);

export default Card;
