import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  width: 560px;
  display: flex;
  justify-content: flex-end;
`;

const Inner = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TopDiv = styled.div`
  height: 50%;
  width: 100%;
`;

const TopBgTextDiv = styled.div`
  position: absolute;
  height: 375px;
  width: 375px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

const TopBgText = styled.div`
  color: ${(props) => props.theme.fontMainColor};
  font-size: 350px;
  font-family: "Monoton", sans-serif;
  opacity: 0.1;
  transition: color 0.3s;
`;

const TopTitleDiv = styled.div`
  position: absolute;
  height: 300px;
  width: 400px;
  margin-left: 150px;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const TopTitleTopText = styled.div`
  color: ${(props) => props.theme.fontMainColor};
  font-size: 70px;
  margin-bottom: 10px;
  transition: color 0.3s;
`;

const TopTitleBottomText = styled.div`
  color: ${(props) => props.theme.fontMainColor};
  font-size: 70px;
  font-weight: 900;
  transition: color 0.3s;
`;

const BottomDiv = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 0px;
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
              <TopBgText>W</TopBgText>
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
