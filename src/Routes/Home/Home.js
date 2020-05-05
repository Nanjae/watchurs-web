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
import bg01 from "../../Assets/Images/Bg/bg01.jpg";
import bg02 from "../../Assets/Images/Bg/bg02.jpg";
import bg03 from "../../Assets/Images/Bg/bg03.jpg";
import bg04 from "../../Assets/Images/Bg/bg04.jpg";

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

const ProjectWrapper = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ProjectInner = styled.div`
  height: fit-content;
  width: 1200px;
  padding: 50px 0px;
  display: flex;
  justify-content: center;
`;

const ProjectTitleDiv = styled.div`
  position: absolute;
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
`;

const ProjectTitleText = styled.div`
  color: ${(props) => props.theme.fontSubColor};
  font-size: 300px;
  font-weight: 900;
  transition: color 0.3s;
`;

const ProjectImageDiv = styled.div`
  z-index: 50;
  width: 1140px;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  margin: 220px 40px 0px 40px;
`;

const ProjectImageRow = styled.div`
  width: 530px;
  height: fit-content;
`;

const ProjectImageBox = styled.div`
  width: 100%;
  height: 630px;
  :not(:first-child) {
    margin-top: 60px;
  }
`;

const ProjectImage = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
`;

const ProjectMoreBox = styled.div`
  width: fit-content;
  margin-top: 60px;
  display: flex;
  align-items: flex-end;
  opacity: 1;
  cursor: pointer;
  transition: opacity 0.3s;
`;

const ProjectMoreText = styled.div`
  color: ${(props) => props.theme.lineMainColor};
  font-size: 18px;
  font-weight: 400;
  transition: color 0.3s;
`;

const ProjectMoreLine = styled.div`
  background-color: ${(props) => props.theme.lineMainColor};
  width: 70px;
  height: 2px;
  margin-left: 15px;
  margin-bottom: 6px;
  transition: margin-left 0.3s, background-color 0.3s;
`;

export default () => {
  const [siteTheme, setSiteTheme] = useState(false);
  const [headerMenuEnter, setHeaderMenuEnter] = useState(false);
  const [moreEnter, setMoreEnter] = useState(false);
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
          <ProjectWrapper>
            <ProjectInner>
              <ProjectTitleDiv>
                <ProjectTitleText>project</ProjectTitleText>
              </ProjectTitleDiv>
              <ProjectImageDiv>
                <ProjectImageRow style={{ marginTop: 200 }}>
                  <ProjectImageBox>
                    <ProjectImage url={bg01} />
                  </ProjectImageBox>
                  <ProjectImageBox>
                    <ProjectImage url={bg03} />
                  </ProjectImageBox>
                </ProjectImageRow>
                <ProjectImageRow>
                  <ProjectImageBox>
                    <ProjectImage url={bg02} />
                  </ProjectImageBox>
                  <ProjectImageBox>
                    <ProjectImage url={bg04} />
                  </ProjectImageBox>
                  <ProjectMoreBox
                    style={moreEnter ? { opacity: "0.6" } : null}
                    onMouseEnter={() => {
                      setMoreEnter(true);
                    }}
                    onMouseLeave={() => {
                      setMoreEnter(false);
                    }}
                  >
                    <ProjectMoreText>view more</ProjectMoreText>
                    <ProjectMoreLine
                      style={moreEnter ? { marginLeft: "10px" } : null}
                    />
                  </ProjectMoreBox>
                </ProjectImageRow>
              </ProjectImageDiv>
            </ProjectInner>
          </ProjectWrapper>
          <GoTop />
        </Wrapper>
      </ThemeProvider>
    </>
  );
};
