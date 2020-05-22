import React, { useState, useRef, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import ThemeDark from "../../Styles/ThemeDark";
import ThemeLight from "../../Styles/ThemeLight";
import Intro from "../../Components/Intro/Intro";
import About from "../../Components/About/About";
import Header from "../../Components/Header";
import { useWindowScroll } from "@react-hook/window-scroll";
import GoTop from "../../Components/Common/GoTop";
import Project from "../../Components/Project/Project";
import Footer from "../../Components/Footer";
import Stack from "../../Components/Stack/Stack";
import icon_cross_dark from "../../Assets/Icons/icon_cross_dark.png";
import icon_cross_light from "../../Assets/Icons/icon_cross_light.png";
import icon_facebook_dark from "../../Assets/Icons/icon_facebook_dark.png";
import icon_facebook_light from "../../Assets/Icons/icon_facebook_light.png";
import icon_instagram_dark from "../../Assets/Icons/icon_instagram_dark.png";
import icon_instagram_light from "../../Assets/Icons/icon_instagram_light.png";
import icon_twitter_dark from "../../Assets/Icons/icon_twitter_dark.png";
import icon_twitter_light from "../../Assets/Icons/icon_twitter_light.png";
import bg01 from "../../Assets/Images/Bg/bg01.jpg";
import bg02 from "../../Assets/Images/Bg/bg02.jpg";
import bg03 from "../../Assets/Images/Bg/bg03.jpg";
import bg04 from "../../Assets/Images/Bg/bg04.jpg";
import useWindowDimensions from "../../Hooks/useWindowDimensions";

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
  top: 0;
  height: 100%;
  border-right: 1px solid ${(props) => props.theme.borderMainColor};
  transition: border-right 0.3s, left 0.3s;
  visibility: ${(props) => (props.popClosed ? "hidden" : "visible")};
  @media only screen and (max-width: 575.99px) {
    z-index: 80;
    left: -281px;
    width: 280px;
  }
  @media only screen and (min-width: 576px) {
    z-index: 80;
    left: -281px;
    width: 280px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
    z-index: 150;
    left: -621px;
    width: 620px;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const PopOpacity = styled.div`
  position: absolute;
  height: 100%;
  transition: background-color 0.3s;
  @media only screen and (max-width: 575.99px) {
    width: 280px;
    opacity: 1;
    background-color: ${(props) => props.theme.bgMainColor};
  }
  @media only screen and (min-width: 576px) {
    width: 280px;
    opacity: 1;
    background-color: ${(props) => props.theme.bgMainColor};
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
    width: 620px;
    opacity: 0.9;
    background-color: ${(props) => props.theme.bgPopColor};
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const PopInner = styled.div`
  position: absolute;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;
  @media only screen and (max-width: 575.99px) {
    width: 280px;
  }
  @media only screen and (min-width: 576px) {
    width: 280px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
    width: 620px;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media only screen and (max-width: 575.99px) {
    margin-top: 10px;
    padding-left: 0px;
    padding-top: 56px;
  }
  @media only screen and (min-width: 576px) {
    margin-top: 10px;
    padding-left: 0px;
    padding-top: 56px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
    margin-top: 0px;
    padding-left: 180px;
    padding-top: 0px;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const PopMainMenuDiv = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  cursor: pointer;
  @media only screen and (max-width: 575.99px) {
    :not(:first-child) {
      margin-top: 0px;
    }
  }
  @media only screen and (min-width: 576px) {
    :not(:first-child) {
      margin-top: 0px;
    }
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
    :not(:first-child) {
      margin-top: 50px;
    }
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const PopMainMenuNum = styled.div`
  color: ${(props) => props.theme.fontPopColor};
  font-size: 18px;
  font-weight: 700;
  margin: 0px 20px;
  transition: color 0.3s;
`;

const PopMainMenuText = styled.div`
  transition: color 0.3s;
  @media only screen and (max-width: 575.99px) {
    background-color: ${(props) =>
      props.popMenuEnter === props.popMenuIndex
        ? props.theme.fontPopColor
        : null};
    color: ${(props) =>
      props.popMenuEnter === props.popMenuIndex
        ? props.theme.fontFooterColor
        : props.theme.fontPopSubColor};
    font-size: 16px;
    font-weight: 200;
    margin: 2px 15px;
    padding: 18px 35px 18px 15px;
    width: 200px;
  }
  @media only screen and (min-width: 576px) {
    background-color: ${(props) =>
      props.popMenuEnter === props.popMenuIndex
        ? props.theme.fontPopColor
        : null};
    color: ${(props) =>
      props.popMenuEnter === props.popMenuIndex
        ? props.theme.fontFooterColor
        : props.theme.fontPopSubColor};
    font-size: 16px;
    font-weight: 200;
    margin: 2px 15px;
    padding: 18px 35px 18px 15px;
    width: 200px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
    background-color: unset;
    color: ${(props) =>
      props.popMenuEnter === props.popMenuIndex
        ? props.theme.fontPopColor
        : props.theme.fontMainColor};
    font-size: 70px;
    font-weight: 700;
    padding: 0px;
    width: fit-content;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const PopBottomDiv = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (max-width: 575.99px) {
    padding-bottom: 40px;
  }
  @media only screen and (min-width: 576px) {
    padding-bottom: 40px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
    padding-bottom: 60px;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const PopBottomInner = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  @media only screen and (max-width: 575.99px) {
    padding-left: 10px;
  }
  @media only screen and (min-width: 576px) {
    padding-left: 10px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
    padding-left: 180px;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const PopBottomIcon = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  cursor: pointer;
  opacity: 1;
  transition: background-image 0.3s, opacity 0.3s;
  @media only screen and (max-width: 575.99px) {
    width: 16px;
    height: 16px;
    margin: 0px 10px;
  }
  @media only screen and (min-width: 576px) {
    width: 16px;
    height: 16px;
    margin: 0px 10px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
    width: 20px;
    height: 20px;
    margin: 0px 20px;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const PopCloseDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
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

  const bgArray = [bg01, bg02, bg03, bg04];

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

  const { windowWidth, windowHeight } = useWindowDimensions();

  // console.log(scrollY);

  const scrollYBottom =
    window.document.body.offsetHeight - scrollY - windowHeight;

  // console.log(scrollYBottom);

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
            windowWidth={windowWidth}
          />
          <div ref={introRef} />
          <Intro
            bgArray={bgArray}
            siteTheme={siteTheme}
            setSiteTheme={setSiteTheme}
            scrollY={scrollY}
            headerMenuEnter={headerMenuEnter}
            setHeaderMenuEnter={setHeaderMenuEnter}
            setPopClosed={setPopClosed}
            windowWidth={windowWidth}
            windowHeight={windowHeight}
          />
          <div ref={aboutRef} />
          <About
            scrollY={scrollY}
            windowWidth={windowWidth}
            scrollYBottom={scrollYBottom}
          />
          <div ref={projectRef} />
          <Project
            bgArray={bgArray}
            siteTheme={siteTheme}
            scrollY={scrollY}
            windowWidth={windowWidth}
            scrollYBottom={scrollYBottom}
          />
          <div ref={usedRef} />
          <Stack
            scrollY={scrollY}
            windowWidth={windowWidth}
            scrollYBottom={scrollYBottom}
          />
          <Footer />
          <GoTop />
          {popClosed ? null : (
            <PopCloseDiv
              onClick={() => {
                setPopClosed(true);
              }}
            />
          )}
          {windowWidth < 1200 ? (
            <PopWrapper
              popClosed={popClosed}
              style={popClosed ? { left: "-281px" } : { left: "0px" }}
            >
              <PopOpacity />
              <PopInner>
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
          ) : (
            <PopWrapper
              popClosed={popClosed}
              style={popClosed ? { left: "-821px" } : { left: "0px" }}
            >
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
          )}
        </Wrapper>
      </ThemeProvider>
    </>
  );
};
