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
  query seeAllSummoner($platform: String, $from: String, $to: String) {
    seeAllSummoner(platform: $platform, from: $from, to: $to) {
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

const COUNT_ALL_SUMMONER = gql`
  query countAllSummoner($platform: String) {
    countAllSummoner(platform: $platform)
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
  const from = (location.pathname.split("/")[3] - 1) * 30 + 1;
  const to = location.pathname.split("/")[3] * 30;
  const platformLocation = location.pathname.split("/")[2];

  const { data: allCount, loading: allCountLoading } = useQuery(
    COUNT_ALL_SUMMONER
  );

  const { data: twitchCount, loading: twitchCountLoading } = useQuery(
    COUNT_ALL_SUMMONER,
    {
      variables: { platform: "TWITCH" }
    }
  );

  const { data: afreecaCount, loading: afreecaCountLoading } = useQuery(
    COUNT_ALL_SUMMONER,
    {
      variables: { platform: "AFREECATV" }
    }
  );

  const { data: allData, loading: allLoading } = useQuery(SEE_ALL_SUMMONER, {
    variables: { from: `${from}`, to: `${to}` }
  });

  const { data: twitchData, loading: twitchLoading } = useQuery(
    SEE_ALL_SUMMONER,
    {
      variables: { platform: "TWITCH", from: `${from}`, to: `${to}` }
    }
  );

  const { data: afreecaData, loading: afreecaLoading } = useQuery(
    SEE_ALL_SUMMONER,
    {
      variables: { platform: "AFREECATV", from: `${from}`, to: `${to}` }
    }
  );

  let data;
  let loading;
  let countData;
  let countLoading;

  if (platformLocation === "all") {
    data = allData;
    loading = allLoading;
    countData = allCount;
    countLoading = allCountLoading;
  } else if (platformLocation === "twitch") {
    data = twitchData;
    loading = twitchLoading;
    countData = twitchCount;
    countLoading = twitchCountLoading;
  } else if (platformLocation === "afreeca") {
    data = afreecaData;
    loading = afreecaLoading;
    countData = afreecaCount;
    countLoading = afreecaCountLoading;
  }

  if (!loading) {
    // console.log(data.seeAllSummoner.length);
  }

  if (!countLoading) {
    // console.log(countData);
  }

  return (
    <RankBoard>
      {loading ? (
        <Loader />
      ) : (
        <RankBoardDiv>
          {data && data.seeAllSummoner && (
            <RankBoardBox>
              <BoardTitle platformLocation={platformLocation} />
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
              {!countLoading && countData && countData.countAllSummoner && (
                <BoardNext
                  platformLocation={platformLocation}
                  dataCount={countData.countAllSummoner}
                />
              )}
            </RankBoardBox>
          )}
        </RankBoardDiv>
      )}
    </RankBoard>
  );
});
