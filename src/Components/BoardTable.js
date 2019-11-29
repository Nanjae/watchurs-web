import React from "react";
import styled from "styled-components";

const BoardTableDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  border: 1px solid ${props => props.theme.lightGrayColor};
  background-color: #eeeeee;
  padding: 15px;
  user-select: none;
  color: ${props => props.theme.grayColor};
`;

const TableRankBox = styled.div`
  padding-right: 0px;
`;

const TableRankText = styled.text``;

const BroadInfoBox = styled.div`
  padding-right: 60px;
`;

const BroadInfoText = styled.text``;

const LeagueSNameBox = styled.div`
  padding-right: 60px;
`;

const LeagueSNameText = styled.text``;

const LeagueTierBox = styled.div`
  padding-right: 30px;
`;

const LeagueTierText = styled.text``;

const LeagueRankBox = styled.div`
  padding-right: 30px;
`;

const LeagueRankText = styled.text``;

const LeaguePointsBox = styled.div`
  padding-right: 30px;
`;

const LeaguePointsText = styled.text``;

const LeagueWinsBox = styled.div`
  padding-right: 30px;
`;

const LeagueWinsText = styled.text``;

const LeagueLossesBox = styled.div`
  padding-right: 30px;
`;

const LeagueLossesText = styled.text``;

const LeagueWinRateBox = styled.div`
  padding-right: 30px;
`;

const LeagueWinRateText = styled.text``;

const LeagueFavBox = styled.div``;

const LeagueFavText = styled.text``;

export default () => {
  return (
    <BoardTableDiv>
      <TableRankBox>
        <TableRankText>순위</TableRankText>
      </TableRankBox>
      <BroadInfoBox>
        <BroadInfoText>브로드캐스터</BroadInfoText>
      </BroadInfoBox>
      <LeagueSNameBox>
        <LeagueSNameText>소환사명</LeagueSNameText>
      </LeagueSNameBox>
      <LeagueTierBox>
        <LeagueTierText>티어</LeagueTierText>
      </LeagueTierBox>
      <LeagueRankBox>
        <LeagueRankText>랭크</LeagueRankText>
      </LeagueRankBox>
      <LeaguePointsBox>
        <LeaguePointsText>점수</LeaguePointsText>
      </LeaguePointsBox>
      <LeagueWinsBox>
        <LeagueWinsText>승</LeagueWinsText>
      </LeagueWinsBox>
      <LeagueLossesBox>
        <LeagueLossesText>패</LeagueLossesText>
      </LeagueLossesBox>
      <LeagueWinRateBox>
        <LeagueWinRateText>승률</LeagueWinRateText>
      </LeagueWinRateBox>
      <LeagueFavBox>
        <LeagueFavText>즐겨찾기</LeagueFavText>
      </LeagueFavBox>
    </BoardTableDiv>
  );
};
