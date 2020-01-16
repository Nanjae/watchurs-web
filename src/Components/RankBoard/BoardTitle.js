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
    height: 40px;
    font-size: 11px;
  }
  @media only screen and (min-width: 600px) {
    height: 50px;
    font-size: 13px;
  }
  @media only screen and (min-width: 1200px) {
    height: 50px;
    font-size: 13px;
  }
  @media only screen and (min-width: 1800px) {
    height: 60px;
    font-size: 14px;
  }
`;

const PlatformDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 599px) {
    margin-left: 10px;
  }
  @media only screen and (min-width: 600px) {
    margin-left: 15px;
  }
  @media only screen and (min-width: 1200px) {
    margin-left: 15px;
  }
  @media only screen and (min-width: 1800px) {
    margin-left: 20px;
  }
`;

const PlatformBox = styled.div`
  border-radius: 4px;
  cursor: pointer;
  @media only screen and (max-width: 599px) {
    padding: 4px;
    margin-right: 6px;
  }
  @media only screen and (min-width: 600px) {
    padding: 6px;
    margin-right: 8px;
  }
  @media only screen and (min-width: 1200px) {
    padding: 6px;
    margin-right: 8px;
  }
  @media only screen and (min-width: 1800px) {
    padding: 8px;
    margin-right: 10px;
  }
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
