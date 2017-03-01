import { combineReducers } from "redux";
import newlyBookInfoReducer from './newlyBookInfoReducer'

const rootReducer = combineReducers({
  newlyBookInfos: newlyBookInfoReducer
});

export default rootReducer;
