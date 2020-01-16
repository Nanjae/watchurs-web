import React from "react";
import styled from "styled-components";
import twitchLogo from "../../Assets/Twitch/TwitchLogo.png";
import emblemUnranked from "../../Assets/League/EmblemUnranked.png";
import emblemIron from "../../Assets/League/EmblemIron.png";
import emblemBronze from "../../Assets/League/EmblemBronze.png";
import emblemSilver from "../../Assets/League/EmblemSilver.png";
import emblemGold from "../../Assets/League/EmblemGold.png";
import emblemPlatinum from "../../Assets/League/EmblemPlatinum.png";
import emblemDiamond from "../../Assets/League/EmblemDiamond.png";
import emblemMaster from "../../Assets/League/EmblemMaster.png";
import emblemGrandmaster from "../../Assets/League/EmblemGrandmaster.png";
import emblemChallenger from "../../Assets/League/EmblemChallenger.png";
import { Link } from "react-router-dom";

const BoardCard = styled.div``;

const BoardCardDiv = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  user-select: none;
  font-weight: bold;
  border-bottom: 2px solid ${props => props.theme.grayColor};
  @media only screen and (max-width: 599px) {
    height: 30px;
    font-size: 10px;
  }
  @media only screen and (min-width: 600px) {
    height: 40px;
    font-size: 12px;
  }
  @media only screen and (min-width: 1200px) {
    height: 40px;
    font-size: 12px;
  }
  @media only screen and (min-width: 1800px) {
    height: 50px;
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
    width: 7%;
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
    width: 31%;
  }
`;

const BroadPlatform = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  @media only screen and (max-width: 599px) {
    margin-left: 2px;
    width: 0px;
    height: 0px;
  }
  @media only screen and (min-width: 600px) {
    margin-right: 5px;
    margin-left: 5px;
    width: 16px;
    height: 16px;
  }
  @media only screen and (min-width: 1200px) {
    margin-right: 5px;
    margin-left: 5px;
    width: 16px;
    height: 16px;
  }
  @media only screen and (min-width: 1800px) {
    margin-right: 5px;
    margin-left: 5px;
    width: 16px;
    height: 16px;
  }
`;

const BroadAvatar = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  border: 1px solid ${props => props.theme.purpleColor};
  @media only screen and (max-width: 599px) {
    border-radius: 6px;
    width: 12px;
    height: 12px;
    margin-right: 2px;
  }
  @media only screen and (min-width: 600px) {
    border-radius: 12px;
    width: 24px;
    height: 24px;
    margin-right: 5px;
  }
  @media only screen and (min-width: 1200px) {
    border-radius: 12px;
    width: 24px;
    height: 24px;
    margin-right: 5px;
  }
  @media only screen and (min-width: 1800px) {
    border-radius: 12px;
    width: 24px;
    height: 24px;
    margin-right: 5px;
  }
`;

const BroadNameText = styled.div`
  color: ${props => props.theme.purpleColor};
`;

const LeagueSNameBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 32%;
  @media only screen and (max-width: 599px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const LeagueSAvatar = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  border: 1px solid ${props => props.theme.orangeColor};
  @media only screen and (max-width: 599px) {
    width: 0px;
    height: 0px;
  }
  @media only screen and (min-width: 600px) {
    width: 24px;
    height: 24px;
    margin-left: 5px;
    margin-right: 5px;
  }
  @media only screen and (min-width: 1200px) {
    width: 24px;
    height: 24px;
    margin-left: 5px;
    margin-right: 5px;
  }
  @media only screen and (min-width: 1800px) {
    width: 24px;
    height: 24px;
    margin-left: 5px;
    margin-right: 5px;
  }
`;

const LeagueSNameText = styled.div`
  color: ${props => props.theme.orangeColor};
  @media only screen and (max-width: 599px) {
    margin-left: 2px;
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
  color: ${props => props.theme.darkOrangeColor};
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
    width: 31%;
  }
`;

const LeagueTierEmblem = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  @media only screen and (max-width: 599px) {
    border: 1px solid ${props => props.theme.darkOrangeColor};
    width: 0px;
    height: 0px;
  }
  @media only screen and (min-width: 600px) {
    width: 24px;
    height: 24px;
    margin-left: 5px;
    margin-right: 5px;
  }
  @media only screen and (min-width: 1200px) {
    width: 24px;
    height: 24px;
    margin-left: 5px;
    margin-right: 5px;
  }
  @media only screen and (min-width: 1800px) {
    width: 24px;
    height: 24px;
    margin-left: 5px;
    margin-right: 5px;
  }
`;

const LeagueTierText = styled.div`
  @media only screen and (max-width: 599px) {
    margin-left: 2px;
    margin-right: 2px;
  }
  @media only screen and (min-width: 600px) {
    margin-right: 5px;
  }
  @media only screen and (min-width: 1200px) {
    margin-right: 5px;
  }
  @media only screen and (min-width: 1800px) {
    margin-right: 5px;
  }
`;

const LeagueRankText = styled.div`
  @media only screen and (max-width: 599px) {
    margin-right: 2px;
  }
  @media only screen and (min-width: 600px) {
    margin-right: 5px;
  }
  @media only screen and (min-width: 1200px) {
    margin-right: 5px;
  }
  @media only screen and (min-width: 1800px) {
    margin-right: 5px;
  }
`;

const LeaguePointsText = styled.div``;

let sTierEmblem = emblemUnranked;
let sTierName = "랭크없음";

export default ({
  index,
  bId,
  bName,
  bAvatar,
  bPlatform,
  sName,
  sAvatar,
  sTier,
  sRank,
  sPoints
}) => {
  if (sTier === "IRON") {
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
  } else {
    sTierEmblem = emblemUnranked;
    sTierName = "랭크없음";
    sRank = "";
  }

  return (
    <BoardCard>
      <BoardCardDiv to={`/detail/${bId}`}>
        <TableRankBox>
          <TableRankText>{index + 1}</TableRankText>
        </TableRankBox>
        <BroadInfoBox>
          <BroadPlatform url={bPlatform ? twitchLogo : twitchLogo} />
          <BroadAvatar url={bAvatar} />
          <BroadNameText>{bName}</BroadNameText>
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
      </BoardCardDiv>
    </BoardCard>
  );
};