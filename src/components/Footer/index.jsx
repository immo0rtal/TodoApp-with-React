import React from "react";
import { useDispatch } from "react-redux";
import { clearTodos } from "../../store/actions/todo";
import { Wrapper, ClearTodo } from "./style.js";

const Footer = () => {
  const dispatch = useDispatch();

  const clearTodoButton = () => {
    dispatch(clearTodos());
  };

  return (
    <Wrapper>
      <ClearTodo onClick={() => clearTodoButton()}>Clear Completed</ClearTodo>
    </Wrapper>
  );
};

export default Footer;
