import {
  UPDATE_ANSWERS,
  RESET_DATA,
} from '../types';

export const updateAnswers = (answers) => ({
  type: UPDATE_ANSWERS,
  answers,
});

export const resetData = () => ({
  type: RESET_DATA,
})