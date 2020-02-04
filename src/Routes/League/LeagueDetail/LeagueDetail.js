import React from "react";
import styled from "styled-components";
import {
  darkBlueColor,
  lightOrangeColor,
  deepBlueColor
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
import twitchLogo from "../../../Assets/Twitch/TwitchLogo.png";
import ReactMinimalPieChart from "react-minimal-pie-chart";
import emblemUnranked from "../../../Assets/League/EmblemUnranked.png";
import emblemIron from "../../../Assets/League/EmblemIron.png";
import emblemBronze from "../../../Assets/League/EmblemBronze.png";
import emblemSilver from "../../../Assets/League/EmblemSilver.png";
import emblemGold from "../../../Assets/League/EmblemGold.png";
import emblemPlatinum from "../../../Assets/League/EmblemPlatinum.png";
import emblemDiamond from "../../../Assets/League/EmblemDiamond.png";
import emblemMaster from "../../../Assets/League/EmblemMaster.png";
import emblemGrandmaster from "../../../Assets/League/EmblemGrandmaster.png";
import emblemChallenger from "../../../Assets/League/EmblemChallenger.png";

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

const DetailDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 15px 0px;
`;

/**
 * 헤더 브로드캐스터 정보
 */

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
  background-color: ${props => props.theme.blackColor};
  border: 4px solid ${props => props.theme.whiteColor};
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

const BroadInfoDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BroadPlatformDiv = styled.div`
  display: flex;
  background-color: ${props => props.theme.whiteColor};
  width: fit-content;
  padding: 5px;
  border-radius: 4px;
`;

const PlatformIcon = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  width: 14px;
  height: 14px;
  margin-right: 3px;
`;

const BroadPlatform = styled.div`
  font-size: 14px;
  color: ${props => props.theme.twitchColor};
`;

const BroadName = styled.div`
  font-size: 32px;
  color: ${props => props.theme.whiteColor};
`;

const BroadSNameDiv = styled.div`
  font-size: 14px;
  width: fit-content;
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

/**
 * 소환사 인포 박스
 * 1. 소환사 정보
 * 2. 선호 포지션
 * 3. 선호 챔피언
 */

const InfoDiv = styled.div`
  width: 1050px;
  display: flex;
  justify-content: space-between;
`;

const InfoBox = styled.div`
  height: 370px;
  margin-top: 10px;
`;

const InfoMainDiv = styled.div`
  display: flex;
  height: 370px;
`;

const InfoMainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.theme.whiteColor};
  border: 1px solid ${props => props.theme.lightGrayColor};
  width: 338px;
  height: 100%;
`;

const CommonTitleDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 340px;
  height: 40px;
  background-color: ${props => props.theme.darkGrayColor};
  font-size: 16px;
  font-weight: bold;
  margin-left: -1px;
  margin-top: -1px;
  color: ${props => props.theme.lightOrangeColor};
`;

const CommonTitle = styled.div`
  margin-left: 12px;
`;

/**
 * 1. 소환사 정보
 */

const SummonerInfoDiv = styled.div`
  width: 320px;
  display: flex;
  justify-content: flex-start;
  padding: 10px;
  align-items: flex-end;
`;

const SummonerInfoBox = styled.div``;

const SummonerAvatarDiv = styled.div`
  background-color: ${props => props.theme.whiteColor};
  border: 4px solid ${props => props.theme.brownColor};
  width: 90px;
  height: 90px;
  margin-right: 10px;
`;

const SummonerAvatar = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const SummonerLevel = styled.div`
  padding: 3px;
  font-size: 12px;
  font-weight: bold;
  color: white;
  background-color: ${props => props.theme.brownColor};
`;

const SummonerRankingDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const SummonerRankingBox = styled.div``;

const SummonerRankingText = styled.div`
  border-radius: 4px;
  padding: 5px;
  width: fit-content;
  color: ${props => props.theme.whiteColor};
  font-size: 12px;
  font-weight: normal;
  margin-bottom: 4px;
`;

const SummonerName = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.brownColor};
`;

const SummonerDetailDiv = styled.div`
  width: 298px;
  padding: 10px;
  background-color: ${props => props.theme.grayColor};
  border: 1px solid ${props => props.theme.lightGrayColor};
`;

const SummonerTierDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -10px;
`;

const SummonerTierBox = styled.div`
  border-radius: 4px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: bold;
  margin-right: 10px;
`;

const SeasonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: normal;
`;

const SeasonText = styled.div`
  background-color: ${props => props.theme.darkOrangeColor};
  width: fit-content;
  border-radius: 4px;
  padding: 5px;
  color: ${props => props.theme.whiteColor};
`;

const SoloText = styled.div`
  background-color: ${props => props.theme.orangeColor};
  width: fit-content;
  border-radius: 4px;
  padding: 5px;
  color: ${props => props.theme.whiteColor};
  margin-left: 4px;
`;

const TierBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 20px;
  margin-bottom: 10px;
`;

const TierText = styled.div``;

const RankText = styled.div`
  margin: 0px 4px;
`;

const PointsText = styled.div`
  font-size: 16px;
`;

const SummonerEmblemBox = styled.div`
  margin-right: 10px;
`;

const EmblemIcon = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  width: 77px;
  height: 90px;
`;

const SummonerWinRateDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SummonerWinRateBox = styled.div``;

const SummonerWinLossDiv = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WinLossBox = styled.div`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

const TotalText = styled.div`
  color: ${props => props.theme.darkOrangeColor};
`;

const WinsText = styled.div`
  color: ${props => props.theme.winColor};
  margin: 0px 5px;
`;

const LossesText = styled.div`
  color: ${props => props.theme.lossColor};
`;

/**
 * 2. 선호 포지션
 */

const FavLaneDiv = styled.div``;

const LaneInfoDiv = styled.div``;

const LaneWinRateDiv = styled.div``;

/**
 * 3. 선호 챔피언
 */

const FavChampDiv = styled.div``;

const ChampInfoDiv = styled.div``;

const ChampWinRateDiv = styled.div``;

let sTierEmblem = emblemUnranked;
let sTierName = "랭크없음";
let sRank = "";

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

    if (!loading && data && data.seeOneBroadcaster) {
      sRank = data.seeOneBroadcaster[0].bSummoner.sRank;

      if (data.seeOneBroadcaster[0].bSummoner.sTier === "IRON") {
        sTierEmblem = emblemIron;
        sTierName = "아이언";
      } else if (data.seeOneBroadcaster[0].bSummoner.sTier === "BRONZE") {
        sTierEmblem = emblemBronze;
        sTierName = "브론즈";
      } else if (data.seeOneBroadcaster[0].bSummoner.sTier === "SILVER") {
        sTierEmblem = emblemSilver;
        sTierName = "실버";
      } else if (data.seeOneBroadcaster[0].bSummoner.sTier === "GOLD") {
        sTierEmblem = emblemGold;
        sTierName = "골드";
      } else if (data.seeOneBroadcaster[0].bSummoner.sTier === "PLATINUM") {
        sTierEmblem = emblemPlatinum;
        sTierName = "플래티넘";
      } else if (data.seeOneBroadcaster[0].bSummoner.sTier === "DIAMOND") {
        sTierEmblem = emblemDiamond;
        sTierName = "다이아몬드";
      } else if (data.seeOneBroadcaster[0].bSummoner.sTier === "MASTER") {
        sTierEmblem = emblemMaster;
        sTierName = "마스터";
        sRank = "";
      } else if (data.seeOneBroadcaster[0].bSummoner.sTier === "GRANDMASTER") {
        sTierEmblem = emblemGrandmaster;
        sTierName = "그랜드마스터";
        sRank = "";
      } else if (data.seeOneBroadcaster[0].bSummoner.sTier === "CHALLENGER") {
        sTierEmblem = emblemChallenger;
        sTierName = "챌린저";
        sRank = "";
      } else {
        sTierEmblem = emblemUnranked;
        sTierName = "랭크없음";
        sRank = "";
      }
    }

    return (
      <LeagueDetail>
        <LeagueDetailDiv>
          <MainBgDiv windowHeight={windowHeight} url={BgImage} />
          <MainOpacityDiv style={{ backgroundColor: darkBlueColor }} />
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
                      <BroadPlatformDiv>
                        <PlatformIcon url={twitchLogo} />
                        <BroadPlatform>트위치</BroadPlatform>
                      </BroadPlatformDiv>
                      <BroadName>{data.seeOneBroadcaster[0].bName}</BroadName>
                      <BroadSNameDiv>연결된 소환사 계정 : 1</BroadSNameDiv>
                    </BroadInfoDiv>
                  </BroadDiv>
                  <MenuDiv style={{ backgroundColor: deepBlueColor }}>
                    <MenuBox
                      style={{
                        backgroundColor: Theme.deepBlueColor,
                        color: Theme.orangeColor,
                        fontWeight: "bold"
                      }}
                    >
                      {data.seeOneBroadcaster[0].bSummoner.sName}
                    </MenuBox>
                  </MenuDiv>
                </HeaderDiv>
                <InfoDiv>
                  <InfoBox>
                    <InfoMainDiv>
                      <InfoMainBox>
                        <CommonTitleDiv>
                          <CommonTitle>소환사 정보</CommonTitle>
                        </CommonTitleDiv>
                        <SummonerInfoDiv>
                          <SummonerInfoBox>
                            <SummonerAvatarDiv>
                              <SummonerAvatar
                                url={
                                  data.seeOneBroadcaster[0].bSummoner.sAvatar
                                }
                              >
                                <SummonerLevel>100</SummonerLevel>
                              </SummonerAvatar>
                            </SummonerAvatarDiv>
                          </SummonerInfoBox>
                          <SummonerRankingDiv>
                            <SummonerRankingBox>
                              <SummonerRankingText
                                style={{ backgroundColor: Theme.orangeColor }}
                              >
                                전체 1위
                              </SummonerRankingText>
                              <SummonerRankingText
                                style={{ backgroundColor: Theme.twitchColor }}
                              >
                                트위치 1위
                              </SummonerRankingText>
                            </SummonerRankingBox>
                            <SummonerName>
                              {data.seeOneBroadcaster[0].bSummoner.sName}
                            </SummonerName>
                          </SummonerRankingDiv>
                        </SummonerInfoDiv>
                        <SummonerDetailDiv>
                          <SummonerTierDiv>
                            <SummonerTierBox>
                              <SeasonBox>
                                <SeasonText>시즌 10</SeasonText>
                                <SoloText>솔로랭크</SoloText>
                              </SeasonBox>
                              <TierBox>
                                <TierText>{sTierName}</TierText>
                                <RankText>{sRank}</RankText>
                                <PointsText>
                                  ({data.seeOneBroadcaster[0].bSummoner.sPoints}
                                  LP)
                                </PointsText>
                              </TierBox>
                            </SummonerTierBox>
                            <SummonerEmblemBox>
                              <EmblemIcon url={sTierEmblem} />
                            </SummonerEmblemBox>
                          </SummonerTierDiv>
                          <SummonerWinRateDiv>
                            <SummonerWinRateBox>
                              <ReactMinimalPieChart
                                animate={true}
                                animationDuration={500}
                                animationEasing="ease-out"
                                cx={50}
                                cy={50}
                                data={[
                                  {
                                    color: Theme.winColor,
                                    title: "승",
                                    value:
                                      data.seeOneBroadcaster[0].bSummoner.sWins
                                  },
                                  {
                                    color: Theme.lossColor,
                                    title: "패",
                                    value:
                                      data.seeOneBroadcaster[0].bSummoner
                                        .sLosses
                                  }
                                ]}
                                label={({ data }) =>
                                  Math.round(data[0].percentage) + "%"
                                }
                                labelStyle={{
                                  fontSize: 20,
                                  fontWeight: "bold",
                                  fill: Theme.darkOrangeColor
                                }}
                                labelPosition={0}
                                lengthAngle={360}
                                lineWidth={30}
                                onClick={undefined}
                                onMouseOut={undefined}
                                onMouseOver={undefined}
                                paddingAngle={3}
                                radius={50}
                                rounded={false}
                                startAngle={100}
                                viewBoxSize={[100, 100]}
                                style={{ height: 100, width: 100 }}
                              />
                            </SummonerWinRateBox>
                            <SummonerWinLossDiv>
                              <WinLossBox>
                                <TotalText>
                                  {data.seeOneBroadcaster[0].bSummoner.sWins +
                                    data.seeOneBroadcaster[0].bSummoner.sLosses}
                                  전
                                </TotalText>
                                <WinsText>
                                  {data.seeOneBroadcaster[0].bSummoner.sWins}승
                                </WinsText>
                                <LossesText>
                                  {data.seeOneBroadcaster[0].bSummoner.sLosses}
                                  패
                                </LossesText>
                              </WinLossBox>
                            </SummonerWinLossDiv>
                          </SummonerWinRateDiv>
                        </SummonerDetailDiv>
                      </InfoMainBox>
                    </InfoMainDiv>
                  </InfoBox>
                  <InfoBox>
                    <InfoMainDiv>
                      <InfoMainBox>
                        <CommonTitleDiv>
                          <CommonTitle>선호 포지션</CommonTitle>
                        </CommonTitleDiv>
                        <FavLaneDiv>
                          <LaneInfoDiv>선호 라인 정보</LaneInfoDiv>
                          <LaneWinRateDiv>선호 라인 승률</LaneWinRateDiv>
                        </FavLaneDiv>
                      </InfoMainBox>
                    </InfoMainDiv>
                  </InfoBox>
                  <InfoBox>
                    <InfoMainDiv>
                      <InfoMainBox>
                        <CommonTitleDiv>
                          <CommonTitle>선호 챔피언</CommonTitle>
                        </CommonTitleDiv>
                        <FavChampDiv>
                          <ChampInfoDiv>선호 챔피언 정보</ChampInfoDiv>
                          <ChampWinRateDiv>선호 챔피언 승률</ChampWinRateDiv>
                        </FavChampDiv>
                      </InfoMainBox>
                    </InfoMainDiv>
                  </InfoBox>
                </InfoDiv>
              </DetailDiv>
            )}
          </MainDiv>
          <Footer />
        </LeagueDetailDiv>
      </LeagueDetail>
    );
  }
);
