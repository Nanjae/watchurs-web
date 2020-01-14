import React from "react";
import styled from "styled-components";
import Theme from "../../Styles/Theme";

const BoardTitle = styled.div``;

const BoardTitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  user-select: none;
  font-weight: bold;
  background-color: ${props => props.theme.darkGrayColor};
  color: ${props => props.theme.whiteColor};
  @media only screen and (max-width: 599px) {
    padding: 6px 0px;
    font-size: 12px;
  }
  @media only screen and (min-width: 600px) {
    padding: 8px 0px;
    font-size: 14px;
  }
  @media only screen and (min-width: 1200px) {
    padding: 8px 0px;
    font-size: 14px;
  }
  @media only screen and (min-width: 1800px) {
    height: 40px;
    font-size: 14px;
  }
`;

const PlatformDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;

const PlatformBox = styled.div`
  padding: 8px;
  margin-right: 10px;
  border-radius: 4px;
  cursor: pointer;
`;

const PlatformText = styled.div``;

export default () => {
  return (
    <BoardTitle>
      <BoardTitleDiv>
        <PlatformDiv>
          <PlatformBox
            style={{
              backgroundColor: Theme.orangeColor,
              border: `2px solid ${Theme.orangeColor}`
            }}
          >
            <PlatformText>전체랭킹</PlatformText>
          </PlatformBox>
          <PlatformBox style={{ border: `0px solid ${Theme.twitchColor}` }}>
            <PlatformText>트위치</PlatformText>
          </PlatformBox>
          <PlatformBox style={{ border: `0px solid ${Theme.afreecaColor}` }}>
            <PlatformText>아프리카</PlatformText>
          </PlatformBox>
        </PlatformDiv>
      </BoardTitleDiv>
    </BoardTitle>
  );
};
