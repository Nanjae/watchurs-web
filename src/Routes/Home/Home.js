import React, { useState, useRef, useEffect } from "react";
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
import Stack from "../../Components/Home/Stack/Stack";
import icon_cross_dark from "../../Assets/Icons/icon_cross_dark.png";
import icon_cross_light from "../../Assets/Icons/icon_cross_light.png";
import icon_facebook_dark from "../../Assets/Icons/icon_facebook_dark.png";
import icon_facebook_light from "../../Assets/Icons/icon_facebook_light.png";
import icon_instagram_dark from "../../Assets/Icons/icon_instagram_dark.png";
import icon_instagram_light from "../../Assets/Icons/icon_instagram_light.png";
import icon_twitter_dark from "../../Assets/Icons/icon_twitter_dark.png";
import icon_twitter_light from "../../Assets/Icons/icon_twitter_light.png";

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
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const PopWrapper = styled.div`
  position: fixed;
  z-index: 150;
  top: 0;
  left: -821px;
  width: 820px;
  height: 100%;
  border-right: 1px solid ${(props) => props.theme.borderMainColor};
  transition: border-right 0.3s, left 0.3s;
`;

const PopOpacity = styled.div`
  position: absolute;
  width: 820px;
  height: 100%;
  background-color: ${(props) => props.theme.bgPopColor};
  opacity: 0.9;
  transition: background-color 0.3s;
`;

const PopInner = styled.div`
  position: absolute;
  width: 820px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const PopTopDiv = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 40px;
`;

const PopTopInner = styled.div`
  width: fit-content;
  height: fit-content;
  padding-right: 60px;
`;

const PopTopIcon = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: background-image 0.3s, opacity 0.3s;
`;

const PopMainDiv = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const PopMainInner = styled.div`
  width: fit-content;
  height: fit-content;
  padding-left: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const PopMainMenuDiv = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  :not(:first-child) {
    margin-top: 50px;
  }
  cursor: pointer;
`;

const PopMainMenuNum = styled.div`
  color: ${(props) => props.theme.fontPopColor};
  font-size: 18px;
  font-weight: 700;
  margin: 0px 20px;
  transition: color 0.3s;
`;

const PopMainMenuText = styled.div`
  color: ${(props) =>
    props.popMenuEnter === props.popMenuIndex
      ? props.theme.fontPopColor
      : props.theme.fontMainColor};
  font-size: 70px;
  font-weight: 700;
  transition: color 0.3s;
`;

const PopBottomDiv = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 60px;
`;

const PopBottomInner = styled.div`
  width: fit-content;
  height: fit-content;
  padding-left: 200px;
  display: flex;
  justify-content: flex-start;
`;

const PopBottomIcon = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin: 0px 20px;
  opacity: 1;
  transition: background-image 0.3s, opacity 0.3s;
`;

const scrollToRef = (ref) =>
  window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });

const useMountEffect = (fun) => useEffect(fun, []);

export default () => {
  const [siteTheme, setSiteTheme] = useState(false);
  const [headerMenuEnter, setHeaderMenuEnter] = useState(false);
  const [popClosed, setPopClosed] = useState(true);
  const [popClosedEnter, setPopClosedEnter] = useState(false);
  const [popMenuEnter, setPopMenuEnter] = useState(0);
  const [popIconEnter, setPopIconEnter] = useState(0);

  const scrollY = useWindowScroll();

  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const usedRef = useRef(null);

  useMountEffect(
    () => scrollToRef(introRef),
    () => scrollToRef(aboutRef),
    () => scrollToRef(projectRef),
    () => scrollToRef(usedRef),
    []
  );

  const icon_cross = siteTheme ? icon_cross_light : icon_cross_dark;
  const icon_facebook = siteTheme ? icon_facebook_light : icon_facebook_dark;
  const icon_instagram = siteTheme ? icon_instagram_light : icon_instagram_dark;
  const icon_twitter = siteTheme ? icon_twitter_light : icon_twitter_dark;

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
            popClosed={popClosed}
            setPopClosed={setPopClosed}
          />
          <div ref={introRef} />
          <Intro
            siteTheme={siteTheme}
            setSiteTheme={setSiteTheme}
            scrollY={scrollY}
            headerMenuEnter={headerMenuEnter}
            setHeaderMenuEnter={setHeaderMenuEnter}
            setPopClosed={setPopClosed}
          />
          <div ref={aboutRef} />
          <About />
          <div ref={projectRef} />
          <Project siteTheme={siteTheme} />
          <div ref={usedRef} />
          <Stack />
          <Footer />
          <GoTop />
          <PopWrapper style={popClosed ? { left: "-821px" } : { left: "0px" }}>
            <PopOpacity />
            <PopInner>
              <PopTopDiv>
                <PopTopInner>
                  <PopTopIcon
                    onMouseEnter={() => {
                      setPopClosedEnter(true);
                    }}
                    onMouseLeave={() => {
                      setPopClosedEnter(false);
                    }}
                    onClick={() => {
                      setPopClosed(true);
                    }}
                    url={icon_cross}
                    style={popClosedEnter ? { opacity: 0.6 } : { opacity: 1 }}
                  />
                </PopTopInner>
              </PopTopDiv>
              <PopMainDiv>
                <PopMainInner>
                  <PopMainMenuDiv
                    onMouseEnter={() => {
                      setPopMenuEnter(1);
                    }}
                    onMouseLeave={() => {
                      setPopMenuEnter(0);
                    }}
                    onClick={() => {
                      scrollToRef(introRef);
                    }}
                  >
                    <PopMainMenuNum>01</PopMainMenuNum>
                    <PopMainMenuText
                      popMenuEnter={popMenuEnter}
                      popMenuIndex={1}
                    >
                      intro
                    </PopMainMenuText>
                  </PopMainMenuDiv>
                  <PopMainMenuDiv
                    onMouseEnter={() => {
                      setPopMenuEnter(2);
                    }}
                    onMouseLeave={() => {
                      setPopMenuEnter(0);
                    }}
                    onClick={() => {
                      scrollToRef(aboutRef);
                    }}
                  >
                    <PopMainMenuNum>02</PopMainMenuNum>
                    <PopMainMenuText
                      popMenuEnter={popMenuEnter}
                      popMenuIndex={2}
                    >
                      about
                    </PopMainMenuText>
                  </PopMainMenuDiv>
                  <PopMainMenuDiv
                    onMouseEnter={() => {
                      setPopMenuEnter(3);
                    }}
                    onMouseLeave={() => {
                      setPopMenuEnter(0);
                    }}
                    onClick={() => {
                      scrollToRef(projectRef);
                    }}
                  >
                    <PopMainMenuNum>03</PopMainMenuNum>
                    <PopMainMenuText
                      popMenuEnter={popMenuEnter}
                      popMenuIndex={3}
                    >
                      project
                    </PopMainMenuText>
                  </PopMainMenuDiv>
                  <PopMainMenuDiv
                    onMouseEnter={() => {
                      setPopMenuEnter(4);
                    }}
                    onMouseLeave={() => {
                      setPopMenuEnter(0);
                    }}
                    onClick={() => {
                      scrollToRef(usedRef);
                    }}
                  >
                    <PopMainMenuNum>04</PopMainMenuNum>
                    <PopMainMenuText
                      popMenuEnter={popMenuEnter}
                      popMenuIndex={4}
                    >
                      used
                    </PopMainMenuText>
                  </PopMainMenuDiv>
                </PopMainInner>
              </PopMainDiv>
              <PopBottomDiv>
                <PopBottomInner>
                  <PopBottomIcon
                    onMouseEnter={() => {
                      setPopIconEnter(1);
                    }}
                    onMouseLeave={() => {
                      setPopIconEnter(0);
                    }}
                    url={icon_facebook}
                    style={
                      popIconEnter === 1 ? { opacity: 0.6 } : { opacity: 1 }
                    }
                  />
                  <PopBottomIcon
                    onMouseEnter={() => {
                      setPopIconEnter(2);
                    }}
                    onMouseLeave={() => {
                      setPopIconEnter(0);
                    }}
                    url={icon_instagram}
                    style={
                      popIconEnter === 2 ? { opacity: 0.6 } : { opacity: 1 }
                    }
                  />
                  <PopBottomIcon
                    onMouseEnter={() => {
                      setPopIconEnter(3);
                    }}
                    onMouseLeave={() => {
                      setPopIconEnter(0);
                    }}
                    url={icon_twitter}
                    style={
                      popIconEnter === 3 ? { opacity: 0.6 } : { opacity: 1 }
                    }
                  />
                </PopBottomInner>
              </PopBottomDiv>
            </PopInner>
          </PopWrapper>
        </Wrapper>
      </ThemeProvider>
    </>
  );
};
