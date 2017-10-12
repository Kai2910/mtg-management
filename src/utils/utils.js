import _ from 'lodash';

const parseManaCosts = (manaCosts) => {
  const found = [];
  if (manaCosts !== undefined) {
    const rxp = /{([^}]+)}/g;
    let curMatch;

    while (curMatch = rxp.exec(manaCosts)) {
      found.push(curMatch[1]);
    }
  }

  return found;
};

const findDeck = (deckId) => {
  const decks = JSON.parse(localStorage.getItem('decks'));

  return  _.find(decks, d => d.id === deckId);
};

export {
  findDeck,
  parseManaCosts,
}