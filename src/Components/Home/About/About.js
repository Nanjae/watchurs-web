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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0px;
  @media only screen and (max-width: 575.99px) {
    width: 90%;
    height: fit-content;
    flex-direction: column;
  }
  @media only screen and (min-width: 576px) {
    width: 540px;
    height: 790px;
    flex-direction: column;
  }
  @media only screen and (min-width: 768px) {
    width: 720px;
    height: 700px;
    flex-direction: row;
  }
  @media only screen and (min-width: 992px) {
    height: 600px;
    width: 960px;
  }
  @media only screen and (min-width: 1200px) {
    height: 750px;
    width: 1120px;
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
