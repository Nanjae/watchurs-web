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
  height: 100%;
  margin-top: 5px;
  padding: 10px 5px;
  cursor: pointer;
  border-bottom: 3px solid white;
`;

const LeagueMenuText = styled.div`
  font-size: 17px;
  font-weight: 600;
  user-select: none;
`;

export default () => {
  const [selected, setSelected] = useState(1);
  const onClick = num => {
    setSelected(num);
  };
  return (
    <HeaderLeagueDiv>
      <LeagueMenuDiv>
        <LeagueMenuBox
          onClick={() => onClick(1)}
          style={
            selected === 1
              ? { opacity: 1.0, borderBottomColor: "black" }
              : { opacity: 0.5, borderBottomColor: "white" }
          }
        >
          <LeagueMenuText>전체 순위</LeagueMenuText>
        </LeagueMenuBox>
        <LeagueMenuBox
          onClick={() => onClick(2)}
          style={
            selected === 2
              ? { opacity: 1.0, borderBottomColor: "black" }
              : { opacity: 0.5, borderBottomColor: "white" }
          }
        >
          <LeagueMenuText>팀 설정</LeagueMenuText>
        </LeagueMenuBox>
        <LeagueMenuBox
          onClick={() => onClick(3)}
          style={
            selected === 3
              ? { opacity: 1.0, borderBottomColor: "black" }
              : { opacity: 0.5, borderBottomColor: "white" }
          }
        >
          <LeagueMenuText>대회 정보</LeagueMenuText>
        </LeagueMenuBox>
      </LeagueMenuDiv>
    </HeaderLeagueDiv>
  );
};
