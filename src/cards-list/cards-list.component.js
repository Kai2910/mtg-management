import React from 'react';
import { connect } from 'react-redux';
import { Card, Col, Row, Pagination } from 'antd';
import _ from 'lodash';
import SearchField from './search-field/search-field.component';
import { fetchCardsRequest, searchCardsRequest } from './actions';

const DEFAULT_PAGE = 1;
const DEFAULT_PAGE_SIZE = 25;

const mapStateToProps = (state) => {
  return (
    {
      cards: state.cardsListReducer.cards,
      loading: state.cardsListReducer.isLoading,
      searching: state.cardsListReducer.isSearching,
      searchResult: state.cardsListReducer.searchCardsResult,
    }
  )
};

const mapDispatchToProps = (dispatch) => {
  return ({
    loadCards: () => {return (dispatch(fetchCardsRequest(DEFAULT_PAGE, DEFAULT_PAGE_SIZE)));},
    onChangePage: (page, pageSize) => {return (dispatch(fetchCardsRequest(page, pageSize)));},
    onChangePageSize: (page, pageSize) => {return (dispatch(fetchCardsRequest(page, pageSize)));},
    onSearch: (keyword) => {return (dispatch(searchCardsRequest(keyword)))}
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
      loading,
      onSearch,
      searchResult,
    } = this.props;

    return (
      <div>
        <Row>
          <Col>
            <SearchField onSearchCards={onSearch}/>
          </Col>
        </Row>
        <Row>
          {
            _.size(searchResult) === 0 &&
              cards.map((card) => {
                return <Col xs={13} sm={10} md={7} lg={5} xl={4} key={card.multiverseid}>
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
            })
          }
          {
            _.size(searchResult) > 0 &&
            searchResult.map((card) => {
              return <Col xs={2} sm={4} md={6} lg={8} xl={10} key={card.multiverseid}>
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
            })
          }
        </Row>
        <Row>
          <Col>
            <Pagination
              showSizeChanger
              onShowSizeChange={onChangePageSize}
              onChange={onChangePage}
              defaultCurrent={DEFAULT_PAGE}
              total={34207}
              defaultPageSize={DEFAULT_PAGE_SIZE}
              pageSizeOptions={['25', '50', '75', '100']}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsList);