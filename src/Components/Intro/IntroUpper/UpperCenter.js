import React from "react";
import styled from "styled-components";

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
  background-color: ${(props) => props.theme.bgLineColor};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 3px;
  height: 120px;
  opacity: 0.8;
  transition: background-color 0.3s;
`;

const SwiperFillBar = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.bgSubColor};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 3px;
  height: ${(props) => props.arrayIndex * 40}px;
  transition: height 0.5s, background-color 0.3s;
`;

const SwiperCircle = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.bgSubColor};
  width: 11px;
  height: 11px;
  border-radius: 50%;
  margin-top: ${(props) => props.arrayIndex * 40 - 5}px;
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
  color: ${(props) => props.theme.bgLineColor};
  opacity: 0.8;
  transition: color 0.3s;
`;

const SwiperTextDivsion = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin: 0px 10px;
  color: ${(props) => props.theme.bgLineColor};
  opacity: 0.8;
  transition: color 0.3s;
`;

const SwiperCurrentText = styled.div`
  font-size: 50px;
  font-weight: 700;
  margin: 0px 10px;
  color: ${(props) => props.theme.bgSubColor};
  transition: color 0.3s;
`;

export default ({ arrayIndex }) => {
  return (
    <>
      <Wrapper>
        <Inner>
          <SwiperBarBox>
            <SwiperEmptyBar />
            <SwiperFillBar arrayIndex={arrayIndex} />
            <SwiperCircle arrayIndex={arrayIndex} />
          </SwiperBarBox>
          <SwiperTextBox>
            <SwiperCurrentText>0{arrayIndex + 1}</SwiperCurrentText>
            <SwiperTextDivsion>/</SwiperTextDivsion>
            <SwiperMaxText>04</SwiperMaxText>
          </SwiperTextBox>
        </Inner>
      </Wrapper>
    </>
  );
};
