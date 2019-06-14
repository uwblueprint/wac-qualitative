import {
  UPDATE_ANSWERS,
  RESET_DATA,
} from '../types';

export const updateAnswers = (answers, sectionNum) => ({
  type: UPDATE_ANSWERS,
  sectionNum,
  answers,
});

export const resetData = () => ({
  type: RESET_DATA,
})