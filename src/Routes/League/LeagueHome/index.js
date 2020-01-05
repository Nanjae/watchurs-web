import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../../Components/Input";
import IconSearch from "../../../Assets/Common/IconSearch.png";
import BgImage from "../../../Assets/Common/runeterra-freljord-02-resized.png";
import { darkBuleColor } from "../../../Styles/StyleFunction";
import IconClose from "../../../Assets/Common/IconClose.png";
import useWindowDimensions from "../../../Hooks/useWindowDimensions";
import { useWindowScroll } from "@react-hook/window-scroll";
// import Footer from "../../../Components/Footer";
// import RankingBoard from "../../../Components/RankingBoard/RankingBoard";
// import RankingDetail from "../../../Components/RankingBoard/RankingDetail";

const LeagueHome = styled.div``;

const LeagueHomeDiv = styled.div``;

const MainBgDiv = styled.div`
  z-index: -100;
  position: absolute;
  background-image: url(${props => props.url});
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  background-repeat: no-repeat;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 900px) {
    width: 100%;
    height: 800px;
  }
  @media only screen and (min-width: 1200px) {
    width: 100%;
    height: 900px;
  }
  @media only screen and (min-width: 1500px) {
    width: 100%;
    height: 1000px;
  }
`;

const MainOpacityDiv = styled.div`
  /* position: absolute; */
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 900px) {
    padding-top: 200px;
    height: 600px;
  }
  @media only screen and (min-width: 1200px) {
    padding-top: 250px;
    height: 650px;
  }
  @media only screen and (min-width: 1500px) {
    padding-top: 250px;
    height: 750px;
  }
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 900px) {
    padding: 0px 10%;
    height: 600px;
    width: 80%;
  }
  @media only screen and (min-width: 1200px) {
    padding: 0px 15%;
    height: 650px;
    width: 70%;
  }
  @media only screen and (min-width: 1500px) {
    padding: 0px 15%;
    height: 750px;
    width: 70%;
  }
`;

const MainTextBox = styled.div`
  user-select: none;
  text-align: center;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 900px) {
    margin-top: 70px;
    margin-bottom: 35px;
  }
  @media only screen and (min-width: 1200px) {
    margin-top: 70px;
    margin-bottom: 35px;
  }
  @media only screen and (min-width: 1500px) {
    margin-top: 80px;
    margin-bottom: 40px;
  }
`;

const MainFstText = styled.div`
  color: ${props => props.theme.orangeColor};
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 900px) {
    font-size: 22px;
    font-weight: bold;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 22px;
    font-weight: bold;
  }
  @media only screen and (min-width: 1500px) {
    font-size: 24px;
    font-weight: bold;
  }
`;

const MainSndText = styled.div`
  color: ${props => props.theme.whiteColor};
  letter-spacing: -1.5px;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 900px) {
    margin: 8px 0px;
    font-size: 56px;
    font-weight: bold;
  }
  @media only screen and (min-width: 1200px) {
    margin: 8px 0px;
    font-size: 56px;
    font-weight: bold;
  }
  @media only screen and (min-width: 1500px) {
    margin: 10px 0px;
    font-size: 60px;
    font-weight: bold;
  }
`;

const MainTrdText = styled.div`
  color: ${props => props.theme.shinyOrangeColor};
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 900px) {
    font-size: 22px;
    font-weight: bold;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 22px;
    font-weight: bold;
  }
  @media only screen and (min-width: 1500px) {
    font-size: 24px;
    font-weight: bold;
  }
`;

const SearchInputDiv = styled.div`
  border: 4px solid ${props => props.theme.orangeColor};
  background-color: ${props => props.theme.deepBlueColor};
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 900px) {
    width: 700px;
  }
  @media only screen and (min-width: 1200px) {
    width: 800px;
  }
  @media only screen and (min-width: 1500px) {
    width: 900px;
  }
`;

const SearchInput = styled(Input)`
  background-color: ${props => props.theme.deepBlueColor};
  color: white;
  font-weight: bold;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 900px) {
    padding: 12px;
    font-size: 14px;
  }
  @media only screen and (min-width: 1200px) {
    padding: 12px;
    font-size: 14px;
  }
  @media only screen and (min-width: 1500px) {
    padding: 15px;
    font-size: 16px;
  }
`;

const SearchIconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.orangeColor};
  border-left: 4px solid ${props => props.theme.orangeColor};
  cursor: pointer;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 900px) {
    width: 46px;
    height: 46px;
  }
  @media only screen and (min-width: 1200px) {
    width: 46px;
    height: 46px;
  }
  @media only screen and (min-width: 1500px) {
    width: 54px;
    height: 54px;
  }
`;

const SearchIcon = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 900px) {
    width: 24px;
    height: 24px;
  }
  @media only screen and (min-width: 1200px) {
    width: 24px;
    height: 24px;
  }
  @media only screen and (min-width: 1500px) {
    width: 28px;
    height: 28px;
  }
`;

const AdsBottomDiv = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 900px) {
    width: 100%;
  }
  @media only screen and (min-width: 1200px) {
    width: 100%;
  }
  @media only screen and (min-width: 1500px) {
    width: 100%;
  }
`;

const CloseIconBox = styled.div`
  z-index: 100;
  background-color: white;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 900px) {
    margin-left: -14px;
    height: 14px;
  }
  @media only screen and (min-width: 1200px) {
    margin-left: -14px;
    height: 14px;
  }
  @media only screen and (min-width: 1500px) {
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
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 900px) {
    background-size: 10px;
    width: 14px;
    height: 14px;
  }
  @media only screen and (min-width: 1200px) {
    background-size: 10px;
    width: 14px;
    height: 14px;
  }
  @media only screen and (min-width: 1500px) {
    background-size: 10px;
    width: 14px;
    height: 14px;
  }
`;

export default () => {
  const { windowWidth, windowHeight } = useWindowDimensions();
  const scrollY = useWindowScroll(60);
  const fixedScrollY = windowHeight + scrollY;
  const [adsClose, setAdsClose] = useState(false);

  const adsCloseHandler = () => {
    setAdsClose(adsClose ? false : true);
  };

  return (
    <LeagueHome>
      <LeagueHomeDiv>
        <MainBgDiv url={BgImage} />
        <MainOpacityDiv style={{ backgroundColor: darkBuleColor }}>
          <MainDiv>
            <MainTextBox>
              <MainFstText>
                리그오브레전드 브로드캐스터 조회 - 와쳐스
              </MainFstText>
              <MainSndText>WATCHURS</MainSndText>
              <MainTrdText>
                좋아하는 브로드캐스터의 랭킹과 통계를 확인해보세요!
              </MainTrdText>
            </MainTextBox>
            <SearchInputDiv>
              <SearchInput
                placeholder={"브로드캐스터 닉네임 또는 아이디를 입력해주세요."}
              />
              <SearchIconBox>
                <SearchIcon url={IconSearch} />
              </SearchIconBox>
            </SearchInputDiv>
            {adsClose ? null : (
              <AdsBottomDiv
                style={
                  windowWidth >= 1500
                    ? fixedScrollY >= 1000
                      ? { top: windowHeight - (fixedScrollY - 910) }
                      : { top: windowHeight - 90 }
                    : windowWidth >= 1200
                    ? fixedScrollY >= 900
                      ? { top: windowHeight - (fixedScrollY - 810) }
                      : { top: windowHeight - 90 }
                    : windowWidth >= 900 && fixedScrollY >= 800
                    ? { top: windowHeight - (fixedScrollY - 710) }
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
            )}
          </MainDiv>
        </MainOpacityDiv>
      </LeagueHomeDiv>
    </LeagueHome>
  );
};
