import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducers as web3Reducers } from "redux-saga-web3";

const reducers = combineReducers({
  ...web3Reducers,
  router: routerReducer
});

export default reducers;
