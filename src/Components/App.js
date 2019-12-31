import React from "react";
import GlobalStyles from "../Styles/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";
import { BrowserRouter as Router } from "react-router-dom";
import { DefaultRoute } from "./Routes";
import Header from "./Header";
// import Menu from "./Menu";

const Wrapper = styled.div``;

export default () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Router>
        <Header />
        <Wrapper>
          {/* <Menu /> */}
          <DefaultRoute />
        </Wrapper>
      </Router>
    </ThemeProvider>
  );
};
