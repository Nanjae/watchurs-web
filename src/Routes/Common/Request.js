import React from "react";
import styled from "styled-components";
import { darkBlueColor } from "../../Styles/StyleFunction";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import BgImage from "../../Assets/Common/runeterra-freljord-02-r-c.png";
import Footer from "../../Components/Footer";

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
  @media only screen and (max-width: 599px) {
    width: 100%;
    height: 450px;
  }
  @media only screen and (min-width: 600px) {
    padding: 0px 10%;
    height: ${props => props.windowHeight - 200}px;
    width: 80%;
  }
  @media only screen and (min-width: 1200px) {
    padding: 0px 15%;
    height: ${props => props.windowHeight - 250}px;
    width: 70%;
  }
  @media only screen and (min-width: 1800px) {
    padding: 0px 20%;
    height: ${props => props.windowHeight - 300}px;
    width: 60%;
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

const RequestDiv = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const RequestInfoDiv = styled.div`
  background-color: white;
  border: 2px solid ${props => props.theme.lightGrayColor};
  margin-bottom: 30px;
`;

const RequestInfoBox = styled.div`
  display: flex;
`;

const RequestTagText = styled.div`
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  width: 100px;
  margin: 25px 0px;
  padding: 5px 30px;
  color: ${props => props.theme.darkOrangeColor};
  border-right: 1px solid ${props => props.theme.lightGrayColor};
`;

const RequestInputText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
`;

const RequestPlatformBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
`;

const RequestButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.darkBlueColor};
  color: ${props => props.theme.whiteColor};
  font-size: 20px;
  font-weight: bold;
  user-select: none;
  cursor: pointer;
  padding: 10px;
  width: 150px;
  border-radius: 8px;
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
                  <HeaderFstText>
                    WATCHURS에 등록되지 않은 브로드캐스터입니다.
                  </HeaderFstText>
                  <HeaderSndText>
                    브로드캐스터 닉네임 또는 아이디를 다시 확인해주시거나
                    등록요청을 해주세요.
                  </HeaderSndText>
                </PageHeaderBox>
              </PageHeaderDiv>
              <RequestDiv>
                <RequestInfoDiv>
                  <RequestInfoBox>
                    <RequestTagText>플랫폼</RequestTagText>
                    <RequestPlatformBox>플랫폼콤보</RequestPlatformBox>
                  </RequestInfoBox>
                  <RequestInfoBox>
                    <RequestTagText>닉네임</RequestTagText>
                    <RequestInputText>닉네임인풋</RequestInputText>
                  </RequestInfoBox>
                  <RequestInfoBox>
                    <RequestTagText>아이디</RequestTagText>
                    <RequestInputText>아이디인풋</RequestInputText>
                  </RequestInfoBox>
                </RequestInfoDiv>
                <RequestButtonBox>등록요청</RequestButtonBox>
              </RequestDiv>
            </PageBox>
          </PageDiv>
        </MainDiv>
        <Footer />
      </CommonPageDiv>
    </CommonPage>
  );
};
