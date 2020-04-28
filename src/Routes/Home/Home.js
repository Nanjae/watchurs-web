import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import bg01 from "../../Assets/Images/Bg/bg01.jpg";
import bg02 from "../../Assets/Images/Bg/bg02.jpg";
import bg03 from "../../Assets/Images/Bg/bg03.jpg";
import bg04 from "../../Assets/Images/Bg/bg04.jpg";
import icon_contrast_dark from "../../Assets/Icons/icon_contrast_dark.png";
// import icon_contrast_light from "../../Assets/Icons/icon_contrast_light.png";
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
  opacity: 0.6;
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
  color: ${(props) => props.theme.fontDark};
  transform: rotate(-90deg) translate(-50%, -280%);
  white-space: nowrap;
`;

const IntroUpperHeaderMenuDiv = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
`;

const IntroUpperHeaderMenuInner = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
`;

const IntroUpperHeaderMenuLineDiv = styled.div`
  width: 60px;
  height: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const menuUpperLine = keyframes`
  0% {
    width:50%;
    opacity: 0.4;
  }
  33% {
    width:80%;
    opacity: 1;
  }
  66% {
    width:40%;
    opacity: 0.4;
  }
  100% {
    width:100%;
    opacity: 1;
  }
`;

const menuUnderLine = keyframes`
  0% {
    width:100%;
    opacity: 1;
  }
  33% {
    width:50%;
    opacity: 0.4;
  }
  66% {
    width:80%;
    opacity: 1;
  }
  100% {
    width:40%;
    opacity: 0.4;
  }
`;

const IntroUpperHeaderMenuUpperLine = styled.div`
  background-color: ${(props) => props.theme.whiteDark};
  width: 100%;
  height: 3px;
  animation: ${(props) =>
    props.headerMenuEnter
      ? css`
          ${menuUpperLine} 1.2s infinite linear alternate
        `
      : null};
`;

const IntroUpperHeaderMenuUnderLine = styled.div`
  background-color: ${(props) => props.theme.whiteDark};
  width: 80%;
  height: 3px;
  animation: ${(props) =>
    props.headerMenuEnter
      ? css`
          ${menuUnderLine} 1.2s infinite linear alternate
        `
      : null};
`;

const IntroUpperHeaderMenuTextBox = styled.div`
  width: 54px;
  display: flex;
  justify-content: space-between;
  padding: 0px 3px;
`;

const IntroUpperHeaderMenuText = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: ${(props) => props.theme.fontDark};
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

const IntroUpperCenterDiv = styled.div`
  width: 38%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const IntroUpperCenterInner = styled.div`
  width: 80%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const IntroUpperCenterSwiperBarBox = styled.div`
  display: flex;
  justify-content: center;
  width: 3px;
  height: 120px;
`;

const IntroUpperCenterSwiperEmptyBar = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.grayDark};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 3px;
  height: 120px;
  opacity: 0.6;
`;

const IntroUpperCenterSwiperFillBar = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.whiteDark};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 3px;
  height: ${(props) => (props.upperTextIndex - 1) * 40}px;
  transition: height 0.5s;
`;

const IntroUpperCenterSwiperCircle = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.whiteDark};
  width: 11px;
  height: 11px;
  border-radius: 50%;
  margin-top: ${(props) => (props.upperTextIndex - 1) * 40 - 5}px;
  transition: margin-top 0.5s;
`;

const IntroUpperCenterSwiperTextBox = styled.div`
  display: flex;
  align-items: center;
  transform: rotate(-90deg) translate(-60px, -65px);
`;

const IntroUpperCenterSwiperMaxText = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: ${(props) => props.theme.grayDark};
  opacity: 0.6;
`;

const IntroUpperCenterSwiperTextDivsion = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin: 0px 10px;
  color: ${(props) => props.theme.grayDark};
  opacity: 0.6;
`;

const IntroUpperCenterSwiperCurrentText = styled.div`
  font-size: 50px;
  font-weight: 700;
  margin: 0px 10px;
  color: ${(props) => props.theme.whiteDark};
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
  background-image: url(${(props) => props.url});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
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
  width: fit-content;
  display: flex;
  align-items: flex-end;
  margin-top: 40px;
  cursor: pointer;
`;

const IntroMainContentTextSubBoxText = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: ${(props) => props.theme.whiteDark};
  transition: color 0.3s;
`;

const IntroMainContentTextSubBoxLine = styled.div`
  width: 70px;
  height: 2px;
  margin-left: 20px;
  margin-bottom: 5px;
  background-color: ${(props) => props.theme.whiteDark};
  transition: width 0.3s, margin-left 0.3s, background-color 0.3s;
`;

const IntroMainSwiperDiv = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: flex-end;
`;

const IntroMainSwiperInner = styled.div`
  width: 85%;
  height: fit-content;
`;

const IntroMainSwiperImageBox = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
`;

const IntroMainSwiperImage = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  width: 280px;
  height: 180px;
`;

const IntroMainSwiperImageOpacity = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.bgDark};
  width: 280px;
  height: 180px;
  opacity: 0;
  transition: opacity 0.3s;
  cursor: pointer;
`;

export default () => {
  const { windowHeight } = useWindowDimensions();
  const [underBgIndex, setUnderBgIndex] = useState(bg01);
  const [upperTextIndex, setUpperTextIndex] = useState("01");
  const [headerMenuEnter, setHeaderMenuEnter] = useState(false);
  const [swiperImageEnter, setSwiperImageEnter] = useState(0);

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
                  <IntroUpperHeaderMenuInner
                    onMouseEnter={() => {
                      setHeaderMenuEnter(true);
                    }}
                    onMouseLeave={() => {
                      setHeaderMenuEnter(false);
                    }}
                  >
                    <IntroUpperHeaderMenuLineDiv>
                      <IntroUpperHeaderMenuUpperLine
                        headerMenuEnter={headerMenuEnter}
                      />
                      <IntroUpperHeaderMenuUnderLine
                        headerMenuEnter={headerMenuEnter}
                      />
                    </IntroUpperHeaderMenuLineDiv>
                    <IntroUpperHeaderMenuTextBox>
                      <IntroUpperHeaderMenuText>M</IntroUpperHeaderMenuText>
                      <IntroUpperHeaderMenuText>E</IntroUpperHeaderMenuText>
                      <IntroUpperHeaderMenuText>N</IntroUpperHeaderMenuText>
                      <IntroUpperHeaderMenuText>U</IntroUpperHeaderMenuText>
                    </IntroUpperHeaderMenuTextBox>
                  </IntroUpperHeaderMenuInner>
                </IntroUpperHeaderMenuDiv>
                <IntroUpperHeaderIconDiv>
                  <IntroUpperHeaderIcon />
                  <IntroUpperHeaderIcon />
                  <IntroUpperHeaderIcon />
                </IntroUpperHeaderIconDiv>
              </IntroUpperHeaderDiv>
            </IntroUpperLeftDiv>
            <IntroUpperCenterDiv>
              <IntroUpperCenterInner>
                <IntroUpperCenterSwiperBarBox>
                  <IntroUpperCenterSwiperEmptyBar />
                  <IntroUpperCenterSwiperFillBar
                    upperTextIndex={upperTextIndex}
                  />
                  <IntroUpperCenterSwiperCircle
                    upperTextIndex={upperTextIndex}
                  />
                </IntroUpperCenterSwiperBarBox>
                <IntroUpperCenterSwiperTextBox>
                  <IntroUpperCenterSwiperCurrentText>
                    {upperTextIndex}
                  </IntroUpperCenterSwiperCurrentText>
                  <IntroUpperCenterSwiperTextDivsion>
                    /
                  </IntroUpperCenterSwiperTextDivsion>
                  <IntroUpperCenterSwiperMaxText>
                    04
                  </IntroUpperCenterSwiperMaxText>
                </IntroUpperCenterSwiperTextBox>
              </IntroUpperCenterInner>
            </IntroUpperCenterDiv>
            <IntroUpperRightDiv>
              <IntroMainDiv>
                <IntroMainContentDiv>
                  <IntroMainContentIconDiv>
                    <IntroMainContentIcon />
                    <IntroMainContentIcon
                      url={icon_contrast_dark}
                      style={{ transform: "rotate(45deg)" }}
                    />
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
                  <IntroMainSwiperInner>
                    <Swiper
                      width={280}
                      centeredSlides={true}
                      slideToClickedSlide={true}
                    >
                      <IntroMainSwiperImageBox
                        style={{
                          marginLeft: "60px",
                        }}
                        onClick={() => {
                          setUnderBgIndex(bg01);
                          setUpperTextIndex("01");
                        }}
                        onMouseEnter={() => {
                          setSwiperImageEnter(1);
                        }}
                        onMouseLeave={() => {
                          setSwiperImageEnter(0);
                        }}
                      >
                        <IntroMainSwiperImage url={bg01} />
                        <IntroMainSwiperImageOpacity
                          style={
                            swiperImageEnter === 1 ? { opacity: 0.5 } : null
                          }
                        />
                      </IntroMainSwiperImageBox>
                      <IntroMainSwiperImageBox
                        style={{
                          marginLeft: "60px",
                        }}
                        onClick={() => {
                          setUnderBgIndex(bg02);
                          setUpperTextIndex("02");
                        }}
                        onMouseEnter={() => {
                          setSwiperImageEnter(2);
                        }}
                        onMouseLeave={() => {
                          setSwiperImageEnter(0);
                        }}
                      >
                        <IntroMainSwiperImage url={bg02} />
                        <IntroMainSwiperImageOpacity
                          style={
                            swiperImageEnter === 2 ? { opacity: 0.5 } : null
                          }
                        />
                      </IntroMainSwiperImageBox>
                      <IntroMainSwiperImageBox
                        style={{
                          marginLeft: "60px",
                        }}
                        onClick={() => {
                          setUnderBgIndex(bg03);
                          setUpperTextIndex("03");
                        }}
                        onMouseEnter={() => {
                          setSwiperImageEnter(3);
                        }}
                        onMouseLeave={() => {
                          setSwiperImageEnter(0);
                        }}
                      >
                        <IntroMainSwiperImage url={bg03} />
                        <IntroMainSwiperImageOpacity
                          style={
                            swiperImageEnter === 3 ? { opacity: 0.5 } : null
                          }
                        />
                      </IntroMainSwiperImageBox>
                      <IntroMainSwiperImageBox
                        style={{
                          marginLeft: "60px",
                        }}
                        onClick={() => {
                          setUnderBgIndex(bg04);
                          setUpperTextIndex("04");
                        }}
                        onMouseEnter={() => {
                          setSwiperImageEnter(4);
                        }}
                        onMouseLeave={() => {
                          setSwiperImageEnter(0);
                        }}
                      >
                        <IntroMainSwiperImage url={bg04} />
                        <IntroMainSwiperImageOpacity
                          style={
                            swiperImageEnter === 4 ? { opacity: 0.5 } : null
                          }
                        />
                      </IntroMainSwiperImageBox>
                    </Swiper>
                  </IntroMainSwiperInner>
                </IntroMainSwiperDiv>
              </IntroMainDiv>
            </IntroUpperRightDiv>
          </IntroUpperWrapper>
        </IntroWrapper>
      </Wrapper>
    </>
  );
};
