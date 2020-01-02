import React from "react";
import styled from "styled-components";
import BgImage from "../../Assets/Common/runeterra-freljord-02-resized.png";
import useWindowDimensions from "../../Hooks/useWindowDimensions";

const HeaderBg = styled.div``;

const HeaderBgDiv = styled.div`
  position: absolute;
  z-index: -100;
  padding-top: 56.25%;
  width: 100%;
  background-image: url(${BgImage});
  background-size: 100%;
  background-repeat: no-repeat;
`;

export default () => {
  const { windowWidth, bgHeight } = useWindowDimensions();
  return (
    <HeaderBg>
      {windowWidth <= 360 ? (
        <HeaderBgDiv style={{ width: windowWidth, paddingTop: bgHeight }} />
      ) : (
        <HeaderBgDiv />
      )}
    </HeaderBg>
  );
};
