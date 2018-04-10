import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";

import userReducer from "./ducks/userReducer";

const reducers = combineReducers({ userReducer });

const store = createStore(reducers, applyMiddleware(promiseMiddleware()));

export default store;
