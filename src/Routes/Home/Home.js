import React from "react";
import styled from "styled-components";
import Theme from "../../Styles/Theme";
import introBanner from "../../Assets/Images/labtop_coffee.jpg";
import useWindowDimensions from "../../Hooks/useWindowDimensions";

const Wrapper = styled.div`
  height: fit-content;
  width: 100%;
  max-width: 1780px;
  background-color: ${(props) => props.theme.gray};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContentDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 840px;
  width: 100%;
`;

const ContentFstDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 840px;
  width: 100%;
`;

const ContentFstInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  max-width: 1440px;
  width: 100%;
`;

const ContentFstBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
`;

const ContentSndDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: 100%;
`;

// 인트로 컨텐츠

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

// 서비스 목록 컨텐츠

const ServiceDiv = styled.div`
  height: fit-content;
  /* background-color: black; */
  display: grid;
  width: 100%;
  @media screen and (max-width: 599px) {
    grid-template-columns: repeat(1, 1fr);
    min-height: 1200px;
  }
  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    min-height: 900px;
  }
  @media screen and (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    min-height: 1200px;
  }
  @media screen and (min-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 1440px;
    min-height: 840px;
  }
`;

const ServiceBox = styled.div`
  /* background-color: brown; */
  height: 100%;
`;

export default () => {
  const { windowWidth } = useWindowDimensions();

  const introTextMainString = `와쳐스는 당신의 일상 속에서 생기는 한 눈에 보고싶은 정보들을 간편하게 보여주는 서비스를 목표로 하는 개인 프로젝트입니다. 자주 보는 방송 플랫폼의 브로드캐스터(스트리머, BJ 등) 정보나 일상 속의 여러 분야에서 생기는 사소하지만 가끔씩 찾아보게 될지도 모를 정보들을 수집, 가공하여 제공합니다. 언제 어디서나 와쳐스를 통해 당신이 관심있는 정보들을 볼 수 있기를 바랍니다.`;

  const introTextSubString = `< Let's WATCH YOURS via WATCHURS >`;

  return (
    <Wrapper>
      {windowWidth < 600 ? (
        <ContentFstDiv
          style={{
            paddingTop: "120px",
            backgroundColor: Theme.gray,
            height: "fit-content",
          }}
        >
          <ContentFstInner
            style={{ flexDirection: "column", height: "fit-content" }}
          >
            <ContentFstBox
              style={{
                width: "100%",
                height: (windowWidth * 2) / 3,
                // minHeight: 270
              }}
            >
              <IntroBanner url={introBanner} />
            </ContentFstBox>
            <ContentFstBox
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
                  <IntroText style={{ marginRight: 5 }}>made by</IntroText>
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
            </ContentFstBox>
          </ContentFstInner>
        </ContentFstDiv>
      ) : windowWidth < 800 ? (
        <ContentFstDiv
          style={{
            paddingTop: "76px",
            backgroundColor: Theme.gray,
            height: "fit-content",
          }}
        >
          <ContentFstInner
            style={{ flexDirection: "column", height: "fit-content" }}
          >
            <ContentFstBox
              style={{
                width: "100%",
                height: (windowWidth * 2) / 3,
                // minHeight: 360
              }}
            >
              <IntroBanner url={introBanner} />
            </ContentFstBox>
            <ContentFstBox
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
                  <IntroText style={{ marginRight: 5 }}>made by</IntroText>
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
            </ContentFstBox>
          </ContentFstInner>
        </ContentFstDiv>
      ) : (
        <ContentFstDiv style={{ backgroundColor: Theme.gray }}>
          <ContentFstInner>
            <ContentFstBox>
              <IntroDiv>
                <IntroTitle style={{ marginBottom: 10 }}>WATCHURS</IntroTitle>
                <IntroTitle>= WATCH + YOURS</IntroTitle>
                <IntroAuthor>
                  <IntroText style={{ marginRight: 5 }}>made by</IntroText>
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
            </ContentFstBox>
            <ContentFstBox>
              <IntroBanner url={introBanner} />
            </ContentFstBox>
          </ContentFstInner>
        </ContentFstDiv>
      )}
      {windowWidth < 600 ? (
        <ContentSndDiv style={{ backgroundColor: Theme.white }}>
          <ServiceDiv>
            <ServiceBox style={{ backgroundColor: Theme.black }} />
            <ServiceBox style={{ backgroundColor: Theme.random }} />
            <ServiceBox style={{ backgroundColor: Theme.gray }} />
            <ServiceBox style={{ backgroundColor: Theme.lightYellow }} />
            <ServiceBox style={{ backgroundColor: Theme.darkFont }} />
            <ServiceBox style={{ backgroundColor: Theme.darkFontH }} />
          </ServiceDiv>
        </ContentSndDiv>
      ) : windowWidth < 800 ? (
        <ContentSndDiv style={{ backgroundColor: Theme.white }}>
          <ServiceDiv>
            <ServiceBox style={{ backgroundColor: Theme.black }} />
            <ServiceBox style={{ backgroundColor: Theme.random }} />
            <ServiceBox style={{ backgroundColor: Theme.gray }} />
            <ServiceBox style={{ backgroundColor: Theme.lightYellow }} />
            <ServiceBox style={{ backgroundColor: Theme.darkFont }} />
            <ServiceBox style={{ backgroundColor: Theme.darkFontH }} />
          </ServiceDiv>
        </ContentSndDiv>
      ) : (
        <ContentSndDiv style={{ backgroundColor: Theme.white }}>
          <ServiceDiv>
            <ServiceBox style={{ backgroundColor: Theme.black }} />
            <ServiceBox style={{ backgroundColor: Theme.random }} />
            <ServiceBox style={{ backgroundColor: Theme.gray }} />
            <ServiceBox style={{ backgroundColor: Theme.lightYellow }} />
            <ServiceBox style={{ backgroundColor: Theme.darkFont }} />
            <ServiceBox style={{ backgroundColor: Theme.darkFontH }} />
          </ServiceDiv>
        </ContentSndDiv>
      )}
      <ContentDiv style={{ backgroundColor: Theme.lightGray }}>
        스크롤 테스트
      </ContentDiv>
      <ContentDiv style={{ backgroundColor: Theme.white }}>
        스크롤 테스트
      </ContentDiv>
    </Wrapper>
  );
};
