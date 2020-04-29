import React from "react";
import styled from "styled-components";
import "swiper/css/swiper.css";

const Wrapper = styled.div`
  width: 38%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Inner = styled.div`
  width: 80%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const SwiperBarBox = styled.div`
  display: flex;
  justify-content: center;
  width: 3px;
  height: 120px;
`;

const SwiperEmptyBar = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.bgMainColor};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 3px;
  height: 120px;
  opacity: 0.9;
  transition: background-color 0.3s;
`;

const SwiperFillBar = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.bgSubColor};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 3px;
  height: ${(props) => (props.upperTextIndex - 1) * 40}px;
  transition: height 0.5s, background-color 0.3s;
`;

const SwiperCircle = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.bgSubColor};
  width: 11px;
  height: 11px;
  border-radius: 50%;
  margin-top: ${(props) => (props.upperTextIndex - 1) * 40 - 5}px;
  transition: margin-top 0.5s, background-color 0.3s;
`;

const SwiperTextBox = styled.div`
  display: flex;
  align-items: center;
  transform: rotate(-90deg) translate(-60px, -65px);
`;

const SwiperMaxText = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: ${(props) => props.theme.bgMainColor};
  opacity: 0.9;
  transition: color 0.3s;
`;

const SwiperTextDivsion = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin: 0px 10px;
  color: ${(props) => props.theme.bgMainColor};
  opacity: 0.9;
  transition: color 0.3s;
`;

const SwiperCurrentText = styled.div`
  font-size: 50px;
  font-weight: 700;
  margin: 0px 10px;
  color: ${(props) => props.theme.bgSubColor};
  transition: color 0.3s;
`;

export default ({ upperTextIndex }) => {
  return (
    <>
      <Wrapper>
        <Inner>
          <SwiperBarBox>
            <SwiperEmptyBar />
            <SwiperFillBar upperTextIndex={upperTextIndex} />
            <SwiperCircle upperTextIndex={upperTextIndex} />
          </SwiperBarBox>
          <SwiperTextBox>
            <SwiperCurrentText>{upperTextIndex}</SwiperCurrentText>
            <SwiperTextDivsion>/</SwiperTextDivsion>
            <SwiperMaxText>04</SwiperMaxText>
          </SwiperTextBox>
        </Inner>
      </Wrapper>
    </>
  );
};