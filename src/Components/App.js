import React from "react";
import GlobalStyles from "../Styles/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";
import { HashRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import Header from "./Header";
import Footer from "./Footer";

const Wrapper = styled.div``;

export default () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Header />
      <Router>
        <Wrapper>
          <Routes />
        </Wrapper>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};
