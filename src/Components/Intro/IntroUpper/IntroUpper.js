import React from "react";
import styled from "styled-components";
import UpperLeft from "./UpperLeft";
import UpperCenter from "./UpperCenter";
import UpperRight from "./UpperRight";
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
  arrayIndex,
  setArrayIndex,
  bgArray,
  siteTheme,
  setSiteTheme,
  scrollY,
  headerMenuEnter,
  setHeaderMenuEnter,
  setPopClosed,
  windowWidth,
}) => {
  const titleMainString = `프로젝트 WATCHURS`;
  const titleSubString = `WATCH YOURS`;
  const bodyMainString = `와쳐스는 일상생활 속에서 여러분이 알고 싶은 정보를 제공하기 위해 시작된 개인 프로젝트입니다.`;
  const bodySubString = `당신의 관심사를 다양한 스타일의 페이지에서 확인해보세요.`;

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
          <UpperCenter arrayIndex={arrayIndex} siteTheme={siteTheme} />
          <UpperRight
            setArrayIndex={setArrayIndex}
            bgArray={bgArray}
            siteTheme={siteTheme}
            setSiteTheme={setSiteTheme}
            scrollY={scrollY}
            titleMainString={titleMainString}
            titleSubString={titleSubString}
            bodyMainString={bodyMainString}
            bodySubString={bodySubString}
          />
        </Wrapper>
      ) : (
        <Wrapper>
          <UpperSmall
            arrayIndex={arrayIndex}
            setArrayIndex={setArrayIndex}
            bgArray={bgArray}
            scrollY={scrollY}
            windowWidth={windowWidth}
            titleMainString={titleMainString}
            titleSubString={titleSubString}
            bodyMainString={bodyMainString}
            bodySubString={bodySubString}
          />
        </Wrapper>
      )}
    </>
  );
};
