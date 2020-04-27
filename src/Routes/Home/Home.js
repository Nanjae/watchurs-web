import React, { useState } from "react";
import styled from "styled-components";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
// import Theme from "../../Styles/Theme";
import bg1 from "../../Assets/Images/Bg/bg1.jpg";
import bg2 from "../../Assets/Images/Bg/bg2.png";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  background-color: ${(props) => props.theme.bgDark};
  @media only screen and (max-width: 575.99px) {
  }
  @media only screen and (min-width: 576px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;

const IntroWrapper = styled.div`
  width: 100%;
  height: ${(props) => props.windowHeight};
  min-height: 768px;
  max-height: 1024px;
  display: flex;
`;

const IntroUnderWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
`;

const IntroUnderContentDiv = styled.div`
  width: 60%;
  margin-left: 8%;
`;

const IntroUnderContentBox = styled.div`
  width: 100%;
  height: 100%;
`;

const IntroUnderImageBox = styled.div`
  width: 100%;
  height: 90%;
`;

const IntroUnderImage = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  transition: background-image 0.5s;
`;

const IntroUnderImageOpacity = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.bgDark};
  opacity: 0.4;
`;

const IntroUpperWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const IntroUpperLeftDiv = styled.div`
  width: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const IntroUpperHeaderDiv = styled.div`
  width: 70%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const IntroUpperHeaderTitleDiv = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const IntroUpperHeaderLogoIcon = styled.div`
  background-color: white;
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
`;

const IntroUpperHeaderTitleText = styled.div`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 3px;
  color: white;
  transform: rotate(-90deg) translate(-50%, -280%);
  white-space: nowrap;
`;

const IntroUpperHeaderMenuDiv = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const IntroUpperHeaderMenuIcon = styled.div`
  background-color: white;
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
`;

const IntroUpperHeaderMenuTextBox = styled.div`
  width: 54px;
  display: flex;
  justify-content: space-between;
  padding: 0px 3px;
`;

const IntroUpperHeaderMenuText = styled.div`
  font-size: 15px;
  font-weight: 200;
  color: white;
`;

const IntroUpperHeaderIconDiv = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const IntroUpperHeaderIcon = styled.div`
  background-color: white;
  width: 20px;
  height: 20px;
  margin-top: 40px;
`;

const IntroUpperRightDiv = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const IntroMainDiv = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const IntroMainContentDiv = styled.div`
  width: 95%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

const IntroMainContentIconDiv = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: flex-end;
`;

const IntroMainContentIcon = styled.div`
  background-color: white;
  width: 20px;
  height: 20px;
  margin-left: 20px;
`;

const IntroMainContentTextDiv = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: ${(props) => props.theme.fontDark};
`;

const IntroMainContentTextMainTitle = styled.div`
  font-size: 26px;
  font-weight: 700;
`;

const IntroMainContentTextSubTitle = styled.div`
  font-size: 80px;
  font-weight: 700;
  margin: 15px 0px;
`;

const IntroMainContentTextMainBox = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
`;

const IntroMainContentTextSubBox = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 40px;
`;

const IntroMainContentTextSubBoxText = styled.div`
  font-size: 18px;
  font-weight: 400;
`;

const IntroMainContentTextSubBoxLine = styled.div`
  width: 70px;
  height: 2px;
  margin-left: 10px;
  margin-bottom: 5px;
  background-color: white;
`;

const IntroMainSwiperDiv = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: flex-end;
`;

const IntroMainSwiperBox = styled.div`
  width: 85%;
  height: fit-content;
`;

const SwiperImage = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  width: 280px;
  height: 180px;
`;

export default () => {
  const { windowHeight } = useWindowDimensions();
  const [underBgIndex, setUnderBgIndex] = useState(bg1);

  return (
    <>
      <Wrapper>
        <IntroWrapper style={{ height: windowHeight }}>
          <IntroUnderWrapper>
            <IntroUnderContentDiv>
              <IntroUnderContentBox>
                <IntroUnderImageBox>
                  <IntroUnderImage url={underBgIndex}>
                    <IntroUnderImageOpacity />
                  </IntroUnderImage>
                </IntroUnderImageBox>
              </IntroUnderContentBox>
            </IntroUnderContentDiv>
          </IntroUnderWrapper>
          <IntroUpperWrapper>
            <IntroUpperLeftDiv>
              <IntroUpperHeaderDiv>
                <IntroUpperHeaderTitleDiv>
                  <IntroUpperHeaderLogoIcon />
                  <IntroUpperHeaderTitleText>
                    WATCHURS
                  </IntroUpperHeaderTitleText>
                </IntroUpperHeaderTitleDiv>
                <IntroUpperHeaderMenuDiv>
                  <IntroUpperHeaderMenuIcon />
                  <IntroUpperHeaderMenuTextBox>
                    <IntroUpperHeaderMenuText>M</IntroUpperHeaderMenuText>
                    <IntroUpperHeaderMenuText>E</IntroUpperHeaderMenuText>
                    <IntroUpperHeaderMenuText>N</IntroUpperHeaderMenuText>
                    <IntroUpperHeaderMenuText>U</IntroUpperHeaderMenuText>
                  </IntroUpperHeaderMenuTextBox>
                </IntroUpperHeaderMenuDiv>
                <IntroUpperHeaderIconDiv>
                  <IntroUpperHeaderIcon />
                  <IntroUpperHeaderIcon />
                  <IntroUpperHeaderIcon />
                </IntroUpperHeaderIconDiv>
              </IntroUpperHeaderDiv>
            </IntroUpperLeftDiv>
            <IntroUpperRightDiv>
              <IntroMainDiv>
                <IntroMainContentDiv>
                  <IntroMainContentIconDiv>
                    <IntroMainContentIcon />
                    <IntroMainContentIcon />
                  </IntroMainContentIconDiv>
                  <IntroMainContentTextDiv>
                    <IntroMainContentTextMainTitle>
                      Featured Project
                    </IntroMainContentTextMainTitle>
                    <IntroMainContentTextSubTitle>
                      WATCH YOURS
                    </IntroMainContentTextSubTitle>
                    <IntroMainContentTextMainBox>
                      In this project, our designers tried to combine several
                      styles in a single interior.
                    </IntroMainContentTextMainBox>
                    <IntroMainContentTextMainBox>
                      It features some modern and classic elements in the decor.
                    </IntroMainContentTextMainBox>
                    <IntroMainContentTextSubBox>
                      <IntroMainContentTextSubBoxText>
                        more
                      </IntroMainContentTextSubBoxText>
                      <IntroMainContentTextSubBoxLine />
                    </IntroMainContentTextSubBox>
                  </IntroMainContentTextDiv>
                </IntroMainContentDiv>
                <IntroMainSwiperDiv>
                  <IntroMainSwiperBox>
                    <Swiper
                      width={280}
                      centeredSlides={true}
                      slideToClickedSlide={true}
                    >
                      <div
                        style={{
                          marginLeft: "60px",
                        }}
                        onClick={() => {
                          setUnderBgIndex(bg1);
                          console.log("1");
                        }}
                      >
                        <SwiperImage url={bg1} />
                      </div>
                      <div
                        style={{
                          marginLeft: "60px",
                        }}
                        onClick={() => {
                          setUnderBgIndex(bg2);
                          console.log("2");
                        }}
                      >
                        <SwiperImage url={bg2} />
                      </div>
                      <div
                        style={{
                          marginLeft: "60px",
                        }}
                        onClick={() => {
                          setUnderBgIndex(bg1);
                          console.log("1");
                        }}
                      >
                        <SwiperImage url={bg1} />
                      </div>
                      <div
                        style={{
                          marginLeft: "60px",
                        }}
                        onClick={() => {
                          setUnderBgIndex(bg2);
                          console.log("2");
                        }}
                      >
                        <SwiperImage url={bg2} />
                      </div>
                    </Swiper>
                  </IntroMainSwiperBox>
                </IntroMainSwiperDiv>
              </IntroMainDiv>
            </IntroUpperRightDiv>
          </IntroUpperWrapper>
        </IntroWrapper>
      </Wrapper>
    </>
  );
};
