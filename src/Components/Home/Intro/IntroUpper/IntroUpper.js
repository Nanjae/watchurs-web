import React, { useState } from "react";
import styled from "styled-components";
import UpperLeft from "./UpperLeft";
import UpperCenter from "./UpperCenter";
import UpperRight from "./UpperRight";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

export default ({
  setUnderBgIndex,
  siteTheme,
  setSiteTheme,
  scrollY,
  headerMenuEnter,
  setHeaderMenuEnter,
}) => {
  const [upperTextIndex, setUpperTextIndex] = useState("01");

  return (
    <>
      <Wrapper>
        <UpperLeft
          siteTheme={siteTheme}
          scrollY={scrollY}
          headerMenuEnter={headerMenuEnter}
          setHeaderMenuEnter={setHeaderMenuEnter}
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
    </>
  );
};
