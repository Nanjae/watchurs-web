import React from "react";
import styled from "styled-components";
import Theme from "../../../Styles/Theme";
import introBanner from "../../../Assets/Images/labtop_coffee.jpg";
import useWindowDimensions from "../../../Hooks/useWindowDimensions";

// Intro 컨텐츠

const ContentDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 840px;
  width: 100%;
`;

const ContentInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  max-width: 1440px;
  width: 100%;
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
`;

const IntroDiv = styled.div`
  height: fit-content;
  @media screen and (max-width: 599px) {
    width: 90%;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  @media screen and (min-width: 600px) {
    width: 90%;
    padding-top: 40px;
    padding-bottom: 40px;
  }
  @media screen and (min-width: 800px) {
    padding-top: 76px;
    width: 70%;
  }
`;

const IntroTitle = styled.div`
  font-size: 36px;
  font-weight: 500;
`;

const IntroAuthor = styled.div`
  display: flex;
  margin: 60px 0px;
`;

const IntroContents = styled.div``;

const IntroText = styled.div`
  font-size: 16px;
`;

const IntroBanner = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  width: 100%;
  height: 100%;
`;

export default () => {
  const { windowWidth } = useWindowDimensions();

  const introTextMainString = `와쳐스는 당신의 일상 속에서 생기는 한 눈에 보고싶은 정보들을 간편하게 보여주는 서비스를 목표로 하는 개인 프로젝트입니다. 자주 보는 방송 플랫폼의 브로드캐스터(스트리머, BJ 등) 정보나 일상 속의 여러 분야에서 생기는 사소하지만 가끔씩 찾아보게 될지도 모를 정보들을 수집, 가공하여 제공합니다. 언제 어디서나 와쳐스를 통해 당신이 관심있는 정보들을 볼 수 있기를 바랍니다.`;

  const introTextSubString = `< Let's WATCH YOURS via WATCHURS >`;

  return (
    <>
      {windowWidth < 600 ? (
        <ContentDiv
          style={{
            paddingTop: "120px",
            backgroundColor: Theme.gray,
            height: "fit-content",
          }}
        >
          <ContentInner
            style={{ flexDirection: "column", height: "fit-content" }}
          >
            <ContentBox
              style={{
                width: "100%",
                height: (windowWidth * 2) / 3,
                // minHeight: 270
              }}
            >
              <IntroBanner url={introBanner} />
            </ContentBox>
            <ContentBox
              style={{
                width: "100%",
                height: windowWidth,
                minHeight: "fit-content",
              }}
            >
              <IntroDiv>
                <IntroTitle style={{ marginBottom: 10 }}>WATCHURS</IntroTitle>
                <IntroTitle>= WATCH + YOURS</IntroTitle>
                <IntroAuthor>
                  <IntroText style={{ marginRight: 5 }}>Author</IntroText>
                  <IntroText style={{ fontWeight: 500 }}>Nanjae</IntroText>
                </IntroAuthor>
                <IntroContents>
                  <IntroText style={{ lineHeight: 2.5 }}>
                    {introTextMainString}
                  </IntroText>
                  <IntroText
                    style={{
                      fontWeight: "bold",
                      textAlign: "right",
                      marginTop: 60,
                    }}
                  >
                    {introTextSubString}
                  </IntroText>
                </IntroContents>
              </IntroDiv>
            </ContentBox>
          </ContentInner>
        </ContentDiv>
      ) : windowWidth < 800 ? (
        <ContentDiv
          style={{
            paddingTop: "76px",
            backgroundColor: Theme.gray,
            height: "fit-content",
          }}
        >
          <ContentInner
            style={{ flexDirection: "column", height: "fit-content" }}
          >
            <ContentBox
              style={{
                width: "100%",
                height: (windowWidth * 2) / 3,
                // minHeight: 360
              }}
            >
              <IntroBanner url={introBanner} />
            </ContentBox>
            <ContentBox
              style={{
                width: "100%",
                height: "fit-content",
                minHeight: "fit-content",
              }}
            >
              <IntroDiv>
                <IntroTitle style={{ marginBottom: 10 }}>WATCHURS</IntroTitle>
                <IntroTitle>= WATCH + YOURS</IntroTitle>
                <IntroAuthor>
                  <IntroText style={{ marginRight: 5 }}>Author</IntroText>
                  <IntroText style={{ fontWeight: 500 }}>Nanjae</IntroText>
                </IntroAuthor>
                <IntroContents>
                  <IntroText style={{ lineHeight: 2 }}>
                    {introTextMainString}
                  </IntroText>
                  <IntroText
                    style={{
                      fontWeight: "bold",
                      textAlign: "right",
                      marginTop: 60,
                    }}
                  >
                    {introTextSubString}
                  </IntroText>
                </IntroContents>
              </IntroDiv>
            </ContentBox>
          </ContentInner>
        </ContentDiv>
      ) : (
        <ContentDiv style={{ backgroundColor: Theme.gray }}>
          <ContentInner>
            <ContentBox>
              <IntroDiv>
                <IntroTitle style={{ marginBottom: 10 }}>WATCHURS</IntroTitle>
                <IntroTitle>= WATCH + YOURS</IntroTitle>
                <IntroAuthor>
                  <IntroText style={{ marginRight: 5 }}>Author</IntroText>
                  <IntroText style={{ fontWeight: 500 }}>Nanjae</IntroText>
                </IntroAuthor>
                <IntroContents>
                  <IntroText style={{ lineHeight: 2 }}>
                    {introTextMainString}
                  </IntroText>
                  <IntroText
                    style={{
                      fontWeight: "bold",
                      textAlign: "right",
                      marginTop: 60,
                    }}
                  >
                    {introTextSubString}
                  </IntroText>
                </IntroContents>
              </IntroDiv>
            </ContentBox>
            <ContentBox>
              <IntroBanner url={introBanner} />
            </ContentBox>
          </ContentInner>
        </ContentDiv>
      )}
    </>
  );
};
