import React from 'react';
import { connect } from 'react-redux';
import { Card, Col, Row, Pagination } from 'antd';
import { fetchCardsRequest } from './actions';

const DEFAULT_PAGE = 1;
const DEFAULT_PAGE_SIZE = 25;

const mapStateToProps = (state) => {
  return (
    {
      cards: state.cardsListReducer.cards,
    }
  )
};

const mapDispatchToProps = (dispatch) => {
  return ({
    loadCards: () => {return (dispatch(fetchCardsRequest(DEFAULT_PAGE, DEFAULT_PAGE_SIZE)));},
    onChangePage: (page, pageSize) => {return (dispatch(fetchCardsRequest(page, pageSize)));},
    onChangePageSize: (page, pageSize) => {return (dispatch(fetchCardsRequest(page, pageSize)));}
  });
};

class CardsList extends React.Component {
  componentDidMount() {
    const {
      loadCards
    } = this.props;

    loadCards();
  }

  render() {
    const {
      cards,
      onChangePage,
      onChangePageSize,
    } = this.props;

    return (
      <div>
        <Pagination
          showSizeChanger
          onShowSizeChange={onChangePageSize}
          onChange={onChangePage}
          defaultCurrent={DEFAULT_PAGE}
          total={34207}
          defaultPageSize={DEFAULT_PAGE_SIZE}
          pageSizeOptions={['25', '50', '75', '100']}
        />
        <Row>
          {
            cards.map((card) => {
              return <Col span={5} key={card.multiverseid}>
                <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }} key={card.id}>
                  <div className="custom-image">
                    <img alt={card.name} width="100%" src={card.imageUrl} />
                  </div>
                </Card>
              </Col>
            })
          }
        </Row>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsList);