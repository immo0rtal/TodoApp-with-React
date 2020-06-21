import styled from "styled-components";
import checkboxFalse from "../../assets/images/checkboxFalse.png";
import checkboxTrue from "../../assets/images/checkboxTrue.png";
import deleteIcon from "../../assets/images/deleteIcon.png";

const Checkbox = styled.div`
  background: ${(props) =>
    props.completed ? `url(${checkboxTrue})` : `url(${checkboxFalse})`};
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
  user-select: none;
`;

const DeleteButton = styled.div`
  background: url(${deleteIcon});
  background-size: 100% 100%;
  min-height: 30px;
  min-width: 30px;
  cursor: pointer;
  opacity: 0%;
`;

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

  &:hover ${DeleteButton} {
    opacity: 80%;
  }
`;

const HiddenInput = styled.input`
  width: 100%;
  min-height: 30px;
  font-size: 25px;
  font-family: "Merriweather-Regular";
  background: #343a40;
  color: #9198a1;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export {
  Wrapper,
  Checkbox,
  ItemText,
  DeleteButton,
  HiddenInput,
};
