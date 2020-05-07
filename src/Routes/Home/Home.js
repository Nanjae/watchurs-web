import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import ThemeDark from "../../Styles/ThemeDark";
import ThemeLight from "../../Styles/ThemeLight";
import Intro from "../../Components/Home/Intro/Intro";
import About from "../../Components/Home/About/About";
import Header from "../../Components/Home/Header";
import { useWindowScroll } from "@react-hook/window-scroll";
import GoTop from "../../Components/Home/Common/GoTop";
import Project from "../../Components/Home/Project/Project";
import Footer from "../../Components/Home/Footer";
import Swiper from "react-id-swiper";

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  background-color: ${(props) => props.theme.bgMainColor};
  transition: background-color 0.3s;
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

const StackWrapper = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StackInner = styled.div`
  height: fit-content;
  width: 1200px;
  padding: 50px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StackTitleDiv = styled.div`
  width: 1120px;
  height: 350px;
`;

const StackBgTextDiv = styled.div`
  position: absolute;
  height: 375px;
  width: 375px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

const StackBgText = styled.div`
  color: ${(props) => props.theme.fontMainColor};
  font-size: 350px;
  font-family: "Monoton", sans-serif;
  opacity: 0.1;
  transition: color 0.3s;
`;

const StackTitleBox = styled.div`
  position: absolute;
  height: 300px;
  width: 500px;
  margin-left: 150px;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const StackTitleTopText = styled.div`
  color: ${(props) => props.theme.fontMainColor};
  font-size: 70px;
  margin-bottom: 10px;
  transition: color 0.3s;
`;

const StackTitleBottomText = styled.div`
  color: ${(props) => props.theme.fontMainColor};
  font-size: 70px;
  font-weight: 900;
  transition: color 0.3s;
`;

const StackSwiperDiv = styled.div`
  width: 100%;
  height: 400px;
`;

const StackSwiperImageBox = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
`;

const StackSwiperImage = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  width: 280px;
  height: 180px;
  box-shadow: 5px 5px 3px ${(props) => props.theme.bgSubColor};
  border: 1px solid ${(props) => props.theme.bgSubColor};
  margin-bottom: 8px;
  transition: box-shadow 0.3s, border 0.3s;
`;

export default () => {
  const [siteTheme, setSiteTheme] = useState(false);
  const [headerMenuEnter, setHeaderMenuEnter] = useState(false);
  const scrollY = useWindowScroll();

  return (
    <>
      <ThemeProvider theme={siteTheme ? ThemeLight : ThemeDark}>
        <Wrapper>
          <Header
            siteTheme={siteTheme}
            setSiteTheme={setSiteTheme}
            scrollY={scrollY}
            headerMenuEnter={headerMenuEnter}
            setHeaderMenuEnter={setHeaderMenuEnter}
          />
          <Intro
            siteTheme={siteTheme}
            setSiteTheme={setSiteTheme}
            scrollY={scrollY}
            headerMenuEnter={headerMenuEnter}
            setHeaderMenuEnter={setHeaderMenuEnter}
          />
          <About />
          <Project siteTheme={siteTheme} />
          <StackWrapper>
            <StackInner>
              <StackTitleDiv>
                <StackBgTextDiv>
                  <StackBgText>U</StackBgText>
                </StackBgTextDiv>
                <StackTitleBox>
                  <StackTitleTopText>USED</StackTitleTopText>
                  <StackTitleBottomText>TECH STACK</StackTitleBottomText>
                </StackTitleBox>
              </StackTitleDiv>
              <StackSwiperDiv>
                <Swiper>
                  <StackSwiperImageBox>
                    <StackSwiperImage />
                  </StackSwiperImageBox>
                  <StackSwiperImageBox>
                    <StackSwiperImage />
                  </StackSwiperImageBox>
                  <StackSwiperImageBox>
                    <StackSwiperImage />
                  </StackSwiperImageBox>
                </Swiper>
              </StackSwiperDiv>
            </StackInner>
          </StackWrapper>
          <Footer />
          <GoTop />
        </Wrapper>
      </ThemeProvider>
    </>
  );
};
