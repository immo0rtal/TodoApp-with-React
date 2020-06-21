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
} from "./style.js";

const ListItem = (props) => {
  const [editing, setEditing] = React.useState(false);
  const [text, setText] = React.useState(props.todo.title);
  const dispatch = useDispatch();

  const onButtonClick = () => {
    dispatch(deleteTodo({ id: props.todo.id }));
  };

  const onCheckboxClick = () => {
    dispatch(
      editTodoCompleted({ id: props.todo.id, completed: props.todo.completed })
    );
  };

  const editTodo = () => {
    setEditing(true);
  };

  const finishEditTodo = () => {
    setEditing(false);
    dispatch(editTodoTitle({ title: text, id: props.todo.id }));
  };

  const onInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <Wrapper onClick={customDblClick(() => editTodo())}>
      {editing ? (
        <HiddenInput
          value={text}
          onChange={(event) => onInputChange(event)}
          onBlur={() => finishEditTodo()}
          autoFocus={true}
        />
      ) : (
        <>
          <Checkbox
            onClick={onCheckboxClick}
            completed={props.todo.completed}
          />
          <ItemText>{props.todo.title}</ItemText>
          <DeleteButton onClick={onButtonClick} />
        </>
      )}
    </Wrapper>
  );
};

export default ListItem;
