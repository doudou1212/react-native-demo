import { combineReducers } from "redux";
import newlyBookInfoReducer from './newlyBookInfoReducer'
import searchBookInfoReducer from './searchBookInfoReducer'

const rootReducer = combineReducers({
  newlyBooks: newlyBookInfoReducer,
  searchBooks: searchBookInfoReducer
});

export default rootReducer;
