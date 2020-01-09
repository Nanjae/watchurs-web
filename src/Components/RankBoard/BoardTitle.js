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
    font-size: 12px;
    height: 30px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 14px;
    height: 40px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 14px;
    height: 40px;
  }
  @media only screen and (min-width: 1800px) {
    font-size: 16px;
    height: 50px;
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
  @media only screen and (max-width: 599px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

export default () => {
  return (
    <BoardTitle>
      <BoardTitleDiv>
        <PlatformIcon url={twitchLogo} />
        <TitleText>브로드캐스터 전체 랭킹</TitleText>
      </BoardTitleDiv>
    </BoardTitle>
  );
};
