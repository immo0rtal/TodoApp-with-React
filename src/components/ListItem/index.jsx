import React from "react";
import { useDispatch } from "react-redux";
import customDblClick from "../../utils/customDbClick";
import {
  deleteTodo,
  editTodoCompleted,
  editTodoTitle,
} from "../../store/actions/todo";
import {
  Wrapper,
  Checkbox,
  ItemText,
  DeleteButton,
  HiddenInput,
  InnerWrapper,
} from "./style.js";

const ListItem = (props) => {
  const { todo } = props;
  const [editing, setEditing] = React.useState(false);
  const [text, setText] = React.useState(todo.title);
  const dispatch = useDispatch();

  const onButtonClick = () => {
    dispatch(deleteTodo({ id: todo.id }));
  };

  const onCheckboxClick = () => {
    dispatch(editTodoCompleted({ id: todo.id, completed: todo.completed }));
  };

  const editTodo = () => {
    setEditing(false);
    if (!text) {
      dispatch(deleteTodo({ id: todo.id }));
    } else {
      dispatch(editTodoTitle({ title: text, id: todo.id }));
    }
  };

  const finishEditTodoBlur = () => {
    editTodo();
  };

  const finishEditTodoKeyDown = (event) => {
    if (event.keyCode === 13) {
      editTodo();
    }
  };

  const onInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <Wrapper onClick={customDblClick(() => setEditing(true))}>
      <InnerWrapper>
        {editing ? (
          <HiddenInput
            value={text}
            onChange={(event) => onInputChange(event)}
            onBlur={() => finishEditTodoBlur()}
            autoFocus={true}
            onKeyDown={finishEditTodoKeyDown}
          />
        ) : (
          <>
            <Checkbox onClick={onCheckboxClick} completed={todo.completed} />
            <ItemText>{todo.title}</ItemText>
            <DeleteButton onClick={onButtonClick} />
          </>
        )}
      </InnerWrapper>
    </Wrapper>
  );
};

export default ListItem;
