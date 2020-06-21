import styled from "styled-components";
import colors from "../../styles/colors"

const TodoListWrapper = styled.div``;

const Empty = styled.div`
  height: 50px;
  color: ${colors.lightgray};
  font-family: "Merriweather-Regular";
  font-size: 30px;
  text-align: center;
  opacity: 30%;
`;

export { TodoListWrapper, Empty };