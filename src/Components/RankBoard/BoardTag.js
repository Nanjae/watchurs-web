import React from "react";
import styled from "styled-components";

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
    padding: 10px 0px;
    font-size: 10px;
  }
  @media only screen and (min-width: 600px) {
    padding: 12px 0px;
    font-size: 12px;
  }
  @media only screen and (min-width: 1200px) {
    padding: 12px 0px;
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
    width: 5%;
  }
  @media only screen and (min-width: 600px) {
    width: 7%;
  }
  @media only screen and (min-width: 1200px) {
    width: 7%;
  }
  @media only screen and (min-width: 1800px) {
    width: 4%;
  }
`;

const TableRankText = styled.div``;

const BroadInfoBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (max-width: 599px) {
    width: 29%;
  }
  @media only screen and (min-width: 600px) {
    width: 31%;
  }
  @media only screen and (min-width: 1200px) {
    width: 31%;
  }
  @media only screen and (min-width: 1800px) {
    width: 23%;
  }
`;

const BroadNameText = styled.div`
  margin-left: 57px;
`;

const LeagueSNameBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 23%;
  @media only screen and (max-width: 599px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const LeagueSNameText = styled.div`
  margin-left: 36px;
  @media only screen and (max-width: 599px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const LeagueTierBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (max-width: 599px) {
    width: 34%;
  }
  @media only screen and (min-width: 600px) {
    width: 31%;
  }
  @media only screen and (min-width: 1200px) {
    width: 31%;
  }
  @media only screen and (min-width: 1800px) {
    width: 23%;
  }
`;

const LeagueTierText = styled.div`
  margin-left: 34px;
  @media only screen and (max-width: 599px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const LeagueWinRateBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (max-width: 599px) {
    width: 34%;
  }
  @media only screen and (min-width: 600px) {
    width: 31%;
  }
  @media only screen and (min-width: 1200px) {
    width: 31%;
  }
  @media only screen and (min-width: 1800px) {
    width: 27%;
  }
`;

const LeagueWinRateText = styled.div`
  margin-left: 80px;
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
          <LeagueWinRateText>승률</LeagueWinRateText>
        </LeagueWinRateBox>
      </BoardTagDiv>
    </BoardTag>
  );
};
