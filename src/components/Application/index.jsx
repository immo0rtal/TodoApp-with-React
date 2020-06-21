import React from "react";
import TodoList from "../TodoList/index.jsx";
import Header from "../Header/index.jsx";
import Footer from "../Footer/index.jsx";
import { createTodo, toggleAll } from "../../store/actions/todo";
import { useDispatch, useSelector } from "react-redux";
import { declOfNum } from "../../utils/declOfNum.js";
import {
  Wrapper,
  Title,
  ItemsCounter,
  InputWrapper,
  Input,
  ToggleAll,
} from "./style.js";

const Application = () => {
  const [title, setTitle] = React.useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  const activeTodos = React.useMemo(() => {
    return Object.values(todos).filter((todo) => !todo.completed).length;
  }, [todos]);

  const _todosLeft = React.useMemo(() => {
    return `${activeTodos} ${declOfNum(activeTodos)} left`;
  }, [activeTodos]);

  const onInputChange = (event) => {
    setTitle(event.target.value);
  };

  const onInputKeyDown = (event) => {
    if (event.keyCode === 13) {
      dispatchTodo();
    }
  };

  const dispatchTodo = () => {
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
  };

  return (
    <Wrapper>
      <Header />
      <Title>TodoApp</Title>
      <ItemsCounter>{_todosLeft}</ItemsCounter>
      <InputWrapper>
        <Input
          value={title}
          onChange={onInputChange}
          placeholder="Input your todos"
          onBlur={() => dispatchTodo()}
          onKeyDown={onInputKeyDown}
        />
        <ToggleAll onClick={() => dispatch(toggleAll({ activeTodos }))} />
      </InputWrapper>
      <TodoList />
      <Footer />
    </Wrapper>
  );
};

export default Application;
