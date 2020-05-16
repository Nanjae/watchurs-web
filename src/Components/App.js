import React from "react";
import GlobalStyles from "../Styles/GlobalStyles";
import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { DefaultRoute } from "./Routes";
import "swiper/css/swiper.css";

const Wrapper = styled.div`
  user-select: none;
`;

export default () => {
  // window.onbeforeunload = function () {
  //   window.scrollTo(0, 0);
  // };

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
