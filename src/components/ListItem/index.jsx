import React from "react";
import { useDispatch } from "react-redux";
import customDblClick from "#/utils/customDbClick";
import {
  deleteTodo,
  editTodoCompleted,
  editTodoTitle,
} from "#/store/actions/todo";
import * as Styled from "./style.js";

const ListItem = (props) => {
  const { todo } = props;

  const [editing, setEditing] = React.useState(false);
  const [text, setText] = React.useState(todo.title);
  const dispatch = useDispatch();

  const handleButtonClick = React.useCallback(() => {
    dispatch(deleteTodo({ id: todo.id }));
  }, [dispatch, todo.id]);

  const handleCheckboxClick = React.useCallback(() => {
    dispatch(editTodoCompleted({ id: todo.id, completed: todo.completed }));
  }, [dispatch, todo.id, todo.completed]);

  const editTodo = React.useCallback(() => {
    setEditing(false);
    if (!text) {
      dispatch(deleteTodo({ id: todo.id }));
    } else {
      dispatch(editTodoTitle({ title: text, id: todo.id }));
    }
  }, [dispatch, todo.id, text]);

  const finishEditTodoBlur = React.useCallback(() => {
    editTodo();
  }, [editTodo]);

  const finishEditTodoKeyDown = React.useCallback(
    (event) => {
      if (event.keyCode === 13) {
        editTodo();
      }
    },
    [editTodo]
  );

  const handleInputChange = React.useCallback(
    (event) => {
      setText(event.target.value);
    },
    [setText]
  );

  const startEditTodo = React.useCallback(
    () => setEditing(true),
    [setEditing]
  );

  return (
    <Styled.Wrapper onClick={customDblClick(startEditTodo)}>
      <Styled.InnerWrapper>
        {editing ? (
          <Styled.HiddenInput
            value={text}
            onChange={handleInputChange}
            onBlur={finishEditTodoBlur}
            autoFocus={true}
            onKeyDown={finishEditTodoKeyDown}
          />
        ) : (
          <>
            <Styled.Checkbox
              onClick={handleCheckboxClick}
              completed={todo.completed}
            />
            <Styled.ItemText>{todo.title}</Styled.ItemText>
            <Styled.DeleteButton onClick={handleButtonClick} />
          </>
        )}
      </Styled.InnerWrapper>
    </Styled.Wrapper>
  );
};

export default React.memo(ListItem);
