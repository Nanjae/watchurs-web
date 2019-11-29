import React from "react";
import styled from "styled-components";

const BoardTableDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 60px;
  border: 1px solid #b2bec3;
  border-top-width: 0px;
  background-color: ${props => props.theme.whiteColor};
  user-select: none;
  color: ${props => props.theme.grayColor};
  font-size: 12px;
`;

const TableRankBox = styled.div`
  width: 6%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 14px 0px;
  border-right: 1px solid ${props => props.theme.lightGrayColor};
`;

const TableRankText = styled.text``;

const BroadInfoBox = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 14px 0px;
  border-right: 1px solid ${props => props.theme.lightGrayColor};
`;

const BroadBAvatar = styled.div`
  width: 30px;
  height: 30px;
  background-image: url("https://static-cdn.jtvnw.net/jtv_user_pictures/dbb514f1-469b-479e-b5ba-3ac0f09a2776-profile_image-70x70.png");
  background-size: cover;
  border-radius: 15px;
  margin-right: 5px;
`;

const BroadBNameText = styled.text`
  font-size: 14px;
`;

const BroadBIdText = styled.text``;

const LeagueSNameBox = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 14px 0px;
  border-right: 1px solid ${props => props.theme.lightGrayColor};
`;

const LeagueSNameText = styled.text`
  font-size: 14px;
`;

const LeagueTierBox = styled.div`
  width: 8%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeagueTierText = styled.text``;

const LeagueRankBox = styled.div`
  width: 8%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeagueRankText = styled.text``;

const LeaguePointsBox = styled.div`
  width: 8%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeaguePointsText = styled.text``;

const LeagueWinsBox = styled.div`
  width: 8%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeagueWinsText = styled.text``;

const LeagueLossesBox = styled.div`
  width: 8%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeagueLossesText = styled.text``;

const LeagueWinRateBox = styled.div`
  width: 8%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeagueWinRateText = styled.text``;

const LeagueFavBox = styled.div`
  width: 6%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeagueFavText = styled.text``;

export default () => {
  return (
    <BoardTableDiv>
      <TableRankBox>
        <TableRankText>1</TableRankText>
      </TableRankBox>
      <BroadInfoBox>
        <BroadBAvatar />
        <BroadBNameText>얍얍</BroadBNameText>
        <BroadBIdText>(yapyap30)</BroadBIdText>
      </BroadInfoBox>
      <LeagueSNameBox>
        <LeagueSNameText>귀살대 네즈코</LeagueSNameText>
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
        >
          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
        </svg>
      </LeagueFavBox>
    </BoardTableDiv>
  );
};
