import styled from "styled-components";
import device from "#/styles/device";
import colors from "#/styles/colors";

export const Wrapper = styled.div`
  height: 40px;
  border-top: 2px solid ${colors.dark};
  position: relative;
  padding-left: 25px;
  padding-top: 10px;
  color: ${colors.lightgray};
  font-size: 15px;
`;

export const ClearTodo = styled.a`
  position: absolute;
  top: 9px;
  right: 10px;
  font-family: "Merriweather-Regular";
  color: ${colors.gray};
  font-size: 17px;
  text-decoration: none;
  cursor: pointer;

  @media ${device.laptop} {
    &:hover {
      color: ${colors.darkwhite};
    }
  }

  @media ${device.mobileL} {
    font-size: 15px;
  }
`;
