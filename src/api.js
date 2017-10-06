import axios from 'axios';

const Api = {
  getCards: params =>
    axios.get('https://api.magicthegathering.io/v1/cards', {
      params,
    })
      .then(response => response),
  getCard: cardId =>
    axios.get(`https://api.magicthegathering.io/v1/cards/${cardId}`)
      .then(response => response),
  getTypes: () =>
    axios.get('https://api.magicthegathering.io/v1/types')
      .then(response => response),

};

export default Api;
