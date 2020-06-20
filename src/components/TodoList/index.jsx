import React from "react";
import "./index.scss";
import ListItem from "../ListItem/index.jsx";
import { useSelector } from "react-redux";

const TodoList = (props) => {
  const todosArray = useSelector((state) => state.todo.todosArray);

  React.useEffect(() => {
    localStorage.setItem("todoAppList", JSON.stringify(todosArray));
  }, [todosArray]);

  const _renderItems = React.useMemo(
    () =>
      Object.values(todosArray).map((todo, index) => {
        return <ListItem key={index} todo={todo} />;
      }),
    [todosArray]
  );

  return <div>{_renderItems}</div>;
};

export default TodoList;
