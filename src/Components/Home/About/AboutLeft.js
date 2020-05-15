import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  @media only screen and (max-width: 575.99px) {
  }
  @media only screen and (min-width: 576px) {
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
  justify-content: space-between;
  @media only screen and (max-width: 575.99px) {
  }
  @media only screen and (min-width: 576px) {
  }
  @media only screen and (min-width: 768px) {
    width: 330px;
    margin-right: 10px;
    margin-left: 20px;
  }
  @media only screen and (min-width: 992px) {
    width: 450px;
    margin-right: 10px;
    margin-left: 20px;
  }
  @media only screen and (min-width: 1200px) {
    width: 100%;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const TopDiv = styled.div`
  width: 100%;
  @media only screen and (max-width: 575.99px) {
  }
  @media only screen and (min-width: 576px) {
  }
  @media only screen and (min-width: 768px) {
    height: 240px;
  }
  @media only screen and (min-width: 992px) {
    height: 240px;
  }
  @media only screen and (min-width: 1200px) {
    height: 375px;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const TopBgTextDiv = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  @media only screen and (max-width: 575.99px) {
  }
  @media only screen and (min-width: 576px) {
  }
  @media only screen and (min-width: 768px) {
    height: 240px;
    width: 330px;
  }
  @media only screen and (min-width: 992px) {
    height: 240px;
    width: 400px;
  }
  @media only screen and (min-width: 1200px) {
    height: 375px;
    width: 550px;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const TopBgText = styled.div`
  color: ${(props) => props.theme.fontMainColor};
  font-family: "Monoton", sans-serif;
  opacity: 0.1;
  transition: color 0.3s;
  @media only screen and (max-width: 575.99px) {
  }
  @media only screen and (min-width: 576px) {
  }
  @media only screen and (min-width: 768px) {
    font-size: 225px;
  }
  @media only screen and (min-width: 992px) {
    font-size: 225px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 350px;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const TopTitleDiv = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media only screen and (max-width: 575.99px) {
  }
  @media only screen and (min-width: 576px) {
  }
  @media only screen and (min-width: 768px) {
    margin-top: 40px;
    margin-left: 100px;
    height: 200px;
    width: 230px;
  }
  @media only screen and (min-width: 992px) {
    margin-top: 40px;
    margin-left: 100px;
    height: 200px;
    width: 300px;
  }
  @media only screen and (min-width: 1200px) {
    margin-top: 60px;
    margin-left: 150px;
    height: 300px;
    width: 400px;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const TopTitleTopText = styled.div`
  color: ${(props) => props.theme.fontMainColor};
  margin-bottom: 10px;
  transition: color 0.3s;
  @media only screen and (max-width: 575.99px) {
  }
  @media only screen and (min-width: 576px) {
  }
  @media only screen and (min-width: 768px) {
    font-size: 40px;
  }
  @media only screen and (min-width: 992px) {
    font-size: 40px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 70px;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const TopTitleBottomText = styled.div`
  color: ${(props) => props.theme.fontMainColor};
  font-weight: 900;
  transition: color 0.3s;
  @media only screen and (max-width: 575.99px) {
  }
  @media only screen and (min-width: 576px) {
  }
  @media only screen and (min-width: 768px) {
    font-size: 40px;
  }
  @media only screen and (min-width: 992px) {
    font-size: 40px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 70px;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const BottomDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 575.99px) {
  }
  @media only screen and (min-width: 576px) {
  }
  @media only screen and (min-width: 768px) {
    padding: 20px 0px;
    height: 420px;
  }
  @media only screen and (min-width: 992px) {
    padding: 20px 0px;
    height: 320px;
  }
  @media only screen and (min-width: 1200px) {
    padding: 30px 0px;
    height: 300px;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const BottomMainText = styled.div`
  font-size: 18px;
  font-weight: 300;
  color: ${(props) => props.theme.fontMainColor};
  line-height: 36px;
  transition: color 0.3s;
`;

const BottomSubText = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => props.theme.fontMainColor};
  line-height: 36px;
  text-align: right;
  transition: color 0.3s;
`;

export default () => {
  return (
    <>
      <Wrapper>
        <Inner>
          <TopDiv>
            <TopBgTextDiv>
              <TopBgText>A</TopBgText>
            </TopBgTextDiv>
            <TopTitleDiv>
              <TopTitleTopText>ABOUT</TopTitleTopText>
              <TopTitleBottomText>WATCHURS</TopTitleBottomText>
            </TopTitleDiv>
          </TopDiv>
          <BottomDiv>
            <BottomMainText>
              Founded in 1999, ID works to deliver full interior design packages
              from concept schemes to full scale of interior & architectural
              refurbishments with the needed technical drawings & 3D
              visualizations , with close attention to details, managed and
              implemented with great care; for interior construction, space
              planning, materials, finishes, furnishings, fixtures and
              equipment.
            </BottomMainText>
            <BottomSubText>
              {"< Let's watch yours via WATCHURS >"}
            </BottomSubText>
          </BottomDiv>
        </Inner>
      </Wrapper>
    </>
  );
};
