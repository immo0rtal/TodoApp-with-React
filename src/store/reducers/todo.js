import ActionTypes from "#/store/actions/constants.js";
import { createReducer } from "#/utils/createReducer.js";
import pickBy from "lodash/pickBy";
import { SORTING_FILTER } from "#/utils/constants";
import { omit } from "#/utils/omit";

const {
  CREATE_TODO,
  DELETE_TODO,
  EDIT_TODO_COMPLETED,
  EDIT_TODO_TITLE,
  CLEAR_COMPLETED_TODOS,
  TOGGLE_ALL_TODOS,
  CHANGE_FILTER_TYPE,
} = ActionTypes;

const initialState = {
  todos: localStorage.getItem("todoAppList")
    ? JSON.parse(localStorage.getItem("todoAppList"))
    : {},
  filterController: SORTING_FILTER.ALL,
};

export const todoReducer = createReducer(initialState, {
  [CREATE_TODO]: (state, action) => {
    return {
      ...state,
      todos: {
        ...state.todos,
        [action.payload.id]: action.payload,
      },
    };
  },
  [DELETE_TODO]: (state, action) => {
    console.log("huiguig", action.payload.id);
    console.log(omit(state.todos, [action.payload.id]));
    return {
      ...state,
      todos: omit(state.todos, [action.payload.id]),
    };
  },
  [EDIT_TODO_COMPLETED]: (state, action) => {
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
  [EDIT_TODO_TITLE]: (state, action) => {
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
  [CLEAR_COMPLETED_TODOS]: (state) => {
    return {
      ...state,
      todos: pickBy(state.todos, (todo) => !todo.completed),
    };
  },
  [TOGGLE_ALL_TODOS]: (state, action) => {
    return {
      ...state,
      todos: Object.values(state.todos).reduce((acc, todo) => {
        const _todo = { ...todo }
        if (action.payload.activeTodosCount > 0) {
          _todo.completed = !_todo.completed ? !_todo.completed : _todo.completed;
        } else {
          _todo.completed = !_todo.completed;
        }
        return { ...acc, [_todo.id]: _todo };
      }, {}),
    };
  },
  [CHANGE_FILTER_TYPE]: (state, action) => {
    return {
      ...state,
      filterController: action.payload.filterType,
    };
  },
});
