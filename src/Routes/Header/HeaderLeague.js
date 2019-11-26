import React from "react";
import styled from "styled-components";
import imagess from "../../image2.jpg";

const HeaderLeagueDiv = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeagueColumnDiv = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  display: flex;
`;

const LeagueColumnTop = styled.div`
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeagueColumnBot = styled.div`
  padding: 0px 20%;
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeagueTitleLogo = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  width: 180px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const BoldText = styled.text`
  font-weight: 600;
`;

export default () => {
  return (
    <HeaderLeagueDiv>
      <LeagueColumnDiv>
        <LeagueColumnTop>
          <LeagueTitleLogo src={imagess} />
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
