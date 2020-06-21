import styled from "styled-components";
import device from "../../styles/device";
import colors from "../../styles/colors";

const Wrapper = styled.div`
  height: 60px;
  border-bottom: 2px solid #343a40d8;
  padding: 20px 240px 10px 240px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.tablet} {
    padding: 20px 50px 0px 50px;
  }

  @media ${device.mobileL} {
    padding: 10px 20px 0px 20px;
  }
`;

const HeaderItem = styled.a`
  font-family: "Merriweather-Regular";
  color: ${(props) =>
    props.active ? `${colors.darkwhite}` : `${colors.gray}`};
  font-size: 20px;
  text-decoration: none;
  cursor: pointer;

  @media ${device.laptop} {
    &: hover {
      color: ${colors.darkwhite};
    }
  }

  @media ${device.mobileL} {
    font-size: 17px;
  }
`;

export { Wrapper, HeaderItem };
