import {GET_BOOK_INFO} from "../actions/newlyBookInfoAction";
import {successActionType} from "../middleware/promiseMiddleWare";


const newlyBookInfoReducer = (state = {newlyBookInfos:{}}, action = {}) => {
  switch (action.type) {
    case successActionType(GET_BOOK_INFO):
      return Object.assign({}, state, {newlyBookInfos: action.res});

    default:
      return state;
  }
};

export default newlyBookInfoReducer;
