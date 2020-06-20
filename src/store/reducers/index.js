import { combineReducers } from "redux";
import { todoReducer } from "./todo.js";

export const rootLevelReducer = combineReducers({
  todo: todoReducer,
});
