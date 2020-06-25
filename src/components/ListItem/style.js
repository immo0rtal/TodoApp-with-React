import styled, { keyframes } from "styled-components/macro";
import checkboxFalse from "#/assets/images/checkboxFalse.png";
import checkboxTrue from "#/assets/images/checkboxTrue.png";
import deleteIcon from "#/assets/images/deleteIcon.png";
import device from "#/styles/device";
import colors from "#/styles/colors";

export const animateFromTop = keyframes`
  0% { margin-top: -60px; }
  100% { margin-top: 0; }
`;

export const Checkbox = styled.div`
  background: ${(props) =>
    props.completed ? `url(${checkboxTrue})` : `url(${checkboxFalse})`};
  background-size: 100% 100%;
  min-height: 30px;
  min-width: 30px;
  cursor: pointer;

  @media ${device.mobileL} {
    min-width: 25px;
    min-height: 25px;
  }
`;

export const ItemText = styled.div`
  margin-left: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  user-select: none;
  word-break: break-all;
`;

export const DeleteButton = styled.div`
  background: url(${deleteIcon});
  background-size: 100% 100%;
  min-height: 30px;
  min-width: 30px;
  cursor: pointer;
  opacity: 80%;

  @media ${device.laptop} {
    opacity: 0%;
  }

  @media ${device.mobileL} {
    min-height: 25px;
    min-width: 25px;
  }
`;

export const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  overflow: hidden;

  @media ${device.laptop} {
    &:hover ${DeleteButton} {
      opacity: 80%;
    }
  }

  @media ${device.mobileL} {
    font-size: 20px;
  }
`;

export const HiddenInput = styled.input`
  width: 100%;
  min-height: 30px;
  font-size: 25px;
  font-family: "Merriweather-Regular";
  background: #343a40;
  color: ${colors.gray};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const InnerWrapper = styled.div`
  color: ${colors.lightgray};
  list-style-type: none;
  font-family: "Merriweather-Regular";
  font-size: 24px;
  display: flex;
  align-items: center;
  position: relative;
  animation: ${animateFromTop};
  animation-duration: 0.25s;
  animation-fill-mode: forwards;
  overflow: hidden;
  padding: 16px 16px 16px 40px;
  width: 100%;
  
  @media ${device.mobileL} {
    padding: 16px 16px 16px 20px;
  }
`;