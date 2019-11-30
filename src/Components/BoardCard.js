import React, { useState } from "react";
import styled from "styled-components";
import twitchLogo from "../Assets/Twitch/TwitchLogo.png";
// import emptyStar from "../Assets/Common/EmptyStar.png";
// import fullStar from "../Assets/Common/FullStar.png";
// import lightEmptyStar from "../Assets/Common/LightEmptyStar.png";
// import lightFullStar from "../Assets/Common/LightFullStar.png";
import refresh from "../Assets/Common/Refresh.png";
import lightRefresh from "../Assets/Common/LightRefresh.png";
import emblemUnranked from "../Assets/League/EmblemUnranked.png";
import emblemIron from "../Assets/League/EmblemIron.png";
import emblemBronze from "../Assets/League/EmblemBronze.png";
import emblemSilver from "../Assets/League/EmblemSilver.png";
import emblemGold from "../Assets/League/EmblemGold.png";
import emblemPlatinum from "../Assets/League/EmblemPlatinum.png";
import emblemDiamond from "../Assets/League/EmblemDiamond.png";
import emblemMaster from "../Assets/League/EmblemMaster.png";
import emblemGrandmaster from "../Assets/League/EmblemGrandmaster.png";
import emblemChallenger from "../Assets/League/EmblemChallenger.png";
import Theme from "../Styles/Theme";

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

const TableRankText = styled.div``;

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
  background-image: url(${props => props.url});
  background-size: cover;
  border-radius: 18px;
  border: 1px solid ${props => props.theme.lightGrayColor};
  margin-right: 8px;
`;

const BroadNameText = styled.div`
  margin-right: 5px;
`;

const BroadIdText = styled.div`
  font-size: 13px;
`;

const BroadPlatform = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${props => props.url});
  background-size: cover;
  margin-right: 15px;
`;

const LeagueSNameBox = styled.div`
  width: 17%;
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
  background-image: url(${props => props.url});
  background-size: cover;
  border: 1px solid ${props => props.theme.lightGrayColor};
  margin-right: 8px;
`;

const LeagueSNameText = styled.div``;

const LeagueTierBox = styled.div`
  width: 21%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
  margin: 14px 0px;
  border-right: 1px solid ${props => props.theme.lightGrayColor};
`;

const LeagueTierEmblem = styled.div`
  width: 36px;
  height: 36px;
  background-image: url(${props => props.url});
  background-size: cover;
  margin-right: 8px;
`;

const LeagueTierText = styled.div`
  margin-right: 5px;
`;

const LeagueRankText = styled.div`
  margin-right: 5px;
`;

const LeaguePointsText = styled.div``;

const LeagueWinRateBox = styled.div`
  width: 16%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 14px 0px;
  padding-left: 15px;
  border-right: 1px solid ${props => props.theme.lightGrayColor};
`;

const LeagueWinRateBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 70%;
  margin-right: 8px;
  padding: 0px 5px;
  background: linear-gradient(
    to right,
    ${props => props.theme.mainColor} 0%,
    ${props => props.theme.mainColor} ${props => props.winRate}%,
    ${props => props.theme.lightMainColor} ${props => props.winRate}%,
    ${props => props.theme.lightMainColor} 100%
  );
  border: 1px solid ${props => props.theme.lightGrayColor};
  border-radius: 7px;
  font-size: 12px;
  color: ${props => props.theme.whiteColor};
`;

const LeagueWinsText = styled.div``;

const LeagueLossesText = styled.div``;

const LeagueWinRateText = styled.div`
  font-size: 13px;
`;

const LeagueFavBox = styled.div`
  width: 7%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 14px 0px;
`;

const LeagueFavStar = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${props => props.url});
  background-size: cover;
  cursor: pointer;
`;

let sTierEmblem = emblemUnranked;
let sTierName = "랭크없음";

export default ({
  sRanking,
  bId,
  bName,
  bAvatar,
  bPlatform,
  sName,
  sAvatar,
  sTier,
  sRank,
  sPoints,
  sWins,
  sLosses,
  sWinRate
}) => {
  const [focused, setFocused] = useState(false);

  const onMouseOut = () => {
    setFocused(false);
  };

  const onMouseOver = () => {
    setFocused(true);
  };
  if (sTier === "UNRANKED") {
    sTierEmblem = emblemUnranked;
    sTierName = "랭크없음";
    sRank = "";
  } else if (sTier === "IRON") {
    sTierEmblem = emblemIron;
    sTierName = "아이언";
  } else if (sTier === "BRONZE") {
    sTierEmblem = emblemBronze;
    sTierName = "브론즈";
  } else if (sTier === "SILVER") {
    sTierEmblem = emblemSilver;
    sTierName = "실버";
  } else if (sTier === "GOLD") {
    sTierEmblem = emblemGold;
    sTierName = "골드";
  } else if (sTier === "PLATINUM") {
    sTierEmblem = emblemPlatinum;
    sTierName = "플래티넘";
  } else if (sTier === "DIAMOND") {
    sTierEmblem = emblemDiamond;
    sTierName = "다이아몬드";
  } else if (sTier === "MASTER") {
    sTierEmblem = emblemMaster;
    sTierName = "마스터";
    sRank = "";
  } else if (sTier === "GRANDMASTER") {
    sTierEmblem = emblemGrandmaster;
    sTierName = "그랜드마스터";
    sRank = "";
  } else if (sTier === "CHALLENGER") {
    sTierEmblem = emblemChallenger;
    sTierName = "챌린저";
    sRank = "";
  }

  return (
    <BoardTableDiv>
      <TableRankBox>
        <TableRankText>{sRanking}</TableRankText>
      </TableRankBox>
      <BroadInfoBox>
        <BroadPlatform url={twitchLogo} />
        <BroadAvatar url={bAvatar} />
        <BroadNameText>{bName}</BroadNameText>
        <BroadIdText>({bId})</BroadIdText>
      </BroadInfoBox>
      <LeagueSNameBox>
        <LeagueSAvatar url={sAvatar} />
        <LeagueSNameText>{sName}</LeagueSNameText>
      </LeagueSNameBox>
      <LeagueTierBox>
        <LeagueTierEmblem url={sTierEmblem} />
        <LeagueTierText>{sTierName}</LeagueTierText>
        {sRank !== "" ? <LeagueRankText>{sRank}</LeagueRankText> : null}
        <LeaguePointsText>({sPoints}LP)</LeaguePointsText>
      </LeagueTierBox>
      <LeagueWinRateBox>
        <LeagueWinRateBar
          winRate={sWinRate}
          style={{
            backgroundColor: sWinRate === "--" ? Theme.lightGrayColor : null
          }}
        >
          <LeagueWinsText>{sWins}승</LeagueWinsText>
          <LeagueLossesText>{sLosses}패</LeagueLossesText>
        </LeagueWinRateBar>
        <LeagueWinRateText>{sWinRate}%</LeagueWinRateText>
      </LeagueWinRateBox>
      <LeagueFavBox>
        <LeagueFavStar
          onMouseOver={() => onMouseOver()}
          onMouseOut={() => onMouseOut()}
          url={focused ? refresh : lightRefresh}
        />
      </LeagueFavBox>
    </BoardTableDiv>
  );
};
