import React from "react";
import "./index.scss";
import ListItem from "../ListItem/index.jsx";
import { useSelector } from "react-redux";
import { filterBy } from "../../utils/filterBy";
import styled from "styled-components";

const TodoListWrapper = styled.div``;

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);
  const filterType = useSelector((state) => state.todo.filterController);

  React.useEffect(() => {
    localStorage.setItem("todoAppList", JSON.stringify(todos));
  }, [todos]);

  const _renderItems = React.useMemo(
    () =>
      filterBy(Object.values(todos), filterType).map((todo, index) => {
        return <ListItem key={index} todo={todo} />;
      }),
    [todos, filterType]
  );

  return <TodoListWrapper>{_renderItems}</TodoListWrapper>;
};

export default TodoList;
