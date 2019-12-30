import React, { Component } from "react";
import styled from "styled-components";
import Footer from "../../../Components/Footer";
import RankingBoard from "../../../Components/RankingBoard/RankingBoard";
import RankingDetail from "../../../Components/RankingBoard/RankingDetail";

const LeagueRankingDiv = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: flex-start;
  background-color: ${props => props.theme.dTheme};
`;

const LeftDiv = styled.div`
  width: 240px;
  min-width: 240px;
`;

const MainDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const PageInfoDiv = styled.div`
  height: 180px;
  background-color: ${props => props.theme.aTheme};
  color: ${props => props.theme.fTheme};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PageTitleBox = styled.div`
  padding-bottom: 20px;
`;

const PageTitleText = styled.div`
  font-size: 36px;
`;

const PageSummaryBox = styled.div``;

const PageSummaryText = styled.div`
  text-align: center;
  line-height: 18px;
`;

const RankingDiv = styled.div`
  padding: 20px;
  padding-right: 0px;
  display: flex;
`;

const RankingLeft = styled.div`
  width: 65%;
`;

const RankingRight = styled.div`
  width: 35%;
`;

let scrollTop = window.scrollY;
let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;

export default class LeagueRanking extends Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.windowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.windowResize);
  }

  handleScroll = () => {
    scrollTop = window.scrollY;
    this.setState({ scrollTop });
  };

  windowResize = () => {
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
    this.setState({ windowHeight, windowWidth });
  };

  render() {
    return (
      <LeagueRankingDiv>
        <LeftDiv />
        <MainDiv style={{ width: windowWidth - 240 }}>
          <PageInfoDiv>
            <PageTitleBox>
              <PageTitleText>브로드캐스터 전체 랭킹</PageTitleText>
            </PageTitleBox>
            <PageSummaryBox>
              <PageSummaryText>
                와쳐스 브로드캐스터 전체 랭킹은 등록된 모든 브로드캐스터의
                소환사 정보를 조회합니다.
                <br />
                브로드캐스터의 현재 소환사 아이디, 티어 및 최근 경기(20게임)
                통계를 제공합니다.
              </PageSummaryText>
            </PageSummaryBox>
          </PageInfoDiv>
          <RankingDiv style={{ minHeight: windowHeight - 100 }}>
            <RankingLeft>
              <RankingBoard />
            </RankingLeft>
            <RankingRight>
              <RankingDetail />
            </RankingRight>
          </RankingDiv>
          <Footer />
        </MainDiv>
      </LeagueRankingDiv>
    );
  }
}
