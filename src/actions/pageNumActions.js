import {
  INCREMENT_PAGE_NUM,
  DECREMENT_PAGE_NUM,
} from '../types';

export const incrementPageNum = () => ({
  type: INCREMENT_PAGE_NUM
});

export const decrementPageNum = () => ({
  type: DECREMENT_PAGE_NUM
});
