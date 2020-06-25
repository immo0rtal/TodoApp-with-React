import React from "react";
import ListItem from "@/ListItem";
import { useSelector } from "react-redux";
import { filterBy } from "#/utils/filterBy";
import * as Styled from "./style.js";

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);
  const filterType = useSelector((state) => state.todo.filterController);

  React.useEffect(() => {
    localStorage.setItem("todoAppList", JSON.stringify(todos));
  }, [todos]);

  const _renderItems = React.useMemo(() => {
    const filteredTodos = filterBy(Object.values(todos), filterType);
    if (!filteredTodos.length) {
      return <Styled.Empty>...</Styled.Empty>;
    }
    return filteredTodos.map((todo) => <ListItem key={todo.id} todo={todo} />);
  }, [todos, filterType]);

  return <Styled.TodoListWrapper>{_renderItems}</Styled.TodoListWrapper>;
};

export default React.memo(TodoList);
