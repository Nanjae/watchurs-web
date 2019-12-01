import React, { Component } from "react";
import styled from "styled-components";
import RankBoard from "./RankBoard";

const Wrapper = styled.div`
  padding-top: 120px;
  display: flex;
  justify-content: left;
`;

const BoardDiv = styled.div`
  width: 1140px;
  min-width: 1140px;
`;

const AdsLeftDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 20%;
  min-width: 300px;
  height: 600px;
  /* border: 1px solid ${props => props.theme.lightGrayColor}; */
`;

const AdsRightDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 20%;
  min-width: 300px;
  height: 600px;
  /* border: 1px solid ${props => props.theme.lightGrayColor}; */
`;

const AdsBottomDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 90px;
  min-height: 90px;
  margin-top: 20px;
  /* border: 1px solid ${props => props.theme.lightGrayColor}; */
`;

let scrollTop = window.scrollY;
let windowHeight = window.innerHeight;

export default class Home extends Component {
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
    this.setState({ windowHeight });
  };

  render() {
    return (
      <Wrapper>
        <AdsLeftDiv
          style={{ top: scrollTop, height: windowHeight < 720 ? 250 : 600 }}
        >
          {windowHeight < 720 ? (
            <iframe
              title="Left_300x250"
              width="300"
              height="250"
              allowtransparency="true"
              src="https://tab2.clickmon.co.kr/pop/wp_ad_300.php?PopAd=CM_M_1003067%7C%5E%7CCM_A_1065774%7C%5E%7CAdver_M_1046207&rt_ad_id_code=RTA_106228&mon_rf=REFERRER_URL"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          ) : (
            <iframe
              title="Left_160x600"
              width="160"
              height="600"
              allowtransparency="true"
              src="https://tab2.clickmon.co.kr/pop/wp_ad_160.php?PopAd=CM_M_1003067%7C%5E%7CCM_A_1065774%7C%5E%7CAdver_M_1046207&rt_ad_id_code=RTA_106227&mon_rf=REFERRER_URL"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          )}
        </AdsLeftDiv>
        <BoardDiv>
          <RankBoard />
          <AdsBottomDiv>
            <iframe
              title="Bottom_728x90"
              width="728"
              height="90"
              allowtransparency="true"
              src="https://tab2.clickmon.co.kr/pop/wp_ad_728.php?PopAd=CM_M_1003067%7C%5E%7CCM_A_1065774%7C%5E%7CAdver_M_1046207&rt_ad_id_code=RTA_106228&mon_rf=REFERRER_URL"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </AdsBottomDiv>
        </BoardDiv>
        <AdsRightDiv
          style={{ top: scrollTop, height: windowHeight < 720 ? 250 : 600 }}
        >
          {windowHeight < 720 ? (
            <iframe
              width="300"
              height="250"
              allowtransparency="true"
              src="https://tab2.clickmon.co.kr/pop/wp_ad_300.php?PopAd=CM_M_1003067%7C%5E%7CCM_A_1065774%7C%5E%7CAdver_M_1046207&rt_ad_id_code=RTA_106226&mon_rf=REFERRER_URL"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          ) : (
            <iframe
              title="Right_160x600"
              width="160"
              height="600"
              allowtransparency="true"
              src="https://tab2.clickmon.co.kr/pop/wp_ad_160.php?PopAd=CM_M_1003067%7C%5E%7CCM_A_1065774%7C%5E%7CAdver_M_1046207&rt_ad_id_code=RTA_106226&mon_rf=REFERRER_URL"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          )}
        </AdsRightDiv>
      </Wrapper>
    );
  }
}
