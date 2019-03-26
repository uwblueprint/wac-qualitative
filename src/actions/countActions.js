import * as types from '../types';

export const increment = () => ({
  type: types.INCREMENT_COUNT
});

export const decrement = () => ({
  type: types.DECREMENT_COUNT
});
