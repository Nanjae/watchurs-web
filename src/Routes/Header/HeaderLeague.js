import React, { useState } from "react";
import styled from "styled-components";

const HeaderLeagueDiv = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeagueMenuDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeagueMenuBox = styled.div`
  padding: 10px;
  cursor: pointer;
`;

const LeagueMenuText = styled.text`
  font-size: 22px;
  font-weight: 600;
  user-select: none;
`;

export default () => {
  const [firstFocus, setFirstFocus] = useState(true);
  const [secondFocus, setSecondFocus] = useState(false);
  const [thirdFocus, setThirdFocus] = useState(false);
  const onFirstMouseOver = () => {
    setFirstFocus(true);
  };
  const onFirstMouseOut = () => {
    setFirstFocus(false);
  };
  const onFirstClick = () => {
    setFirstFocus(true);
    setSecondFocus(false);
    setThirdFocus(false);
  };
  const onSecondMouseOver = () => {
    setSecondFocus(true);
  };
  const onSecondMouseOut = () => {
    setSecondFocus(false);
  };
  const onSecondClick = () => {
    setFirstFocus(false);
    setSecondFocus(true);
    setThirdFocus(false);
  };
  const onThirdMouseOver = () => {
    setThirdFocus(true);
  };
  const onThirdMouseOut = () => {
    setThirdFocus(false);
  };
  const onThirdClick = () => {
    setFirstFocus(false);
    setSecondFocus(false);
    setThirdFocus(true);
  };
  return (
    <HeaderLeagueDiv>
      <LeagueMenuDiv>
        <LeagueMenuBox>
          <LeagueMenuText
            onMouseOver={onFirstMouseOver}
            onMouseOut={onFirstMouseOut}
            onClick={onFirstClick}
            style={{ opacity: firstFocus ? 1.0 : 0.6 }}
          >
            전체 순위
          </LeagueMenuText>
        </LeagueMenuBox>
        <LeagueMenuBox
          onMouseOver={onSecondMouseOver}
          onMouseOut={onSecondMouseOut}
          onClick={onSecondClick}
          style={{ opacity: secondFocus ? 1.0 : 0.6 }}
        >
          <LeagueMenuText>팀 설정</LeagueMenuText>
        </LeagueMenuBox>
        <LeagueMenuBox
          onMouseOver={onThirdMouseOver}
          onMouseOut={onThirdMouseOut}
          onClick={onThirdClick}
          style={{ opacity: thirdFocus ? 1.0 : 0.6 }}
        >
          <LeagueMenuText>대회 정보</LeagueMenuText>
        </LeagueMenuBox>
      </LeagueMenuDiv>
    </HeaderLeagueDiv>
  );
};
