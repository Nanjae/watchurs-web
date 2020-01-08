import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import RankingCard from "./RankingCard";
import RankingTable from "./RankingTable";
import Loader from "../Loader";

// 수정예정 index 체크 seeAllSummoners 만드는게 좋아보임
// 또는 정렬을 할 경우 소환사 정보 없는 브로드캐스터는 자동으로 탈락할거 같음

const SEE_ALL_SUMMONER = gql`
  # query seeAllSummoner($skip: Int!, $first: Int!)
  {
    seeAllSummoner {
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

const Wrapper = styled.div``;

const RankingBoard = () => {
  const { data, loading } = useQuery(SEE_ALL_SUMMONER);
  if (!loading) {
    // console.log("로딩 " + skip + " ~ " + first);
    // console.log(data);
    // data.seeAllBroadcaster.map((broad, index) => console.log(broad.index));
  }

  return (
    <Wrapper>
      <RankingTable />
      {loading && <Loader />}
      {!loading &&
        data &&
        data.seeAllSummoner &&
        data.seeAllSummoner.map((summoner, index) => {
          return (
            <RankingCard
              key={index + 1}
              sId={summoner.sId}
              sRanking={index + 1}
              bId={summoner.sBroadcaster.bId}
              bName={summoner.sBroadcaster.bName}
              bAvatar={summoner.sBroadcaster.bAvatar}
              bPlatform={summoner.sBroadcaster.bPlatform}
              sName={summoner.sName}
              sAvatar={summoner.sAvatar}
              sTier={summoner.sTier}
              sRank={summoner.sRank}
              sPoints={summoner.sPoints}
            />
          );
        })}
    </Wrapper>
  );
};

export default RankingBoard;
