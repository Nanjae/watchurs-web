import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Loader from "../Loader";
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

const SEE_ONE_SUMMONER = gql`
  query seeOneSummoner($sId: String!) {
    seeOneSummoner(sId: $sId) {
      sName
      sAvatar
      sTier
      sRank
      sPoints
      sWins
      sLosses
      sDetail {
        dLane
        dRole
        dKills
        dDeaths
        dAssists
        dWins
        dChampionName
        dChampionAvatar
      }
      sBroadcaster {
        bId
        bName
        bAvatar
        bPlatform
      }
      updatedAt
    }
  }
`;

const DetailDiv = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  color: ${props => props.theme.jTheme};
`;

const HeaderDiv = styled.div`
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1.5px solid ${props => props.theme.jTheme};
  border-radius: 4px;
`;

const BAvatar = styled.div`
  width: 42px;
  height: 42px;
  background-image: url(${props => props.url});
  background-size: cover;
  border-radius: 21px;
`;

const HeaderColumn = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 5px;
  padding-left: 10px;
  padding-right: 5px;
`;

const BInfoDiv = styled.div`
  display: flex;
  padding-bottom: 8px;
`;
const BNameBox = styled.div`
  margin-right: 5px;
`;
const BNameText = styled.div`
  color: ${props => props.theme.cTheme};
`;
const BIdBox = styled.div`
  margin-right: 5px;
`;
const BIdText = styled.div`
  font-size: 12px;
`;
const BPlatform = styled.div`
  width: 14px;
  height: 14px;
  background-image: url(${props => props.url});
  background-size: cover;
`;

const SInfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
`;
const SNameBox = styled.div``;
const SNameText = styled.div`
  color: ${props => props.theme.kTheme};
`;

const STierDiv = styled.div`
  display: flex;
`;

const STierBox = styled.div`
  margin-right: 2px;
`;
const STierText = styled.div``;
const SRankBox = styled.div`
  margin-right: 2px;
`;
const SRankText = styled.div``;
const SPointsBox = styled.div``;
const SPointsText = styled.div`
  font-size: 12px;
`;

const SAvatar = styled.div`
  width: 36px;
  height: 42px;
  background-image: url(${props => props.url});
  background-size: cover;
  border-radius: 21px;
`;

let sTierEmblem = emblemUnranked;
let sTierName = "";
let sRank = "";

export default ({ select }) => {
  const { data, loading } = useQuery(SEE_ONE_SUMMONER, {
    variables: { sId: select }
  });

  if (!loading && data && data.seeOneSummoner) {
    sRank = data.seeOneSummoner.sRank;
    if (data.seeOneSummoner.sTier === "UNRANKED") {
      sTierEmblem = emblemUnranked;
      sTierName = "랭크없음";
      sRank = "";
    } else if (data.seeOneSummoner.sTier === "IRON") {
      sTierEmblem = emblemIron;
      sTierName = "아이언";
    } else if (data.seeOneSummoner.sTier === "BRONZE") {
      sTierEmblem = emblemBronze;
      sTierName = "브론즈";
    } else if (data.seeOneSummoner.sTier === "SILVER") {
      sTierEmblem = emblemSilver;
      sTierName = "실버";
    } else if (data.seeOneSummoner.sTier === "GOLD") {
      sTierEmblem = emblemGold;
      sTierName = "골드";
    } else if (data.seeOneSummoner.sTier === "PLATINUM") {
      sTierEmblem = emblemPlatinum;
      sTierName = "플래티넘";
    } else if (data.seeOneSummoner.sTier === "DIAMOND") {
      sTierEmblem = emblemDiamond;
      sTierName = "다이아몬드";
    } else if (data.seeOneSummoner.sTier === "MASTER") {
      sTierEmblem = emblemMaster;
      sTierName = "마스터";
      sRank = "";
    } else if (data.seeOneSummoner.sTier === "GRANDMASTER") {
      sTierEmblem = emblemGrandmaster;
      sTierName = "그랜드마스터";
      sRank = "";
    } else if (data.seeOneSummoner.sTier === "CHALLENGER") {
      sTierEmblem = emblemChallenger;
      sTierName = "챌린저";
      sRank = "";
    }
  }

  return (
    <DetailDiv>
      {loading && <Loader paddingTop={160} fontSize={16} />}
      {!loading && data && data.seeOneSummoner && (
        <HeaderDiv>
          <BAvatar url={data.seeOneSummoner.sBroadcaster.bAvatar} />
          <HeaderColumn>
            <BInfoDiv>
              <BNameBox>
                <BNameText>{data.seeOneSummoner.sBroadcaster.bName}</BNameText>
              </BNameBox>
              <BIdBox>
                <BIdText>({data.seeOneSummoner.sBroadcaster.bId})</BIdText>
              </BIdBox>
              <BPlatform
                url={
                  data.seeOneSummoner.sBroadcaster.bPlatform === "TWITCH"
                    ? twitchLogo
                    : null
                }
              />
            </BInfoDiv>
            <SInfoDiv>
              <SNameBox>
                <SNameText>{data.seeOneSummoner.sName}</SNameText>
              </SNameBox>
              <STierDiv>
                <STierBox>
                  <STierText>{sTierName}</STierText>
                </STierBox>
                <SRankBox>
                  <SRankText>{sRank}</SRankText>
                </SRankBox>
                <SPointsBox>
                  <SPointsText>({data.seeOneSummoner.sPoints}LP)</SPointsText>
                </SPointsBox>
              </STierDiv>
            </SInfoDiv>
          </HeaderColumn>
          <SAvatar url={sTierEmblem} />
        </HeaderDiv>
      )}
    </DetailDiv>
  );
};
