import SET_CONFIRM_DIRTY from './types';

const initialState = {
  autoCompleteResult: [],
  confirmDirty: false,
};

function RegisterReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CONFIRM_DIRTY:
      return {
        ...state,
        confirmDirty: action.confirmDirty,
      };
    default:
      return state;
  }
}

export default RegisterReducer;
