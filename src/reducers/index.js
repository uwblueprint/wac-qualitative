import { combineReducers } from 'redux';
import { count } from '../reducers/countReducer';

const reducers = combineReducers({
  count: count
});

export default reducers;
