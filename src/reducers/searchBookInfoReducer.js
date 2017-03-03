import {SEARCH_BOOK_INFO} from "../actions/searchBookAction";
import {successActionType} from "../middleware/promiseMiddleWare";


const searchBookInfoReducer = (state = {searchBookInfos:{}}, action = {}) => {
  switch (action.type) {
    case successActionType(SEARCH_BOOK_INFO):
      return Object.assign({}, state, {searchBookInfos: action.res});

    default:
      return state;
  }
};

export default searchBookInfoReducer;
