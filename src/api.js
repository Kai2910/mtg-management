import { ajax } from 'rxjs/observable/dom/ajax';
import axios from 'axios';

const Api = {
  getCards: (params, keyword = '') =>
    axios.get(`https://api.magicthegathering.io/v1/cards`, {
      params: params
    })
      .then(response =>  response ),

};

export default Api;