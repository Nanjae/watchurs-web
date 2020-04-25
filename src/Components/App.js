import React from "react";
import GlobalStyles from "../Styles/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";
import { BrowserRouter as Router } from "react-router-dom";
import { DefaultRoute } from "./Routes";

const Wrapper = styled.div`
  user-select: none;
`;

export default () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Router>
        <Wrapper>
          <DefaultRoute />
        </Wrapper>
      </Router>
    </ThemeProvider>
  );
};
