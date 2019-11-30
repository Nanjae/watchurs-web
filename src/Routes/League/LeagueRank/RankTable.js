import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import BoardCard from "../../../Components/BoardCard";
import { useQuery } from "react-apollo-hooks";
import BoardTable from "../../../Components/BoardTable";

const SEE_ALL_BROADCASTER = gql`
  {
    seeAllBroadcaster {
      id
      bId
      bName
      bAvatar
      bPlatform
      bSummoner {
        sName
        sTier
        sRank
        sPoints
        sWins
        sLosses
      }
    }
  }
`;

const Wrapper = styled.div``;

const RankTable = () => {
  const { data, loading } = useQuery(SEE_ALL_BROADCASTER);
  if (!loading) {
    console.log(data);
  }
  return (
    <Wrapper>
      <BoardTable />
      {!loading &&
        data &&
        data.seeAllBroadcaster &&
        data.seeAllBroadcaster.map(broad => (
          <BoardCard
            bId={broad.bId}
            bName={broad.bName}
            bAvatar={broad.bAvatar}
            sName={broad.bSummoner.sName}
            sTier={broad.bSummoner.sTier}
            sRank={broad.bSummoner.sRank}
            sPoints={broad.bSummoner.sPoints}
            sWins={broad.bSummoner.sWins}
            sLosses={broad.bSummoner.sLosses}
            sWinRate={
              broad.bSummoner.sWins + broad.bSummoner.sLosses === 0
                ? "--"
                : Math.floor(
                    (broad.bSummoner.sWins /
                      (broad.bSummoner.sWins + broad.bSummoner.sLosses)) *
                      100
                  )
            }
          />
        ))}
    </Wrapper>
  );
};

export default RankTable;
