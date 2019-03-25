import * as types from '../types'

export const increment = (count) => ({
    type: types.INCREMENT_COUNT,
    payload: { count }
});

export const decrement = (count) => ({
    type: types.DECREMENT_COUNT,
    payload: { count }
});