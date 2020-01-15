import React from "react";
import styled from "styled-components";
import { darkBuleColor } from "../../../Styles/StyleFunction";
import useWindowDimensions from "../../../Hooks/useWindowDimensions";
import BgImage from "../../../Assets/Common/runeterra-freljord-02-r-c.png";
import RankBoard from "../../../Components/RankBoard/RankBoard";
import Footer from "../../../Components/Footer";
import { withRouter } from "react-router-dom";
// import { useWindowScroll } from "@react-hook/window-scroll";

const LeagueRank = styled.div``;

const LeagueRankDiv = styled.div``;

const MainBgDiv = styled.div`
  z-index: -100;
  position: absolute;
  background-image: url(${props => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: 30%;
  background-position-y: 90%;
  @media only screen and (max-width: 599px) {
    width: 100%;
    min-height: 600px;
  }
  @media only screen and (min-width: 600px) {
    height: ${props => props.windowHeight}px;
    width: 100%;
    min-height: 600px;
  }
  @media only screen and (min-width: 1200px) {
    height: ${props => props.windowHeight}px;
    width: 100%;
    min-height: 750px;
  }
  @media only screen and (min-width: 1800px) {
    height: ${props => props.windowHeight}px;
    width: 100%;
    min-height: 900px;
  }
`;

const MainOpacityDiv = styled.div`
  @media only screen and (max-width: 599px) {
    padding-top: 150px;
  }
  @media only screen and (min-width: 600px) {
    padding-top: 200px;
  }
  @media only screen and (min-width: 1200px) {
    padding-top: 250px;
  }
  @media only screen and (min-width: 1800px) {
    padding-top: 300px;
  }
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.theme.grayColor};
  @media only screen and (max-width: 599px) {
    width: 100%;
    min-height: 450px;
    height: fit-content;
  }
  @media only screen and (min-width: 600px) {
    padding: 0px 10%;
    min-height: ${props => props.windowHeight - 200}px;
    height: fit-content;
    width: 80%;
  }
  @media only screen and (min-width: 1200px) {
    padding: 0px 15%;
    min-height: ${props => props.windowHeight - 250}px;
    height: fit-content;
    width: 70%;
  }
  @media only screen and (min-width: 1800px) {
    padding: 0px 20%;
    min-height: ${props => props.windowHeight - 300}px;
    height: fit-content;
    width: 60%;
  }
`;

export default withRouter(({ match: { params: page } }) => {
  const { windowHeight } = useWindowDimensions();
  //   const scrollY = useWindowScroll(60);
  //   const fixedScrollY = windowHeight + scrollY;
  //   const [adsClose, setAdsClose] = useState(true);

  // console.log("height : " + windowHeight);
  // console.log("scrollY : " + scrollY);
  // console.log("fixed : " + fixedScrollY);

  //   const adsCloseHandler = () => {
  //     setAdsClose(adsClose ? false : true);
  //   };

  return (
    <LeagueRank>
      <LeagueRankDiv>
        <MainBgDiv windowHeight={windowHeight} url={BgImage} />
        <MainOpacityDiv style={{ backgroundColor: darkBuleColor }} />
        <MainDiv windowHeight={windowHeight}>
          <RankBoard linkData={page} />
        </MainDiv>
        <Footer />
      </LeagueRankDiv>
    </LeagueRank>
  );
});
