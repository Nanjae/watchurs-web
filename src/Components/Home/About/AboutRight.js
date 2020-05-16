import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media only screen and (max-width: 575.99px) {
    width: 100%;
  }
  @media only screen and (min-width: 576px) {
    width: 540px;
  }
  @media only screen and (min-width: 768px) {
    width: 360px;
  }
  @media only screen and (min-width: 992px) {
    width: 480px;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 575.99px) {
    width: 100%;
  }
  @media only screen and (min-width: 576px) {
    width: 480px;
    margin: 0px 30px;
  }
  @media only screen and (min-width: 768px) {
    width: 330px;
    margin-right: 10px;
    margin-left: 20px;
  }
  @media only screen and (min-width: 992px) {
    width: 450px;
    margin-right: 20px;
    margin-left: 10px;
  }
  @media only screen and (min-width: 1200px) {
    width: 100%;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const CounterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 575.99px) {
    width: 100%;
    height: 400px;
    margin-top: 40px;
  }
  @media only screen and (min-width: 576px) {
    width: 100%;
    height: 200px;
    margin-top: 50px;
  }
  @media only screen and (min-width: 768px) {
    width: 90%;
    height: 350px;
  }
  @media only screen and (min-width: 992px) {
    height: 350px;
  }
  @media only screen and (min-width: 1200px) {
    height: 500px;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const CounterColumn = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 575.99px) {
    flex-direction: column;
    height: 180px;
  }
  @media only screen and (min-width: 576px) {
    flex-direction: row;
    height: 70px;
  }
  @media only screen and (min-width: 768px) {
    height: 150px;
  }
  @media only screen and (min-width: 992px) {
    height: 150px;
  }
  @media only screen and (min-width: 1200px) {
    height: 225px;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const CounterBox = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 575.99px) {
    justify-content: center;
    height: 40%;
  }
  @media only screen and (min-width: 576px) {
    justify-content: flex-start;
    width: 45%;
    height: 100%;
  }
  @media only screen and (min-width: 768px) {
    justify-content: flex-end;
    width: 45%;
  }
  @media only screen and (min-width: 992px) {
    width: 50%;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const CounterBoxInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 575.99px) {
    align-items: center;
    height: 100%;
  }
  @media only screen and (min-width: 576px) {
    align-items: flex-start;
    height: 100%;
  }
  @media only screen and (min-width: 768px) {
    height: 50%;
    width: 100%;
  }
  @media only screen and (min-width: 992px) {
    width: 60%;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const CounterBoxCount = styled.div`
  font-weight: 900;
  color: ${(props) => props.theme.fontMainColor};
  transition: color 0.3s;
  @media only screen and (max-width: 575.99px) {
    font-size: 35px;
  }
  @media only screen and (min-width: 576px) {
    font-size: 35px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 40px;
  }
  @media only screen and (min-width: 992px) {
    font-size: 40px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 80px;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const CounterBoxText = styled.div`
  font-weight: 700;
  color: ${(props) => props.theme.fontMainColor};
  transition: color 0.3s;
  @media only screen and (max-width: 575.99px) {
    font-size: 18px;
  }
  @media only screen and (min-width: 576px) {
    font-size: 18px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media only screen and (min-width: 992px) {
    font-size: 18px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 20px;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
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
