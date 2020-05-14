import React, { useState } from "react";
import styled from "styled-components";
import useWindowDimensions from "../../../Hooks/useWindowDimensions";
import bg01 from "../../../Assets/Images/Bg/bg01.jpg";
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
  siteTheme,
  setSiteTheme,
  scrollY,
  headerMenuEnter,
  setHeaderMenuEnter,
  setPopClosed,
}) => {
  const { windowWidth, windowHeight } = useWindowDimensions();
  const [underBgIndex, setUnderBgIndex] = useState(bg01);

  return (
    <>
      <Wrapper style={windowWidth >= 1200 ? { height: windowHeight } : null}>
        <IntroUnder underBgIndex={underBgIndex} />
        <IntroUpper
          setUnderBgIndex={setUnderBgIndex}
          siteTheme={siteTheme}
          setSiteTheme={setSiteTheme}
          scrollY={scrollY}
          headerMenuEnter={headerMenuEnter}
          setHeaderMenuEnter={setHeaderMenuEnter}
          setPopClosed={setPopClosed}
        />
      </Wrapper>
    </>
  );
};
