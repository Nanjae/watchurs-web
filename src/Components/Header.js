import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Header = styled.header`
  width: 100%;
  height: 50px;
  flex-direction: column;
  display: flex;
  background-color: ${props => props.theme.bTheme};
  color: ${props => props.theme.fTheme};
`;

const HeaderDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleDiv = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const TitleBox = styled.div`
  height: 100%;
  padding-left: 10px;
  display: flex;
  align-items: center;
`;

const TitleText = styled.div`
  font-weight: bold;
  font-size: 30px;
  user-select: none;
`;

export default withRouter(() => {
  // const [focused, setFocused] = useState(0);
  // const onMouseOut = () => {
  //   setFocused(0);
  // };
  // const onMouseOver = num => {
  //   setFocused(num);
  // };
  return (
    <Header>
      <HeaderDiv>
        <TitleDiv>
          <TitleBox>
            <TitleText>WATCHURS</TitleText>
          </TitleBox>
        </TitleDiv>
      </HeaderDiv>
    </Header>
  );
});
