import { combineReducers } from "redux";
import pageNum from "../reducers/pageNumReducer";
import * as storage from 'redux-storage'

const reducers = storage.reducer(combineReducers({
  pageNum,
}));

export default reducers;
