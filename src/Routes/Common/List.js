import React from "react";
import styled from "styled-components";
import { darkBlueColor } from "../../Styles/StyleFunction";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import BgImage from "../../Assets/Common/runeterra-freljord-02-r-c.png";
import Footer from "../../Components/Footer";
import { broadcasters } from "../../BroadcasterList";

const CommonPage = styled.div``;

const CommonPageDiv = styled.div``;

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
  }
  @media only screen and (min-width: 600px) {
    padding-top: 200px;
  }
  @media only screen and (min-width: 1200px) {
    padding-top: 250px;
  }
  @media only screen and (min-width: 1800px) {
    padding-top: 300px;
  }
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.theme.grayColor};
  height: fit-content;
  @media only screen and (max-width: 599px) {
    width: 100%;
    min-height: 600px;
  }
  @media only screen and (min-width: 600px) {
    padding: 0px 10%;
    width: 80%;
    min-height: 600px;
  }
  @media only screen and (min-width: 1200px) {
    padding: 0px 15%;
    width: 70%;
    min-height: 750px;
  }
  @media only screen and (min-width: 1800px) {
    padding: 0px 20%;
    width: 60%;
    min-height: 900px;
  }
`;

const PageDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const PageBox = styled.div`
  height: 100%;
  width: 100%;
`;

const PageHeaderDiv = styled.div`
  border-bottom: 1px solid ${props => props.theme.lightGrayColor};
  padding: 40px;
`;

const PageHeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeaderFstText = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const HeaderSndText = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
  color: ${props => props.theme.brownColor};
`;

const ListDiv = styled.div`
  display: flex;
  margin: 30px 0px;
  justify-content: center;
`;

const ListBox = styled.div`
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ListTitle = styled.div`
  padding: 10px;
  width: 280px;
  color: ${props => props.theme.whiteColor};
  background-color: ${props => props.theme.darkBlueColor};
  border-radius: 4px;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
`;

const ListInfo = styled.div`
  display: flex;
  width: 280px;
  font-weight: bold;
  padding: 10px 10px;
  background-color: ${props => props.theme.whiteColor};
  border-top: 2px solid ${props => props.theme.grayColor};
`;

const ListBNameText = styled.div`
  font-size: 16px;
`;

const ListBIdText = styled.div`
  font-size: 14px;
`;

export default () => {
  const { windowHeight } = useWindowDimensions();

  return (
    <CommonPage>
      <CommonPageDiv>
        <MainBgDiv windowHeight={windowHeight} url={BgImage} />
        <MainOpacityDiv style={{ backgroundColor: darkBlueColor }} />
        <MainDiv windowHeight={windowHeight}>
          <PageDiv>
            <PageBox>
              <PageHeaderDiv>
                <PageHeaderBox>
                  <HeaderFstText>WATCHURS 브로드캐스터 리스트</HeaderFstText>
                  <HeaderSndText>
                    등록된 브로드캐스터 : {broadcasters.length}명
                  </HeaderSndText>
                </PageHeaderBox>
              </PageHeaderDiv>
              <ListDiv>
                <ListBox>
                  <ListTitle>트위치</ListTitle>
                  {broadcasters &&
                    broadcasters.map(
                      (broad, index) =>
                        broad.bPlatform === "TWITCH" && (
                          <ListInfo key={index}>
                            <ListBNameText>{broad.bName}</ListBNameText>
                            <ListBIdText>({broad.bId})</ListBIdText>
                          </ListInfo>
                        )
                    )}
                </ListBox>
                <ListBox>
                  <ListTitle>아프리카TV</ListTitle>
                  {broadcasters &&
                    broadcasters.map(
                      (broad, index) =>
                        broad.bPlatform === "AFREECATV" && (
                          <ListInfo key={index}>
                            <ListBNameText>{broad.bName}</ListBNameText>
                            <ListBIdText>({broad.bId})</ListBIdText>
                          </ListInfo>
                        )
                    )}
                </ListBox>
              </ListDiv>
            </PageBox>
          </PageDiv>
        </MainDiv>
        <Footer />
      </CommonPageDiv>
    </CommonPage>
  );
};
