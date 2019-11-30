import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import BoardCard from "../../../Components/BoardCard";
import { useQuery } from "react-apollo-hooks";
import BoardTable from "../../../Components/BoardTable";

// 수정예정 index 체크 seeAllSummoners 만드는게 좋아보임
// 또는 정렬을 할 경우 소환사 정보 없는 브로드캐스터는 자동으로 탈락할거 같음

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
        sAvatar
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

const RankBoard = () => {
  const { data, loading } = useQuery(SEE_ALL_BROADCASTER);
  if (!loading) {
    data.seeAllBroadcaster.map((broad, index) => console.log(broad.index));
  }

  return (
    <Wrapper>
      <BoardTable />
      {!loading &&
        data &&
        data.seeAllBroadcaster &&
        data.seeAllBroadcaster.map((broad, index) =>
          broad.bSummoner !== null ? (
            <BoardCard
              key={index}
              sRanking={index + 1}
              bId={broad.bId}
              bName={broad.bName}
              bAvatar={broad.bAvatar}
              sName={broad.bSummoner.sName}
              sAvatar={broad.bSummoner.sAvatar}
              sTier={broad.bSummoner.sTier}
              sRank={broad.bSummoner.sRank}
              sPoints={broad.bSummoner.sPoints}
              sWins={broad.bSummoner.sWins}
              sLosses={broad.bSummoner.sLosses}
              sWinRate={
                broad.bSummoner.sWins + broad.bSummoner.sLosses === 0
                  ? "--"
                  : Math.round(
                      (broad.bSummoner.sWins /
                        (broad.bSummoner.sWins + broad.bSummoner.sLosses)) *
                        100
                    )
              }
            />
          ) : null
        )}
    </Wrapper>
  );
};

export default RankBoard;
