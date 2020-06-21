import React from "react";
import ListItem from "../ListItem/index.jsx";
import { useSelector } from "react-redux";
import { filterBy } from "../../utils/filterBy";
import { TodoListWrapper, Empty } from "./style.js";

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);
  const filterType = useSelector((state) => state.todo.filterController);

  React.useEffect(() => {
    localStorage.setItem("todoAppList", JSON.stringify(todos));
  }, [todos]);

  const _renderItems = React.useMemo(() => {
    const filteredTodos = filterBy(Object.values(todos), filterType);
    if (!filteredTodos.length) {
      return <Empty>...</Empty>;
    }
    return filteredTodos.map((todo) => (
      <ListItem key={todo.id} todo={todo} />
    ));
  }, [todos, filterType]);

  return <TodoListWrapper>{_renderItems}</TodoListWrapper>;
};

export default TodoList;
