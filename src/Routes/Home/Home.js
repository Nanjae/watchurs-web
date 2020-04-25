import React from "react";
import styled from "styled-components";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
// import Theme from "../../Styles/Theme";
import bg1 from "../../Assets/Images/Bg/bg1.jpg";

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  background-color: ${(props) => props.theme.bgDark};
  @media only screen and (max-width: 575.99px) {
  }
  @media only screen and (min-width: 576px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;

const IntroWrapper = styled.div`
  width: 100%;
  height: ${(props) => props.windowHeight};
  min-height: 768px;
  max-height: 1024px;
  display: flex;
`;

const IntroUnderWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
`;

const IntroUnderContentDiv = styled.div`
  width: 60%;
  margin-left: 8%;
`;

const IntroUnderContentBox = styled.div`
  width: 100%;
  height: 90%;
`;

const IntroUnderImage = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: 30% center;
  width: 100%;
  height: 100%;
`;

const IntroUpperWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const IntroUpperLeftDiv = styled.div`
  width: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const IntroUppderHeaderDiv = styled.div`
  background-color: red;
  width: 100%;
  height: 85%;
`;

const IntroUpperRightDiv = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const IntroMainDiv = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const IntroMainContentDiv = styled.div`
  width: 95%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

const IntroMainContentIconDiv = styled.div`
  background-color: white;
  width: 100px;
  height: 50px;
`;

const IntroMainContentTextDiv = styled.div`
  background-color: white;
  width: 100%;
  height: 75%;
`;

const IntroMainSwiperDiv = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: flex-end;
`;

const IntroMainSwiperBox = styled.div`
  background-color: white;
  width: 80%;
  height: 100%;
`;

export default () => {
  const { windowHeight } = useWindowDimensions();
  return (
    <>
      <Wrapper>
        <IntroWrapper style={{ height: windowHeight }}>
          <IntroUnderWrapper>
            <IntroUnderContentDiv>
              <IntroUnderContentBox>
                <IntroUnderImage url={bg1} />
              </IntroUnderContentBox>
            </IntroUnderContentDiv>
          </IntroUnderWrapper>
          <IntroUpperWrapper>
            <IntroUpperLeftDiv>
              <IntroUppderHeaderDiv></IntroUppderHeaderDiv>
            </IntroUpperLeftDiv>
            <IntroUpperRightDiv>
              <IntroMainDiv>
                <IntroMainContentDiv>
                  <IntroMainContentIconDiv></IntroMainContentIconDiv>
                  <IntroMainContentTextDiv></IntroMainContentTextDiv>
                </IntroMainContentDiv>
                <IntroMainSwiperDiv>
                  <IntroMainSwiperBox></IntroMainSwiperBox>
                </IntroMainSwiperDiv>
              </IntroMainDiv>
            </IntroUpperRightDiv>
          </IntroUpperWrapper>
        </IntroWrapper>
      </Wrapper>
    </>
  );
};
