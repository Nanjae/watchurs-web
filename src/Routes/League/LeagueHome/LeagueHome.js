import React, { useState } from "react";
import styled from "styled-components";
import BgImage from "../../../Assets/Common/runeterra-freljord-02-r-c.png";
import { darkBlueColor } from "../../../Styles/StyleFunction";
import IconClose from "../../../Assets/Common/IconClose.png";
import useWindowDimensions from "../../../Hooks/useWindowDimensions";
import { useWindowScroll } from "@react-hook/window-scroll";
import RankBoard from "../../../Components/HomeRankBoard/RankBoard";
import Footer from "../../../Components/Footer";
import HomeAutoInput from "../../../Components/AutoInput/HomeAutoInput";

const LeagueHome = styled.div``;

const LeagueHomeDiv = styled.div``;

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
    min-height: 450px;
  }
  @media only screen and (min-width: 600px) {
    padding-top: 200px;
    min-height: 400px;
    height: ${props => props.windowHeight - 200}px;
  }
  @media only screen and (min-width: 1200px) {
    padding-top: 250px;
    min-height: 500px;
    height: ${props => props.windowHeight - 250}px;
  }
  @media only screen and (min-width: 1800px) {
    padding-top: 300px;
    min-height: 600px;
    height: ${props => props.windowHeight - 300}px;
  }
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (max-width: 599px) {
    padding: 0px 2%;
    width: 96%;
    min-height: 450px;
  }
  @media only screen and (min-width: 600px) {
    padding: 0px 10%;
    height: ${props => props.windowHeight - 200}px;
    min-height: 400px;
    width: 80%;
  }
  @media only screen and (min-width: 1200px) {
    padding: 0px 15%;
    height: ${props => props.windowHeight - 250}px;
    min-height: 500px;
    width: 70%;
  }
  @media only screen and (min-width: 1800px) {
    padding: 0px 20%;
    height: ${props => props.windowHeight - 300}px;
    min-height: 600px;
    width: 60%;
  }
`;

const MainTextBox = styled.div`
  user-select: none;
  text-align: center;
  @media only screen and (max-width: 599px) {
    margin-top: 60px;
    margin-bottom: 30px;
  }
  @media only screen and (min-width: 600px) {
    margin-top: 80px;
    margin-bottom: 40px;
  }
  @media only screen and (min-width: 1200px) {
    margin-top: 100px;
    margin-bottom: 50px;
  }
  @media only screen and (min-width: 1800px) {
    margin-top: 120px;
    margin-bottom: 60px;
  }
`;

const MainFstText = styled.div`
  color: ${props => props.theme.orangeColor};
  @media only screen and (max-width: 599px) {
    font-size: 18px;
    font-weight: bold;
  }
  @media only screen and (min-width: 600px) {
    font-size: 20px;
    font-weight: bold;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 24px;
    font-weight: bold;
  }
  @media only screen and (min-width: 1800px) {
    font-size: 28px;
    font-weight: bold;
  }
`;

const MainSndText = styled.div`
  color: ${props => props.theme.whiteColor};
  letter-spacing: -1.5px;
  @media only screen and (max-width: 599px) {
    margin: 6px 0px;
    font-size: 52px;
    font-weight: bold;
  }
  @media only screen and (min-width: 600px) {
    margin: 8px 0px;
    font-size: 56px;
    font-weight: bold;
  }
  @media only screen and (min-width: 1200px) {
    margin: 10px 0px;
    font-size: 60px;
    font-weight: bold;
  }
  @media only screen and (min-width: 1800px) {
    margin: 12px 0px;
    font-size: 64px;
    font-weight: bold;
  }
`;

const MainTrdText = styled.div`
  color: ${props => props.theme.shinyOrangeColor};
  @media only screen and (max-width: 599px) {
    font-size: 18px;
    font-weight: bold;
    line-height: 24px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 20px;
    font-weight: bold;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 24px;
    font-weight: bold;
  }
  @media only screen and (min-width: 1800px) {
    font-size: 28px;
    font-weight: bold;
  }
`;
const SearchInputDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media only screen and (max-width: 599px) {
    width: 100%;
  }
  @media only screen and (min-width: 600px) {
    width: fit-content;
  }
  @media only screen and (min-width: 1200px) {
    width: fit-content;
  }
  @media only screen and (min-width: 1800px) {
    width: fit-content;
  }
`;

const SearchInputBox = styled.div`
  background-color: ${props => props.theme.deepBlueColor};
  border-radius: 4px;
  border: 4px solid ${props => props.theme.orangeColor};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 70;
  padding: 0px;
  @media only screen and (max-width: 599px) {
    width: 100%;
    height: 42px;
  }
  @media only screen and (min-width: 600px) {
    width: fit-content;
    height: 48px;
  }
  @media only screen and (min-width: 1200px) {
    width: fit-content;
    height: 54px;
  }
  @media only screen and (min-width: 1800px) {
    width: fit-content;
    height: 60px;
  }
`;

const AdsBottomDiv = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  @media only screen and (max-width: 599px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const CloseIconBox = styled.div`
  z-index: 100;
  background-color: white;
  @media only screen and (max-width: 599px) {
    margin-left: -14px;
    height: 14px;
  }
  @media only screen and (min-width: 600px) {
    margin-left: -14px;
    height: 14px;
  }
  @media only screen and (min-width: 1200px) {
    margin-left: -14px;
    height: 14px;
  }
  @media only screen and (min-width: 1800px) {
    margin-left: -14px;
    height: 14px;
  }
`;

const CloseIcon = styled.div`
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  cursor: pointer;
  @media only screen and (max-width: 599px) {
    background-size: 10px;
    width: 14px;
    height: 14px;
  }
  @media only screen and (min-width: 600px) {
    background-size: 10px;
    width: 14px;
    height: 14px;
  }
  @media only screen and (min-width: 1200px) {
    background-size: 10px;
    width: 14px;
    height: 14px;
  }
  @media only screen and (min-width: 1800px) {
    background-size: 10px;
    width: 14px;
    height: 14px;
  }
`;

export default () => {
  const { windowWidth, windowHeight } = useWindowDimensions();
  const scrollY = useWindowScroll(60);
  const fixedScrollY = windowHeight + scrollY;
  const [adsClose, setAdsClose] = useState(true);

  // console.log("height : " + windowHeight);
  // console.log("scrollY : " + scrollY);
  // console.log("fixed : " + fixedScrollY);

  const adsCloseHandler = () => {
    setAdsClose(adsClose ? false : true);
  };

  return (
    <LeagueHome>
      <LeagueHomeDiv>
        <MainBgDiv windowHeight={windowHeight} url={BgImage} />
        <MainOpacityDiv
          windowHeight={windowHeight}
          style={{ backgroundColor: darkBlueColor }}
        >
          <MainDiv windowHeight={windowHeight}>
            <MainTextBox windowHeight={windowHeight}>
              <MainFstText>
                {windowWidth < 600
                  ? "LOL 브로드캐스터 조회 - 와쳐스"
                  : "리그오브레전드 브로드캐스터 조회 - 와쳐스"}
              </MainFstText>
              <MainSndText>WATCHURS</MainSndText>
              {windowWidth < 600 ? (
                <MainTrdText>
                  좋아하는 브로드캐스터의
                  <br />
                  랭킹과 통계를 확인해보세요!
                </MainTrdText>
              ) : (
                <MainTrdText>
                  좋아하는 브로드캐스터의 랭킹과 통계를 확인해보세요!
                </MainTrdText>
              )}
            </MainTextBox>
            <SearchInputDiv>
              <SearchInputBox>
                <HomeAutoInput />
              </SearchInputBox>
            </SearchInputDiv>
            {adsClose ? null : windowWidth >= 750 ? (
              <AdsBottomDiv
                style={
                  windowWidth >= 1800
                    ? fixedScrollY >= windowHeight - 300
                      ? windowHeight < 900
                        ? { top: fixedScrollY - scrollY - 90 }
                        : {
                            top:
                              windowHeight - (fixedScrollY - windowHeight + 90)
                          }
                      : { top: windowHeight - 90 }
                    : windowWidth >= 1200
                    ? fixedScrollY >= windowHeight - 250
                      ? windowHeight < 750
                        ? { top: fixedScrollY - scrollY - 90 }
                        : {
                            top:
                              windowHeight - (fixedScrollY - windowHeight + 90)
                          }
                      : { top: windowHeight - 90 }
                    : windowWidth >= 750 && fixedScrollY >= windowHeight - 200
                    ? windowHeight < 600
                      ? { top: fixedScrollY - scrollY - 90 }
                      : {
                          top: windowHeight - (fixedScrollY - windowHeight + 90)
                        }
                    : { top: windowHeight - 90 }
                }
              >
                <iframe
                  title="Bottom_728x90"
                  width="728"
                  height="90"
                  allowtransparency="true"
                  src="https://tab2.clickmon.co.kr/pop/wp_ad_728.php?PopAd=CM_M_1003067%7C%5E%7CCM_A_1065774%7C%5E%7CAdver_M_1046207&rt_ad_id_code=RTA_106228&mon_rf=REFERRER_URL"
                  frameBorder="0"
                  scrolling="no"
                ></iframe>
                <CloseIconBox>
                  <CloseIcon url={IconClose} onClick={adsCloseHandler} />
                </CloseIconBox>
              </AdsBottomDiv>
            ) : (
              <AdsBottomDiv
                style={
                  windowWidth >= 600
                    ? fixedScrollY >= windowHeight - 200
                      ? windowHeight < 600
                        ? { top: fixedScrollY - scrollY - 200 }
                        : {
                            top:
                              windowHeight - (fixedScrollY - windowHeight + 200)
                          }
                      : { top: windowHeight - 200 }
                    : fixedScrollY >= windowHeight - 150
                    ? windowHeight < 500
                      ? { top: fixedScrollY - scrollY - 200 }
                      : {
                          top:
                            windowHeight - (fixedScrollY - windowHeight + 200)
                        }
                    : { top: windowHeight - 200 }
                }
              >
                <iframe
                  title="Bottom_200x200"
                  width="200"
                  height="200"
                  allowtransparency="true"
                  src="https://tab2.clickmon.co.kr/pop/wp_ad_200.php?PopAd=CM_M_1003067%7C%5E%7CCM_A_1065774%7C%5E%7CAdver_M_1046207&rt_ad_id_code=RTA_106228&mon_rf=REFERRER_URL"
                  frameBorder="0"
                  scrolling="no"
                ></iframe>
                <CloseIconBox>
                  <CloseIcon url={IconClose} onClick={adsCloseHandler} />
                </CloseIconBox>
              </AdsBottomDiv>
            )}
          </MainDiv>
        </MainOpacityDiv>
        <RankBoard />
        <Footer />
      </LeagueHomeDiv>
    </LeagueHome>
  );
};
