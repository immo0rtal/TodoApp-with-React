import ActionTypes from "../actions/index";
import { createReducer } from "../../utils/createReducer.js";
import _ from "lodash";

const initialState = {
  todosArray: localStorage.getItem("todoAppList")
    ? JSON.parse(localStorage.getItem("todoAppList"))
    : {},
  filterController: "all",
};

export const todoReducer = createReducer(initialState, {
  [ActionTypes.CREATE_TODO]: (state, action) => {
    return {
      ...state,
      todosArray: {
        ...state.todosArray,
        [action.payload.id]: action.payload,
      },
    };
  },
  [ActionTypes.DELETE_TODO]: (state, action) => {
    return {
      ...state,
      todosArray: _.omit(state.todosArray, action.payload.id),
    };
  },
  [ActionTypes.EDIT_TODO_COMPLETED]: (state, action) => {
    return {
      ...state,
      todosArray: {
        ...state.todosArray,
        [action.payload.id]: {
          ...state.todosArray[action.payload.id],
          completed: !action.payload.completed,
        },
      },
    };
  },
});
