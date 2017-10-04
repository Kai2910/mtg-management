import React from 'react';
import { connect } from 'react-redux';
import { Card, Col, Row, Pagination } from 'antd';
import _ from 'lodash';
import SearchField from './search-field/search-field.component';
import FilterColorField from './componenten/color-filter-field';
import { fetchCardsRequest, searchCardsRequest } from './actions';

const mapStateToProps = (state) => {
  return (
    {
      cards: state.cardsListReducer.cards,
      loading: state.cardsListReducer.isLoading,
      params: state.cardsListReducer.params,
      searching: state.cardsListReducer.isSearching,
      searchResult: state.cardsListReducer.searchCardsResult,
      totalCount: state.cardsListReducer.totalCount,
    }
  )
};

const handleFilterByColor = (colors, dispatch, currentParams) => {
  const params = {...currentParams, colors: colors.join(',')};

  return dispatch(fetchCardsRequest(params))
};

const handleChangePage = (currentParams, page, pageSize, dispatch) => {
  const params = {...currentParams, page: page, pageSize: pageSize};

  return dispatch(fetchCardsRequest(params))
};

const handleSearch = (currentParams, dispatch, keyword) => {
  const params = { ...currentParams,  name: keyword };

  return dispatch(searchCardsRequest(params))
};

const mapDispatchToProps = (dispatch) => {
  return ({
    loadCards: (params) => {return (dispatch(fetchCardsRequest(params)));},
    onChangePage: (params, page, pageSize) => {handleChangePage(params, page, pageSize, dispatch)},
    onChangePageSize: (params, page, pageSize) => {handleChangePage(params, page, pageSize, dispatch)},
    onFilterByColor: (colors, params) => { handleFilterByColor(colors, dispatch, params) },
    onSearch: (params, keyword) => { handleSearch(params, dispatch, keyword)}
  });
};

class CardsList extends React.Component {
  componentDidMount() {
    const {
      loadCards,
      params
    } = this.props;

    loadCards(params);
  }

  render() {
    const {
      cards,
      onChangePage,
      onChangePageSize,
      onFilterByColor,
      params,
      loading,
      onSearch,
      searchResult,
      totalCount
    } = this.props;

    return (
      <div>
        <Row>
          <Col span={6}>
            <SearchField
              onSearchCards={onSearch}
              params={params}
            />
          </Col>
          <Col span={6}>
            <FilterColorField
              onFilterByColor={onFilterByColor}
              params={params}
            />
          </Col>
        </Row>
        <br />
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
        </Row>
        <Row>
          <Col>
            <Pagination
              showSizeChanger
              onShowSizeChange={(page, pageSize) => onChangePageSize(params, page, pageSize)}
              onChange={(page, pageSize) => onChangePage(params, page, pageSize)}
              defaultCurrent={params.page}
              total={totalCount}
              defaultPageSize={params.pageSize}
              pageSizeOptions={['25', '50', '75', '100']}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsList);