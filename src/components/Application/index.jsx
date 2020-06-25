import React from "react";
import TodoList from "@/TodoList";
import Header from "@/Header";
import Footer from "@/Footer";
import { createTodo, toggleAll } from "#/store/actions/todo";
import { useDispatch, useSelector } from "react-redux";
import { declOfNum } from "#/utils/declOfNum.js";
import * as Styled from "./style.js";

const Application = () => {
  const [title, setTitle] = React.useState("");
  const dispatch = useDispatch();
  const getTodos = useSelector((state) => state.todo.todos);

  const activeTodosCount = React.useMemo(() => {
    return Object.values(getTodos).filter((todo) => !todo.completed).length;
  }, [getTodos]);

  const _renderTodosLeftCount = React.useMemo(() => {
    return `${activeTodosCount} ${declOfNum(activeTodosCount)} left`;
  }, [activeTodosCount]);

  const dispatchTodo = React.useCallback(() => {
    if (title !== "") {
      dispatch(
        createTodo({
          id: Date.now(),
          title: title,
          completed: false,
        })
      );
      setTitle("");
    }
  }, [dispatch, title]);

  const handleInputChange = React.useCallback((event) => {
    setTitle(event.target.value);
  }, [setTitle]);

  const handleInputKeyDown = React.useCallback(
    (event) => {
      if (event.keyCode === 13) {
        dispatchTodo();
      }
    },
    [dispatchTodo]
  );

  const handleToggleAll = React.useCallback(() => {
    dispatch(toggleAll({ activeTodosCount }));
  }, [dispatch, activeTodosCount]);

  return (
    <Styled.Wrapper>
      <Header />
      <Styled.Title>TodoApp</Styled.Title>
      <Styled.ItemsCounter>{_renderTodosLeftCount}</Styled.ItemsCounter>
      <Styled.InputWrapper>
        <Styled.Input
          value={title}
          onChange={handleInputChange}
          placeholder="Input your todos"
          onBlur={dispatchTodo}
          onKeyDown={handleInputKeyDown}
        />
        <Styled.ToggleAll onClick={handleToggleAll} />
      </Styled.InputWrapper>
      <TodoList />
      <Footer />
    </Styled.Wrapper>
  );
};

export default React.memo(Application);
