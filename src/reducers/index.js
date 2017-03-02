import { combineReducers } from "redux";
import newlyBookInfoReducer from './newlyBookInfoReducer'

const rootReducer = combineReducers({
  newlyBooks: newlyBookInfoReducer
});

export default rootReducer;
