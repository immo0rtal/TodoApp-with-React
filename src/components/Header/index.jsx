import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilterType } from "../../store/actions/todo";
import { Wrapper, HeaderItem } from "./style.js";
import SORTING_FILTER from "../../utils/filterTypes";

const Header = () => {
  const dispatch = useDispatch();
  const filterType = useSelector((state) => state.todo.filterController);

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
      active={el.type === filterType}
      data-sorting-type={el.type}
      onClick={(event) => changeFilter(event)}
    >
      {el.name}
    </HeaderItem>
  ));

  return <Wrapper>{_renderMenu}</Wrapper>;
};

export default Header;
