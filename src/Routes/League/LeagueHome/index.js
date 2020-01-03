import React from "react";
import styled from "styled-components";
import useWindowDimensions from "../../../Hooks/useWindowDimensions";
import Input from "../../../Components/Input";
import IconSearch from "../../../Assets/Common/IconSearch.png";
import BgImage from "../../../Assets/Common/runeterra-freljord-02-resized.png";
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
  width: 100%;
  height: 950px;
`;

const MainOpacityDiv = styled.div`
  margin-top: 225px;
  z-index: -50;
  position: absolute;
  background-color: ${props => props.theme.darkBlueColor};
  height: 725px;
  width: 100%;
  opacity: 0.6;
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 725px;
  padding: 0px 15%;
  padding-top: 225px;
`;

const MainTextBox = styled.div`
  margin-top: 100px;
  margin-bottom: 50px;
  user-select: none;
  text-align: center;
`;

const MainFstText = styled.div`
  color: ${props => props.theme.orangeColor};
  font-size: 20px;
  font-weight: bold;
`;

const MainSndText = styled.div`
  margin: 10px 0px;
  color: ${props => props.theme.whiteColor};
  font-size: 50px;
  font-weight: bold;
`;

const MainTrdText = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.shinyOrangeColor};
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
  const { windowWidth } = useWindowDimensions();

  return (
    <LeagueHome>
      {windowWidth < 900 ? (
        <LeagueHomeDiv>
          {/* <TopDiv style={{ height: 114 }} /> */}
          <MainDiv style={{ height: 200 }}>Hello</MainDiv>
        </LeagueHomeDiv>
      ) : (
        <LeagueHomeDiv>
          <MainBgDiv url={BgImage} />
          <MainOpacityDiv />
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
        </LeagueHomeDiv>
      )}
    </LeagueHome>
  );
};
