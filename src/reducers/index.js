import { combineReducers } from "redux";
import { count } from "../reducers/countReducer";
import { questions } from "../reducers/questionsReducer";
import { pageNum } from "../reducers/pageNumReducer";
import * as storage from 'redux-storage'

const reducers = storage.reducer(combineReducers({
  count: count,
  questions: questions,
  pageNum: pageNum

}));

export default reducers;
