import React, { useState } from "react";
import styled from "styled-components";
import "swiper/css/swiper.css";
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

export default ({ setUnderBgIndex, siteTheme, setSiteTheme }) => {
  const [upperTextIndex, setUpperTextIndex] = useState("01");

  return (
    <>
      <Wrapper>
        <UpperLeft siteTheme={siteTheme} />
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
        />
      </Wrapper>
    </>
  );
};
