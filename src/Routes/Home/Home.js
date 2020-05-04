import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import ThemeDark from "../../Styles/ThemeDark";
import ThemeLight from "../../Styles/ThemeLight";
import "swiper/css/swiper.css";
import Intro from "../../Components/Home/Intro/Intro";
import About from "../../Components/Home/About/About";

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

export default () => {
  const [siteTheme, setSiteTheme] = useState(false);

  return (
    <>
      <ThemeProvider theme={siteTheme ? ThemeLight : ThemeDark}>
        <Wrapper>
          <Intro siteTheme={siteTheme} setSiteTheme={setSiteTheme} />
          <About />
        </Wrapper>
      </ThemeProvider>
    </>
  );
};
