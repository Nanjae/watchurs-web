import React from "react";
import GlobalStyles from "../Styles/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";
import { HashRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import Header from "./Header";
import GoogleAds from "./GoogleAds";

const Wrapper = styled.div``;

export default () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Router>
        <Header />
        <Wrapper>
          <GoogleAds />
          <Routes />
        </Wrapper>
      </Router>
    </ThemeProvider>
  );
};
