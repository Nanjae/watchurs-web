import React from "react";
import styled from "styled-components";
import ContestDetailTitle from "../Title/DefaultTitle";
import TeamBoard from "./TeamBoard/TeamBoard";

const ContestDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
  user-select: none;
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

export default () => {
  return (
    <ContestDetail>
      <ContestDetailTitle titleText={"대진 및 일정"} />
      <ContestDetailTitle titleText={"참가 팀 명단"} />
      <TeamBoard />
    </ContestDetail>
  );
};
