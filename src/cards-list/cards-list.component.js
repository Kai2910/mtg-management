import React from 'react';
import { connect } from 'react-redux';
import { Card, Col, Modal, Row, Select, Pagination } from 'antd';
import _ from 'lodash';
import SearchField from './search-field/search-field.component';
import FilterColorField from './componenten/color-filter-field';
import TypeFilterField from './componenten/type-filter-field';
import DetailModal from './componenten/modal';
import {
  fetchCardRequest,
  fetchCardsRequest,
  fetchTypesRequest, hideModal,
  searchCardsRequest,
  showModal,
} from './actions';

const Option = Select.Option;

const mapStateToProps = (state) => {
  return (
    {
      cards: state.cardsListReducer.cards,
      card: state.cardsListReducer.card,
      cardId: state.cardsListReducer.cardId,
      loading: state.cardsListReducer.isLoading,
      cardLoading: state.cardsListReducer.isCardLoading,
      params: state.cardsListReducer.params,
      searching: state.cardsListReducer.isSearching,
      searchResult: state.cardsListReducer.searchCardsResult,
      totalCount: state.cardsListReducer.totalCount,
      types: state.cardsListReducer.types,
      visible: state.cardsListReducer.visible,
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

const handleFilterByType = (type, dispatch, currentParams) => {
  const params = { ...currentParams, type: type};

  return dispatch(fetchCardsRequest(params))
};

const mapDispatchToProps = (dispatch) => {
  return ({
    loadCards: (params) => {return (dispatch(fetchCardsRequest(params)));},
    loadCard: (cardId) => { return (dispatch(fetchCardRequest(cardId))); },
    loadTypes: () => {return (dispatch(fetchTypesRequest()));},
    onChangePage: (params, page, pageSize) => {handleChangePage(params, page, pageSize, dispatch)},
    onChangePageSize: (params, page, pageSize) => {handleChangePage(params, page, pageSize, dispatch)},
    onFilterByColor: (colors, params) => { handleFilterByColor(colors, dispatch, params) },
    onFilterByType: (type, params) => { handleFilterByType(type, dispatch, params)},
    onSearch: (params, keyword) => { handleSearch(params, dispatch, keyword)},
    onShowModal: (cardId) => { return dispatch(showModal(cardId)); },
    onHideModal: () => { return dispatch(hideModal()); },
  });
};

class CardsList extends React.Component {
  componentWillMount() {
    const {
      loadCards,
      loadTypes,
      params
    } = this.props;

    loadCards(params);
    loadTypes();
  }

  render() {
    const {
      cards,
      card,
      cardId,
      cardLoading,
      loadCard,
      onChangePage,
      onChangePageSize,
      onFilterByColor,
      onFilterByType,
      onShowModal,
      onHideModal,
      params,
      loading,
      onSearch,
      searchResult,
      totalCount,
      types,
      visible,
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
          <Col span={6}>
            <TypeFilterField
              onFilterByType={onFilterByType}
            >
              {
                types.map((type) => {
                  return <Option key={type}>{type}</Option>
                })
              }
            </TypeFilterField>
          </Col>
        </Row>
        <br />
        <Row>
          {
            cards.map((card) => {
              return (<Col xs={13} sm={10} md={7} lg={5} xl={4} key={card.multiverseid}>
                <Card
                  style={{ width: 240 }}
                  bodyStyle={{ padding: 0 }}
                  key={card.id}
                  loading={loading}
                  onClick={() => onShowModal(card.multiverseid)}
                >
                  <div className="custom-image">
                    <img alt={card.name} width="100%" src={card.imageUrl} />
                  </div>
                </Card>
              </Col>);
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
              total={Number(totalCount)}
              defaultPageSize={params.pageSize}
              pageSizeOptions={['25', '50', '75', '100']}
            />
          </Col>
        </Row>
        <DetailModal
          cardId={cardId}
          card={card}
          visible={visible}
          onHideModal={onHideModal}
          loadCard={loadCard}
          loading={cardLoading}
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsList);