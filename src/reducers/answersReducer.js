import {
  UPDATE_ANSWERS
} from '../types';

export default (state = [], action) => {
  switch (action.type) {
    case UPDATE_ANSWERS:
      return [
        ...state.slice(0, action.sectionNum),
        action.answers,
        ...state.slice(action.sectionNum + 1),
      ]
    default:
      return state;
  }
};
