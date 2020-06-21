import styled from "styled-components";

const Wrapper = styled.div`
  height: 60px;
  border-bottom: 2px solid #343a40d8;
  padding: 20px 240px 10px 240px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderItem = styled.a`
  font-family: "Merriweather-Regular";
  color: #9198a1;
  font-size: 20px;
  text-decoration: none;
  cursor: pointer;

  &: hover {
    color: #e1eaf2;
  }
`;

export {
  Wrapper,
  HeaderItem,
};
