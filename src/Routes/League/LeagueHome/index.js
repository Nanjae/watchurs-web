import React from "react";
import styled from "styled-components";
import useWindowDimensions from "../../../Hooks/useWindowDimensions";
// import Footer from "../../../Components/Footer";
// import RankingBoard from "../../../Components/RankingBoard/RankingBoard";
// import RankingDetail from "../../../Components/RankingBoard/RankingDetail";

const LeagueHome = styled.div``;

const LeagueHomeDiv = styled.div``;

const TopDiv = styled.div``;

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchDiv = styled.div``;

const SearchInput = styled.div``;

export default () => {
  const { windowWidth, headerHeight, mainHeight } = useWindowDimensions();

  return (
    <LeagueHome>
      {windowWidth < 900 ? (
        <LeagueHomeDiv>
          <TopDiv style={{ height: headerHeight }} />
          <MainDiv style={{ height: mainHeight }}>Hello</MainDiv>
        </LeagueHomeDiv>
      ) : (
        <LeagueHomeDiv>
          <TopDiv style={{ height: headerHeight }} />
          <MainDiv style={{ height: mainHeight }}>Hello</MainDiv>
        </LeagueHomeDiv>
      )}
    </LeagueHome>
  );
};
