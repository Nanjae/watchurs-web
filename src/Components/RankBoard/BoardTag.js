import React from "react";
import styled from "styled-components";
import useWindowDimensions from "../../Hooks/useWindowDimensions";

const BoardTag = styled.div``;

const BoardTagDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  user-select: none;
  background-color: ${props => props.theme.darkGrayColor};
  border-bottom: 2px solid ${props => props.theme.grayColor};
  color: ${props => props.theme.whiteColor};
  @media only screen and (max-width: 599px) {
    padding: 6px 0px;
    font-size: 10px;
  }
  @media only screen and (min-width: 600px) {
    padding: 8px 0px;
    font-size: 12px;
  }
  @media only screen and (min-width: 1200px) {
    padding: 8px 0px;
    font-size: 12px;
  }
  @media only screen and (min-width: 1800px) {
    padding: 10px 0px;
    font-size: 14px;
  }
`;

const TableRankBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 599px) {
    width: 7%;
  }
  @media only screen and (min-width: 600px) {
    width: 5%;
  }
  @media only screen and (min-width: 1200px) {
    width: 5%;
  }
  @media only screen and (min-width: 1800px) {
    width: 5%;
  }
`;

const TableRankText = styled.div``;

const BroadInfoBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (max-width: 599px) {
    width: 28%;
  }
  @media only screen and (min-width: 600px) {
    width: 23%;
  }
  @media only screen and (min-width: 1200px) {
    width: 23%;
  }
  @media only screen and (min-width: 1800px) {
    width: 23%;
  }
`;

const BroadNameText = styled.div`
  @media only screen and (max-width: 599px) {
    margin-left: 16px;
  }
  @media only screen and (min-width: 600px) {
    margin-left: 45px;
  }
  @media only screen and (min-width: 1200px) {
    margin-left: 51px;
  }
  @media only screen and (min-width: 1800px) {
    margin-left: 57px;
  }
`;

const LeagueSNameBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (max-width: 599px) {
    width: 29%;
  }
  @media only screen and (min-width: 600px) {
    width: 22%;
  }
  @media only screen and (min-width: 1200px) {
    width: 22%;
  }
  @media only screen and (min-width: 1800px) {
    width: 22%;
  }
`;

const LeagueSNameText = styled.div`
  @media only screen and (max-width: 599px) {
    margin-left: 4px;
  }
  @media only screen and (min-width: 600px) {
    margin-left: 28px;
  }
  @media only screen and (min-width: 1200px) {
    margin-left: 32px;
  }
  @media only screen and (min-width: 1800px) {
    margin-left: 36px;
  }
`;

const LeagueTierBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (max-width: 599px) {
    width: 36%;
  }
  @media only screen and (min-width: 600px) {
    width: 26%;
  }
  @media only screen and (min-width: 1200px) {
    width: 23%;
  }
  @media only screen and (min-width: 1800px) {
    width: 23%;
  }
`;

const LeagueTierText = styled.div`
  @media only screen and (max-width: 599px) {
    margin-left: 4px;
  }
  @media only screen and (min-width: 600px) {
    margin-left: 26px;
  }
  @media only screen and (min-width: 1200px) {
    margin-left: 30px;
  }
  @media only screen and (min-width: 1800px) {
    margin-left: 34px;
  }
`;

const LeagueWinRateBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (max-width: 599px) {
  }
  @media only screen and (min-width: 600px) {
    width: 24%;
  }
  @media only screen and (min-width: 1200px) {
    width: 27%;
  }
  @media only screen and (min-width: 1800px) {
    width: 27%;
  }
`;

const LeagueWinRateText = styled.div`
  @media only screen and (max-width: 599px) {
  }
  @media only screen and (min-width: 600px) {
    margin-left: 44px;
  }
  @media only screen and (min-width: 1200px) {
    margin-left: 57px;
  }
  @media only screen and (min-width: 1800px) {
    margin-left: 75px;
  }
`;

export default () => {
  const { windowWidth } = useWindowDimensions();

  return (
    <BoardTag>
      <BoardTagDiv>
        <TableRankBox>
          <TableRankText>#</TableRankText>
        </TableRankBox>
        <BroadInfoBox>
          <BroadNameText>브로드캐스터</BroadNameText>
        </BroadInfoBox>
        <LeagueSNameBox>
          <LeagueSNameText>소환사명</LeagueSNameText>
        </LeagueSNameBox>
        <LeagueTierBox>
          <LeagueTierText>티어</LeagueTierText>
        </LeagueTierBox>
        <LeagueWinRateBox>
          {windowWidth < 600 ? null : (
            <LeagueWinRateText>승률</LeagueWinRateText>
          )}
        </LeagueWinRateBox>
      </BoardTagDiv>
    </BoardTag>
  );
};
