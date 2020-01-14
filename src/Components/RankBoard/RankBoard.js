import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import BoardCard from "./BoardCard";
import BoardTitle from "./BoardTitle";
import Loader from "../Loader";
import BoardTag from "./BoardTag";
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
      sWins
      sLosses
      sBroadcaster {
        bName
        bAvatar
        bPlatform
      }
    }
  }
`;

const RankBoard = styled.div`
  width: 100%;
`;

const RankBoardDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  background-color: ${props => props.theme.grayColor};
  width: 100%;
  @media only screen and (max-width: 599px) {
    padding: 10px 0px;
  }
  @media only screen and (min-width: 600px) {
    padding: 10px 0px;
  }
  @media only screen and (min-width: 1200px) {
    padding: 20px 0px;
  }
  @media only screen and (min-width: 1800px) {
    padding: 20px 0px;
  }
`;

const RankBoardBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => props.theme.whiteColor};
  width: 100%;
  @media only screen and (max-width: 599px) {
    min-width: 300px;
  }
  @media only screen and (min-width: 600px) {
    min-width: 560px;
  }
  @media only screen and (min-width: 1200px) {
    min-width: 560px;
  }
  @media only screen and (min-width: 1800px) {
    min-width: 680px;
  }
`;

export default () => {
  const { data, loading } = useQuery(SEE_ALL_SUMMONER);
  if (!loading) {
  }

  return (
    <RankBoard>
      {loading ? (
        <Loader />
      ) : (
        <RankBoardDiv>
          {data && data.seeAllSummoner && (
            <RankBoardBox>
              <BoardTitle />
              <BoardTag />
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
                    sWins={summoner.sWins}
                    sLosses={summoner.sLosses}
                    sWinRate={
                      summoner.sWins + summoner.sLosses === 0
                        ? "--"
                        : Math.round(
                            (summoner.sWins /
                              (summoner.sWins + summoner.sLosses)) *
                              100
                          )
                    }
                  />
                );
              })}
            </RankBoardBox>
          )}
        </RankBoardDiv>
      )}
    </RankBoard>
  );
};
