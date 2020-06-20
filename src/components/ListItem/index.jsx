import React from "react";
import "./index.scss";
import styled from "styled-components";
import checkboxFalse from "../../assets/images/checkboxFalse.png";
import checkboxTrue from "../../assets/images/checkboxTrue.png";
import deleteIcon from "../../assets/images/deleteIcon.png";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodoCompleted } from "../../store/actions/todo";

const Checkbox = styled.div`
  background: ${(props) =>
    props.completed ? `url(${checkboxTrue})` : `url(${checkboxFalse})`};
  background-size: 100% 100%;
  min-height: 30px;
  min-width: 30px;
  cursor: pointer;
`;

const ItemText = styled.div`
  margin-left: 10px;
  width: 100%;
  display: flex;
  align-items: center;
`;

const DeleteButton = styled.div`
  background: url(${deleteIcon});
  background-size: 100% 100%;
  min-height: 30px;
  min-width: 30px;
  cursor: pointer;
  opacity: 0%;
`;

const Wrapper = styled.div`
  color: #e1eaf2a4;
  min-height: 100%;
  list-style-type: none;
  font-family: "Merriweather-Regular";
  font-size: 24px;
  padding: 16px 16px 16px 40px;
  display: flex;
  align-items: center;
  position: relative;

  &:hover ${DeleteButton} {
    opacity: 80%;
  }
`;

const ListItem = (props) => {
  const dispatch = useDispatch();

  const onButtonClick = () => {
    dispatch(deleteTodo({ id: props.todo.id }));
  };

  const onCheckboxClick = () => {
    dispatch(
      editTodoCompleted({ id: props.todo.id, completed: props.todo.completed })
    );
  };

  return (
    <Wrapper>
      <Checkbox onClick={onCheckboxClick} completed={props.todo.completed} />
      <ItemText>{props.todo.title}</ItemText>
      <DeleteButton onClick={onButtonClick} />
    </Wrapper>
  );
};

export default ListItem;
