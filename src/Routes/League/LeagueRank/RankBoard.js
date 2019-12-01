import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import BoardCard from "../../../Components/BoardCard";
import { useQuery } from "react-apollo-hooks";
import BoardTable from "../../../Components/BoardTable";

// 수정예정 index 체크 seeAllSummoners 만드는게 좋아보임
// 또는 정렬을 할 경우 소환사 정보 없는 브로드캐스터는 자동으로 탈락할거 같음

const SEE_ALL_SUMMONER = gql`
  {
    seeAllSummoner {
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

const Wrapper = styled.div``;

const RankBoard = () => {
  const { data, loading } = useQuery(SEE_ALL_SUMMONER);
  if (!loading) {
    // console.log(data);
    // data.seeAllBroadcaster.map((broad, index) => console.log(broad.index));
  }

  return (
    <Wrapper>
      <BoardTable />
      {!loading &&
        data &&
        data.seeAllSummoner &&
        data.seeAllSummoner.map((broad, index) => (
          <BoardCard
            key={index + 1}
            sRanking={index + 1}
            bId={broad.sBroadcaster.bId}
            bName={broad.sBroadcaster.bName}
            bAvatar={broad.sBroadcaster.bAvatar}
            sName={broad.sName}
            sAvatar={broad.sAvatar}
            sTier={broad.sTier}
            sRank={broad.sRank}
            sPoints={broad.sPoints}
            sWins={broad.sWins}
            sLosses={broad.sLosses}
            sWinRate={
              broad.sWins + broad.sLosses === 0
                ? "--"
                : Math.round(
                    (broad.sWins / (broad.sWins + broad.sLosses)) * 100
                  )
            }
          />
        ))}
    </Wrapper>
  );
};

export default RankBoard;
