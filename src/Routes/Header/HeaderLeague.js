import React from "react";
import styled from "styled-components";

const HeaderLeagueDiv = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
`;

const LeagueColumnDiv = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  display: flex;
`;

const LeagueColumnTop = styled.div`
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LeagueColumnBot = styled.div`
  padding: 0px 20%;
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BoldText = styled.text`
  font-weight: 600;
`;

export default () => {
  return (
    <HeaderLeagueDiv>
      <LeagueColumnDiv>
        <LeagueColumnTop>
          <BoldText>리그 오브 레전드</BoldText>
        </LeagueColumnTop>
        <LeagueColumnBot>
          <BoldText>하단 메뉴</BoldText>
          <BoldText>하단 메뉴</BoldText>
          <BoldText>하단 메뉴</BoldText>
          <BoldText>하단 메뉴</BoldText>
          <BoldText>하단 메뉴</BoldText>
        </LeagueColumnBot>
      </LeagueColumnDiv>
    </HeaderLeagueDiv>
  );
};
