import React from "react";
import styled from "styled-components";
import useWindowDimensions from "../Hooks/useWindowDimensions";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 420px;
  width: 100%;
  max-width: 1440px;
  @media only screen and (max-width: 599px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 600px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 800px) {
    flex-direction: row;
  }
  @media only screen and (min-width: 1300px) {
    flex-direction: row;
  }
`;

const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 599px) {
    height: 40%;
    width: 100%;
    justify-content: center;
  }
  @media only screen and (min-width: 600px) {
    height: 40%;
    width: 100%;
    justify-content: center;
  }
  @media only screen and (min-width: 800px) {
    height: 100%;
    width: 50%;
    justify-content: flex-start;
  }
  @media only screen and (min-width: 1300px) {
    height: 100%;
    width: 50%;
    justify-content: flex-start;
  }
`;

const LogoInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 599px) {
    margin-left: 0px;
  }
  @media only screen and (min-width: 600px) {
    margin-left: 0px;
  }
  @media only screen and (min-width: 800px) {
    margin-left: 60px;
  }
  @media only screen and (min-width: 1300px) {
    margin-left: 100px;
  }
`;

const LogoMainText = styled.div`
  font-size: 32px;
  font-weight: 700;
  margin: 15px 0px;
`;

const LogoSubText = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.darkGray};
`;

const MenuDiv = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 599px) {
    height: 60%;
    width: 100%;
    justify-content: center;
  }
  @media only screen and (min-width: 600px) {
    height: 60%;
    width: 100%;
    justify-content: center;
  }
  @media only screen and (min-width: 800px) {
    height: 100%;
    width: 50%;
    justify-content: flex-end;
  }
  @media only screen and (min-width: 1300px) {
    height: 100%;
    width: 50%;
    justify-content: flex-end;
  }
`;

const MenuInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 599px) {
    margin-right: 0px;
  }
  @media only screen and (min-width: 600px) {
    margin-right: 0px;
  }
  @media only screen and (min-width: 800px) {
    margin-right: 60px;
  }
  @media only screen and (min-width: 1300px) {
    margin-right: 100px;
  }
`;

const MenuGrid = styled.div`
  display: grid;
  @media only screen and (max-width: 599px) {
    grid-gap: 10px 20px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: 600px) {
    grid-gap: 10px 20px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: 800px) {
    grid-gap: 20px 10px;
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (min-width: 1300px) {
    grid-gap: 20px 10px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const MenuBox = styled.div`
  margin: 10px;
  color: ${(props) => props.theme.darkGray};
  cursor: pointer;
`;

export default ({ introScroll, servicesScroll, techStackScroll }) => {
  const { windowWidth } = useWindowDimensions();

  const menu_1 = "Broadcaster(LOL)";
  const menu_2 = "Intro";
  const menu_3 = "Explorer Services";
  const menu_4 = "Tech Stack";
  const menu_5 = "Facebook";
  const menu_6 = "Contact Developer";

  return (
    <>
      {windowWidth < 600 ? (
        <Wrapper>
          <MenuDiv>
            <MenuInner>
              <MenuGrid>
                <MenuBox>{menu_1}</MenuBox>
                <MenuBox onClick={introScroll}>{menu_2}</MenuBox>
                <MenuBox onClick={servicesScroll}>{menu_3}</MenuBox>
                <MenuBox onClick={techStackScroll}>{menu_4}</MenuBox>
                <MenuBox>{menu_5}</MenuBox>
                <MenuBox>{menu_6}</MenuBox>
              </MenuGrid>
            </MenuInner>
          </MenuDiv>
          <LogoDiv>
            <LogoInner>
              <LogoSubText>WATCH + YOURS</LogoSubText>
              <LogoMainText>WATCHURS</LogoMainText>
              <LogoSubText>방문해주셔서 감사합니다.</LogoSubText>
            </LogoInner>
          </LogoDiv>
        </Wrapper>
      ) : windowWidth < 800 ? (
        <Wrapper>
          <MenuDiv>
            <MenuInner>
              <MenuGrid>
                <MenuBox>{menu_1}</MenuBox>
                <MenuBox onClick={introScroll}>{menu_2}</MenuBox>
                <MenuBox onClick={servicesScroll}>{menu_3}</MenuBox>
                <MenuBox onClick={techStackScroll}>{menu_4}</MenuBox>
                <MenuBox>{menu_5}</MenuBox>
                <MenuBox>{menu_6}</MenuBox>
              </MenuGrid>
            </MenuInner>
          </MenuDiv>
          <LogoDiv>
            <LogoInner>
              <LogoSubText>WATCH + YOURS</LogoSubText>
              <LogoMainText>WATCHURS</LogoMainText>
              <LogoSubText>방문해주셔서 감사합니다.</LogoSubText>
            </LogoInner>
          </LogoDiv>
        </Wrapper>
      ) : (
        <Wrapper>
          <LogoDiv>
            <LogoInner>
              <LogoSubText>WATCH + YOURS</LogoSubText>
              <LogoMainText>WATCHURS</LogoMainText>
              <LogoSubText>방문해주셔서 감사합니다.</LogoSubText>
            </LogoInner>
          </LogoDiv>
          <MenuDiv>
            <MenuInner>
              <MenuGrid>
                <MenuBox>{menu_1}</MenuBox>
                <MenuBox onClick={introScroll}>{menu_2}</MenuBox>
                <MenuBox onClick={servicesScroll}>{menu_3}</MenuBox>
                <MenuBox onClick={techStackScroll}>{menu_4}</MenuBox>
                <MenuBox>{menu_5}</MenuBox>
                <MenuBox>{menu_6}</MenuBox>
              </MenuGrid>
            </MenuInner>
          </MenuDiv>
        </Wrapper>
      )}
    </>
  );
};
