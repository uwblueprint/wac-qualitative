import {
  INCREMENT_PAGE_NUM,
  DECREMENT_PAGE_NUM,
  RESET_DATA
} from '../types';

const defaultState = 0;

export default (state = defaultState, action) => {
  switch (action.type) {
    case INCREMENT_PAGE_NUM:
      return state + 1;
    case DECREMENT_PAGE_NUM:
      return state - 1;
    case RESET_DATA:
      return defaultState;
    default:
      return state;
  }
};
