import React from "react";
import { useDispatch } from "react-redux";
import { clearTodos } from "#/store/actions/todo";
import * as Styled from "./style.js";

const Footer = () => {
  const dispatch = useDispatch();

  const clearTodoButton = React.useCallback(() => {
    dispatch(clearTodos());
  }, [dispatch]);

  return (
    <Styled.Wrapper>
      <Styled.ClearTodo onClick={clearTodoButton}>
        Clear Completed
      </Styled.ClearTodo>
    </Styled.Wrapper>
  );
};

export default Footer;
