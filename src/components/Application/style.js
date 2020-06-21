import styled from "styled-components";
import arrow from "../../assets/images/arrow.png";
import device from "../../styles/device";
import colors from "../../styles/colors"

const Title = styled.h1`
  margin-top: 60px;
  color: ${colors.darkwhite};
  text-align: center;
  font-size: 3.1em;
  font-weight: bold;

  @media ${device.mobileL} {
    font-size: 20px;
    margin-top: 30px;
  }
`;

const Wrapper = styled.div`
  margin: 2% auto;
  background: #3c424a;
  width: 900px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  font-family: "Merriweather-Regular";

  @media ${device.tablet} {
    width: 100%;
  }

  @media ${device.mobileL} {
    margin: 0px auto;
    border-radius: 0 0 10px 10px;
  }
`;

const Input = styled.input`
  position: relative;
  height: 72px;
  width: 576px;
  font-size: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  opacity: 80%;
  background: #343a40;
  color: ${colors.gray};
  margin-bottom: 20px;
  padding-left: 60px;
  font-family: "Merriweather-Regular";

  &:focus::-webkit-input-placeholder {
    opacity: 0;
    transition: 0.3s;
    transition-timing-function: ease;
  }

  &::-webkit-input-placeholder {
    color: ${colors.gray};
    opacity: 40%;
  }

  @media ${device.mobileL} {
    width: 100%;
    height: 40px;
    padding: 0px;
    font-size: 20px;
    padding-left: 50px;
  }
`;

const ItemsCounter = styled.div`
  text-align: center;
  color: ${colors.gray};
  font-size: 1.5em;
  font-weight: bold;
  margin-top: 20px;

  @media ${device.mobileL} {
    font-size: 15px;
  }
`;

const ToggleAll = styled.div`
  background: url(${arrow});
  background-size: 100% 100%;
  position: absolute;
  top: 23px;
  left: 10px;
  min-height: 30px;
  min-width: 40px;
  cursor: pointer;

  @media ${device.mobileL} {
    min-height: 17px;
    min-width: 20px;
    left: 15px;
    top: 12px;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  width: 576px;
  margin: 20px auto 0px;

  @media ${device.mobileL} {
    width: 100%;
  }
`;

export { Wrapper, Title, ItemsCounter, InputWrapper, Input, ToggleAll };
