import React, { useState } from "react";
import styled from "styled-components";
import useWindowDimensions from "../../../Hooks/useWindowDimensions";
import bg01 from "../../../Assets/Images/Bg/bg01.jpg";
import "swiper/css/swiper.css";
import IntroUnder from "./IntroUnder/IntroUnder";
import IntroUpper from "./IntroUpper/IntroUpper";

const Wrapper = styled.div`
  width: 100%;
  height: ${(props) => props.windowHeight};
  min-height: 768px;
  max-height: 1024px;
  display: flex;
`;

export default ({ siteTheme, setSiteTheme }) => {
  const { windowHeight } = useWindowDimensions();
  const [underBgIndex, setUnderBgIndex] = useState(bg01);

  return (
    <>
      <Wrapper style={{ height: windowHeight }}>
        <IntroUnder underBgIndex={underBgIndex} />
        <IntroUpper
          setUnderBgIndex={setUnderBgIndex}
          siteTheme={siteTheme}
          setSiteTheme={setSiteTheme}
        />
      </Wrapper>
    </>
  );
};
