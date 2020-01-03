import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import useWindowDimensions from "../Hooks/useWindowDimensions";
import Input from "./Input";
import IconSearch from "../Assets/Common/IconSearch.png";
import IconInfo from "../Assets/Common/IconInfo.png";
import IconArrow from "../Assets/Common/IconArrow.png";

const Header = styled.div`
  position: absolute;
  min-width: 360px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderDiv = styled.div``;

const TopOpacityDiv = styled.div`
  z-index: -50;
  position: absolute;
  background-color: ${props => props.theme.darkBlueColor};
  opacity: 0.8;
  width: 100%;
  height: 179px;
`;

const TopFstBoxDiv = styled.div`
  padding: 60px 15%;
  display: flex;
  flex-direction: column;
`;

const TopFstBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleDiv = styled.div``;

const TitleBox = styled.div`
  display: flex;
  align-items: flex-end;
`;

const TitleFstText = styled.div`
  font-weight: bold;
  font-size: 36px;
  user-select: none;
  padding-right: 8px;
  color: ${props => props.theme.whiteColor};
`;

const TitleSndText = styled.div`
  font-weight: bold;
  font-size: 24px;
  user-select: none;
  color: ${props => props.theme.orangeColor};
`;

const TopSndBox = styled.div`
  padding-top: 10px;
  display: flex;
  align-items: center;
  user-select: none;
`;

const InfoIcon = styled.div`
  margin-right: 5px;
  margin-top: 1px;
  background-image: url(${props => props.url});
  background-size: 12px 12px;
  background-repeat: no-repeat;
  width: 12px;
  height: 12px;
`;

const CountBroadFstText = styled.div`
  margin-right: 5px;
  font-size: 12px;
`;

const ArrowBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const CountBroadSndText = styled.div`
  font-size: 12px;
  color: ${props => props.theme.orangeColor};
`;

const ArrowIcon = styled.div`
  margin-left: 5px;
  margin-top: 1px;
  background-image: url(${props => props.url});
  background-size: 12px 12px;
  background-repeat: no-repeat;
  width: 12px;
  height: 12px;
`;

const SearchInputDiv = styled.div`
  background-color: ${props => props.theme.whiteColor};
  padding: 0px 10px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchInput = styled(Input)``;

const SearchIcon = styled.div`
  margin-left: 5px;
  background-image: url(${props => props.url});
  background-size: cover;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

const BotOpacityDiv = styled.div`
  z-index: -50;
  position: absolute;
  background-color: ${props => props.theme.deepBlueColor};
  opacity: 0.8;
  width: 100%;
  height: 46px;
`;

const BotDiv = styled.div`
  padding: 15px 15%;
`;

const MenuDiv = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const MenuBox = styled.div`
  margin-right: 30px;
  user-select: none;
  cursor: pointer;
`;

const MenuText = styled.div``;

export default withRouter(() => {
  const { windowWidth } = useWindowDimensions();

  // console.log(
  //   "(windowWidth, windowHeight) : (" + windowWidth + ", " + windowHeight + ")"
  // );

  // console.log(
  //   "(bgHeight, headerHeight) : (" + bgHeight + ", " + headerHeight + ")"
  // );

  // console.log("(mainHeight) : (" + mainHeight + ")");

  return (
    <Header>
      {windowWidth < 900 ? (
        <HeaderDiv>
          <TopFstBoxDiv style={{ padding: 10 }}>
            <TitleDiv
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginBottom: 10,
                padding: "0px 8px"
              }}
            >
              <TopFstBox>
                <TitleBox>
                  <TitleFstText style={{ paddingRight: 4, fontSize: 18 }}>
                    와쳐스
                  </TitleFstText>
                  <TitleSndText style={{ fontSize: 12 }}>
                    리그 오브 레전드
                  </TitleSndText>
                </TitleBox>
              </TopFstBox>
              <TopSndBox style={{ paddingTop: 0 }}>
                <InfoIcon
                  style={{ marginRight: 1, backgroundSize: "10px 10px" }}
                  url={IconInfo}
                />
                <CountBroadFstText style={{ fontSize: 10 }}>
                  등록된 브로드캐스터:
                </CountBroadFstText>
                <ArrowBox>
                  <CountBroadSndText style={{ fontSize: 10 }}>
                    33명
                  </CountBroadSndText>
                  <ArrowIcon
                    style={{ marginLeft: 2, backgroundSize: "10px 10px" }}
                    url={IconArrow}
                  />
                </ArrowBox>
              </TopSndBox>
            </TitleDiv>
            <SearchInputDiv style={{ padding: "8px" }}>
              <SearchInput
                fontsize={"14px"}
                placeholder={"브로드캐스터 검색"}
              />
              <SearchIcon url={IconSearch} style={{ width: 14, height: 14 }} />
            </SearchInputDiv>
          </TopFstBoxDiv>
          <BotDiv style={{ padding: "10px 18px" }}>
            <MenuDiv>
              <MenuBox style={{ marginRight: 10 }}>
                <MenuText style={{ fontSize: 14 }}>홈</MenuText>
              </MenuBox>
              <MenuBox style={{ marginRight: 10 }}>
                <MenuText style={{ fontSize: 14 }}>랭킹</MenuText>
              </MenuBox>
              <MenuBox style={{ marginRight: 10 }}>
                <MenuText style={{ fontSize: 14 }}></MenuText>
              </MenuBox>
            </MenuDiv>
          </BotDiv>
        </HeaderDiv>
      ) : (
        <HeaderDiv>
          <TopOpacityDiv />
          <TopFstBoxDiv>
            <TopFstBox>
              <TitleDiv>
                <TitleBox>
                  <TitleFstText>WATCHURS</TitleFstText>
                  <TitleSndText>리그 오브 레전드</TitleSndText>
                </TitleBox>
              </TitleDiv>
              <SearchInputDiv>
                <SearchInput placeholder={"브로드캐스터 검색"} />
                <SearchIcon url={IconSearch} />
              </SearchInputDiv>
            </TopFstBox>
            <TopSndBox>
              <InfoIcon url={IconInfo} />
              <CountBroadFstText>등록된 브로드캐스터:</CountBroadFstText>
              <ArrowBox>
                <CountBroadSndText>33명</CountBroadSndText>
                <ArrowIcon url={IconArrow} />
              </ArrowBox>
            </TopSndBox>
          </TopFstBoxDiv>
          <BotOpacityDiv />
          <BotDiv>
            <MenuDiv>
              <MenuBox>
                <MenuText>와쳐스 홈</MenuText>
              </MenuBox>
              <MenuBox>
                <MenuText>전체 랭킹</MenuText>
              </MenuBox>
              <MenuBox>
                <MenuText></MenuText>
              </MenuBox>
            </MenuDiv>
          </BotDiv>
        </HeaderDiv>
      )}
    </Header>
  );
});
