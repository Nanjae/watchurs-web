import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Loader from "../Loader";
import twitchLogo from "../../Assets/Twitch/TwitchLogo.png";
import emblemUnranked from "../../Assets/League/EmblemUnranked.png";
import emblemIron from "../../Assets/League/EmblemIron.png";
import emblemBronze from "../../Assets/League/EmblemBronze.png";
import emblemSilver from "../../Assets/League/EmblemSilver.png";
import emblemGold from "../../Assets/League/EmblemGold.png";
import emblemPlatinum from "../../Assets/League/EmblemPlatinum.png";
import emblemDiamond from "../../Assets/League/EmblemDiamond.png";
import emblemMaster from "../../Assets/League/EmblemMaster.png";
import emblemGrandmaster from "../../Assets/League/EmblemGrandmaster.png";
import emblemChallenger from "../../Assets/League/EmblemChallenger.png";
import positionTop from "../../Assets/League/PositionTop.png";
import positionJgl from "../../Assets/League/PositionJgl.png";
import positionMid from "../../Assets/League/PositionMid.png";
import positionAdc from "../../Assets/League/PositionAdc.png";
import positionSup from "../../Assets/League/PositionSup.png";
import PieChart from "react-minimal-pie-chart";
import Theme from "../../Styles/Theme";

const SEE_ONE_SUMMONER = gql`
  query seeOneSummoner($sId: String!) {
    seeOneSummoner(sId: $sId) {
      sName
      sAvatar
      sTier
      sRank
      sPoints
      sWins
      sLosses
      sDetail {
        dLane
        dRole
        dKills
        dDeaths
        dAssists
        dWins
        dChampionName
        dChampionAvatar
      }
      sBroadcaster {
        bId
        bName
        bAvatar
        bPlatform
      }
      updatedAt
    }
  }
`;

const DetailDiv = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  color: ${props => props.theme.jTheme};
`;

const Wrapper = styled.div``;

const HeaderDiv = styled.div`
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1.5px solid ${props => props.theme.jTheme};
  border-radius: 4px;
`;

const BAvatar = styled.div`
  width: 42px;
  height: 42px;
  background-image: url(${props => props.url});
  background-size: cover;
  border-radius: 21px;
`;

const HeaderColumn = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 5px;
  padding-left: 10px;
  padding-right: 5px;
`;

const BInfoDiv = styled.div`
  display: flex;
  padding-bottom: 8px;
`;
const BNameBox = styled.div`
  margin-right: 5px;
`;
const BNameText = styled.div`
  color: ${props => props.theme.cTheme};
`;
const BIdBox = styled.div`
  margin-right: 5px;
`;
const BIdText = styled.div`
  font-size: 12px;
`;
const BPlatform = styled.div`
  width: 14px;
  height: 14px;
  background-image: url(${props => props.url});
  background-size: cover;
`;

const SInfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
`;
const SNameBox = styled.div``;
const SNameText = styled.div`
  color: ${props => props.theme.kTheme};
`;

const STierDiv = styled.div`
  display: flex;
`;

const STierBox = styled.div`
  margin-right: 2px;
`;
const STierText = styled.div``;
const SRankBox = styled.div`
  margin-right: 2px;
`;
const SRankText = styled.div``;
const SPointsBox = styled.div``;
const SPointsText = styled.div`
  font-size: 12px;
`;

const STier = styled.div`
  width: 36px;
  height: 42px;
  background-image: url(${props => props.url});
  background-size: cover;
`;

const MainDiv = styled.div`
  height: 315px;
`;

const MainRow = styled.div`
  display: flex;
  height: 50%;
`;

const TitleRow = styled.div`
  width: 90%;
  padding: 0px 5%;
  display: flex;
  justify-content: space-between;
`;
const TitleBox = styled.div`
  width: 100%;
`;
const TitleText = styled.div``;

const TopLeftDiv = styled.div`
  width: 50%;
  margin-right: 10px;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1.5px solid ${props => props.theme.jTheme};
  border-radius: 4px;
  margin-top: 10px;
`;

const TopRightDiv = styled.div`
  width: 50%;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1.5px solid ${props => props.theme.jTheme};
  border-radius: 4px;
  margin-top: 10px;
`;

const TotalRateDiv = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
  padding: 35px 0px;
`;

const TotalWinsBox = styled.div``;
const TotalWinsText = styled.div`
  color: #e38627;
  font-size: 13px;
`;
const TotalLossesBox = styled.div``;
const TotalLossesText = styled.div`
  color: #826069;
  font-size: 13px;
`;

const BotLeftDiv = styled.div`
  width: 50%;
  margin-right: 10px;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1.5px solid ${props => props.theme.jTheme};
  border-radius: 4px;
  margin-top: 10px;
`;
const BotRightDiv = styled.div`
  width: 50%;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1.5px solid ${props => props.theme.jTheme};
  border-radius: 4px;
  margin-top: 10px;
`;

const BotRightColumn = styled.div`
  width: 100%;
`;

const FavDiv = styled.div`
  margin-top: 10px;
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FavBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FavLane = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${props => props.url});
  background-size: cover;
  margin: 5px 0px;
`;

const FavCountBox = styled.div``;
const FavCountText = styled.div`
  font-size: 12px;
  color: ${props => props.theme.cTheme};
`;
const FavWinRateBox = styled.div``;
const FavWinRateText = styled.div`
  font-size: 12px;
  color: ${props => props.theme.kTheme};
`;

let sTierEmblem = emblemUnranked;
let sTierName = "";
let sRank = "";
let detailWins = Array(20);
let detailLane = Array(20);
let arrLane = [];
let firstLane;
let secondLane;

export default ({ select }) => {
  const { data, loading } = useQuery(SEE_ONE_SUMMONER, {
    variables: { sId: select }
  });

  if (!loading && data && data.seeOneSummoner) {
    sRank = data.seeOneSummoner.sRank;
    if (data.seeOneSummoner.sTier === "UNRANKED") {
      sTierEmblem = emblemUnranked;
      sTierName = "랭크없음";
      sRank = "";
    } else if (data.seeOneSummoner.sTier === "IRON") {
      sTierEmblem = emblemIron;
      sTierName = "아이언";
    } else if (data.seeOneSummoner.sTier === "BRONZE") {
      sTierEmblem = emblemBronze;
      sTierName = "브론즈";
    } else if (data.seeOneSummoner.sTier === "SILVER") {
      sTierEmblem = emblemSilver;
      sTierName = "실버";
    } else if (data.seeOneSummoner.sTier === "GOLD") {
      sTierEmblem = emblemGold;
      sTierName = "골드";
    } else if (data.seeOneSummoner.sTier === "PLATINUM") {
      sTierEmblem = emblemPlatinum;
      sTierName = "플래티넘";
    } else if (data.seeOneSummoner.sTier === "DIAMOND") {
      sTierEmblem = emblemDiamond;
      sTierName = "다이아몬드";
    } else if (data.seeOneSummoner.sTier === "MASTER") {
      sTierEmblem = emblemMaster;
      sTierName = "마스터";
      sRank = "";
    } else if (data.seeOneSummoner.sTier === "GRANDMASTER") {
      sTierEmblem = emblemGrandmaster;
      sTierName = "그랜드마스터";
      sRank = "";
    } else if (data.seeOneSummoner.sTier === "CHALLENGER") {
      sTierEmblem = emblemChallenger;
      sTierName = "챌린저";
      sRank = "";
    }
    data.seeOneSummoner.sDetail.map((detail, index) => {
      detailWins[index] = detail.dWins;
      if (detail.dLane === "TOP") {
        detailLane[index] = "TOP";
      } else if (detail.dLane === "JUNGLE") {
        detailLane[index] = "JGL";
      } else if (detail.dLane === "MIDDLE") {
        detailLane[index] = "MID";
      } else if (detail.dLane === "BOTTOM") {
        if (detail.dRole === "DUO_CARRY") {
          detailLane[index] = "ADC";
        } else if (detail.dRole === "DUO_SUPPORT") {
          detailLane[index] = "SUP";
        } else {
          detailLane[index] = "NAN";
        }
      } else {
        detailLane[index] = "NAN";
      }

      return { detailWins, detailLane };
    });

    const topLane = detailLane.filter(x => x === "TOP").length;
    const jglLane = detailLane.filter(x => x === "JGL").length;
    const midLane = detailLane.filter(x => x === "MID").length;
    const adcLane = detailLane.filter(x => x === "ADC").length;
    const supLane = detailLane.filter(x => x === "SUP").length;

    let topWins = 0;
    let jglWins = 0;
    let midWins = 0;
    let adcWins = 0;
    let supWins = 0;

    detailLane.map((lane, index) => {
      if (detailWins[index]) {
        if (lane === "TOP") {
          topWins += 1;
        } else if (lane === "JGL") {
          jglWins += 1;
        } else if (lane === "MID") {
          midWins += 1;
        } else if (lane === "ADC") {
          adcWins += 1;
        } else if (lane === "SUP") {
          supWins += 1;
        }
      }
      return { topWins, jglWins, midWins, adcWins, supWins };
    });

    arrLane = [
      { lane: "TOP", count: topLane, wins: topWins },
      { lane: "JGL", count: jglLane, wins: jglWins },
      { lane: "MID", count: midLane, wins: midWins },
      { lane: "ADC", count: adcLane, wins: adcWins },
      { lane: "SUP", count: supLane, wins: supWins }
    ].sort((a, b) => {
      return a.count > b.count ? -1 : 1;
    });

    if (arrLane[0].lane === "TOP") {
      firstLane = positionTop;
    } else if (arrLane[0].lane === "JGL") {
      firstLane = positionJgl;
    } else if (arrLane[0].lane === "MID") {
      firstLane = positionMid;
    } else if (arrLane[0].lane === "ADC") {
      firstLane = positionAdc;
    } else if (arrLane[0].lane === "SUP") {
      firstLane = positionSup;
    }

    if (arrLane[1].lane === "TOP") {
      secondLane = positionTop;
    } else if (arrLane[1].lane === "JGL") {
      secondLane = positionJgl;
    } else if (arrLane[1].lane === "MID") {
      secondLane = positionMid;
    } else if (arrLane[1].lane === "ADC") {
      secondLane = positionAdc;
    } else if (arrLane[1].lane === "SUP") {
      secondLane = positionSup;
    }
  }

  return (
    <DetailDiv>
      {loading && <Loader paddingTop={160} fontSize={16} />}
      {!loading && data && data.seeOneSummoner && (
        <Wrapper>
          <HeaderDiv>
            <BAvatar url={data.seeOneSummoner.sBroadcaster.bAvatar} />
            <HeaderColumn>
              <BInfoDiv>
                <BNameBox>
                  <BNameText>
                    {data.seeOneSummoner.sBroadcaster.bName}
                  </BNameText>
                </BNameBox>
                <BIdBox>
                  <BIdText>({data.seeOneSummoner.sBroadcaster.bId})</BIdText>
                </BIdBox>
                <BPlatform
                  url={
                    data.seeOneSummoner.sBroadcaster.bPlatform === "TWITCH"
                      ? twitchLogo
                      : null
                  }
                />
              </BInfoDiv>
              <SInfoDiv>
                <SNameBox>
                  <SNameText>{data.seeOneSummoner.sName}</SNameText>
                </SNameBox>
                <STierDiv>
                  <STierBox>
                    <STierText>{sTierName}</STierText>
                  </STierBox>
                  <SRankBox>
                    <SRankText>{sRank}</SRankText>
                  </SRankBox>
                  <SPointsBox>
                    <SPointsText>({data.seeOneSummoner.sPoints}LP)</SPointsText>
                  </SPointsBox>
                </STierDiv>
              </SInfoDiv>
            </HeaderColumn>
            <STier url={sTierEmblem} />
          </HeaderDiv>
          <MainDiv>
            <MainRow>
              <TopLeftDiv>
                <TitleBox>
                  <TitleText>시즌 승률</TitleText>
                  <TitleRow>
                    <PieChart
                      animate={true}
                      animationDuration={500}
                      animationEasing="ease-out"
                      cx={50}
                      cy={50}
                      data={[
                        {
                          color: "#E38627",
                          title: "승",
                          value: data.seeOneSummoner.sWins
                        },
                        {
                          color: "#826069",
                          title: "패",
                          value: data.seeOneSummoner.sLosses
                        }
                      ]}
                      label={({ data }) => Math.round(data[0].percentage) + "%"}
                      labelStyle={{ fontSize: 20, fill: Theme.cTheme }}
                      labelPosition={0}
                      lengthAngle={360}
                      lineWidth={30}
                      onClick={undefined}
                      onMouseOut={undefined}
                      onMouseOver={undefined}
                      paddingAngle={5}
                      radius={50}
                      rounded={false}
                      startAngle={100}
                      viewBoxSize={[100, 100]}
                      style={{ height: 100, width: 100, marginTop: 10 }}
                    />
                    <TotalRateDiv>
                      <TotalWinsBox>
                        <TotalWinsText>
                          {data.seeOneSummoner.sWins} 승
                        </TotalWinsText>
                      </TotalWinsBox>
                      <TotalLossesBox>
                        <TotalLossesText>
                          {data.seeOneSummoner.sLosses} 패
                        </TotalLossesText>
                      </TotalLossesBox>
                    </TotalRateDiv>
                  </TitleRow>
                </TitleBox>
              </TopLeftDiv>
              <TopRightDiv>
                <TitleBox>
                  <TitleText>최근 챔피언</TitleText>
                </TitleBox>
              </TopRightDiv>
            </MainRow>
            <MainRow>
              <BotLeftDiv>
                <TitleBox>
                  <TitleText>최근 승률</TitleText>
                  <TitleRow>
                    <PieChart
                      animate={true}
                      animationDuration={500}
                      animationEasing="ease-out"
                      cx={50}
                      cy={50}
                      data={[
                        {
                          color: "#E38627",
                          title: "승",
                          value: detailWins.filter(x => x === true).length
                        },
                        {
                          color: "#826069",
                          title: "패",
                          value: detailWins.filter(x => x === false).length
                        }
                      ]}
                      label={({ data }) => Math.round(data[0].percentage) + "%"}
                      labelStyle={{ fontSize: 20, fill: Theme.cTheme }}
                      labelPosition={0}
                      lengthAngle={360}
                      lineWidth={30}
                      onClick={undefined}
                      onMouseOut={undefined}
                      onMouseOver={undefined}
                      paddingAngle={5}
                      radius={50}
                      rounded={false}
                      startAngle={100}
                      viewBoxSize={[100, 100]}
                      style={{ height: 100, width: 100, marginTop: 10 }}
                    />
                    <TotalRateDiv>
                      <TotalWinsBox>
                        <TotalWinsText>
                          {detailWins.filter(x => x === true).length} 승
                        </TotalWinsText>
                      </TotalWinsBox>
                      <TotalLossesBox>
                        <TotalLossesText>
                          {detailWins.filter(x => x === false).length} 패
                        </TotalLossesText>
                      </TotalLossesBox>
                    </TotalRateDiv>
                  </TitleRow>
                </TitleBox>
              </BotLeftDiv>
              <BotRightDiv>
                <BotRightColumn>
                  <TitleBox>
                    <TitleText>선호 포지션</TitleText>
                  </TitleBox>
                  <FavDiv>
                    <FavBox>
                      <FavCountBox>
                        <FavCountText>
                          픽률 {Math.round((arrLane[0].count / 20) * 100)}%
                        </FavCountText>
                      </FavCountBox>
                      <FavLane url={firstLane} />
                      <FavWinRateBox>
                        <FavWinRateText>
                          승률{" "}
                          {Math.round(
                            (arrLane[0].wins / arrLane[0].count) * 100
                          )}
                          %
                        </FavWinRateText>
                      </FavWinRateBox>
                    </FavBox>
                    <FavBox>
                      <FavCountBox>
                        <FavCountText>
                          픽률 {Math.round((arrLane[1].count / 20) * 100)}%
                        </FavCountText>
                      </FavCountBox>
                      <FavLane url={secondLane} />
                      <FavWinRateBox>
                        <FavWinRateText>
                          승률{" "}
                          {Math.round(
                            (arrLane[1].wins / arrLane[1].count) * 100
                          )}
                          %
                        </FavWinRateText>
                      </FavWinRateBox>
                    </FavBox>
                  </FavDiv>
                </BotRightColumn>
              </BotRightDiv>
            </MainRow>
          </MainDiv>
        </Wrapper>
      )}
    </DetailDiv>
  );
};
