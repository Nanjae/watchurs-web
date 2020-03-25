import React from "react";
import styled from "styled-components";
import ContestCard from "./ContestCard";
import ContestTitle from "./ContestTitle";
import ContestBanner_1 from "../../Assets/Contest/ContestBanner_1.png";

const ContestBoard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
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
    <ContestBoard>
      <ContestTitle titleText={"진행중인 대회"} />
      <ContestCard
        titleText={"2020 LOL BJ멸망전 시즌1"}
        contestBanner={ContestBanner_1}
        hostText={"아프리카TV"}
        planText={"2020-03-23(월) ~ 2020-03-29(일)"}
        teamCount={"12"}
        teamCurrent={"12"}
        pageLink={"/contest/detail/1"}
      />
      <ContestTitle titleText={"종료된 대회"} />
      <ContestCard />
      <ContestCard />
    </ContestBoard>
  );
};
