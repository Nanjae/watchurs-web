import React, { useEffect } from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import IconInfo from "../Assets/Common/IconInfo.png";
import IconCircleArrow from "../Assets/Common/IconCircleArrow.png";
import Theme from "../Styles/Theme";
import { deepBlueColor, darkBlueColor } from "../Styles/StyleFunction";
import useWindowDimensions from "../Hooks/useWindowDimensions";
import { useQuery } from "react-apollo-hooks";
import { gql } from "apollo-boost";
import HeaderAutoInput from "../Components/AutoInput/HeaderAutoInput";

const COUNT_ALL_BROADCASTER = gql`
  {
    countAllBroadcaster
  }
`;

const Header = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 599px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const HeaderDiv = styled.div``;

const TopOpacityDiv = styled.div`
  width: 100%;
  @media only screen and (max-width: 599px) {
    height: 114px;
  }
  @media only screen and (min-width: 600px) {
    height: 160px;
  }
  @media only screen and (min-width: 1200px) {
    height: 200px;
  }
  @media only screen and (min-width: 1800px) {
    height: 240px;
  }
`;

const TopBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 599px) {
    padding: 0px 2%;
    width: 96%;
    height: 114px;
  }
  @media only screen and (min-width: 600px) {
    padding: 0px 10%;
    width: 80%;
    height: 160px;
  }
  @media only screen and (min-width: 1200px) {
    padding: 0px 15%;
    width: 70%;
    height: 200px;
  }
  @media only screen and (min-width: 1800px) {
    padding: 0px 20%;
    width: 60%;
    height: 240px;
  }
`;

const TopFstBox = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 599px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const TitleDiv = styled.div`
  @media only screen and (max-width: 599px) {
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
  }
  @media only screen and (min-width: 600px) {
    margin-top: 16px;
  }
  @media only screen and (min-width: 1200px) {
    margin-top: 20px;
  }
  @media only screen and (min-width: 1800px) {
    margin-top: 24px;
  }
`;

const TitleBox = styled.div`
  display: flex;
  align-items: flex-end;
  @media only screen and (max-width: 599px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const TitleFstText = styled(Link)`
  font-weight: bold;
  user-select: none;
  color: ${props => props.theme.whiteColor};
  letter-spacing: -1.5px;
  @media only screen and (max-width: 599px) {
    padding-right: 4px;
    font-size: 28px;
    padding-left: 4px;
  }
  @media only screen and (min-width: 600px) {
    padding-right: 6px;
    font-size: 40px;
  }
  @media only screen and (min-width: 1200px) {
    padding-right: 10px;
    font-size: 48px;
  }
  @media only screen and (min-width: 1800px) {
    padding-right: 14px;
    font-size: 56px;
  }
`;

const TitleSndText = styled.div`
  font-weight: bold;
  user-select: none;
  color: ${props => props.theme.orangeColor};
  @media only screen and (max-width: 599px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 20px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 24px;
  }
  @media only screen and (min-width: 1800px) {
    font-size: 28px;
  }
`;

const TopSndBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  @media only screen and (max-width: 599px) {
    margin-top: 8px;
    align-items: flex-end;
  }
  @media only screen and (min-width: 600px) {
    margin-top: 10px;
  }
  @media only screen and (min-width: 1200px) {
    margin-top: 12px;
  }
  @media only screen and (min-width: 1800px) {
    margin-top: 14px;
  }
`;

const SiteInfoBox = styled.div`
  display: flex;
  align-items: flex-end;
  @media only screen and (max-width: 599px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const SiteInfoFstText = styled.div`
  color: ${props => props.theme.darkOrangeColor};
  @media only screen and (max-width: 599px) {
    font-size: 11px;
    font-weight: bold;
    padding-left: 4px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 14px;
    font-weight: bold;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 16px;
    font-weight: bold;
  }
  @media only screen and (min-width: 1800px) {
    font-size: 18px;
    font-weight: bold;
  }
`;

const SiteInfoSndText = styled.div`
  color: ${props => props.theme.whiteColor};
  @media only screen and (max-width: 599px) {
    font-size: 10px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 11px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 13px;
  }
  @media only screen and (min-width: 1800px) {
    font-size: 15px;
  }
`;

const SiteInfoTrdText = styled.div`
  color: ${props => props.theme.orangeColor};
  @media only screen and (max-width: 599px) {
    margin-left: 3px;
    font-size: 11px;
    font-weight: bold;
  }
  @media only screen and (min-width: 600px) {
    margin-left: 3px;
    font-size: 14px;
    font-weight: bold;
  }
  @media only screen and (min-width: 1200px) {
    margin-left: 4px;
    font-size: 16px;
    font-weight: bold;
  }
  @media only screen and (min-width: 1800px) {
    margin-left: 5px;
    font-size: 18px;
    font-weight: bold;
  }
`;

const SiteInfoFthText = styled.div`
  color: ${props => props.theme.lightOrangeColor};
  @media only screen and (max-width: 599px) {
    margin-left: 3px;
    font-size: 11px;
    font-weight: bold;
  }
  @media only screen and (min-width: 600px) {
    margin-left: 4px;
    font-size: 14px;
    font-weight: bold;
  }
  @media only screen and (min-width: 1200px) {
    margin-left: 5px;
    font-size: 16px;
    font-weight: bold;
  }
  @media only screen and (min-width: 1800px) {
    margin-left: 5px;
    font-size: 18px;
    font-weight: bold;
  }
`;

const CountBroadBox = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 599px) {
    font-size: 10px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 11px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 13px;
  }
  @media only screen and (min-width: 1800px) {
    font-size: 15px;
  }
`;

const InfoIcon = styled.div`
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-position: center;
  @media only screen and (max-width: 599px) {
    background-size: 9px;
    width: 10px;
    height: 10px;
    margin-right: 3px;
  }
  @media only screen and (min-width: 600px) {
    background-size: 10px;
    width: 11px;
    height: 11px;
    margin-right: 3px;
  }
  @media only screen and (min-width: 1200px) {
    background-size: 12px;
    width: 13px;
    height: 13px;
    margin-right: 4px;
  }
  @media only screen and (min-width: 1800px) {
    background-size: 14px;
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }
`;

const CountBroadFstText = styled.div`
  color: ${props => props.theme.whiteColor};
  @media only screen and (max-width: 599px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const ArrowBox = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
  @media only screen and (max-width: 599px) {
    margin-left: 3px;
    margin-right: 4px;
  }
  @media only screen and (min-width: 600px) {
    margin-left: 3px;
  }
  @media only screen and (min-width: 1200px) {
    margin-left: 4px;
  }
  @media only screen and (min-width: 1800px) {
    margin-left: 5px;
  }
`;

const CountBroadSndText = styled.div`
  color: ${props => props.theme.orangeColor};
  @media only screen and (max-width: 599px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const ArrowIcon = styled.div`
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-position: center;
  @media only screen and (max-width: 599px) {
    background-size: 9px;
    width: 10px;
    height: 10px;
    margin-left: 3px;
  }
  @media only screen and (min-width: 600px) {
    background-size: 10px;
    width: 11px;
    height: 11px;
    margin-left: 3px;
  }
  @media only screen and (min-width: 1200px) {
    background-size: 12px;
    width: 13px;
    height: 13px;
    margin-left: 4px;
  }
  @media only screen and (min-width: 1800px) {
    background-size: 14px;
    width: 15px;
    height: 15px;
    margin-left: 5px;
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
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const SearchInputBox = styled.div`
  background-color: ${props => props.theme.whiteColor};
  border-radius: 4px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 100;
  @media only screen and (max-width: 599px) {
    width: 100%;
    padding: 8px 6px;
    height: 14px;
  }
  @media only screen and (min-width: 600px) {
    width: 180px;
    padding: 10px 10px;
    height: 14px;
  }
  @media only screen and (min-width: 1200px) {
    width: 260px;
    padding: 12px 10px;
    height: 16px;
  }
  @media only screen and (min-width: 1800px) {
    width: 340px;
    padding: 15px 10px;
    height: 18px;
  }
`;

const BotOpacityDiv = styled.div`
  @media only screen and (max-width: 599px) {
    width: 100%;
    height: 36px;
  }
  @media only screen and (min-width: 600px) {
    width: 100%;
    height: 40px;
  }
  @media only screen and (min-width: 1200px) {
    width: 100%;
    height: 50px;
  }
  @media only screen and (min-width: 1800px) {
    width: 100%;
    height: 60px;
  }
`;

const MenuDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (max-width: 599px) {
    padding: 0px 0%;
    font-size: 12px;
    width: 100%;
  }
  @media only screen and (min-width: 600px) {
    padding: 0px 7%;
    font-size: 14px;
    width: 86%;
  }
  @media only screen and (min-width: 1200px) {
    padding: 0px 12%;
    font-size: 16px;
    width: 76%;
  }
  @media only screen and (min-width: 1800px) {
    padding: 0px 17%;
    font-size: 18px;
    width: 66%;
  }
`;

const MenuBox = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  color: ${props => props.theme.whiteColor};
  @media only screen and (max-width: 599px) {
    width: 72px;
    height: 36px;
  }
  @media only screen and (min-width: 600px) {
    width: 80px;
    height: 40px;
  }
  @media only screen and (min-width: 1200px) {
    width: 100px;
    height: 50px;
  }
  @media only screen and (min-width: 1800px) {
    width: 120px;
    height: 60px;
  }
`;

const MenuText = styled.div`
  @media only screen and (max-width: 599px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

export default withRouter(({ location }) => {
  const { windowWidth } = useWindowDimensions();

  const { broadData, broadLoading } = useQuery(COUNT_ALL_BROADCASTER);
  if (!broadLoading) {
    // console.log(broadData.countAllBroadcaster);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Header>
      {windowWidth < 600 ? (
        <HeaderDiv>
          <TopOpacityDiv style={{ backgroundColor: darkBlueColor }}>
            <TopBoxDiv>
              <TopFstBox>
                <TitleDiv>
                  <TitleBox>
                    <TitleFstText to={"/"}>WATCHURS</TitleFstText>
                    <TitleSndText>리그 오브 레전드</TitleSndText>
                  </TitleBox>
                </TitleDiv>
              </TopFstBox>
              <TopSndBox>
                <SiteInfoBox>
                  <SiteInfoFstText>와쳐스</SiteInfoFstText>
                  <SiteInfoTrdText>브로드캐스터</SiteInfoTrdText>
                  <SiteInfoFthText>랭킹 & 통계</SiteInfoFthText>
                </SiteInfoBox>
                {!broadLoading && broadData && broadData.countAllBroadcaster && (
                  <CountBroadBox>
                    <InfoIcon url={IconInfo} />
                    <CountBroadFstText>총 브로드캐스터:</CountBroadFstText>
                    <ArrowBox to={`/common/list`}>
                      <CountBroadSndText>
                        {broadData.countAllBroadcaster}명
                      </CountBroadSndText>
                      <ArrowIcon url={IconCircleArrow} />
                    </ArrowBox>
                  </CountBroadBox>
                )}
              </TopSndBox>
              <TopSndBox>
                <SearchInputDiv>
                  <SearchInputBox>
                    <HeaderAutoInput />
                  </SearchInputBox>
                </SearchInputDiv>
              </TopSndBox>
            </TopBoxDiv>
          </TopOpacityDiv>
          <BotOpacityDiv style={{ backgroundColor: deepBlueColor }}>
            <MenuDiv>
              <MenuBox
                style={
                  location.pathname.split("/")[1] === "" ||
                  location.pathname.split("/")[1] === "home"
                    ? {
                        backgroundColor: Theme.deepBlueColor,
                        color: Theme.orangeColor,
                        fontWeight: "bold"
                      }
                    : null
                }
                to={"/home"}
              >
                <MenuText>와쳐스 홈</MenuText>
              </MenuBox>
              <MenuBox
                style={
                  location.pathname.split("/")[1] === "rank"
                    ? {
                        backgroundColor: Theme.deepBlueColor,
                        color: Theme.orangeColor,
                        fontWeight: "bold"
                      }
                    : null
                }
                to={"/rank/all/1"}
              >
                <MenuText>전체 랭킹</MenuText>
              </MenuBox>
              <MenuBox
                style={
                  location.pathname.split("/")[1] === "common" &&
                  location.pathname.split("/")[2] === "request"
                    ? {
                        backgroundColor: Theme.deepBlueColor,
                        color: Theme.orangeColor,
                        fontWeight: "bold"
                      }
                    : null
                }
                to={`/common/request`}
              >
                <MenuText>등록 요청</MenuText>
              </MenuBox>
            </MenuDiv>
          </BotOpacityDiv>
        </HeaderDiv>
      ) : (
        <HeaderDiv>
          <TopOpacityDiv style={{ backgroundColor: darkBlueColor }}>
            <TopBoxDiv>
              <TopFstBox>
                <TitleDiv>
                  <TitleBox>
                    <TitleFstText to="/">WATCHURS</TitleFstText>
                    <TitleSndText>
                      {windowWidth >= 750 ? "리그 오브 레전드" : "LOL"}
                    </TitleSndText>
                  </TitleBox>
                </TitleDiv>
                <SearchInputDiv>
                  <SearchInputBox>
                    <HeaderAutoInput />
                  </SearchInputBox>
                </SearchInputDiv>
              </TopFstBox>
              <TopSndBox>
                {windowWidth >= 750 ? (
                  <SiteInfoBox>
                    <SiteInfoFstText>와쳐스</SiteInfoFstText>
                    <SiteInfoSndText>는</SiteInfoSndText>
                    <SiteInfoTrdText>브로드캐스터</SiteInfoTrdText>
                    <SiteInfoSndText>의</SiteInfoSndText>
                    <SiteInfoFthText>리그오브레전드 랭킹</SiteInfoFthText>
                    <SiteInfoSndText>과</SiteInfoSndText>
                    <SiteInfoFthText>통계</SiteInfoFthText>
                    <SiteInfoSndText>를 제공합니다.</SiteInfoSndText>
                  </SiteInfoBox>
                ) : (
                  <SiteInfoBox>
                    <SiteInfoFstText>와쳐스</SiteInfoFstText>
                    <SiteInfoTrdText>브로드캐스터</SiteInfoTrdText>
                    <SiteInfoFthText>랭킹 & 통계 조회</SiteInfoFthText>
                  </SiteInfoBox>
                )}
                {!broadLoading && broadData && broadData.countAllBroadcaster && (
                  <CountBroadBox>
                    <InfoIcon url={IconInfo} />
                    <CountBroadFstText>등록된 브로드캐스터:</CountBroadFstText>
                    <ArrowBox to={`/common/list`}>
                      <CountBroadSndText>
                        {broadData.countAllBroadcaster}명
                      </CountBroadSndText>
                      <ArrowIcon url={IconCircleArrow} />
                    </ArrowBox>
                  </CountBroadBox>
                )}
              </TopSndBox>
            </TopBoxDiv>
          </TopOpacityDiv>
          <BotOpacityDiv style={{ backgroundColor: deepBlueColor }}>
            <MenuDiv>
              <MenuBox
                style={
                  location.pathname.split("/")[1] === "" ||
                  location.pathname.split("/")[1] === "home"
                    ? {
                        backgroundColor: Theme.deepBlueColor,
                        color: Theme.orangeColor,
                        fontWeight: "bold"
                      }
                    : null
                }
                to="/home"
              >
                <MenuText>와쳐스 홈</MenuText>
              </MenuBox>
              <MenuBox
                style={
                  location.pathname.split("/")[1] === "rank"
                    ? {
                        backgroundColor: Theme.deepBlueColor,
                        color: Theme.orangeColor,
                        fontWeight: "bold"
                      }
                    : null
                }
                to={`/rank/all/1`}
              >
                <MenuText>전체 랭킹</MenuText>
              </MenuBox>
              <MenuBox
                style={
                  location.pathname.split("/")[1] === "common" &&
                  location.pathname.split("/")[2] === "request"
                    ? {
                        backgroundColor: Theme.deepBlueColor,
                        color: Theme.orangeColor,
                        fontWeight: "bold"
                      }
                    : null
                }
                to={`/common/request`}
              >
                <MenuText>등록 요청</MenuText>
              </MenuBox>
            </MenuDiv>
          </BotOpacityDiv>
        </HeaderDiv>
      )}
    </Header>
  );
});
