import { ajax } from 'rxjs/observable/dom/ajax';

const Api = {
  getCards: (action, keyword = '') => {
    if (keyword === '') {
      return ajax.getJSON(`https://api.magicthegathering.io/v1/cards?page=${action.page}&pageSize=${action.pageSize}`)
    } else {
      return ajax.getJSON(`https://api.magicthegathering.io/v1/cards?page=${action.page}&pageSize=${action.pageSize}&name=${keyword}`);
    }
  },
};

export default Api;