import { INCREMENT_PAGE_NUM, DECREMENT_PAGE_NUM } from '../types';

export default (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_PAGE_NUM:
      return state + 1;
    case DECREMENT_PAGE_NUM:
      return state - 1;
    default:
      return state;
  }
};
