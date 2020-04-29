import React from "react";
import GlobalStyles from "../Styles/GlobalStyles";
import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { DefaultRoute } from "./Routes";

const Wrapper = styled.div`
  user-select: none;
`;

export default () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Wrapper>
          <DefaultRoute />
        </Wrapper>
      </Router>
    </>
  );
};
