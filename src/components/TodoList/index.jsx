import React from "react";
import "./index.scss";
import ListItem from "../ListItem/index.jsx";

const _renderItems = [0, 1, 2].map((i)=> {
    return <ListItem key={i}/>
})

const TodoList = (props) => {
  return <div>
      {_renderItems}
  </div>;
};

export default TodoList;
