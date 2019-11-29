import React from "react";
import styled from "styled-components";

const BoardTableDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 40px;
  border: 1px solid ${props => props.theme.lightGrayColor};
  background-color: ${props => props.theme.pinkColor};
  opacity: 0.8;
  user-select: none;
  padding: 10px 0px;
  color: ${props => props.theme.whiteColor};
`;

const TableRankBox = styled.div`
  width: 6%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 15px;
  border-right: 1px solid ${props => props.theme.lightGrayColor};
`;

const TableRankText = styled.div``;

const BroadInfoBox = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid ${props => props.theme.lightGrayColor};
`;

const BroadInfoText = styled.div``;

const LeagueSNameBox = styled.div`
  width: 19%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid ${props => props.theme.lightGrayColor};
`;

const LeagueSNameText = styled.div``;

const LeagueTierBox = styled.div`
  width: 21%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid ${props => props.theme.lightGrayColor};
`;

const LeagueTierText = styled.div``;

const LeagueWinRateBox = styled.div`
  width: 14%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid ${props => props.theme.lightGrayColor};
`;

const LeagueWinRateText = styled.div``;

const LeagueFavBox = styled.div`
  width: 7%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeagueFavText = styled.div``;

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
      <LeagueWinRateBox>
        <LeagueWinRateText>승률</LeagueWinRateText>
      </LeagueWinRateBox>
      <LeagueFavBox>
        <LeagueFavText>즐겨찾기</LeagueFavText>
      </LeagueFavBox>
    </BoardTableDiv>
  );
};
