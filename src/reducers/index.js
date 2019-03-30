import { combineReducers } from 'redux';
import * as storage from 'redux-storage'

import { count } from '../reducers/countReducer';

const reducers = storage.reducer(combineReducers({
  count: count
}));

export default reducers;
