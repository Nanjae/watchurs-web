import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import BoardCard from "./BoardCard";
import BoardTitle from "./BoardTitle";
import Loader from "../Loader";
import BoardTag from "./BoardTag";
import BoardNext from "./BoardNext";
import { withRouter } from "react-router-dom";

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
    margin: 5px 0px;
  }
  @media only screen and (min-width: 600px) {
    margin: 10px 0px;
  }
  @media only screen and (min-width: 1200px) {
    margin: 10px 0px;
  }
  @media only screen and (min-width: 1800px) {
    margin: 15px 0px;
  }
`;

const RankBoardBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => props.theme.whiteColor};
  @media only screen and (max-width: 599px) {
    width: 99%;
    min-width: 300px;
  }
  @media only screen and (min-width: 600px) {
    min-width: 580px;
  }
  @media only screen and (min-width: 1200px) {
    min-width: 800px;
  }
  @media only screen and (min-width: 1800px) {
    min-width: 1050px;
  }
`;

export default withRouter(({ location }) => {
  const from = (location.pathname.split("/")[2] - 1) * 20 + 1;
  const to = location.pathname.split("/")[2] * 20;

  const { data, loading } = useQuery(SEE_ALL_SUMMONER, {
    variables: { from: `${from}`, to: `${to}` }
  });

  if (!loading) {
    // console.log(data);
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
});
