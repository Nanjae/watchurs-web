import React, { useState } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

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

const LeagueMenuBox = styled(Link)`
  height: 100%;
  margin-top: 5px;
  padding: 10px 5px;
  cursor: pointer;
  border-bottom: 3px solid ${props => props.theme.cTheme};
`;

const LeagueMenuText = styled.div`
  font-size: 17px;
  font-weight: bold;
  user-select: none;
  color: ${props => props.theme.cTheme};
`;

export default withRouter(() => {
  const [selected, setSelected] = useState(1);
  const onClick = num => {
    setSelected(num);
  };
  return (
    <HeaderLeagueDiv>
      <LeagueMenuDiv>
        <LeagueMenuBox
          to="/ranking"
          onClick={() => onClick(1)}
          style={selected === 1 ? { opacity: 1.0 } : { opacity: 0.5 }}
        >
          <LeagueMenuText>전체랭킹</LeagueMenuText>
        </LeagueMenuBox>
        <LeagueMenuBox
          to="/favorites"
          onClick={() => onClick(2)}
          style={selected === 2 ? { opacity: 1.0 } : { opacity: 0.5 }}
        >
          <LeagueMenuText>즐겨찾기</LeagueMenuText>
        </LeagueMenuBox>
        <LeagueMenuBox
          to="/contest"
          onClick={() => onClick(3)}
          style={selected === 3 ? { opacity: 1.0 } : { opacity: 0.5 }}
        >
          <LeagueMenuText>대회정보</LeagueMenuText>
        </LeagueMenuBox>
      </LeagueMenuDiv>
    </HeaderLeagueDiv>
  );
});
