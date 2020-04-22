import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Intro from "../../Components/Contents/Intro";
import ExplorerService from "../../Components/Contents/ExplorerService";
import TechStack from "../../Components/Contents/TechStack";
import Footer from "../../Components/Footer";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import Header from "../../Components/Header";

const Wrapper = styled.div`
  height: fit-content;
  width: 100%;
  max-width: 1780px;
  background-color: ${(props) => props.theme.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 2rem rgba(0, 0, 0, 0.1);
  user-select: none;
`;

//

const IntroRefPoint = styled.div``;
const ServicesRefPoint = styled.div``;
const TechStackRefPoint = styled.div``;

// Explorer Services 타이틀

const ServiceTitleDiv = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 599px) {
    margin-top: 40px;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 600px) {
    margin-top: 40px;
    margin-bottom: 30px;
  }
  @media screen and (min-width: 800px) {
    margin-top: 60px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1300px) {
    margin-top: 80px;
    margin-bottom: 60px;
  }
`;

const ServiceTitleMainText = styled.div`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 20px;
`;

const ServiceTitleSubText = styled.div`
  font-size: 18px;
  font-weight: 300;
  color: ${(props) => props.theme.darkFontH};
`;

// 기술 스택 타이틀

const TechStackTitleDiv = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.lightGray};
  @media screen and (max-width: 599px) {
    padding-top: 40px;
  }
  @media screen and (min-width: 600px) {
    padding-top: 40px;
  }
  @media screen and (min-width: 800px) {
    padding-top: 60px;
  }
  @media screen and (min-width: 1300px) {
    padding-top: 80px;
  }
`;

const TechStackMainText = styled.div`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 20px;
`;

const TechStackSubText = styled.div`
  font-size: 18px;
  font-weight: 300;
  color: ${(props) => props.theme.darkFontH};
`;

const scrollToRef = (ref, offTop = 76) =>
  window.scrollTo(0, ref.current.offsetTop - offTop);

const useMountEffect = (fun) => useEffect(fun, []);

export default () => {
  const { windowWidth } = useWindowDimensions();

  const introRef = useRef(null);
  const servicesRef = useRef(null);
  const techStackRef = useRef(null);

  useMountEffect(
    () => scrollToRef(introRef),
    () => scrollToRef(servicesRef),
    () => scrollToRef(techStackRef),
    []
  );

  return (
    <>
      <Header
        introScroll={() => scrollToRef(introRef, windowWidth < 600 ? 120 : 76)}
        servicesScroll={() =>
          scrollToRef(servicesRef, windowWidth < 600 ? 120 : 76)
        }
        techStackScroll={() =>
          scrollToRef(techStackRef, windowWidth < 600 ? 120 : 76)
        }
      />
      <Wrapper>
        <IntroRefPoint ref={introRef} />
        <Intro />
        <ServicesRefPoint ref={servicesRef} />
        <ServiceTitleDiv>
          <ServiceTitleMainText>Explore Services</ServiceTitleMainText>
          <ServiceTitleSubText>
            당신을 위한 서비스는 계속 추가됩니다.
          </ServiceTitleSubText>
        </ServiceTitleDiv>
        <ExplorerService />
        <TechStackRefPoint ref={techStackRef} />
        <TechStackTitleDiv>
          <TechStackMainText>Tech Stack</TechStackMainText>
          <TechStackSubText>
            와쳐스에서 사용된 기술 스택입니다.
          </TechStackSubText>
        </TechStackTitleDiv>
        <TechStack />
        <Footer
          introScroll={() =>
            scrollToRef(introRef, windowWidth < 600 ? 120 : 76)
          }
          servicesScroll={() =>
            scrollToRef(servicesRef, windowWidth < 600 ? 120 : 76)
          }
          techStackScroll={() =>
            scrollToRef(techStackRef, windowWidth < 600 ? 120 : 76)
          }
        />
      </Wrapper>
    </>
  );
};
