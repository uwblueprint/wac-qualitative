import { combineReducers } from "redux";
import * as storage from 'redux-storage'
import pageNum from "../reducers/pageNumReducer";
import answers from "./answersReducer";

const reducers = storage.reducer(combineReducers({
  answers,
  pageNum,
}));

export default reducers;
