import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 40px;
  border-top: 2px solid#343a40d8;
  position: relative;
  padding-left: 25px;
  padding-top: 10px;
  color: #e1eaf22f;
  font-size: 15px;
`;

const ClearTodo = styled.a`
  position: absolute;
  top: 9px;
  right: 10px;
  font-family: "Merriweather-Regular";
  color: #9198a1;
  font-size: 17px;
  text-decoration: none;
`;

const Footer = () => {
  return (
    <Wrapper>
      <ClearTodo>Clear Completed</ClearTodo>
    </Wrapper>
  );
};

export default Footer;
