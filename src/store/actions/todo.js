import ActionTypes from "./constants";

export const createTodo = (payload) => {
  return { type: ActionTypes.CREATE_TODO, payload };
};

export const deleteTodo = (payload) => {
  return { type: ActionTypes.DELETE_TODO, payload };
};

export const editTodoCompleted = (payload) => {
  return { type: ActionTypes.EDIT_TODO_COMPLETED, payload };
};

export const editTodoTitle = (payload) => {
  return { type: ActionTypes.EDIT_TODO_TITLE, payload };
};

export const changeFilterType = (payload) => {
  return { type: ActionTypes.CHANGE_FILTER_TYPE, payload };
};

export const clearTodos = () => {
  return { type: ActionTypes.CLEAR_COMPLETED_TODOS };
};

export const toggleAll = (payload) => {
  return { type: ActionTypes.TOGGLE_ALL_TODOS, payload };
};
