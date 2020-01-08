import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";

const SEE_ALL_SUMMONER = gql`
  {
    seeAllSummoner {
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
      updatedAt
    }
  }
`;

const DATE_SERVER = gql`
  {
    dateServer
  }
`;

const Wrapper = styled.div``;

let serverTime = "";
let serverTimeYear = "a";
let serverTimeMonth = "b";
let serverTimeDate = "c";
let serverTimeHours = "d";
let serverTimeMinutes = "e";
let serverNewDate = "";

const RankBoard = () => {
  const { data: dateData, loading: dateLoading } = useQuery(DATE_SERVER);
  const { data, loading } = useQuery(SEE_ALL_SUMMONER);
  if (!loading) {
    // console.log("로딩 " + skip + " ~ " + first);
    // console.log(data);
    // data.seeAllBroadcaster.map((broad, index) => console.log(broad.index));
  }
  if (!dateLoading) {
    serverTime = dateData.dateServer;
    serverTimeYear = serverTime.slice(0, 4);
    serverTimeMonth = serverTime.slice(5, 7);
    serverTimeDate = serverTime.slice(8, 10);
    serverTimeHours = serverTime.slice(11, 13);
    serverTimeMinutes = serverTime.slice(14, 16);
    serverNewDate = Date.UTC(
      serverTimeYear,
      serverTimeMonth - 1,
      serverTimeDate,
      serverTimeHours,
      serverTimeMinutes
    );
    // console.log(serverNewDate);
  }

  return (
    <Wrapper>
      <BoardTable />
      {!loading &&
        data &&
        data.seeAllSummoner &&
        data.seeAllSummoner.map((summoner, index) => {
          const summonerTime = summoner.updatedAt;
          const summonerTimeMonth = summonerTime.slice(5, 7);
          const summonerTimeYear = summonerTime.slice(0, 4);
          const summonerTimeDate = summonerTime.slice(8, 10);
          const summonerTimeHours = summonerTime.slice(11, 13);
          const summonerTimeMinutes = summonerTime.slice(14, 16);
          const summonerNewDate = Date.UTC(
            summonerTimeYear,
            summonerTimeMonth - 1,
            summonerTimeDate,
            summonerTimeHours,
            summonerTimeMinutes
          );
          let isUpdated = "ERROR";
          // console.log(summonerNewDate);
          if (serverNewDate === "") {
            isUpdated = "ERROR";
          } else {
            isUpdated = (serverNewDate - summonerNewDate) / 60000 + "분 전";
          }
          return (
            <BoardCard
              key={index + 1}
              id={summoner.id}
              sId={summoner.sId}
              sRanking={index + 1}
              bId={summoner.sBroadcaster.bId}
              bName={summoner.sBroadcaster.bName}
              bAvatar={summoner.sBroadcaster.bAvatar}
              sName={summoner.sName}
              sAvatar={summoner.sAvatar}
              sTier={summoner.sTier}
              sRank={summoner.sRank}
              sPoints={summoner.sPoints}
              sWins={summoner.sWins}
              sLosses={summoner.sLosses}
              sWinRate={
                summoner.sWins + summoner.sLosses === 0
                  ? "--"
                  : Math.round(
                      (summoner.sWins / (summoner.sWins + summoner.sLosses)) *
                        100
                    )
              }
              isUpdated={isUpdated}
            />
          );
        })}
    </Wrapper>
  );
};

export default RankBoard;
