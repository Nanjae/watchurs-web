import React from "react";
import styled from "styled-components";
import AboutLeft from "./AboutLeft";
import AboutRight from "./AboutRight";

const Wrapper = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Inner = styled.div`
  height: 750px;
  padding: 50px 0px;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 575.99px) {
  }
  @media only screen and (min-width: 576px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
    width: 1200px;
  }
  @media only screen and (min-width: 1536px) {
    width: 1280px;
  }
  @media only screen and (min-width: 1800px) {
    width: 1440px;
  }
`;

export default () => {
  return (
    <>
      <Wrapper>
        <Inner>
          <AboutLeft />
          <AboutRight />
        </Inner>
      </Wrapper>
    </>
  );
};
