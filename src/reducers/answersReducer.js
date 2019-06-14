import {
  UPDATE_ANSWERS,
  RESET_DATA
} from '../types';

const defaultState = []

export default (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_ANSWERS:
      return [
        ...state.slice(0, action.sectionNum),
        action.answers,
        ...state.slice(action.sectionNum + 1),
      ]
    case RESET_DATA:
      return defaultState;
    default:
      return state;
  }
};