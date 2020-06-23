import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilterType } from "#/store/actions/todo";
import * as Styled from "./style.js";
import { menu } from "#/utils/constants";

const Header = React.memo(() => {
  const dispatch = useDispatch();
  const getFilterType = useSelector((state) => state.todo.filterController);

  const changeFilter = React.useCallback(
    (event) => {
      const type = event.target.dataset.sortingType;
      dispatch(changeFilterType({ filterType: type }));
    },
    [dispatch]
  );

  const _renderMenu = menu.map((el, index) => (
    <Styled.HeaderItem
      key={index}
      active={el.type === getFilterType}
      data-sorting-type={el.type}
      onClick={changeFilter}
    >
      {el.name}
    </Styled.HeaderItem>
  ));

  return <Styled.Wrapper>{_renderMenu}</Styled.Wrapper>;
});

export default Header;
