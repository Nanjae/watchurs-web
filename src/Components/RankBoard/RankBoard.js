import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import BoardCard from "./BoardCard";
// import useWindowDimensions from "../../Hooks/useWindowDimensions";
// import Loader from "../Loader";

const SEE_ALL_SUMMONER = gql`
  query seeAllSummoner($from: Int, $to: Int) {
    seeAllSummoner(from: $from, to: $to) {
      id
      sId
      sName
      sAvatar
      sTier
      sRank
      sPoints
      sBroadcaster {
        bName
        bAvatar
        bPlatform
      }
    }
  }
`;

const RankBoard = styled.div``;

const RankBoardDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: 100%;
  background-color: ${props => props.theme.grayColor};
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding: 10px 0px;
  }
  @media only screen and (min-width: 600px) {
    flex-direction: column;
    padding: 10px 0px;
  }
  @media only screen and (min-width: 1200px) {
    flex-direction: row;
    padding: 20px 0px;
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const RankFstBoardBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => props.theme.whiteColor};
  @media only screen and (max-width: 600px) {
    width: 100%;
    min-width: 300px;
    margin-right: 0px;
    margin-bottom: 10px;
  }
  @media only screen and (min-width: 600px) {
    min-width: 550px;
    margin-right: 0px;
    margin-bottom: 10px;
  }
  @media only screen and (min-width: 1200px) {
    min-width: 550px;
    margin-right: 10px;
    margin-bottom: 0px;
  }
  @media only screen and (min-width: 1800px) {
    min-width: 650px;
    margin-right: 10px;
    margin-bottom: 0px;
  }
`;
const RankSndBoardBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => props.theme.whiteColor};
  @media only screen and (max-width: 600px) {
    width: 100%;
    min-width: 300px;
    margin-left: 0px;
  }
  @media only screen and (min-width: 600px) {
    min-width: 550px;
    margin-left: 0px;
  }
  @media only screen and (min-width: 1200px) {
    min-width: 550px;
    margin-left: 10px;
  }
  @media only screen and (min-width: 1800px) {
    min-width: 650px;
    margin-left: 10px;
  }
`;

export default () => {
  //   const { windowWidth, windowHeight } = useWindowDimensions();

  const { data, loading } = useQuery(SEE_ALL_SUMMONER, {
    variables: { from: 1, to: 10 }
  });
  if (!loading) {
    // console.log(data);
  }

  return (
    <RankBoard>
      {loading ? null : (
        <RankBoardDiv>
          {data && data.seeAllSummoner && (
            <RankFstBoardBox>
              {data.seeAllSummoner.map((summoner, index) => {
                return (
                  <BoardCard
                    key={index}
                    index={index}
                    sName={summoner.sName}
                    sAvatar={summoner.sAvatar}
                    sTier={summoner.sTier}
                    sRank={summoner.sRank}
                    sPoints={summoner.sPoints}
                    bId={summoner.sBroadcaster.bId}
                    bName={summoner.sBroadcaster.bName}
                    bAvatar={summoner.sBroadcaster.bAvatar}
                    bPlatform={summoner.sBroadcaster.bPlatform}
                  />
                );
              })}
            </RankFstBoardBox>
          )}
          {data && data.seeAllSummoner && (
            <RankSndBoardBox>
              {data.seeAllSummoner.map((summoner, index) => {
                return (
                  <BoardCard
                    key={index}
                    index={index}
                    sName={summoner.sName}
                    sAvatar={summoner.sAvatar}
                    sTier={summoner.sTier}
                    sRank={summoner.sRank}
                    sPoints={summoner.sPoints}
                    bId={summoner.sBroadcaster.bId}
                    bName={summoner.sBroadcaster.bName}
                    bAvatar={summoner.sBroadcaster.bAvatar}
                    bPlatform={summoner.sBroadcaster.bPlatform}
                  />
                );
              })}
            </RankSndBoardBox>
          )}
        </RankBoardDiv>
      )}
    </RankBoard>
  );
};
