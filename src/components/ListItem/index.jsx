import React from "react";
import { useDispatch } from "react-redux";
import customDblClick from "#/utils/customDbClick";
import {
  deleteTodo,
  editTodoCompleted,
  editTodoTitle,
} from "#/store/actions/todo";
import * as Styled from "./style.js";

const ListItem = React.memo((props) => {
  const { title, completed, id } = props;

  const [editing, setEditing] = React.useState(false);
  const [text, setText] = React.useState(title);
  const dispatch = useDispatch();

  const handleButtonClick = React.useCallback(() => {
    dispatch(deleteTodo({ id }));
  }, [dispatch, id]);

  const handleCheckboxClick = React.useCallback(() => {
    dispatch(editTodoCompleted({ id, completed: completed }));
  }, [dispatch, id, completed]);

  const editTodo = React.useCallback(() => {
    setEditing(false);
    if (!text) {
      dispatch(deleteTodo({ id }));
    } else {
      dispatch(editTodoTitle({ title: text, id }));
    }
  }, [dispatch, id, text]);

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

  const handleInputChange = React.useCallback((event) => {
    setText(event.target.value);
  }, []);

  return (
    <Styled.Wrapper onClick={customDblClick(() => setEditing(true))}>
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
              completed={completed}
            />
            <Styled.ItemText>{title}</Styled.ItemText>
            <Styled.DeleteButton onClick={handleButtonClick} />
          </>
        )}
      </Styled.InnerWrapper>
    </Styled.Wrapper>
  );
});

export default ListItem;
