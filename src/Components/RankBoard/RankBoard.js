import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import BoardCard from "./BoardCard";
import BoardTitle from "./BoardTitle";
import Loader from "../Loader";
import BoardTag from "./BoardTag";
import BoardNext from "./BoardNext";
// import useWindowDimensions from "../../Hooks/useWindowDimensions";
// import Loader from "../Loader";

const SEE_ALL_SUMMONER = gql`
  query seeAllSummoner($from: String, $to: String) {
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
        bId
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
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1800px) {
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

export default ({ linkData }) => {
  const from = (linkData.page - 1) * 10 + 1;
  const to = linkData.page * 10;

  const { data, loading } = useQuery(SEE_ALL_SUMMONER, {
    variables: { from: `${from}`, to: `${to}` }
  });
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
              <BoardNext />
              <BoardTitle />
              <BoardTag />
              {data.seeAllSummoner.map((summoner, index) => {
                return (
                  <BoardCard
                    key={index}
                    index={parseInt(from) + index}
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
              <BoardNext />
            </RankBoardBox>
          )}
        </RankBoardDiv>
      )}
    </RankBoard>
  );
};
