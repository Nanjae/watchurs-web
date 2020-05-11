import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media only screen and (max-width: 575.99px) {
  }
  @media only screen and (min-width: 576px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
    width: 560px;
  }
  @media only screen and (min-width: 1536px) {
    width: 640px;
  }
  @media only screen and (min-width: 1800px) {
    width: 720px;
  }
`;

const Inner = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CounterDiv = styled.div`
  height: 500px;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const CounterColumn = styled.div`
  height: 225px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const CounterBox = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const CounterBoxInner = styled.div`
  height: 50%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CounterBoxCount = styled.div`
  font-size: 80px;
  font-weight: 900;
  color: ${(props) => props.theme.fontMainColor};
  transition: color 0.3s;
`;

const CounterBoxText = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.theme.fontMainColor};
  transition: color 0.3s;
`;

export default () => {
  return (
    <>
      <Wrapper>
        <Inner>
          <CounterDiv>
            <CounterColumn>
              <CounterBox>
                <CounterBoxInner>
                  <CounterBoxCount>35</CounterBoxCount>
                  <CounterBoxText>PROJECTS</CounterBoxText>
                </CounterBoxInner>
              </CounterBox>
              <CounterBox>
                <CounterBoxInner>
                  <CounterBoxCount>12</CounterBoxCount>
                  <CounterBoxText>EMPLOYEES</CounterBoxText>
                </CounterBoxInner>
              </CounterBox>
            </CounterColumn>
            <CounterColumn>
              <CounterBox>
                <CounterBoxInner>
                  <CounterBoxCount>120</CounterBoxCount>
                  <CounterBoxText>CONTRACTORS</CounterBoxText>
                </CounterBoxInner>
              </CounterBox>
              <CounterBox>
                <CounterBoxInner>
                  <CounterBoxCount>80</CounterBoxCount>
                  <CounterBoxText>CLIENTS</CounterBoxText>
                </CounterBoxInner>
              </CounterBox>
            </CounterColumn>
          </CounterDiv>
        </Inner>
      </Wrapper>
    </>
  );
};
