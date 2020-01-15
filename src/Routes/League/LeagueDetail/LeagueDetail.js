import React from "react";
import styled from "styled-components";
import { darkBuleColor } from "../../../Styles/StyleFunction";
import useWindowDimensions from "../../../Hooks/useWindowDimensions";
import BgImage from "../../../Assets/Common/runeterra-freljord-02-r-c.png";
import Footer from "../../../Components/Footer";
import { withRouter } from "react-router-dom";
import { useQuery } from "react-apollo-hooks";
import { gql } from "apollo-boost";
import Loader from "../../../Components/Loader";

const SEE_ONE_BROADCASTER = gql`
  query seeOneBroadcaster($term: String!) {
    seeOneBroadcaster(term: $term) {
      bId
      bName
    }
  }
`;

const LeagueDetail = styled.div``;

const LeagueDetailDiv = styled.div``;

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

const TrashText = styled.div`
  display: flex;
  padding-top: 50px;
  height: 100%;
  font-size: 30px;
  font-weight: bold;
`;

export default withRouter(
  ({
    match: {
      params: { bId }
    }
  }) => {
    const { windowHeight } = useWindowDimensions();
    const { data, loading } = useQuery(SEE_ONE_BROADCASTER, {
      variables: { term: bId }
    });

    if (!loading) console.log(data);
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
      <LeagueDetail>
        <LeagueDetailDiv>
          <MainBgDiv windowHeight={windowHeight} url={BgImage} />
          <MainOpacityDiv style={{ backgroundColor: darkBuleColor }} />
          <MainDiv windowHeight={windowHeight}>
            {loading && <Loader />}
            {!loading && data && data.seeOneBroadcaster && (
              <>
                <TrashText>{data.seeOneBroadcaster[0].bName} 페이지</TrashText>
                <TrashText>프론트 디자인 어떻게 할까~?</TrashText>
              </>
            )}
          </MainDiv>
          <Footer />
        </LeagueDetailDiv>
      </LeagueDetail>
    );
  }
);
