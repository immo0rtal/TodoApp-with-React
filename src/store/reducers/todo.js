import ActionTypes from "../actions/index";
import { createReducer } from "../../utils/createReducer.js";
import _ from "lodash";

const initialState = {
  todosArray: localStorage.getItem("todoAppList")
    ? JSON.parse(localStorage.getItem("todoAppList"))
    : {},
  filterController: "ALL",
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
  [ActionTypes.EDIT_TODO_TITLE]: (state, action) => {
    return {
      ...state,
      todosArray: {
        ...state.todosArray,
        [action.payload.id]: {
          ...state.todosArray[action.payload.id],
          title: action.payload.title,
        },
      },
    };
  },
  [ActionTypes.CLEAR_TODOS]: (state) => {
    return {
      ...state,
      todosArray: _.omitBy(state.todosArray, (todo) => todo.completed),
    };
  },
  [ActionTypes.CHANGE_FILTER_TYPE]: (state, action) => {
    return {
      ...state,
      filterController: action.payload.filterType,
    };
  },
});
