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
import { useGlobal } from "reactn";
import Theme from "../../Styles/Theme";

const RankingCardDiv = styled.div`
  width: 100%;
  background-color: ${props => props.theme.fTheme};
  margin-top: 5px;
`;

const CardDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  height: 60px;
`;

const RankBox = styled.div`
  width: 8%;
`;

const RankText = styled.div`
  text-align: center;
`;

const BInfoBox = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const BPlatform = styled.div`
  width: 28px;
  height: 28px;
  background-image: url(${props => props.url});
  background-size: cover;
  margin: 0px 15px;
`;
const BAvatar = styled.div`
  width: 42px;
  height: 42px;
  background-image: url(${props => props.url});
  background-size: cover;
  border-radius: 21px;
  margin-right: 10px;
`;
const BNameText = styled.div`
  font-size: 16px;
  margin-right: 5px;
`;
const BIdText = styled.div`
  font-size: 12px;
`;

const SInfoBox = styled.div`
  width: 25%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SAvatar = styled.div`
  width: 42px;
  height: 42px;
  background-image: url(${props => props.url});
  background-size: cover;
  border-radius: 4px;
  margin: 0px 10px;
`;
const SNameText = styled.div``;

const STierBox = styled.div`
  width: 27%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const STier = styled.div`
  width: 36px;
  height: 42px;
  background-image: url(${props => props.url});
  background-size: cover;
  margin: 0px 10px;
`;
const STierText = styled.div`
  margin-right: 5px;
`;
const SRankText = styled.div`
  margin-right: 5px;
`;
const SPointText = styled.div`
  font-size: 12px;
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
  sPoints
}) => {
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

  const [select, setSelect] = useGlobal("selectedRanking");

  const handleSelect = sRanking => {
    setSelect(sRanking);
  };

  return (
    <RankingCardDiv
      onClick={() => handleSelect(sRanking)}
      style={
        select === sRanking
          ? { backgroundColor: Theme.iTheme, color: Theme.jTheme }
          : null
      }
    >
      <CardDiv>
        <RankBox>
          <RankText>{sRanking}</RankText>
        </RankBox>
        <BInfoBox>
          <BPlatform url={bPlatform === "TWITCH" ? twitchLogo : twitchLogo} />
          <BAvatar url={bAvatar} />
          <BNameText>{bName}</BNameText>
          <BIdText>({bId})</BIdText>
        </BInfoBox>
        <SInfoBox>
          <SAvatar url={sAvatar} />
          <SNameText>{sName}</SNameText>
        </SInfoBox>
        <STierBox>
          <STier url={sTierEmblem} />
          <STierText>{sTierName}</STierText>
          {sRank !== "" ? <SRankText>{sRank}</SRankText> : null}
          <SPointText>({sPoints}LP)</SPointText>
        </STierBox>
      </CardDiv>
    </RankingCardDiv>
  );
};
