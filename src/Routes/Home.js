import React from "react";
import styled from "styled-components";
import BoardTable from "../Components/BoardTable";
import BoardCard from "../Components/BoardCard";

const Wrapper = styled.div`
  padding-top: 120px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 12px;
`;

const BoardDiv = styled.div`
  width: 60%;
`;

export default () => {
  return (
    <Wrapper>
      <BoardDiv>
        <BoardTable />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
      </BoardDiv>
    </Wrapper>
  );
};
