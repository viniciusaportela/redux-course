import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducers from "./reducers";

const composeEnhanced = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunk, logger];

const store = createStore(
  reducers,
  composeEnhanced(applyMiddleware(...middlewares))
);

export default store;
