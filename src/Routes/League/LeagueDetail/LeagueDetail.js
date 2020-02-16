import React from "react";
import styled from "styled-components";
import { darkBlueColor } from "../../../Styles/StyleFunction";
import useWindowDimensions from "../../../Hooks/useWindowDimensions";
import BgImage from "../../../Assets/Common/runeterra-freljord-02-r-c.png";
import Footer from "../../../Components/Footer";
import { withRouter, useHistory } from "react-router-dom";
import { useQuery } from "react-apollo-hooks";
import { gql } from "apollo-boost";
import Loader from "../../../Components/Loader";
import BroadcasterHeader from "../../../Components/BroadcasterDetail/BroadcasterHeader";

const SEE_ONE_BROADCASTER = gql`
  query seeOneBroadcaster($term: String!) {
    seeOneBroadcaster(term: $term) {
      bId
      bName
      bAvatar
      bSummoner {
        sName
        sAvatar
        sWins
        sLosses
        sTier
        sRank
        sPoints
        sDetail {
          dLane
          dWins
          dChampionName
          dChampionAvatar
        }
      }
    }
  }
`;

/**
 * LeagueDetail 전체 스크린
 */

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

export default withRouter(
  ({
    match: {
      params: { bId }
    },
    location
  }) => {
    const { windowHeight } = useWindowDimensions();
    const history = useHistory();
    let detailPage = location.pathname.split("/")[
      location.pathname.split("/").length - 1
    ];

    const { data, loading } = useQuery(SEE_ONE_BROADCASTER, {
      variables: { term: bId }
    });

    if (!loading) {
      // console.log(data);
    }

    if (!loading && data && data.seeOneBroadcaster === null) {
      history.push(`/other/example`);
    }

    if (
      !loading &&
      data &&
      data.seeOneBroadcaster &&
      data.seeOneBroadcaster[0].bSummoner.length < detailPage
    ) {
      detailPage = 1;
      history.push(`/detail/${data.seeOneBroadcaster[0].bId}/1`);
    }

    return (
      <LeagueDetail>
        <LeagueDetailDiv>
          <MainBgDiv windowHeight={windowHeight} url={BgImage} />
          <MainOpacityDiv style={{ backgroundColor: darkBlueColor }} />
          <MainDiv windowHeight={windowHeight}>
            {loading && <Loader />}
            {!loading && data && data.seeOneBroadcaster && (
              <BroadcasterHeader
                loading={loading}
                data={data}
                detailPage={detailPage}
              />
            )}
          </MainDiv>
          <Footer />
        </LeagueDetailDiv>
      </LeagueDetail>
    );
  }
);
