import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import Theme from "../../Styles/Theme";
import ReactMinimalPieChart from "react-minimal-pie-chart";
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
import positionAdc from "../../Assets/League/PositionAdc.png";
import positionJgl from "../../Assets/League/PositionJgl.png";
import positionMid from "../../Assets/League/PositionMid.png";
import positionSup from "../../Assets/League/PositionSup.png";
import positionTop from "../../Assets/League/PositionTop.png";

/**
 * 소환사 인포 박스
 * 1. 소환사 정보
 * 2. 선호 포지션
 * 3. 최근 승률
 * 4. 선호 챔피언
 */

const InfoDiv = styled.div`
  display: flex;
  user-select: none;
  @media only screen and (max-width: 599px) {
    width: 99%;
    min-width: 300px;
    flex-direction: column;
  }
  @media only screen and (min-width: 600px) {
    min-width: 580px;
    flex-direction: column;
  }
  @media only screen and (min-width: 1200px) {
    min-width: 800px;
    flex-direction: column;
    justify-content: space-between;
  }
  @media only screen and (min-width: 1800px) {
    min-width: 1050px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const InfoColumn = styled.div`
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
  height: 100%;
  @media only screen and (max-width: 599px) {
    width: 99%;
    min-width: 298px;
  }
  @media only screen and (min-width: 600px) {
    min-width: 578px;
  }
  @media only screen and (min-width: 1200px) {
    min-width: 393px;
  }
  @media only screen and (min-width: 1800px) {
    min-width: 338px;
  }
`;

const CommonTitleDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 40px;
  background-color: ${props => props.theme.darkGrayColor};
  font-size: 16px;
  font-weight: bold;
  margin-left: -1px;
  margin-top: -1px;
  color: ${props => props.theme.lightOrangeColor};
  @media only screen and (max-width: 599px) {
    width: 99%;
    min-width: 300px;
  }
  @media only screen and (min-width: 600px) {
    min-width: 580px;
  }
  @media only screen and (min-width: 1200px) {
    min-width: 395px;
  }
  @media only screen and (min-width: 1800px) {
    min-width: 340px;
  }
`;

const CommonTitle = styled.div`
  margin-left: 12px;
`;

/**
 * 1. 소환사 정보
 */

const SummonerInfoDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 10px;
  align-items: flex-end;
  @media only screen and (max-width: 599px) {
    width: 99%;
    min-width: 280px;
  }
  @media only screen and (min-width: 600px) {
    min-width: 560px;
  }
  @media only screen and (min-width: 1200px) {
    min-width: 375px;
  }
  @media only screen and (min-width: 1800px) {
    min-width: 320px;
  }
`;

const SummonerInfoBox = styled.div``;

const SummonerAvatarDiv = styled.div`
  background-color: ${props => props.theme.whiteColor};
  border: 4px solid ${props => props.theme.brownColor};
  margin-right: 10px;
  @media only screen and (max-width: 599px) {
    width: 90px;
    height: 90px;
  }
  @media only screen and (min-width: 600px) {
    width: 90px;
    height: 90px;
  }
  @media only screen and (min-width: 1200px) {
    width: 90px;
    height: 90px;
  }
  @media only screen and (min-width: 1800px) {
    width: 90px;
    height: 90px;
  }
`;

const SummonerAvatar = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  @media only screen and (max-width: 599px) {
    width: 90px;
    height: 90px;
  }
  @media only screen and (min-width: 600px) {
    width: 90px;
    height: 90px;
  }
  @media only screen and (min-width: 1200px) {
    width: 90px;
    height: 90px;
  }
  @media only screen and (min-width: 1800px) {
    width: 90px;
    height: 90px;
  }
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
  padding: 10px;
  background-color: ${props => props.theme.grayColor};
  border: 1px solid ${props => props.theme.lightGrayColor};
  @media only screen and (max-width: 599px) {
    width: 99%;
    min-width: 300px;
  }
  @media only screen and (min-width: 600px) {
    min-width: 580px;
  }
  @media only screen and (min-width: 1200px) {
    min-width: 353px;
  }
  @media only screen and (min-width: 1800px) {
    min-width: 298px;
  }
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
  height: 100px;
  font-weight: bold;
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

const LaneDiv = styled.div`
  height: 122px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 599px) {
    height: 122px;
  }
  @media only screen and (min-width: 600px) {
    height: 122px;
  }
  @media only screen and (min-width: 1200px) {
    height: 170px;
  }
  @media only screen and (min-width: 1800px) {
    height: 122px;
  }
`;

const LaneInfoDiv = styled.div`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 599px) {
    :not(:first-child) {
      margin-left: 10px;
    }
  }
  @media only screen and (min-width: 600px) {
    :not(:first-child) {
      margin-left: 10px;
    }
  }
  @media only screen and (min-width: 1200px) {
    :not(:first-child) {
      margin-left: 30px;
    }
  }
  @media only screen and (min-width: 1800px) {
    :not(:first-child) {
      margin-left: 10px;
    }
  }
`;

const LaneInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 3px;
`;

const LaneImage = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  width: 45px;
  height: 45px;
`;

const LaneText = styled.div`
  margin-top: 5px;
  width: fit-content;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  padding: 4px;
  background-color: ${props => props.theme.orangeColor};
  color: ${props => props.theme.whiteColor};
  text-align: center;
`;

const LaneDetailDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  margin-top: 5px;
`;

const LanePickText = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  font-weight: bold;
  border-radius: 4px;
  background-color: ${props => props.theme.brownColor};
  color: ${props => props.theme.whiteColor};
`;

const LaneWinRateDiv = styled.div`
  padding: 3px;
  border: 1px solid ${props => props.theme.lightGrayColor};
  background-color: ${props => props.theme.grayColor};
  margin-top: 5px;
  width: 100px;
`;

const LaneWinLossBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3px;
  margin-bottom: 8px;
`;

const LaneTotalText = styled.div`
  color: ${props => props.theme.darkOrangeColor};
`;

const LaneWinsText = styled.div`
  color: ${props => props.theme.winColor};
  margin: 0px 3px;
`;

const LaneLossText = styled.div`
  color: ${props => props.theme.lossColor};
`;

const LaneWinRateText = styled.div`
  text-align: center;
`;

/**
 * 3. 최근 승률
 */

const RecentMatchDiv = styled.div`
  height: 150px;
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const RecentMatchBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RecentWinRateDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RecentWinRateBox = styled.div``;

const RecentWinLossDiv = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RecentWinLossBox = styled.div`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

const RecentTotalText = styled.div`
  color: ${props => props.theme.darkOrangeColor};
`;

const RecentWinsText = styled.div`
  color: ${props => props.theme.winColor};
  margin: 0px 5px;
`;

const RecentLossesText = styled.div`
  color: ${props => props.theme.lossColor};
`;

const RecentTextDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const RecentText = styled.div`
  font-size: 12px;
  font-weight: bold;
`;

/**
 * 4. 선호 챔피언
 */

const FavChampDiv = styled.div`
  height: 331px;
  width: 340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FavChampBox = styled.div`
  padding: 5px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  :not(:first-child) {
    border-top: 1px solid ${props => props.theme.lightGrayColor};
  }
  @media only screen and (max-width: 599px) {
    width: 99%;
    min-width: 300px;
  }
  @media only screen and (min-width: 600px) {
    min-width: 580px;
  }
  @media only screen and (min-width: 1200px) {
    min-width: 385px;
  }
  @media only screen and (min-width: 1800px) {
    min-width: 300px;
  }
`;

const ChampInfoDiv = styled.div`
  height: 100%;
  width: 100px;
`;

const ChampInfoBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ChampAvatar = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  width: 60px;
  height: 60px;
`;

const ChampName = styled.div`
  margin-top: 5px;
  font-size: 14px;
  font-weight: bold;
  color: ${props => props.theme.blackColor};
`;

const ChampDetailDiv = styled.div`
  height: 70px;
  width: 210px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  padding: 5px;
  margin-right: 10px;
  border: 1px solid ${props => props.theme.lightGrayColor};
  background-color: ${props => props.theme.grayColor};
`;

const ChampDetailBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

const ChampPick = styled.div`
  padding: 5px;
  font-weight: bold;
  border-radius: 4px;
  background-color: ${props => props.theme.brownColor};
  color: ${props => props.theme.whiteColor};
`;

const ChampWinRate = styled.div`
  padding: 5px;
  font-weight: bold;
  margin-left: 10px;
`;

const ChampWinRateBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(
    to right,
    ${props => props.theme.winColor} 0%,
    ${props => props.theme.winColor} ${props => props.winRate}%,
    ${props => props.theme.lossColor} ${props => props.winRate}%,
    ${props => props.theme.lossColor} 100%
  );
  border-radius: 10px;
  color: ${props => props.theme.whiteColor};
  width: 170px;
  height: 24px;
  font-size: 12px;
  margin: 0px 5px;
  font-weight: normal;
`;

const ChampWinText = styled.div`
  margin-left: 5px;
`;

const ChampTotalText = styled.div`
  margin-top: -20px;
  color: ${props => props.theme.darkOrangeColor};
  font-weight: bold;
  border-radius: 10px;
  background-color: ${props => props.theme.grayColor};
  padding: 3px 5px;
`;

const ChampLossText = styled.div`
  margin-right: 5px;
`;

let sTierEmblem = emblemUnranked;
let sTierName = "UNRANKED";
let sRank = "";
let arrLane = [];
let detailWins = Array(20);
let detailLane = Array(20);
let fstFavLane = "";
let sndFavLane = "";
let arrChamp = [];

export default withRouter(({ loading, data, detailPage }) => {
  const { windowWidth } = useWindowDimensions();

  if (!loading && data && data.seeOneBroadcaster) {
    /**
     * 포지션 분류
     */

    data.seeOneBroadcaster[0].bSummoner[detailPage - 1].sDetail.map(
      (detail, index) => {
        if (detail.dLane <= 5) {
          detailWins[index] = detail.dWins[0];
        } else {
          detailWins[index] = detail.dWins[1];
        }
        if (detail.dLane === 1 || detail.dLane === 6) {
          detailLane[index] = "TOP";
        } else if (detail.dLane === 2 || detail.dLane === 7) {
          detailLane[index] = "JGL";
        } else if (detail.dLane === 3 || detail.dLane === 8) {
          detailLane[index] = "MID";
        } else if (detail.dLane === 4 || detail.dLane === 9) {
          detailLane[index] = "ADC";
        } else if (detail.dLane === 5 || detail.dLane === 10) {
          detailLane[index] = "SUP";
        } else {
          detailLane[index] = "NaN";
        }
        return { detailWins, detailLane };
      }
    );

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
      if (detailWins[index] === "Win") {
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
      fstFavLane = positionTop;
    } else if (arrLane[0].lane === "JGL") {
      fstFavLane = positionJgl;
    } else if (arrLane[0].lane === "MID") {
      fstFavLane = positionMid;
    } else if (arrLane[0].lane === "ADC") {
      fstFavLane = positionAdc;
    } else if (arrLane[0].lane === "SUP") {
      fstFavLane = positionSup;
    }

    if (arrLane[1].lane === "TOP") {
      sndFavLane = positionTop;
    } else if (arrLane[1].lane === "JGL") {
      sndFavLane = positionJgl;
    } else if (arrLane[1].lane === "MID") {
      sndFavLane = positionMid;
    } else if (arrLane[1].lane === "ADC") {
      sndFavLane = positionAdc;
    } else if (arrLane[1].lane === "SUP") {
      sndFavLane = positionSup;
    }

    /**
     * 티어 분류
     */

    sRank = data.seeOneBroadcaster[0].bSummoner[detailPage - 1].sRank;

    if (data.seeOneBroadcaster[0].bSummoner[detailPage - 1].sTier === "IRON") {
      sTierEmblem = emblemIron;
      sTierName = "아이언";
    } else if (
      data.seeOneBroadcaster[0].bSummoner[detailPage - 1].sTier === "BRONZE"
    ) {
      sTierEmblem = emblemBronze;
      sTierName = "브론즈";
    } else if (
      data.seeOneBroadcaster[0].bSummoner[detailPage - 1].sTier === "SILVER"
    ) {
      sTierEmblem = emblemSilver;
      sTierName = "실버";
    } else if (
      data.seeOneBroadcaster[0].bSummoner[detailPage - 1].sTier === "GOLD"
    ) {
      sTierEmblem = emblemGold;
      sTierName = "골드";
    } else if (
      data.seeOneBroadcaster[0].bSummoner[detailPage - 1].sTier === "PLATINUM"
    ) {
      sTierEmblem = emblemPlatinum;
      sTierName = "플래티넘";
    } else if (
      data.seeOneBroadcaster[0].bSummoner[detailPage - 1].sTier === "DIAMOND"
    ) {
      sTierEmblem = emblemDiamond;
      sTierName = "다이아몬드";
    } else if (
      data.seeOneBroadcaster[0].bSummoner[detailPage - 1].sTier === "MASTER"
    ) {
      sTierEmblem = emblemMaster;
      sTierName = "마스터";
      sRank = "";
    } else if (
      data.seeOneBroadcaster[0].bSummoner[detailPage - 1].sTier ===
      "GRANDMASTER"
    ) {
      sTierEmblem = emblemGrandmaster;
      sTierName = "그랜드마스터";
      sRank = "";
    } else if (
      data.seeOneBroadcaster[0].bSummoner[detailPage - 1].sTier === "CHALLENGER"
    ) {
      sTierEmblem = emblemChallenger;
      sTierName = "챌린저";
      sRank = "";
    } else {
      sTierEmblem = emblemUnranked;
      sTierName = "UNRANKED";
      sRank = "";
    }

    /**
     * 챔피언 분류
     */

    arrChamp = [];

    data.seeOneBroadcaster[0].bSummoner[detailPage - 1].sDetail.map(detail => {
      if (arrChamp.find(x => x.champ === detail.dChampionName)) {
        arrChamp[
          arrChamp.findIndex(x => x.champ === detail.dChampionName)
        ].count += 1;
        arrChamp[
          arrChamp.findIndex(x => x.champ === detail.dChampionName)
        ].wins +=
          detail.dLane <= 5
            ? detail.dWins[0] === "Fail"
              ? 0
              : 1
            : detail.dWins[1] === "Win"
            ? 1
            : 0;
      } else {
        arrChamp[arrChamp.length] = {
          champ: detail.dChampionName,
          count: 1,
          wins:
            detail.dLane <= 5
              ? detail.dWins[0] === "Fail"
                ? 0
                : 1
              : detail.dWins[1] === "Win"
              ? 1
              : 0,
          avatar: detail.dChampionAvatar
        };
      }
      return arrChamp;
    });

    arrChamp.sort((a, b) => b.count - a.count);
    // console.log(arrChamp);
  }

  return windowWidth >= 1200 && windowWidth < 1800 ? (
    <InfoDiv>
      <InfoColumn>
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
                        data.seeOneBroadcaster[0].bSummoner[detailPage - 1]
                          .sAvatar
                      }
                    >
                      <SummonerLevel>100</SummonerLevel>
                    </SummonerAvatar>
                  </SummonerAvatarDiv>
                </SummonerInfoBox>
                <SummonerRankingDiv>
                  <SummonerRankingBox>
                    <SummonerRankingText
                      style={{
                        backgroundColor: Theme.orangeColor
                      }}
                    >
                      전체 1위
                    </SummonerRankingText>
                    <SummonerRankingText
                      style={{
                        backgroundColor: Theme.twitchColor
                      }}
                    >
                      트위치 1위
                    </SummonerRankingText>
                  </SummonerRankingBox>
                  <SummonerName>
                    {data.seeOneBroadcaster[0].bSummoner[detailPage - 1].sName}
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
                        (
                        {
                          data.seeOneBroadcaster[0].bSummoner[detailPage - 1]
                            .sPoints
                        }
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
                            data.seeOneBroadcaster[0].bSummoner[detailPage - 1]
                              .sWins
                        },
                        {
                          color: Theme.lossColor,
                          title: "패",
                          value:
                            data.seeOneBroadcaster[0].bSummoner[detailPage - 1]
                              .sLosses
                        }
                      ]}
                      label={({ data }) => Math.round(data[0].percentage) + "%"}
                      labelStyle={{
                        fontSize: 16,
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
                      startAngle={120}
                      viewBoxSize={[100, 100]}
                      style={{ height: 100, width: 100 }}
                    />
                  </SummonerWinRateBox>
                  <SummonerWinLossDiv>
                    <WinLossBox>
                      <TotalText>
                        {data.seeOneBroadcaster[0].bSummoner[detailPage - 1]
                          .sWins +
                          data.seeOneBroadcaster[0].bSummoner[detailPage - 1]
                            .sLosses}
                        전
                      </TotalText>
                      <WinsText>
                        {
                          data.seeOneBroadcaster[0].bSummoner[detailPage - 1]
                            .sWins
                        }
                        승
                      </WinsText>
                      <LossesText>
                        {
                          data.seeOneBroadcaster[0].bSummoner[detailPage - 1]
                            .sLosses
                        }
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
                <CommonTitle>선호 챔피언</CommonTitle>
              </CommonTitleDiv>
              <FavChampDiv>
                <FavChampBox>
                  <ChampInfoDiv>
                    <ChampInfoBox>
                      <ChampAvatar url={arrChamp[0].avatar} />
                      <ChampName>{arrChamp[0].champ}</ChampName>
                    </ChampInfoBox>
                  </ChampInfoDiv>
                  <ChampDetailDiv>
                    <ChampDetailBox>
                      <ChampPick>
                        픽률 {Math.round((arrChamp[0].count / 20) * 100)}%
                      </ChampPick>
                      <ChampWinRate>
                        승률{" "}
                        {Math.round(
                          (arrChamp[0].wins / arrChamp[0].count) * 100
                        )}
                        %
                      </ChampWinRate>
                    </ChampDetailBox>
                    <ChampDetailBox>
                      <ChampWinRateBar
                        winRate={Math.round(
                          (arrChamp[0].wins / arrChamp[0].count) * 100
                        )}
                      >
                        <ChampWinText>{arrChamp[0].wins}승</ChampWinText>
                        <ChampTotalText>{arrChamp[0].count}전</ChampTotalText>
                        <ChampLossText>
                          {arrChamp[0].count - arrChamp[0].wins}패
                        </ChampLossText>
                      </ChampWinRateBar>
                    </ChampDetailBox>
                  </ChampDetailDiv>
                </FavChampBox>
                {arrChamp.length < 2 ? null : (
                  <FavChampBox>
                    <ChampInfoDiv>
                      <ChampInfoBox>
                        <ChampAvatar url={arrChamp[1].avatar} />
                        <ChampName>{arrChamp[1].champ}</ChampName>
                      </ChampInfoBox>
                    </ChampInfoDiv>
                    <ChampDetailDiv>
                      <ChampDetailBox>
                        <ChampPick>
                          픽률 {Math.round((arrChamp[1].count / 20) * 100)}%
                        </ChampPick>
                        <ChampWinRate>
                          승률{" "}
                          {Math.round(
                            (arrChamp[1].wins / arrChamp[1].count) * 100
                          )}
                          %
                        </ChampWinRate>
                      </ChampDetailBox>
                      <ChampDetailBox>
                        <ChampWinRateBar
                          winRate={Math.round(
                            (arrChamp[1].wins / arrChamp[1].count) * 100
                          )}
                        >
                          <ChampWinText>{arrChamp[1].wins}승</ChampWinText>
                          <ChampTotalText>{arrChamp[1].count}전</ChampTotalText>
                          <ChampLossText>
                            {arrChamp[1].count - arrChamp[1].wins}패
                          </ChampLossText>
                        </ChampWinRateBar>
                      </ChampDetailBox>
                    </ChampDetailDiv>
                  </FavChampBox>
                )}
                {arrChamp.length < 3 ? null : (
                  <FavChampBox>
                    <ChampInfoDiv>
                      <ChampInfoBox>
                        <ChampAvatar url={arrChamp[2].avatar} />
                        <ChampName>{arrChamp[2].champ}</ChampName>
                      </ChampInfoBox>
                    </ChampInfoDiv>
                    <ChampDetailDiv>
                      <ChampDetailBox>
                        <ChampPick>
                          픽률 {Math.round((arrChamp[2].count / 20) * 100)}%
                        </ChampPick>
                        <ChampWinRate>
                          승률{" "}
                          {Math.round(
                            (arrChamp[2].wins / arrChamp[2].count) * 100
                          )}
                          %
                        </ChampWinRate>
                      </ChampDetailBox>
                      <ChampDetailBox>
                        <ChampWinRateBar
                          winRate={Math.round(
                            (arrChamp[2].wins / arrChamp[2].count) * 100
                          )}
                        >
                          <ChampWinText>{arrChamp[2].wins}승</ChampWinText>
                          <ChampTotalText>{arrChamp[2].count}전</ChampTotalText>
                          <ChampLossText>
                            {arrChamp[2].count - arrChamp[2].wins}패
                          </ChampLossText>
                        </ChampWinRateBar>
                      </ChampDetailBox>
                    </ChampDetailDiv>
                  </FavChampBox>
                )}
              </FavChampDiv>
            </InfoMainBox>
          </InfoMainDiv>
        </InfoBox>
      </InfoColumn>
      <InfoColumn>
        <InfoBox>
          <InfoMainDiv style={{ height: 210 }}>
            <InfoMainBox>
              <CommonTitleDiv>
                <CommonTitle>최근 승률</CommonTitle>
              </CommonTitleDiv>
              <RecentMatchDiv>
                <RecentMatchBox>
                  <RecentWinRateDiv>
                    <RecentWinRateBox>
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
                            value: detailWins.filter(x => x === "Win").length
                          },
                          {
                            color: Theme.lossColor,
                            title: "패",
                            value: detailWins.filter(x => x === "Fail").length
                          }
                        ]}
                        label={({ data }) =>
                          Math.round(data[0].percentage) + "%"
                        }
                        labelStyle={{
                          fontSize: 16,
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
                        startAngle={120}
                        viewBoxSize={[100, 100]}
                        style={{ height: 100, width: 100 }}
                      />
                    </RecentWinRateBox>
                    <RecentWinLossDiv>
                      <RecentWinLossBox>
                        <RecentTotalText>{detailWins.length}전</RecentTotalText>
                        <RecentWinsText>
                          {detailWins.filter(x => x === "Win").length}승
                        </RecentWinsText>
                        <RecentLossesText>
                          {detailWins.filter(x => x === "Fail").length}패
                        </RecentLossesText>
                      </RecentWinLossBox>
                    </RecentWinLossDiv>
                  </RecentWinRateDiv>
                </RecentMatchBox>
                <RecentTextDiv>
                  <RecentText>
                    * 소환사의 협곡(5vs5) 매치 결과만 표시됩니다.
                  </RecentText>
                </RecentTextDiv>
              </RecentMatchDiv>
            </InfoMainBox>
          </InfoMainDiv>
        </InfoBox>
        <InfoBox>
          <InfoMainDiv style={{ height: 210 }}>
            <InfoMainBox>
              <CommonTitleDiv>
                <CommonTitle>선호 포지션</CommonTitle>
              </CommonTitleDiv>
              <LaneDiv>
                <LaneInfoDiv>
                  <LaneInfoBox>
                    <LaneImage url={fstFavLane} />
                    <LaneText>{arrLane[0].lane}</LaneText>
                  </LaneInfoBox>
                  <LaneDetailDiv>
                    <LanePickText>
                      픽률 {Math.round((arrLane[0].count / 20) * 100)}%
                    </LanePickText>
                    <LaneWinRateDiv>
                      <LaneWinLossBox>
                        <LaneTotalText>{arrLane[0].count}전</LaneTotalText>
                        <LaneWinsText>{arrLane[0].wins}승</LaneWinsText>
                        <LaneLossText>
                          {arrLane[0].count - arrLane[0].wins}패
                        </LaneLossText>
                      </LaneWinLossBox>
                      <LaneWinRateText>
                        승률{" "}
                        {Math.round((arrLane[0].wins / arrLane[0].count) * 100)}
                        %
                      </LaneWinRateText>
                    </LaneWinRateDiv>
                  </LaneDetailDiv>
                </LaneInfoDiv>
                {arrLane[1].count !== 0 && (
                  <LaneInfoDiv>
                    <LaneInfoBox>
                      <LaneImage url={sndFavLane} />
                      <LaneText>{arrLane[1].lane}</LaneText>
                    </LaneInfoBox>
                    <LaneDetailDiv>
                      <LanePickText>
                        픽률 {Math.round((arrLane[1].count / 20) * 100)}%
                      </LanePickText>
                      <LaneWinRateDiv>
                        <LaneWinLossBox>
                          <LaneTotalText>{arrLane[1].count}전</LaneTotalText>
                          <LaneWinsText>{arrLane[1].wins}승</LaneWinsText>
                          <LaneLossText>
                            {arrLane[1].count - arrLane[1].wins}패
                          </LaneLossText>
                        </LaneWinLossBox>
                        <LaneWinRateText>
                          승률{" "}
                          {Math.round(
                            (arrLane[1].wins / arrLane[1].count) * 100
                          )}
                          %
                        </LaneWinRateText>
                      </LaneWinRateDiv>
                    </LaneDetailDiv>
                  </LaneInfoDiv>
                )}
              </LaneDiv>
            </InfoMainBox>
          </InfoMainDiv>
        </InfoBox>
      </InfoColumn>
    </InfoDiv>
  ) : (
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
                      data.seeOneBroadcaster[0].bSummoner[detailPage - 1]
                        .sAvatar
                    }
                  >
                    <SummonerLevel>
                      {
                        data.seeOneBroadcaster[0].bSummoner[detailPage - 1]
                          .sLevel
                      }
                    </SummonerLevel>
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
                  {data.seeOneBroadcaster[0].bSummoner[detailPage - 1].sName}
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
                    {sTierName !== "UNRANKED" ? (
                      <PointsText>
                        (
                        {
                          data.seeOneBroadcaster[0].bSummoner[detailPage - 1]
                            .sPoints
                        }
                        LP)
                      </PointsText>
                    ) : null}
                  </TierBox>
                </SummonerTierBox>
                <SummonerEmblemBox>
                  <EmblemIcon url={sTierEmblem} />
                </SummonerEmblemBox>
              </SummonerTierDiv>
              {data.seeOneBroadcaster[0].bSummoner[detailPage - 1].sWins +
                data.seeOneBroadcaster[0].bSummoner[detailPage - 1].sLosses >
              0 ? (
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
                            data.seeOneBroadcaster[0].bSummoner[detailPage - 1]
                              .sWins
                        },
                        {
                          color: Theme.lossColor,
                          title: "패",
                          value:
                            data.seeOneBroadcaster[0].bSummoner[detailPage - 1]
                              .sLosses
                        }
                      ]}
                      label={({ data }) => Math.round(data[0].percentage) + "%"}
                      labelStyle={{
                        fontSize: 16,
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
                      startAngle={120}
                      viewBoxSize={[100, 100]}
                      style={{ height: 100, width: 100 }}
                    />
                  </SummonerWinRateBox>
                  <SummonerWinLossDiv>
                    <WinLossBox>
                      <TotalText>
                        {data.seeOneBroadcaster[0].bSummoner[detailPage - 1]
                          .sWins +
                          data.seeOneBroadcaster[0].bSummoner[detailPage - 1]
                            .sLosses}
                        전
                      </TotalText>
                      <WinsText>
                        {
                          data.seeOneBroadcaster[0].bSummoner[detailPage - 1]
                            .sWins
                        }
                        승
                      </WinsText>
                      <LossesText>
                        {
                          data.seeOneBroadcaster[0].bSummoner[detailPage - 1]
                            .sLosses
                        }
                        패
                      </LossesText>
                    </WinLossBox>
                  </SummonerWinLossDiv>
                </SummonerWinRateDiv>
              ) : (
                <SummonerWinRateDiv>랭크 기록 없음</SummonerWinRateDiv>
              )}
            </SummonerDetailDiv>
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
              <FavChampBox>
                <ChampInfoDiv>
                  <ChampInfoBox>
                    <ChampAvatar url={arrChamp[0].avatar} />
                    <ChampName>{arrChamp[0].champ}</ChampName>
                  </ChampInfoBox>
                </ChampInfoDiv>
                <ChampDetailDiv>
                  <ChampDetailBox>
                    <ChampPick>
                      픽률 {Math.round((arrChamp[0].count / 20) * 100)}%
                    </ChampPick>
                    <ChampWinRate>
                      승률{" "}
                      {Math.round((arrChamp[0].wins / arrChamp[0].count) * 100)}
                      %
                    </ChampWinRate>
                  </ChampDetailBox>
                  <ChampDetailBox>
                    <ChampWinRateBar
                      winRate={Math.round(
                        (arrChamp[0].wins / arrChamp[0].count) * 100
                      )}
                    >
                      <ChampWinText>{arrChamp[0].wins}승</ChampWinText>
                      <ChampTotalText>{arrChamp[0].count}전</ChampTotalText>
                      <ChampLossText>
                        {arrChamp[0].count - arrChamp[0].wins}패
                      </ChampLossText>
                    </ChampWinRateBar>
                  </ChampDetailBox>
                </ChampDetailDiv>
              </FavChampBox>
              {arrChamp.length < 2 ? null : (
                <FavChampBox>
                  <ChampInfoDiv>
                    <ChampInfoBox>
                      <ChampAvatar url={arrChamp[1].avatar} />
                      <ChampName>{arrChamp[1].champ}</ChampName>
                    </ChampInfoBox>
                  </ChampInfoDiv>
                  <ChampDetailDiv>
                    <ChampDetailBox>
                      <ChampPick>
                        픽률 {Math.round((arrChamp[1].count / 20) * 100)}%
                      </ChampPick>
                      <ChampWinRate>
                        승률{" "}
                        {Math.round(
                          (arrChamp[1].wins / arrChamp[1].count) * 100
                        )}
                        %
                      </ChampWinRate>
                    </ChampDetailBox>
                    <ChampDetailBox>
                      <ChampWinRateBar
                        winRate={Math.round(
                          (arrChamp[1].wins / arrChamp[1].count) * 100
                        )}
                      >
                        <ChampWinText>{arrChamp[1].wins}승</ChampWinText>
                        <ChampTotalText>{arrChamp[1].count}전</ChampTotalText>
                        <ChampLossText>
                          {arrChamp[1].count - arrChamp[1].wins}패
                        </ChampLossText>
                      </ChampWinRateBar>
                    </ChampDetailBox>
                  </ChampDetailDiv>
                </FavChampBox>
              )}
              {arrChamp.length < 3 ? null : (
                <FavChampBox>
                  <ChampInfoDiv>
                    <ChampInfoBox>
                      <ChampAvatar url={arrChamp[2].avatar} />
                      <ChampName>{arrChamp[2].champ}</ChampName>
                    </ChampInfoBox>
                  </ChampInfoDiv>
                  <ChampDetailDiv>
                    <ChampDetailBox>
                      <ChampPick>
                        픽률 {Math.round((arrChamp[2].count / 20) * 100)}%
                      </ChampPick>
                      <ChampWinRate>
                        승률{" "}
                        {Math.round(
                          (arrChamp[2].wins / arrChamp[2].count) * 100
                        )}
                        %
                      </ChampWinRate>
                    </ChampDetailBox>
                    <ChampDetailBox>
                      <ChampWinRateBar
                        winRate={Math.round(
                          (arrChamp[2].wins / arrChamp[2].count) * 100
                        )}
                      >
                        <ChampWinText>{arrChamp[2].wins}승</ChampWinText>
                        <ChampTotalText>{arrChamp[2].count}전</ChampTotalText>
                        <ChampLossText>
                          {arrChamp[2].count - arrChamp[2].wins}패
                        </ChampLossText>
                      </ChampWinRateBar>
                    </ChampDetailBox>
                  </ChampDetailDiv>
                </FavChampBox>
              )}
            </FavChampDiv>
          </InfoMainBox>
        </InfoMainDiv>
      </InfoBox>
      <InfoBox>
        <InfoMainDiv>
          <InfoMainBox>
            <CommonTitleDiv>
              <CommonTitle>선호 포지션</CommonTitle>
            </CommonTitleDiv>
            <LaneDiv>
              <LaneInfoDiv>
                <LaneInfoBox>
                  <LaneImage url={fstFavLane} />
                  <LaneText>{arrLane[0].lane}</LaneText>
                </LaneInfoBox>
                <LaneDetailDiv>
                  <LanePickText>
                    픽률 {Math.round((arrLane[0].count / 20) * 100)}%
                  </LanePickText>
                  <LaneWinRateDiv>
                    <LaneWinLossBox>
                      <LaneTotalText>{arrLane[0].count}전</LaneTotalText>
                      <LaneWinsText>{arrLane[0].wins}승</LaneWinsText>
                      <LaneLossText>
                        {arrLane[0].count - arrLane[0].wins}패
                      </LaneLossText>
                    </LaneWinLossBox>
                    <LaneWinRateText>
                      승률{" "}
                      {Math.round((arrLane[0].wins / arrLane[0].count) * 100)}%
                    </LaneWinRateText>
                  </LaneWinRateDiv>
                </LaneDetailDiv>
              </LaneInfoDiv>
              {arrLane[1].count !== 0 && (
                <LaneInfoDiv>
                  <LaneInfoBox>
                    <LaneImage url={sndFavLane} />
                    <LaneText>{arrLane[1].lane}</LaneText>
                  </LaneInfoBox>
                  <LaneDetailDiv>
                    <LanePickText>
                      픽률 {Math.round((arrLane[1].count / 20) * 100)}%
                    </LanePickText>
                    <LaneWinRateDiv>
                      <LaneWinLossBox>
                        <LaneTotalText>{arrLane[1].count}전</LaneTotalText>
                        <LaneWinsText>{arrLane[1].wins}승</LaneWinsText>
                        <LaneLossText>
                          {arrLane[1].count - arrLane[1].wins}패
                        </LaneLossText>
                      </LaneWinLossBox>
                      <LaneWinRateText>
                        승률{" "}
                        {Math.round((arrLane[1].wins / arrLane[1].count) * 100)}
                        %
                      </LaneWinRateText>
                    </LaneWinRateDiv>
                  </LaneDetailDiv>
                </LaneInfoDiv>
              )}
            </LaneDiv>
            <CommonTitleDiv>
              <CommonTitle>최근 승률</CommonTitle>
            </CommonTitleDiv>
            <RecentMatchDiv>
              <RecentMatchBox>
                <RecentWinRateDiv>
                  <RecentWinRateBox>
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
                          value: detailWins.filter(x => x === "Win").length
                        },
                        {
                          color: Theme.lossColor,
                          title: "패",
                          value: detailWins.filter(x => x === "Fail").length
                        }
                      ]}
                      label={({ data }) => Math.round(data[0].percentage) + "%"}
                      labelStyle={{
                        fontSize: 16,
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
                      startAngle={120}
                      viewBoxSize={[100, 100]}
                      style={{ height: 100, width: 100 }}
                    />
                  </RecentWinRateBox>
                  <RecentWinLossDiv>
                    <RecentWinLossBox>
                      <RecentTotalText>{detailWins.length}전</RecentTotalText>
                      <RecentWinsText>
                        {detailWins.filter(x => x === "Win").length}승
                      </RecentWinsText>
                      <RecentLossesText>
                        {detailWins.filter(x => x === "Fail").length}패
                      </RecentLossesText>
                    </RecentWinLossBox>
                  </RecentWinLossDiv>
                </RecentWinRateDiv>
              </RecentMatchBox>
              <RecentTextDiv>
                <RecentText>
                  * 소환사의 협곡(5vs5) 매치 결과만 표시됩니다.
                </RecentText>
              </RecentTextDiv>
            </RecentMatchDiv>
          </InfoMainBox>
        </InfoMainDiv>
      </InfoBox>
    </InfoDiv>
  );
});
