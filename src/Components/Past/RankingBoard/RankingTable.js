import React from "react";
import styled from "styled-components";

const RankingTable = styled.div`
  width: 100%;
`;

const TableDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  text-align: center;
  height: 30px;
`;

const SRankBox = styled.div`
  width: 8%;
`;

const BInfoBox = styled.div`
  width: 40%;
`;

const SInfoBox = styled.div`
  width: 27%;
`;

const STierBox = styled.div`
  width: 25%;
`;

export default () => {
  return (
    <RankingTable>
      <TableDiv>
        <SRankBox>순위</SRankBox>
        <BInfoBox>브로드캐스터</BInfoBox>
        <SInfoBox>소환사</SInfoBox>
        <STierBox>티어</STierBox>
      </TableDiv>
    </RankingTable>
  );
};
