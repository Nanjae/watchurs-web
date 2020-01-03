import React from "react";
import styled from "styled-components";
import Input from "../../../Components/Input";
import IconSearch from "../../../Assets/Common/IconSearch.png";
import BgImage from "../../../Assets/Common/runeterra-freljord-02-resized.png";
import { darkBuleColor } from "../../../Styles/StyleFunction";
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
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1500px) {
    width: 100%;
    height: 1000px;
  }
`;

const MainOpacityDiv = styled.div`
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 900px) {
  }
  @media only screen and (min-width: 1200px) {
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
  }
  @media only screen and (min-width: 1200px) {
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
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1500px) {
    margin-top: 100px;
    margin-bottom: 50px;
  }
`;

const MainFstText = styled.div`
  color: ${props => props.theme.orangeColor};
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 900px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1500px) {
    font-size: 24px;
    font-weight: bold;
  }
`;

const MainSndText = styled.div`
  color: ${props => props.theme.whiteColor};
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 900px) {
  }
  @media only screen and (min-width: 1200px) {
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
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1500px) {
    font-size: 24px;
    font-weight: bold;
  }
`;

const SearchInputDiv = styled.div`
  border: 4px solid ${props => props.theme.orangeColor};
  background-color: ${props => props.theme.deepBlueColor};
  width: 70%;
  min-width: 550px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchInput = styled(Input)`
  background-color: ${props => props.theme.deepBlueColor};
  color: white;
  padding: 15px;
`;

const SearchIconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.orangeColor};
  width: 46px;
  height: 50px;
  border-left: 4px solid ${props => props.theme.orangeColor};
  cursor: pointer;
`;

const SearchIcon = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  width: 24px;
  height: 24px;
`;

export default () => {
  return (
    <LeagueHome>
      <LeagueHomeDiv>
        <MainBgDiv url={BgImage} />
        <MainOpacityDiv style={{ backgroundColor: darkBuleColor }}>
          <MainDiv>
            <MainTextBox>
              <MainFstText>LOL 브로드캐스터 조회 - 와쳐스</MainFstText>
              <MainSndText>WATCHURS</MainSndText>
              <MainTrdText>
                좋아하는 브로드캐스터의 랭킹과 통계를 확인해보세요!
              </MainTrdText>
            </MainTextBox>
            <SearchInputDiv>
              <SearchInput
                placeholder={"브로드캐스터 닉네임 또는 아이디를 입력해주세요."}
                style={{ fontSize: "18px", fontWeight: "bold" }}
              />
              <SearchIconBox>
                <SearchIcon url={IconSearch} />
              </SearchIconBox>
            </SearchInputDiv>
          </MainDiv>
        </MainOpacityDiv>
      </LeagueHomeDiv>
    </LeagueHome>
  );
};
