import React from "react";
import styled from "styled-components";
import { darkBlueColor } from "../../Styles/StyleFunction";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import BgImage from "../../Assets/Common/runeterra-freljord-02-r-c.png";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";

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
  text-align: center;
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

const HeaderListButton = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
  padding: 10px;
  background-color: ${props => props.theme.whiteColor};
  color: ${props => props.theme.blackColor};
  border-radius: 8px;
  border: 2px solid ${props => props.theme.darkBlueColor};
`;

const HeaderRequestButton = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
  padding: 10px;
  background-color: ${props => props.theme.darkBlueColor};
  color: ${props => props.theme.whiteColor};
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
                  <HeaderListButton to={"/common/list"}>
                    WATCHURS 브로드캐스터 리스트
                  </HeaderListButton>
                  <HeaderRequestButton to={"/common/request"}>
                    등록요청 페이지 이동
                  </HeaderRequestButton>
                </PageHeaderBox>
              </PageHeaderDiv>
            </PageBox>
          </PageDiv>
        </MainDiv>
        <Footer />
      </CommonPageDiv>
    </CommonPage>
  );
};
