import React from "react";
import GlobalStyles from "../Styles/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";
import { BrowserRouter as Router } from "react-router-dom";
import { DefaultRoute } from "./Routes";
import Header from "./Header/Header";

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
          <Header />
          <DefaultRoute />
        </Wrapper>
      </Router>
    </ThemeProvider>
  );
};
