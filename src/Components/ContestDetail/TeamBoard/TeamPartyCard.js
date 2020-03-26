import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import { Link } from "react-router-dom";
import Loader from "../../Loader";
import emblemUnranked from "../../../Assets/League/EmblemUnranked.png";
import emblemIron from "../../../Assets/League/EmblemIron.png";
import emblemBronze from "../../../Assets/League/EmblemBronze.png";
import emblemSilver from "../../../Assets/League/EmblemSilver.png";
import emblemGold from "../../../Assets/League/EmblemGold.png";
import emblemPlatinum from "../../../Assets/League/EmblemPlatinum.png";
import emblemDiamond from "../../../Assets/League/EmblemDiamond.png";
import emblemMaster from "../../../Assets/League/EmblemMaster.png";
import emblemGrandmaster from "../../../Assets/League/EmblemGrandmaster.png";
import emblemChallenger from "../../../Assets/League/EmblemChallenger.png";

const SEE_ONE_BROADCASTER = gql`
  query seeOneBroadcaster($term: String!) {
    seeOneBroadcaster(term: $term) {
      bName
      bId
      bAvatar
      bSummoner {
        sName
        sTier
        sRank
        sPoints
        sAvatar
      }
    }
  }
`;

const TeamPartyCard = styled.div`
  margin-top: 5px;
  width: 100%;
  background-color: ${props => props.theme.whiteColor};
`;

const TeamPartyCardDiv = styled(Link)`
  border: 2px solid ${props => props.theme.lightGrayColor};
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PartyFstBox = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
`;

const BAvatar = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 1px solid ${props => props.theme.lightGrayColor};
  background-position: center;
`;

const BInfoBox = styled.div`
  color: ${props => props.theme.purpleColor};
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-weight: bold;
`;

const BNameText = styled.div``;

const BIdText = styled.div`
  margin-top: 5px;
  font-size: 14px;
`;

const BSummonerBox = styled.div`
  width: 40%;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  font-weight: bold;
`;

const SInfoBox = styled.div`
  color: ${props => props.theme.orangeColor};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const SAvatar = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  width: 20px;
  height: 20px;
  border: 1px solid ${props => props.theme.lightGrayColor};
  background-position: center;
`;

const SNameText = styled.div`
  margin-right: 5px;
`;

const STierBox = styled.div`
  color: ${props => props.theme.darkOrangeColor};
  margin-top: 5px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const STierText = styled.div``;

const SRankText = styled.div`
  margin: 0px 3px;
`;

const SPointsText = styled.div`
  font-size: 14px;
`;

const EmblemIcon = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  width: 42px;
  height: 50px;
  background-position: center;
`;

let sTierEmblem = emblemUnranked;
let sTierName = "UNRANKED";
let sRank = "";

export default ({ broadcasterName }) => {
  const { data, loading } = useQuery(SEE_ONE_BROADCASTER, {
    variables: { term: broadcasterName }
  });

  if (!loading && data && data.seeOneBroadcaster) {
    // console.log(data.seeOneBroadcaster[0].bName);
    sRank = data.seeOneBroadcaster[0].bSummoner[0].sRank;

    if (data.seeOneBroadcaster[0].bSummoner[0].sTier === "IRON") {
      sTierEmblem = emblemIron;
      sTierName = "아이언";
    } else if (data.seeOneBroadcaster[0].bSummoner[0].sTier === "BRONZE") {
      sTierEmblem = emblemBronze;
      sTierName = "브론즈";
    } else if (data.seeOneBroadcaster[0].bSummoner[0].sTier === "SILVER") {
      sTierEmblem = emblemSilver;
      sTierName = "실버";
    } else if (data.seeOneBroadcaster[0].bSummoner[0].sTier === "GOLD") {
      sTierEmblem = emblemGold;
      sTierName = "골드";
    } else if (data.seeOneBroadcaster[0].bSummoner[0].sTier === "PLATINUM") {
      sTierEmblem = emblemPlatinum;
      sTierName = "플래티넘";
    } else if (data.seeOneBroadcaster[0].bSummoner[0].sTier === "DIAMOND") {
      sTierEmblem = emblemDiamond;
      sTierName = "다이아몬드";
    } else if (data.seeOneBroadcaster[0].bSummoner[0].sTier === "MASTER") {
      sTierEmblem = emblemMaster;
      sTierName = "마스터";
      sRank = "";
    } else if (data.seeOneBroadcaster[0].bSummoner[0].sTier === "GRANDMASTER") {
      sTierEmblem = emblemGrandmaster;
      sTierName = "그랜드마스터";
      sRank = "";
    } else if (data.seeOneBroadcaster[0].bSummoner[0].sTier === "CHALLENGER") {
      sTierEmblem = emblemChallenger;
      sTierName = "챌린저";
      sRank = "";
    } else {
      sTierEmblem = emblemUnranked;
      sTierName = "UNRANKED";
      sRank = "";
    }
  }

  return (
    <TeamPartyCard>
      {loading && (
        <TeamPartyCardDiv to={"/contest/detail/1"}>
          <Loader
            fontSize={"14px"}
            height={"52px"}
            alignItems={"center"}
            paddingTop={"0"}
          />
        </TeamPartyCardDiv>
      )}
      {!loading && data && data.seeOneBroadcaster && (
        <TeamPartyCardDiv to={`/detail/${broadcasterName}/1`}>
          <PartyFstBox>
            <BAvatar url={data.seeOneBroadcaster[0].bAvatar} />
            <BInfoBox>
              <BNameText>{data.seeOneBroadcaster[0].bName}</BNameText>
              <BIdText>({data.seeOneBroadcaster[0].bId})</BIdText>
            </BInfoBox>
          </PartyFstBox>
          <EmblemIcon url={sTierEmblem} />
          <BSummonerBox>
            <SInfoBox>
              <SNameText>
                {data.seeOneBroadcaster[0].bSummoner[0].sName}
              </SNameText>
              <SAvatar url={data.seeOneBroadcaster[0].bSummoner[0].sAvatar} />
            </SInfoBox>
            <STierBox>
              <STierText>{sTierName}</STierText>
              <SRankText>{sRank}</SRankText>
              <SPointsText>
                ({data.seeOneBroadcaster[0].bSummoner[0].sPoints}LP)
              </SPointsText>
            </STierBox>
          </BSummonerBox>
        </TeamPartyCardDiv>
      )}
    </TeamPartyCard>
  );
};
