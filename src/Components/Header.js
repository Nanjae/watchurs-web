import React from "react";
import styled, { keyframes } from "styled-components";
import { withRouter } from "react-router-dom";
import useWindowDimensions from "../Hooks/useWindowDimensions";

const Header = styled.div``;

const HeaderDiv = styled.div`
  position: absolute;
  width: 100%;
  flex-direction: column;
  display: flex;
  opacity: 0.8;
  background-color: ${props => props.theme.darkBlueColor};
`;

const TitleDiv = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: flex-end;
`;

const TitleFstText = styled.div`
  font-weight: bold;
  font-size: 32px;
  user-select: none;
  padding-right: 8px;
  color: ${props => props.theme.whiteColor};
`;

const TitleSndText = styled.div`
  font-weight: bold;
  font-size: 24px;
  user-select: none;
  color: ${props => props.theme.pinkColor};
`;

export default withRouter(() => {
  const { height, width } = useWindowDimensions();

  console.log("(height, width) : (" + height + ", " + width + ")");

  return (
    <Header>
      {width < 900 ? (
        <HeaderDiv>
          <TitleDiv style={{ padding: 6 }}>
            <TitleBox>
              <TitleFstText style={{ paddingRight: 6, fontSize: 24 }}>
                WATCHURS
              </TitleFstText>
              <TitleSndText style={{ fontSize: 18 }}>와쳐스</TitleSndText>
            </TitleBox>
          </TitleDiv>
        </HeaderDiv>
      ) : (
        <HeaderDiv>
          <TitleDiv>
            <TitleBox>
              <TitleFstText>WATCHURS</TitleFstText>
              <TitleSndText>와쳐스</TitleSndText>
            </TitleBox>
          </TitleDiv>
        </HeaderDiv>
      )}
    </Header>
  );
});
