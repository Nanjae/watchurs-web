import React from "react";
import styled from "styled-components";
import "swiper/css/swiper.css";
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
  width: 1200px;
  padding: 50px 0px;
  display: flex;
  justify-content: center;
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
