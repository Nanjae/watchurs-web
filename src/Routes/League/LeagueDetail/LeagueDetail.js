import React from "react";
import styled from "styled-components";
import {
  darkBuleColor,
  lightOrangeColor,
  deepBuleColor
} from "../../../Styles/StyleFunction";
import useWindowDimensions from "../../../Hooks/useWindowDimensions";
import BgImage from "../../../Assets/Common/runeterra-freljord-02-r-c.png";
import Footer from "../../../Components/Footer";
import { withRouter } from "react-router-dom";
import { useQuery } from "react-apollo-hooks";
import { gql } from "apollo-boost";
import Loader from "../../../Components/Loader";
import HeaderImage from "../../../Assets/Common/runeterra-ionia-01.jpg";
import Theme from "../../../Styles/Theme";

const SEE_ONE_BROADCASTER = gql`
  query seeOneBroadcaster($term: String!) {
    seeOneBroadcaster(term: $term) {
      bId
      bName
      bAvatar
      bSummoner {
        sName
        sAvatar
      }
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

const DetailDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 15px 0px;
`;

const HeaderBgDiv = styled.div`
  position: absolute;
  width: 1050px;
  height: 190px;
  background-image: url(${props => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: 50%;
`;

const HeaderOpacityDiv = styled.div`
  position: absolute;
  width: 1050px;
  z-index: 50;
  padding-top: 190px;
`;

const HeaderDiv = styled.div`
  z-index: 100;
  width: 1050px;
  height: 190px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;
`;

const BroadDiv = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 20px;
  margin-left: 20px;
`;

const BroadAvatarDiv = styled.div`
  background-color: black;
  border: 4px solid white;
  width: 90px;
  height: 90px;
  margin-right: 20px;
`;

const BroadAvatar = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  width: 90px;
  height: 90px;
`;

const BroadInfoDiv = styled.div``;

const BroadName = styled.div`
  font-size: 32px;
  color: ${props => props.theme.whiteColor};
  margin-bottom: 10px;
`;

const BroadSNameDiv = styled.div`
  font-size: 18px;
  color: ${props => props.theme.orangeColor};
  background-color: ${props => props.theme.whiteColor};
  padding: 5px;
  border-radius: 4px;
`;

const MenuDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const MenuBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 0px 20px;
  color: ${props => props.theme.whiteColor};
  font-weight: normal;
  font-size: 18px;
`;

const BaseInfoDiv = styled.div`
  width: 1048px;
  height: 400px;
  background-color: white;
  margin-top: 10px;
  border: 1px solid ${props => props.theme.lightGrayColor};
`;

const BaseTitleDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 1050px;
  height: 50px;
  background-color: ${props => props.theme.darkGrayColor};
  font-size: 20px;
  font-weight: bold;
  margin-left: -1px;
  margin-top: -1px;
  color: ${props => props.theme.lightOrangeColor};
`;

const CommonTitle = styled.div`
  margin-left: 15px;
`;

const BaseMainDiv = styled.div`
  padding: 15px;
`;

const BaseMainLeftDiv = styled.div`
  display: flex;
  align-items: flex-end;
`;

const BaseMainLeftFstBox = styled.div``;

const SummonerAvatarDiv = styled.div``;

const SummonerAvatar = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  width: 90px;
  height: 90px;
  margin-right: 10px;
`;

const BaseMainLeftSndBox = styled.div``;

const SummonerRankingText = styled.div``;

const SummonerName = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const BaseMainRightDiv = styled.div``;

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

    return (
      <LeagueDetail>
        <LeagueDetailDiv>
          <MainBgDiv windowHeight={windowHeight} url={BgImage} />
          <MainOpacityDiv style={{ backgroundColor: darkBuleColor }} />
          <MainDiv windowHeight={windowHeight}>
            {loading && <Loader />}
            {!loading && data && data.seeOneBroadcaster && (
              <DetailDiv>
                <HeaderBgDiv url={HeaderImage} />
                <HeaderOpacityDiv
                  style={{ backgroundColor: lightOrangeColor }}
                />
                <HeaderDiv>
                  <BroadDiv>
                    <BroadAvatarDiv>
                      <BroadAvatar url={data.seeOneBroadcaster[0].bAvatar} />
                    </BroadAvatarDiv>
                    <BroadInfoDiv>
                      <BroadName>{data.seeOneBroadcaster[0].bName}</BroadName>
                      <BroadSNameDiv>연결된 소환사 계정 : 1</BroadSNameDiv>
                    </BroadInfoDiv>
                  </BroadDiv>
                  <MenuDiv style={{ backgroundColor: darkBuleColor }}>
                    <MenuBox
                      style={{
                        backgroundColor: deepBuleColor,
                        color: Theme.orangeColor,
                        fontWeight: "bold"
                      }}
                    >
                      {data.seeOneBroadcaster[0].bSummoner.sName}
                    </MenuBox>
                    {/* <MenuBox>
                      {data.seeOneBroadcaster[0].bSummoner.sName}
                    </MenuBox> */}
                  </MenuDiv>
                </HeaderDiv>
                <BaseInfoDiv>
                  <BaseTitleDiv>
                    <CommonTitle>소환사 정보</CommonTitle>
                  </BaseTitleDiv>
                  <BaseMainDiv>
                    <BaseMainLeftDiv>
                      <BaseMainLeftFstBox>
                        <SummonerAvatar
                          url={data.seeOneBroadcaster[0].bSummoner.sAvatar}
                        />
                      </BaseMainLeftFstBox>
                      <BaseMainLeftSndBox>
                        <SummonerRankingText></SummonerRankingText>
                        <SummonerName>
                          {data.seeOneBroadcaster[0].bSummoner.sName}
                        </SummonerName>
                      </BaseMainLeftSndBox>
                    </BaseMainLeftDiv>
                  </BaseMainDiv>
                </BaseInfoDiv>
                <BaseInfoDiv>
                  <BaseTitleDiv>
                    <CommonTitle>상세 통계</CommonTitle>
                  </BaseTitleDiv>
                </BaseInfoDiv>
              </DetailDiv>
            )}
          </MainDiv>
          <Footer />
        </LeagueDetailDiv>
      </LeagueDetail>
    );
  }
);
