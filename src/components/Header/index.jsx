import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { changeFilterType } from "../../store/actions/todo";

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

const Header = () => {
  const dispatch = useDispatch();

  const SORTING_FILTER = {
    ALL: "ALL",
    ACTIVE: "ACTIVE",
    COMPLETED: "COMPLETED",
  };

  const changeFilter = (event) => {
    const type = event.target.dataset.sortingType;
    dispatch(changeFilterType({ filterType: type }));
  };

  const _renderMenu = [
    { type: SORTING_FILTER.ALL, name: "All" },
    { type: SORTING_FILTER.ACTIVE, name: "Active" },
    { type: SORTING_FILTER.COMPLETED, name: "Completed" },
  ].map((el, index) => (
    <HeaderItem
      key={index}
      data-sorting-type={el.type}
      onClick={(event) => changeFilter(event)}
    >
      {el.name}
    </HeaderItem>
  ));

  return <Wrapper>{_renderMenu}</Wrapper>;
};

export default Header;
