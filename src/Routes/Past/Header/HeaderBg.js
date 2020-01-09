import React from "react";
import styled from "styled-components";
import BgImage from "../../Assets/Common/runeterra-freljord-02-resized.png";
import useWindowDimensions from "../../Hooks/useWindowDimensions";

const HeaderBg = styled.div`
  width: 100%;
`;

const HeaderBgDiv = styled.div``;

const ImageDiv = styled.div`
  /* position: absolute; */
  z-index: -100;
  width: 100%;
  /* height: 100%; */
  padding-top: 100%;
  background-image: url(${BgImage});
  background-size: cover;
  background-repeat: no-repeat;
`;

const OpacityDiv = styled.div`
  position: absolute;
  padding-top: 56.25%;
  z-index: -50;
  width: 100%;
  background-color: black;
  opacity: 0.5;
`;

export default () => {
  const { windowWidth } = useWindowDimensions();

  return (
    <HeaderBg>
      {windowWidth <= 360 ? (
        <HeaderBgDiv>
          <ImageDiv style={{ width: 360, height: 202.5, paddingTop: 0 }} />
          <OpacityDiv style={{ width: 360, height: 202.5, paddingTop: 0 }} />
        </HeaderBgDiv>
      ) : (
        <HeaderBgDiv>
          <ImageDiv />
          {/* <OpacityDiv /> */}
        </HeaderBgDiv>
      )}
    </HeaderBg>
  );
};
