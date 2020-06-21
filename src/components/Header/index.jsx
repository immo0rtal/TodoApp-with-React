import React from "react";
import { useDispatch } from "react-redux";
import { changeFilterType } from "../../store/actions/todo";
import { Wrapper, HeaderItem } from "./style.js";

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
