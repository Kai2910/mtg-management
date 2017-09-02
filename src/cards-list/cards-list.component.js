import React from 'react';
import { connect } from 'react-redux';
import { fetchCards } from './actions';

const mapDispatchToProps = (dispatch) => {
  return ({
    loadCards: () => dispatch(fetchCards()),
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
    return (
      <div>Test</div>
    )
  }
}

export default connect(null, mapDispatchToProps)(CardsList);