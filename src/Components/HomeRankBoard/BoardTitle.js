import React from "react";
import styled from "styled-components";
import twitchLogo from "../../Assets/Twitch/TwitchLogo.png";

const BoardTitle = styled.div``;

const BoardTitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  user-select: none;
  font-weight: bold;
  background-color: ${props => props.theme.purpleColor};
  border-bottom: 2px solid ${props => props.theme.grayColor};
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
    padding: 10px 0px;
    font-size: 16px;
  }
`;

const PlatformIcon = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  @media only screen and (max-width: 599px) {
    margin-left: 6px;
    margin-right: 6px;
    width: 16px;
    height: 16px;
  }
  @media only screen and (min-width: 600px) {
    margin-left: 8px;
    margin-right: 8px;
    width: 20px;
    height: 20px;
  }
  @media only screen and (min-width: 1200px) {
    margin-left: 8px;
    margin-right: 8px;
    width: 20px;
    height: 20px;
  }
  @media only screen and (min-width: 1800px) {
    margin-left: 10px;
    margin-right: 10px;
    width: 24px;
    height: 24px;
  }
`;

const TitleText = styled.div`
  color: ${props => props.theme.whiteColor};
`;

export default () => {
  return (
    <BoardTitle>
      <BoardTitleDiv>
        <PlatformIcon url={twitchLogo} />
        <TitleText>트위치 TOP 10</TitleText>
      </BoardTitleDiv>
    </BoardTitle>
  );
};
