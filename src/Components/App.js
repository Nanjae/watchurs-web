import React from "react";
import GlobalStyles from "../Styles/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";
import { BrowserRouter as Router } from "react-router-dom";
import { DefaultRoute, LeagueRoute } from "./Routes";
import Header from "./Header";
import GoTop from "./GoTop";
import LeagueHeader from "./Test/LeagueHeader";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Router>
        <Wrapper>
          {/* <Header /> */}
          {/* <DefaultRoute /> */}
          <LeagueHeader />
          <LeagueRoute />
          {/* <GoTop /> */}
        </Wrapper>
      </Router>
    </ThemeProvider>
  );
};
