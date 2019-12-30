import React from "react";
import styled from "styled-components";
import searchImage from "../../../Assets/Common/runeterra-freljord-02-resized.png";
// import Footer from "../../../Components/Footer";
// import RankingBoard from "../../../Components/RankingBoard/RankingBoard";
// import RankingDetail from "../../../Components/RankingBoard/RankingDetail";

const LeagueHome = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 1000px;
`;

const LeagueSearchDiv = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${searchImage});
  background-size: 100%;
  background-repeat: no-repeat;
`;

export default () => {
  return (
    <LeagueHome>
      <LeagueSearchDiv></LeagueSearchDiv>
    </LeagueHome>
  );
};
