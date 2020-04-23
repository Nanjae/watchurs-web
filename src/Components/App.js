import React from "react";
import GlobalStyles from "../Styles/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";
import { BrowserRouter as Router } from "react-router-dom";
import { DefaultRoute } from "./Routes";
import useWindowDimensions from "../Hooks/useWindowDimensions";

const Wrapper = styled.div`
  overflow: hidden;
`;

export default () => {
  const { windowWidth, windowHeight } = useWindowDimensions();
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Router>
        <Wrapper style={{ width: windowWidth, height: windowHeight }}>
          <DefaultRoute />
        </Wrapper>
      </Router>
    </ThemeProvider>
  );
};
