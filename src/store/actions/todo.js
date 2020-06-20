import ActionTypes from "../actions/index";

export const createTodo = (payload) => {
  return { type: ActionTypes.CREATE_TODO, payload };
};

export const deleteTodo = (payload) => {
  return { type: ActionTypes.DELETE_TODO, payload };
};

export const editTodoCompleted = (payload) => {
  return { type: ActionTypes.EDIT_TODO_COMPLETED, payload };
};
