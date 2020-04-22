import React from "react";
import styled from "styled-components";

const MenuDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-y: auto;
`;

const MenuInner = styled.div`
  @media only screen and (max-width: 599px) {
    margin-left: 20px;
    margin-top: 40px;
  }
  @media only screen and (min-width: 600px) {
    margin-left: 40px;
    margin-top: 40px;
  }
  @media only screen and (min-width: 800px) {
    margin-left: 60px;
    margin-top: 60px;
  }
  @media only screen and (min-width: 1300px) {
    margin-left: 60px;
    margin-top: 60px;
  }
`;

const MenuMainBox = styled.div`
  @media only screen and (max-width: 599px) {
    margin-bottom: 40px;
  }
  @media only screen and (min-width: 600px) {
    margin-bottom: 40px;
  }
  @media only screen and (min-width: 800px) {
    margin-bottom: 60px;
  }
  @media only screen and (min-width: 1300px) {
    margin-bottom: 60px;
  }
`;

const MenuMainText = styled.div`
  font-weight: 300;
  color: ${(props) => props.theme.darkGray};
  margin-bottom: 10px;
  @media only screen and (max-width: 599px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 13px;
  }
  @media only screen and (min-width: 800px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 1300px) {
    font-size: 14px;
  }
`;

const MenuSubBox = styled.div`
  @media only screen and (max-width: 599px) {
    margin: 15px 0px;
  }
  @media only screen and (min-width: 600px) {
    margin: 15px 0px;
  }
  @media only screen and (min-width: 800px) {
    margin: 20px 0px;
  }
  @media only screen and (min-width: 1300px) {
    margin: 20px 0px;
  }
`;

const MenuSubText = styled.div`
  font-weight: 400;
  cursor: pointer;
  @media only screen and (max-width: 599px) {
    font-size: 18px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 21px;
  }
  @media only screen and (min-width: 800px) {
    font-size: 24px;
  }
  @media only screen and (min-width: 1300px) {
    font-size: 24px;
  }
`;

export default ({
  introScroll,
  servicesScroll,
  techStackScroll,
  popLeftClickHandler,
}) => {
  return (
    <>
      <MenuDiv>
        <MenuInner>
          <MenuMainBox>
            <MenuMainText>WATCHURS SERVICES</MenuMainText>
            <MenuSubBox>
              <MenuSubText>브로드캐스터 순위 : LOL</MenuSubText>
            </MenuSubBox>
            <MenuSubBox>
              <MenuSubText>서비스 준비중..</MenuSubText>
            </MenuSubBox>
            <MenuSubBox>
              <MenuSubText>서비스 준비중..</MenuSubText>
            </MenuSubBox>
            <MenuSubBox>
              <MenuSubText>서비스 준비중..</MenuSubText>
            </MenuSubBox>
            <MenuSubBox>
              <MenuSubText>서비스 준비중..</MenuSubText>
            </MenuSubBox>
            <MenuSubBox>
              <MenuSubText>서비스 준비중..</MenuSubText>
            </MenuSubBox>
          </MenuMainBox>
          <MenuMainBox>
            <MenuMainText>ABOUT WATCHURS</MenuMainText>
            <MenuSubBox>
              <MenuSubText
                onClick={() => {
                  introScroll();
                  popLeftClickHandler();
                }}
              >
                와쳐스 소개
              </MenuSubText>
            </MenuSubBox>
            <MenuSubBox>
              <MenuSubText
                onClick={() => {
                  servicesScroll();
                  popLeftClickHandler();
                }}
              >
                서비스 탐색
              </MenuSubText>
            </MenuSubBox>
            <MenuSubBox>
              <MenuSubText
                onClick={() => {
                  techStackScroll();
                  popLeftClickHandler();
                }}
              >
                기술 스택
              </MenuSubText>
            </MenuSubBox>
          </MenuMainBox>
        </MenuInner>
      </MenuDiv>
    </>
  );
};
