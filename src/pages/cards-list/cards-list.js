import React from 'react';
import _ from 'lodash';
import { message } from 'antd';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import CardsFilter from './filter';
import List from '../../modules/components/widgets/list/list';
import {
  addCardToDeck,
  fetchCardRequest,
  fetchCardsRequest,
  fetchTypesRequest,
  hideModal,
  searchCardsRequest,
  showModal,
} from '../../redux/cards-list/actions';
import {
  fetchDecks,
} from '../../decks-list/actions';
import Page from '../../modules/components/widgets/page/page';
import DetailModal from './modal';

const mapStateToProps = state => (
  {
    cards: state.cardsListReducer.cards,
    cardId: state.cardsListReducer.cardId,
    cardLoading: state.cardsListReducer.isCardLoading,
    decks: state.decksReducer.decks,
    isLoggedIn: _.size(state.loginReducer.isLoggedIn) > 0 ? state.loginReducer.isLoggedIn : JSON.parse(localStorage.getItem('isLoggedIn')),
    loading: state.cardsListReducer.isLoading,
    params: state.cardsListReducer.params,
    searching: state.cardsListReducer.isSearching,
    searchResult: state.cardsListReducer.searchCardsResult,
    singleCard: state.cardsListReducer.card,
    totalCount: state.cardsListReducer.totalCount,
    types: state.cardsListReducer.types,
    visible: state.cardsListReducer.visible,
  }
);

const handleAddCardToDeck = (card, deckIndex, dispatch) => {
  dispatch(addCardToDeck(card, deckIndex));
  message.success('Card added successfully.');
};

const handleFilterByColor = (colors, dispatch, currentParams) => {
  const params = { ...currentParams, colors: colors.join(',') };

  return dispatch(fetchCardsRequest(params));
};

const handleChangePage = (currentParams, page, pageSize, dispatch) => {
  const params = { ...currentParams, page, pageSize };

  return dispatch(fetchCardsRequest(params));
};

const handleSearch = (currentParams, dispatch, keyword) => {
  const params = { ...currentParams, name: keyword };

  return dispatch(searchCardsRequest(params));
};

const handleFilterByType = (type, dispatch, currentParams) => {
  const params = { ...currentParams, type };

  return dispatch(fetchCardsRequest(params));
};

const handleRedirect = (errorMessage, path, dispatch) => {
  message.error(errorMessage);
  dispatch(push(path));
};

const mapDispatchToProps = dispatch => ({
  loadCards: params => (dispatch(fetchCardsRequest(params))),
  loadCard: cardId => (dispatch(fetchCardRequest(cardId))),
  loadDecks: () => (dispatch(fetchDecks())),
  loadTypes: () => (dispatch(fetchTypesRequest())),
  onAddCard: (card, deckIndex) => { handleAddCardToDeck(card, deckIndex, dispatch); },
  onChangePage: (params, page, pageSize) => { handleChangePage(params, page, pageSize, dispatch); },
  onChangePageSize: (params, page, pageSize) => {
    handleChangePage(params, page, pageSize, dispatch);
  },
  onFilterByColor: (colors, params) => { handleFilterByColor(colors, dispatch, params); },
  onFilterByType: (type, params) => { handleFilterByType(type, dispatch, params); },
  onRedirect: () => handleRedirect('Sie haben keine Berechtigung für diese Seite.', '/', dispatch),
  onSearch: (params, keyword) => { handleSearch(params, dispatch, keyword); },
  onShowModal: cardId => dispatch(showModal(cardId)),
  onHideModal: () => dispatch(hideModal()),
});

class CardsList extends React.Component {
  componentWillMount() {
    const {
      loadCards,
      loadDecks,
      loadTypes,
      params,
    } = this.props;

    loadCards(params);
    loadDecks();
    loadTypes();
  }

  render() {
    const {
      cards,
      singleCard,
      cardId,
      cardLoading,
      decks,
      isLoggedIn,
      loadCard,
      onAddCard,
      onChangePage,
      onChangePageSize,
      onFilterByColor,
      onFilterByType,
      onRedirect,
      onShowModal,
      onHideModal,
      params,
      loading,
      onSearch,
      totalCount,
      types,
      visible,
    } = this.props;

    return (
      <div>
        {isLoggedIn ?
          <Page header="All Cards">
            <CardsFilter
              onFilterByColor={onFilterByColor}
              onFilterByType={onFilterByType}
              onSearchCards={onSearch}
              params={params}
              types={types}
            />
            <List
              cards={cards}
              onChangePageSize={onChangePageSize}
              onChangePage={onChangePage}
              onShowModal={onShowModal}
              params={params}
              totalCount={totalCount}
            />
            <DetailModal
              cardId={cardId}
              card={singleCard}
              decks={decks}
              visible={visible}
              onAddCard={onAddCard}
              onHideModal={onHideModal}
              loadCard={loadCard}
              loading={cardLoading}
            />
          </Page> :
          onRedirect()
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsList);
