import React from "react";
import styled from "styled-components";
import { useState } from "react";
import ThemeDark from "../../Styles/ThemeDark";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.bgFooterColor};
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Inner = styled.div`
  width: 90%;
  height: 350px;
  margin: 80px 30px 30px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const TopDiv = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: flex-start;
`;

const TopBox = styled.div`
  width: 280px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  :not(:first-child) {
    margin-left: 80px;
  }
`;

const TopMainTextBox = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const TopMainText = styled.div`
  color: ${(props) => props.theme.fontFooterColor};
  font-size: 24px;
  font-weight: 700;
  :not(:first-child) {
    margin-top: 5px;
  }
`;

const TopSubTextBox = styled.div`
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const TopSubText = styled.div`
  color: ${(props) => props.theme.fontFooterColor};
  font-size: 18px;
  font-weight: 300;
  display: flex;
  align-items: center;
  height: 25%;
  width: fit-content;
  transition: color 0.3s;
`;

const BottomDiv = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: flex-start;
`;

const BottomBox = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const BottomText = styled.div`
  color: ${(props) => props.theme.lineSubColor};
  font-size: 18px;
`;

export default () => {
  const [textEnter, setTextEnter] = useState(0);

  return (
    <>
      <Wrapper>
        <Inner>
          <TopDiv>
            <TopBox>
              <TopMainTextBox>
                <TopMainText>Contact to</TopMainText>
                <TopMainText>:: WATCHURS</TopMainText>
              </TopMainTextBox>
              <TopSubTextBox>
                <TopSubText>개발 : Nanjae</TopSubText>
                <TopSubText
                  onMouseEnter={() => {
                    setTextEnter(1);
                  }}
                  onMouseLeave={() => {
                    setTextEnter(0);
                  }}
                  style={
                    textEnter === 1
                      ? { color: ThemeDark.highlightColor, cursor: "pointer" }
                      : { cursor: "pointer" }
                  }
                >
                  dev.nanjae@gmail.com
                </TopSubText>
              </TopSubTextBox>
            </TopBox>
            <TopBox>
              <TopMainTextBox>
                <TopMainText>Project</TopMainText>
                <TopMainText>:: Broadcaster</TopMainText>
              </TopMainTextBox>
              <TopSubTextBox>
                <TopSubText
                  onMouseEnter={() => {
                    setTextEnter(2);
                  }}
                  onMouseLeave={() => {
                    setTextEnter(0);
                  }}
                  style={
                    textEnter === 2
                      ? { color: ThemeDark.highlightColor, cursor: "pointer" }
                      : { cursor: "pointer" }
                  }
                >
                  리그 오브 레전드 : LOL
                </TopSubText>
                <TopSubText
                  onMouseEnter={() => {
                    setTextEnter(3);
                  }}
                  onMouseLeave={() => {
                    setTextEnter(0);
                  }}
                  style={
                    textEnter === 3
                      ? { color: ThemeDark.highlightColor, cursor: "pointer" }
                      : { cursor: "pointer" }
                  }
                >
                  전략적 팀 전투 : TFT
                </TopSubText>
              </TopSubTextBox>
            </TopBox>
            <TopBox></TopBox>
          </TopDiv>
          <BottomDiv>
            <BottomBox>
              <BottomText>© 2020 WATCHURS. All rights reserved.</BottomText>
            </BottomBox>
          </BottomDiv>
        </Inner>
      </Wrapper>
    </>
  );
};
