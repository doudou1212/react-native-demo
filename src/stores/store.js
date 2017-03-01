import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers/index";
import promiseMiddleware from "../middleware/promiseMiddleWare";

let storeInstance = null;

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  thunk
)(createStore);

const _configureStore = function(initialState) {
  storeInstance = createStoreWithMiddleware(reducer, initialState);

  return storeInstance;
};

export default function configureStore(initialState) {
  return storeInstance || _configureStore(initialState);
};
