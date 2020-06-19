import React from "react";
import "./index.scss";
import styled from "styled-components";
import checkboxFalse from "../../assets/images/checkboxFalse.png";

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
`;

const Checkbox = styled.div`
  background: url(${checkboxFalse});
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

const ListItem = (props) => {
  return (
    <Wrapper>
      <Checkbox />
      <ItemText>Hello motherfucker</ItemText>
    </Wrapper>
  );
};

export default ListItem;
