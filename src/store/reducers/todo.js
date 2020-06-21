import ActionTypes from "../actions/index";
import { createReducer } from "../../utils/createReducer.js";
import omit from "lodash/omit";
import omitBy from "lodash/omitBy"
import SORTING_FILTER from "../../utils/filterTypes";

const initialState = {
  todos: localStorage.getItem("todoAppList")
    ? JSON.parse(localStorage.getItem("todoAppList"))
    : {},
  filterController: SORTING_FILTER.ALL,
};

export const todoReducer = createReducer(initialState, {
  [ActionTypes.CREATE_TODO]: (state, action) => {
    return {
      ...state,
      todos: {
        ...state.todos,
        [action.payload.id]: action.payload,
      },
    };
  },
  [ActionTypes.DELETE_TODO]: (state, action) => {
    return {
      ...state,
      todos: omit(state.todos, action.payload.id),
    };
  },
  [ActionTypes.EDIT_TODO_COMPLETED]: (state, action) => {
    return {
      ...state,
      todos: {
        ...state.todos,
        [action.payload.id]: {
          ...state.todos[action.payload.id],
          completed: !action.payload.completed,
        },
      },
    };
  },
  [ActionTypes.EDIT_TODO_TITLE]: (state, action) => {
    return {
      ...state,
      todos: {
        ...state.todos,
        [action.payload.id]: {
          ...state.todos[action.payload.id],
          title: action.payload.title,
        },
      },
    };
  },
  [ActionTypes.CLEAR_COMPLETED_TODOS]: (state) => {
    return {
      ...state,
      todos: omitBy(state.todos, (todo) => todo.completed),
    };
  },
  [ActionTypes.TOGGLE_ALL_TODOS]: (state, action) => {
    return {
      ...state,
      todos: Object.values(state.todos).reduce((acc, todo) => {
        if (action.payload.activeTodos > 0) {
          todo.completed = !todo.completed ? !todo.completed : todo.completed;
        } else {
          todo.completed = !todo.completed;
        }
        return { ...acc, [todo.id]: todo };
      }, {}),
    };
  },
  [ActionTypes.CHANGE_FILTER_TYPE]: (state, action) => {
    return {
      ...state,
      filterController: action.payload.filterType,
    };
  },
});
