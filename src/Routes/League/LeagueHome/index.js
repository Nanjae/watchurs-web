import React from "react";
import styled from "styled-components";
import HomeImage from "../../../Assets/Common/runeterra-freljord-02-resized.png";
// import useWindowDimensions from "../../../Hooks/useWindowDimensions";
// import Footer from "../../../Components/Footer";
// import RankingBoard from "../../../Components/RankingBoard/RankingBoard";
// import RankingDetail from "../../../Components/RankingBoard/RankingDetail";

const LeagueHome = styled.div``;

const LeagueHomeDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

// 16:9 이미지 사이즈
const SearchDiv = styled.div`
  width: 100%;
  padding-top: 56.25%;
  background-image: url(${HomeImage});
  background-size: 100%;
  background-repeat: no-repeat;
`;

export default () => {
  return (
    <LeagueHome>
      <LeagueHomeDiv>
        <SearchDiv></SearchDiv>
      </LeagueHomeDiv>
    </LeagueHome>
  );
};
