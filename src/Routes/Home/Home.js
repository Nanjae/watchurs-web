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
import logo_graphql from "../../Assets/Images/Logos/logo_graphql.png";
import logo_react from "../../Assets/Images/Logos/logo_react.png";
import logo_github from "../../Assets/Images/Logos/logo_github.png";
import logo_apollo from "../../Assets/Images/Logos/logo_apollo.png";
import logo_netlify from "../../Assets/Images/Logos/logo_netlify.png";
import logo_nodejs from "../../Assets/Images/Logos/logo_nodejs.png";
import logo_heroku from "../../Assets/Images/Logos/logo_heroku.png";

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
  width: 1120px;
  height: fit-content;
  margin-top: 80px;
  margin-bottom: 50px;
  cursor: e-resize;
`;

const StackSwiperImageBox = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  justify-content: center;
`;

const StackSwiperImage = styled.div`
  background-image: url(${(props) => props.url});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 200px;
  height: 80px;
  opacity: 0.7;
  transition: opacity 0.3s;
`;

export default () => {
  const [siteTheme, setSiteTheme] = useState(false);
  const [headerMenuEnter, setHeaderMenuEnter] = useState(false);
  const [techEnter, setTechEnter] = useState(0);
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
                <Swiper slidesPerView={5} spaceBetween={50}>
                  <StackSwiperImageBox>
                    <StackSwiperImage
                      url={logo_react}
                      onMouseEnter={() => {
                        setTechEnter(1);
                      }}
                      onMouseLeave={() => {
                        setTechEnter(0);
                      }}
                      style={techEnter === 1 ? { opacity: 1 } : null}
                    />
                  </StackSwiperImageBox>
                  <StackSwiperImageBox>
                    <StackSwiperImage
                      url={logo_github}
                      onMouseEnter={() => {
                        setTechEnter(2);
                      }}
                      onMouseLeave={() => {
                        setTechEnter(0);
                      }}
                      style={techEnter === 2 ? { opacity: 1 } : null}
                    />
                  </StackSwiperImageBox>
                  <StackSwiperImageBox>
                    <StackSwiperImage
                      url={logo_nodejs}
                      onMouseEnter={() => {
                        setTechEnter(3);
                      }}
                      onMouseLeave={() => {
                        setTechEnter(0);
                      }}
                      style={techEnter === 3 ? { opacity: 1 } : null}
                    />
                  </StackSwiperImageBox>
                  <StackSwiperImageBox>
                    <StackSwiperImage
                      url={logo_graphql}
                      onMouseEnter={() => {
                        setTechEnter(4);
                      }}
                      onMouseLeave={() => {
                        setTechEnter(0);
                      }}
                      style={techEnter === 4 ? { opacity: 1 } : null}
                    />
                  </StackSwiperImageBox>
                  <StackSwiperImageBox>
                    <StackSwiperImage
                      url={logo_apollo}
                      onMouseEnter={() => {
                        setTechEnter(5);
                      }}
                      onMouseLeave={() => {
                        setTechEnter(0);
                      }}
                      style={techEnter === 5 ? { opacity: 1 } : null}
                    />
                  </StackSwiperImageBox>
                  <StackSwiperImageBox>
                    <StackSwiperImage
                      url={logo_heroku}
                      onMouseEnter={() => {
                        setTechEnter(6);
                      }}
                      onMouseLeave={() => {
                        setTechEnter(0);
                      }}
                      style={techEnter === 6 ? { opacity: 1 } : null}
                    />
                  </StackSwiperImageBox>
                  <StackSwiperImageBox>
                    <StackSwiperImage
                      url={logo_netlify}
                      onMouseEnter={() => {
                        setTechEnter(7);
                      }}
                      onMouseLeave={() => {
                        setTechEnter(0);
                      }}
                      style={techEnter === 7 ? { opacity: 1 } : null}
                    />
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
