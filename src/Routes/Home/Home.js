import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import ThemeDark from "../../Styles/ThemeDark";
import ThemeLight from "../../Styles/ThemeLight";
import "swiper/css/swiper.css";
import Intro from "../../Components/Home/Intro/Intro";
import About from "../../Components/Home/About/About";
import Header from "../../Components/Home/Header";
import { useWindowScroll } from "@react-hook/window-scroll";
import GoTop from "../../Components/Home/Common/GoTop";
import Project from "../../Components/Home/Project/Project";

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

const FooterWrapper = styled.div`
  background-color: ${(props) => props.theme.bgFooterColor};
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterInner = styled.div`
  width: 1160px;
  height: 350px;
  margin: 80px 30px 30px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const FooterTopDiv = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: flex-start;
`;

const FooterTopBox = styled.div`
  background-color: white;
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  :first-child {
    margin-right: 80px;
  }
`;

const FooterBottomDiv = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: flex-start;
`;

const FooterBottomBox = styled.div`
  background-color: white;
  width: 70%;
  height: 100%;
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
          <FooterWrapper>
            <FooterInner>
              <FooterTopDiv>
                <FooterTopBox></FooterTopBox>
                <FooterTopBox></FooterTopBox>
              </FooterTopDiv>
              <FooterBottomDiv>
                <FooterBottomBox></FooterBottomBox>
              </FooterBottomDiv>
            </FooterInner>
          </FooterWrapper>
          <GoTop />
        </Wrapper>
      </ThemeProvider>
    </>
  );
};
