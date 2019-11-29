import React from "react";
import styled from "styled-components";
import twitchLogo from "../Assets/Twitch/TwitchLogo.png";
import emblemIron from "../Assets/League/EmblemIron.png";
import emblemBronze from "../Assets/League/EmblemBronze.png";
import emblemSilver from "../Assets/League/EmblemSilver.png";
import emblemGold from "../Assets/League/EmblemGold.png";
import emblemPlatinum from "../Assets/League/EmblemPlatinum.png";
import emblemDiamond from "../Assets/League/EmblemDiamond.png";
import emblemMaster from "../Assets/League/EmblemMaster.png";
import emblemGrandmaster from "../Assets/League/EmblemGrandmaster.png";
import emblemChallenger from "../Assets/League/EmblemChallenger.png";

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
  font-size: 15px;
`;

const TableRankBox = styled.div`
  width: 6%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 15px;
  margin: 14px 0px;
  border-right: 1px solid ${props => props.theme.lightGrayColor};
`;

const TableRankText = styled.text``;

const BroadInfoBox = styled.div`
  width: 33%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 15px;
  margin: 14px 0px;
  border-right: 1px solid ${props => props.theme.lightGrayColor};
`;

const BroadAvatar = styled.div`
  width: 36px;
  height: 36px;
  background-image: url("https://static-cdn.jtvnw.net/jtv_user_pictures/dbb514f1-469b-479e-b5ba-3ac0f09a2776-profile_image-70x70.png");
  background-size: cover;
  border-radius: 18px;
  border: 1px solid ${props => props.theme.lightGrayColor};
  margin-right: 5px;
`;

const BroadNameText = styled.text`
  margin-right: 5px;
`;

const BroadIdText = styled.text``;

const BroadPlatform = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${props => props.url});
  background-size: cover;
  margin-right: 15px;
`;

const LeagueSNameBox = styled.div`
  width: 19%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 15px;
  margin: 14px 0px;
  border-right: 1px solid ${props => props.theme.lightGrayColor};
`;

const LeagueSAvatar = styled.div`
  width: 36px;
  height: 36px;
  background-image: url("https://opgg-static.akamaized.net/images/profile_icons/profileIcon4230.jpg?image=q_auto&v=1518361200");
  background-size: cover;
  border: 1px solid ${props => props.theme.lightGrayColor};
  margin-right: 5px;
`;

const LeagueSNameText = styled.text``;

const LeagueTierBox = styled.div`
  width: 21%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 14px 0px;
  border-right: 1px solid ${props => props.theme.lightGrayColor};
`;

const LeagueTierEmblem = styled.div`
  width: 36px;
  height: 36px;
  background-image: url(${props => props.url});
  background-size: cover;
  margin-right: 5px;
`;

const LeagueTierText = styled.text`
  margin-right: 5px;
`;

const LeagueRankText = styled.text`
  margin-right: 5px;
`;

const LeaguePointsText = styled.text``;

const LeagueWinRateBox = styled.div`
  width: 14%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 14px 0px;
  border-right: 1px solid ${props => props.theme.lightGrayColor};
`;

const LeagueWinsText = styled.text`
  margin-right: 5px;
`;

const LeagueLossesText = styled.text`
  margin-right: 5px;
`;

const LeagueWinRateText = styled.text``;

const LeagueFavBox = styled.div`
  width: 7%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 14px 0px;
`;

const LeagueFavText = styled.text``;

export default () => {
  return (
    <BoardTableDiv>
      <TableRankBox>
        <TableRankText>999</TableRankText>
      </TableRankBox>
      <BroadInfoBox>
        <BroadPlatform url={twitchLogo} />
        <BroadAvatar />
        <BroadNameText>트위치아이디최대</BroadNameText>
        <BroadIdText>(yapyap30looksam1)</BroadIdText>
      </BroadInfoBox>
      <LeagueSNameBox>
        <LeagueSAvatar />
        <LeagueSNameText>소환사명 최대 글자</LeagueSNameText>
      </LeagueSNameBox>
      <LeagueTierBox>
        <LeagueTierEmblem url={emblemPlatinum} />
        <LeagueTierText>다이아몬드</LeagueTierText>
        <LeagueRankText>Ⅲ</LeagueRankText>
        <LeaguePointsText>(100 LP)</LeaguePointsText>
      </LeagueTierBox>
      <LeagueWinRateBox>
        <LeagueWinsText>138승</LeagueWinsText>
        <LeagueLossesText>123패</LeagueLossesText>
        <LeagueWinRateText>52%</LeagueWinRateText>
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
