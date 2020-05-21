import React, { useState } from "react";
import styled from "styled-components";
import IntroUnder from "./IntroUnder/IntroUnder";
import IntroUpper from "./IntroUpper/IntroUpper";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  @media only screen and (max-width: 575.99px) {
    height: 600px;
    padding-top: 57px;
  }
  @media only screen and (min-width: 576px) {
    height: 560px;
    padding-top: 57px;
  }
  @media only screen and (min-width: 768px) {
    height: 760px;
    padding-top: 57px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
    height: ${(props) => props.windowHeight};
    padding-top: 0px;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

export default ({
  bgArray,
  siteTheme,
  setSiteTheme,
  scrollY,
  headerMenuEnter,
  setHeaderMenuEnter,
  setPopClosed,
  windowWidth,
  windowHeight,
}) => {
  const [arrayIndex, setArrayIndex] = useState(0);

  return (
    <>
      <Wrapper style={windowWidth >= 1200 ? { height: windowHeight } : null}>
        <IntroUnder
          arrayIndex={arrayIndex}
          setArrayIndex={setArrayIndex}
          bgArray={bgArray}
          windowWidth={windowWidth}
        />
        <IntroUpper
          arrayIndex={arrayIndex}
          setArrayIndex={setArrayIndex}
          bgArray={bgArray}
          siteTheme={siteTheme}
          setSiteTheme={setSiteTheme}
          scrollY={scrollY}
          headerMenuEnter={headerMenuEnter}
          setHeaderMenuEnter={setHeaderMenuEnter}
          setPopClosed={setPopClosed}
          windowWidth={windowWidth}
        />
      </Wrapper>
    </>
  );
};
