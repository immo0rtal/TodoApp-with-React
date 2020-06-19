import React from "react";
import "./index.scss";
import TodoList from "../TodoList/index.jsx";
import styled from "styled-components";
import Header from "../Header/index.jsx";
import Footer from "../Footer/index.jsx";

const Title = styled.h1`
  margin-top: 60px;
  color: #e1eaf2;
  text-align: center;
  font-size: 3.1em;
  font-weight: bold;
`;

const Wrapper = styled.div`
  margin: 2% auto;
  background: #3c424a;
  width: 900px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  font-family: "Merriweather-Regular";
`;

const Input = styled.input`
  height: 72px;
  width: 576px;
  font-size: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  opacity: 80%;
  background: #343a40;
  color: #9198a1;
  margin-bottom: 20px;
  padding-left: 60px;
  font-family: "Merriweather-Regular";

  &:focus::-webkit-input-placeholder {
    opacity: 0;
    transition: 0.3s;
    transition-timing-function: ease;
  }

  &::-webkit-input-placeholder {
    color: #9198a1;
    opacity: 40%;
  }
`;

const ItemsCounter = styled.div`
  text-align: center;
  color: #9198a1;
  font-size: 1.5em;
  font-weight: bold;
  margin-top: 20px;
`;

const Application = () => {
  return (
    <Wrapper>
      <Header />
      <Title>TodoApp</Title>
      <ItemsCounter>0 items left</ItemsCounter>
      <div className="todo-input">
        <Input placeholder="Input your todos" />
      </div>
      <TodoList />
      <Footer />
    </Wrapper>
  );
};

export default Application;
