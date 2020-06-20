import React from "react";
import "./index.scss";
import ListItem from "../ListItem/index.jsx";
import { useSelector } from "react-redux";
import { filterBy } from "../../utils/filterBy";

const TodoList = () => {
  const todosArray = useSelector((state) => state.todo.todosArray);
  const filterType = useSelector((state) => state.todo.filterController);

  React.useEffect(() => {
    localStorage.setItem("todoAppList", JSON.stringify(todosArray));
  }, [todosArray]);

  const _renderItems = React.useMemo(
    () =>
      filterBy(Object.values(todosArray), filterType).map((todo, index) => {
        return <ListItem key={index} todo={todo} />;
      }),
    [todosArray, filterType]
  );

  return <div>{_renderItems}</div>;
};

export default TodoList;
