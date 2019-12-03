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
  border-bottom: 2px solid ${props => props.theme.dTheme};
  /* border-top-width: 0px; */
  background-color: ${props => props.theme.eTheme};
  user-select: none;
  color: ${props => props.theme.aTheme};
  font-size: 15px;
  font-weight: bold;
`;

const TableRankBox = styled.div`
  width: 6%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 14px 0px;
  border-right: 2px solid ${props => props.theme.dTheme};
`;

const TableRankText = styled.div``;

const BroadInfoBox = styled.div`
  width: 31%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 15px;
  margin: 14px 0px;
  border-right: 2px solid ${props => props.theme.dTheme};
`;

const BroadAvatar = styled.div`
  width: 36px;
  height: 36px;
  background-image: url(${props => props.url});
  background-size: cover;
  border-radius: 18px;
  border: 1px solid ${props => props.theme.dTheme};
  margin-right: 8px;
`;

const BroadNameText = styled.div`
  margin-right: 5px;
`;

const BroadIdText = styled.div`
  font-size: 13px;
  font-weight: bold;
`;

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
  border-right: 2px solid ${props => props.theme.dTheme};
`;

const LeagueSAvatar = styled.div`
  width: 36px;
  height: 36px;
  background-image: url(${props => props.url});
  background-size: cover;
  border: 1px solid ${props => props.theme.dTheme};
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
  border-right: 2px solid ${props => props.theme.dTheme};
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

const LeaguePointsText = styled.div`
  font-weight: bold;
  font-size: 13px;
`;

const LeagueWinRateBox = styled.div`
  width: 16%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 14px 0px;
  padding-left: 15px;
  border-right: 2px solid ${props => props.theme.dTheme};
`;

const LeagueWinRateBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  height: 60%;
  margin-right: 8px;
  padding: 0px 5px;
  background: linear-gradient(
    to right,
    ${props => props.theme.cTheme} 0%,
    ${props => props.theme.cTheme} ${props => props.winRate}%,
    ${props => props.theme.dTheme} ${props => props.winRate}%,
    ${props => props.theme.dTheme} 100%
  );
  /* border: 1px solid ${props => props.theme.lightGrayColor}; */
  border-radius: 7px;
  color: ${props => props.theme.fTheme};
`;

const LeagueWinsText = styled.div`
  font-size: 10px;
  font-weight: normal;
`;

const LeagueLossesText = styled.div`
  font-size: 10px;
  font-weight: normal;
`;

const LeagueWinRateText = styled.div`
  padding-bottom: 3px;
`;

const LeagueRefreshBox = styled.div`
  width: 7%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 14px 0px;
`;

const LeagueRefresh = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${props => props.url});
  background-size: cover;
  cursor: pointer;
`;

let sTierEmblem = emblemUnranked;
let sTierName = "랭크없음";

export default ({
  id,
  sId,
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
            backgroundColor: sWinRate === "--" ? Theme.aTheme : null
          }}
        >
          <LeagueWinsText>{sWins}승</LeagueWinsText>
          <LeagueLossesText>{sLosses}패</LeagueLossesText>
        </LeagueWinRateBar>
        <LeagueWinRateText>{sWinRate}%</LeagueWinRateText>
      </LeagueWinRateBox>
      <LeagueRefreshBox>
        <LeagueRefresh
          onMouseOver={() => onMouseOver()}
          onMouseOut={() => onMouseOut()}
          url={focused ? refresh : lightRefresh}
        />
      </LeagueRefreshBox>
    </BoardTableDiv>
  );
};
