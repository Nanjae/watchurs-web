import React, { useState } from "react";
import styled from "styled-components";
import UpperLeft from "./UpperLeft";
import UpperCenter from "./UpperCenter";
import UpperRight from "./UpperRight";
import useWindowDimensions from "../../../../Hooks/useWindowDimensions";
import UpperSmall from "./UpperSmall";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 575.99px) {
    height: 600px;
  }
  @media only screen and (min-width: 576px) {
    height: 560px;
  }
  @media only screen and (min-width: 768px) {
    height: 760px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
    height: 100%;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

export default ({
  setUnderBgIndex,
  siteTheme,
  setSiteTheme,
  scrollY,
  headerMenuEnter,
  setHeaderMenuEnter,
  setPopClosed,
}) => {
  const { windowWidth } = useWindowDimensions();
  const [upperTextIndex, setUpperTextIndex] = useState("01");

  return (
    <>
      {windowWidth >= 1200 ? (
        <Wrapper>
          <UpperLeft
            siteTheme={siteTheme}
            scrollY={scrollY}
            headerMenuEnter={headerMenuEnter}
            setHeaderMenuEnter={setHeaderMenuEnter}
            setPopClosed={setPopClosed}
          />
          <UpperCenter
            siteTheme={siteTheme}
            upperTextIndex={upperTextIndex}
            setUpperTextIndex={setUpperTextIndex}
          />
          <UpperRight
            siteTheme={siteTheme}
            setSiteTheme={setSiteTheme}
            setUnderBgIndex={setUnderBgIndex}
            setUpperTextIndex={setUpperTextIndex}
            scrollY={scrollY}
          />
        </Wrapper>
      ) : (
        <Wrapper>
          <UpperSmall
            siteTheme={siteTheme}
            setSiteTheme={setSiteTheme}
            setUnderBgIndex={setUnderBgIndex}
            setUpperTextIndex={setUpperTextIndex}
            scrollY={scrollY}
            upperTextIndex={upperTextIndex}
          />
        </Wrapper>
      )}
    </>
  );
};
