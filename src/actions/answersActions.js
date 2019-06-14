import { UPDATE_ANSWERS } from '../types';

export const updateAnswers = (answers, sectionNum) => ({
  type: UPDATE_ANSWERS,
  sectionNum,
  answers,
});
