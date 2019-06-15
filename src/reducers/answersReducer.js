import {
  UPDATE_ANSWERS,
  RESET_DATA
} from '../types';

const defaultState = {}

export default (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_ANSWERS:
      return {
        ...state,
        ...action.answers,
      }
    case RESET_DATA:
      return defaultState;
    default:
      return state;
  }
};