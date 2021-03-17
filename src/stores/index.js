import { combineReducers } from "redux";
import todoReducer from "./todo/reducer";

const reducers = {
  todo: todoReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
