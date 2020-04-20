import React, { useState } from "react";
import styled from "styled-components";
import Theme from "../../Styles/Theme";
import introBanner from "../../Assets/Images/labtop_coffee.jpg";
import watchurs_lol from "../../Assets/Images/watchurs_lol.jpg";
import iconPreparing from "../../Assets/Test/iconPreparing.png";
import logo_github from "../../Assets/Images/Logos/logo_github.png";
import logo_apollo from "../../Assets/Images/Logos/logo_apollo.png";
import logo_graphql from "../../Assets/Images/Logos/logo_graphql.png";
import logo_heroku from "../../Assets/Images/Logos/logo_heroku.png";
import logo_netlify from "../../Assets/Images/Logos/logo_netlify.png";
import logo_nodejs from "../../Assets/Images/Logos/logo_nodejs.png";
import logo_react from "../../Assets/Images/Logos/logo_react.png";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import Footer from "../../Components/Footer";

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

const ContentTrdDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: 100%;
  background-color: ${(props) => props.theme.lightGray};
`;

// Intro 컨텐츠

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

// Explore Services 컨텐츠

const ServiceDiv = styled.div`
  height: fit-content;
  display: grid;
  width: 100%;
  @media screen and (max-width: 599px) {
    grid-template-columns: repeat(1, 1fr);
    min-height: 1200px;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    min-height: 1800px;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    min-height: 1200px;
    margin-bottom: 60px;
  }
  @media screen and (min-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 1440px;
    min-height: 840px;
    margin-bottom: 80px;
  }
`;

const ServiceBox = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ServiceInner = styled.div`
  @media screen and (max-width: 599px) {
    width: 330px;
    height: 180px;
  }
  @media screen and (min-width: 600px) {
    width: 560px;
    height: 280px;
  }
  @media screen and (min-width: 800px) {
    width: 380px;
    height: 380px;
    flex-direction: column;
  }
  @media screen and (min-width: 1300px) {
    width: 400px;
    height: 400px;
    flex-direction: column;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

// Explorer Services 내부

const ServiceImageBox = styled.div`
  @media screen and (max-width: 599px) {
    width: 180px;
    height: 180px;
  }
  @media screen and (min-width: 600px) {
    width: 280px;
    height: 280px;
  }
  @media screen and (min-width: 800px) {
    width: 290px;
    height: 290px;
  }
  @media screen and (min-width: 1300px) {
    width: 310px;
    height: 310px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

const ServiceImage = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  width: ${(props) => (props.focus ? "80%" : "70%")};
  height: ${(props) => (props.focus ? "80%" : "70%")};
  transition: width 0.3s, height 0.3s;
  border-radius: 8px;
`;

const ServiceTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 599px) {
    margin-left: 10px;
    justify-content: center;
    height: 180px;
    width: 140px;
  }
  @media screen and (min-width: 600px) {
    margin-left: 20px;
    justify-content: center;
    height: 280px;
    width: 260px;
  }
  @media screen and (min-width: 800px) {
    justify-content: flex-start;
    height: 90px;
    width: 290px;
  }
  @media screen and (min-width: 1300px) {
    justify-content: flex-start;
    height: 90px;
    width: 310px;
  }
`;

const ServiceHeadText = styled.div`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 20px;
  @media screen and (max-width: 599px) {
    font-size: 18px;
  }
`;

const ServiceMainText = styled.div`
  font-size: 16px;
  font-weight: 300;
  color: ${(props) => props.theme.darkGray};
  @media screen and (max-width: 599px) {
    font-size: 14px;
  }
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

// 기술 스택 컨텐츠

const TechStackDiv = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 599px) {
    min-height: 600px;
  }
  @media screen and (min-width: 600px) {
    min-height: 700px;
  }
  @media screen and (min-width: 800px) {
    min-height: 600px;
  }
  @media screen and (min-width: 1300px) {
    max-width: 1440px;
    min-height: 840px;
  }
`;

const TechStackFstBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 599px) {
    height: 120px;
  }
  @media screen and (min-width: 600px) {
    height: 140px;
  }
  @media screen and (min-width: 800px) {
    height: 160px;
  }
  @media screen and (min-width: 1300px) {
    height: 240px;
  }
`;

const TechStackSndBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 599px) {
    height: 120px;
  }
  @media screen and (min-width: 600px) {
    height: 140px;
  }
  @media screen and (min-width: 800px) {
    height: 160px;
  }
  @media screen and (min-width: 1300px) {
    height: 240px;
  }
`;

const TechStackInner = styled.div`
  @media screen and (max-width: 599px) {
    width: 50%;
    height: 100%;
  }
  @media screen and (min-width: 600px) {
    width: 50%;
    height: 100%;
  }
  @media screen and (min-width: 800px) {
    width: 33%;
    height: 100%;
    flex-direction: column;
  }
  @media screen and (min-width: 1300px) {
    width: 33%;
    height: 100%;
    flex-direction: column;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 기술 스택 내부

const TechStackImage = styled.div`
  background-image: url(${(props) => props.url});
  background-size: contain;
  background-position-x: center;
  background-position-y: center;
  background-repeat: no-repeat;
  width: 60%;
  height: 60%;
`;

export default () => {
  const { windowWidth } = useWindowDimensions();
  const [serviceFocused, setServiceFocused] = useState(0);

  const introTextMainString = `와쳐스는 당신의 일상 속에서 생기는 한 눈에 보고싶은 정보들을 간편하게 보여주는 서비스를 목표로 하는 개인 프로젝트입니다. 자주 보는 방송 플랫폼의 브로드캐스터(스트리머, BJ 등) 정보나 일상 속의 여러 분야에서 생기는 사소하지만 가끔씩 찾아보게 될지도 모를 정보들을 수집, 가공하여 제공합니다. 언제 어디서나 와쳐스를 통해 당신이 관심있는 정보들을 볼 수 있기를 바랍니다.`;

  const introTextSubString = `< Let's WATCH YOURS via WATCHURS >`;

  const lolTextMainString = `브로드캐스터 LOL 랭킹 조회`;

  const lolTextSubString = `브로드캐스터 리그 오브 레전드 랭킹을 한 눈에 파악할 수 있는
  서비스입니다. 소환사명 변경 시 자동 추적되도록
  설계되었습니다.`;

  const newTabHandler = (newTab) => {
    window.open(newTab);
  };

  const enterHandler = (number) => {
    setServiceFocused(number);
  };

  const leaveHandler = () => {
    setServiceFocused(0);
  };

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
            </ContentFstBox>
            <ContentFstBox>
              <IntroBanner url={introBanner} />
            </ContentFstBox>
          </ContentFstInner>
        </ContentFstDiv>
      )}
      <ServiceTitleDiv>
        <ServiceTitleMainText>Explore Services</ServiceTitleMainText>
        <ServiceTitleSubText>
          당신을 위한 서비스는 계속 추가됩니다.
        </ServiceTitleSubText>
      </ServiceTitleDiv>
      {windowWidth < 600 ? (
        <ContentSndDiv style={{ backgroundColor: Theme.white }}>
          <ServiceDiv>
            <ServiceBox>
              <ServiceInner
                onMouseEnter={() => {
                  enterHandler(1);
                }}
                onMouseLeave={() => {
                  leaveHandler();
                }}
                onClick={() => {
                  newTabHandler("https://lol.watchurs.com");
                }}
              >
                <ServiceImageBox>
                  <ServiceImage
                    focus={serviceFocused === 1 ? true : false}
                    url={watchurs_lol}
                    style={{
                      border: `1px solid ${Theme.darkWhite}`,
                    }}
                  />
                </ServiceImageBox>
                <ServiceTextBox>
                  <ServiceHeadText>{lolTextMainString}</ServiceHeadText>
                  <ServiceMainText>{lolTextSubString}</ServiceMainText>
                </ServiceTextBox>
              </ServiceInner>
            </ServiceBox>
            <ServiceBox>
              <ServiceInner
                onMouseEnter={() => {
                  enterHandler(2);
                }}
                onMouseLeave={() => {
                  leaveHandler();
                }}
              >
                <ServiceImageBox>
                  <ServiceImage
                    focus={serviceFocused === 2 ? true : false}
                    url={iconPreparing}
                  />
                </ServiceImageBox>
                <ServiceTextBox>
                  <ServiceHeadText>서비스 준비중</ServiceHeadText>
                  <ServiceMainText>서비스 준비중 입니다.</ServiceMainText>
                </ServiceTextBox>
              </ServiceInner>
            </ServiceBox>
            <ServiceBox>
              <ServiceInner
                onMouseEnter={() => {
                  enterHandler(3);
                }}
                onMouseLeave={() => {
                  leaveHandler();
                }}
              >
                <ServiceImageBox>
                  <ServiceImage
                    focus={serviceFocused === 3 ? true : false}
                    url={iconPreparing}
                  />
                </ServiceImageBox>
                <ServiceTextBox>
                  <ServiceHeadText>서비스 준비중</ServiceHeadText>
                  <ServiceMainText>서비스 준비중 입니다.</ServiceMainText>
                </ServiceTextBox>
              </ServiceInner>
            </ServiceBox>
            <ServiceBox>
              <ServiceInner
                onMouseEnter={() => {
                  enterHandler(4);
                }}
                onMouseLeave={() => {
                  leaveHandler();
                }}
              >
                <ServiceImageBox>
                  <ServiceImage
                    focus={serviceFocused === 4 ? true : false}
                    url={iconPreparing}
                  />
                </ServiceImageBox>
                <ServiceTextBox>
                  <ServiceHeadText>서비스 준비중</ServiceHeadText>
                  <ServiceMainText>서비스 준비중 입니다.</ServiceMainText>
                </ServiceTextBox>
              </ServiceInner>
            </ServiceBox>
            <ServiceBox>
              <ServiceInner
                onMouseEnter={() => {
                  enterHandler(5);
                }}
                onMouseLeave={() => {
                  leaveHandler();
                }}
              >
                <ServiceImageBox>
                  <ServiceImage
                    focus={serviceFocused === 5 ? true : false}
                    url={iconPreparing}
                  />
                </ServiceImageBox>
                <ServiceTextBox>
                  <ServiceHeadText>서비스 준비중</ServiceHeadText>
                  <ServiceMainText>서비스 준비중 입니다.</ServiceMainText>
                </ServiceTextBox>
              </ServiceInner>
            </ServiceBox>
            <ServiceBox>
              <ServiceInner
                onMouseEnter={() => {
                  enterHandler(6);
                }}
                onMouseLeave={() => {
                  leaveHandler();
                }}
              >
                <ServiceImageBox>
                  <ServiceImage
                    focus={serviceFocused === 6 ? true : false}
                    url={iconPreparing}
                  />
                </ServiceImageBox>
                <ServiceTextBox>
                  <ServiceHeadText>서비스 준비중</ServiceHeadText>
                  <ServiceMainText>서비스 준비중 입니다.</ServiceMainText>
                </ServiceTextBox>
              </ServiceInner>
            </ServiceBox>
          </ServiceDiv>
        </ContentSndDiv>
      ) : windowWidth < 800 ? (
        <ContentSndDiv style={{ backgroundColor: Theme.white }}>
          <ServiceDiv>
            <ServiceBox>
              <ServiceInner
                onMouseEnter={() => {
                  enterHandler(1);
                }}
                onMouseLeave={() => {
                  leaveHandler();
                }}
                onClick={() => {
                  newTabHandler("https://lol.watchurs.com");
                }}
              >
                <ServiceImageBox>
                  <ServiceImage
                    focus={serviceFocused === 1 ? true : false}
                    url={watchurs_lol}
                    style={{
                      border: `1px solid ${Theme.darkWhite}`,
                    }}
                  />
                </ServiceImageBox>
                <ServiceTextBox>
                  <ServiceHeadText>{lolTextMainString}</ServiceHeadText>
                  <ServiceMainText>{lolTextSubString}</ServiceMainText>
                </ServiceTextBox>
              </ServiceInner>
            </ServiceBox>
            <ServiceBox>
              <ServiceInner
                onMouseEnter={() => {
                  enterHandler(2);
                }}
                onMouseLeave={() => {
                  leaveHandler();
                }}
              >
                <ServiceImageBox>
                  <ServiceImage
                    focus={serviceFocused === 2 ? true : false}
                    url={iconPreparing}
                  />
                </ServiceImageBox>
                <ServiceTextBox>
                  <ServiceHeadText>서비스 준비중</ServiceHeadText>
                  <ServiceMainText>서비스 준비중 입니다.</ServiceMainText>
                </ServiceTextBox>
              </ServiceInner>
            </ServiceBox>
            <ServiceBox>
              <ServiceInner
                onMouseEnter={() => {
                  enterHandler(3);
                }}
                onMouseLeave={() => {
                  leaveHandler();
                }}
              >
                <ServiceImageBox>
                  <ServiceImage
                    focus={serviceFocused === 3 ? true : false}
                    url={iconPreparing}
                  />
                </ServiceImageBox>
                <ServiceTextBox>
                  <ServiceHeadText>서비스 준비중</ServiceHeadText>
                  <ServiceMainText>서비스 준비중 입니다.</ServiceMainText>
                </ServiceTextBox>
              </ServiceInner>
            </ServiceBox>
            <ServiceBox>
              <ServiceInner
                onMouseEnter={() => {
                  enterHandler(4);
                }}
                onMouseLeave={() => {
                  leaveHandler();
                }}
              >
                <ServiceImageBox>
                  <ServiceImage
                    focus={serviceFocused === 4 ? true : false}
                    url={iconPreparing}
                  />
                </ServiceImageBox>
                <ServiceTextBox>
                  <ServiceHeadText>서비스 준비중</ServiceHeadText>
                  <ServiceMainText>서비스 준비중 입니다.</ServiceMainText>
                </ServiceTextBox>
              </ServiceInner>
            </ServiceBox>
            <ServiceBox>
              <ServiceInner
                onMouseEnter={() => {
                  enterHandler(5);
                }}
                onMouseLeave={() => {
                  leaveHandler();
                }}
              >
                <ServiceImageBox>
                  <ServiceImage
                    focus={serviceFocused === 5 ? true : false}
                    url={iconPreparing}
                  />
                </ServiceImageBox>
                <ServiceTextBox>
                  <ServiceHeadText>서비스 준비중</ServiceHeadText>
                  <ServiceMainText>서비스 준비중 입니다.</ServiceMainText>
                </ServiceTextBox>
              </ServiceInner>
            </ServiceBox>
            <ServiceBox>
              <ServiceInner
                onMouseEnter={() => {
                  enterHandler(6);
                }}
                onMouseLeave={() => {
                  leaveHandler();
                }}
              >
                <ServiceImageBox>
                  <ServiceImage
                    focus={serviceFocused === 6 ? true : false}
                    url={iconPreparing}
                  />
                </ServiceImageBox>
                <ServiceTextBox>
                  <ServiceHeadText>서비스 준비중</ServiceHeadText>
                  <ServiceMainText>서비스 준비중 입니다.</ServiceMainText>
                </ServiceTextBox>
              </ServiceInner>
            </ServiceBox>
          </ServiceDiv>
        </ContentSndDiv>
      ) : (
        <ContentSndDiv style={{ backgroundColor: Theme.white }}>
          <ServiceDiv>
            <ServiceBox>
              <ServiceInner
                onMouseEnter={() => {
                  enterHandler(1);
                }}
                onMouseLeave={() => {
                  leaveHandler();
                }}
                onClick={() => {
                  newTabHandler("https://lol.watchurs.com");
                }}
              >
                <ServiceImageBox>
                  <ServiceImage
                    focus={serviceFocused === 1 ? true : false}
                    url={watchurs_lol}
                    style={{
                      border: `1px solid ${Theme.darkWhite}`,
                    }}
                  />
                </ServiceImageBox>
                <ServiceTextBox>
                  <ServiceHeadText>{lolTextMainString}</ServiceHeadText>
                  <ServiceMainText>{lolTextSubString}</ServiceMainText>
                </ServiceTextBox>
              </ServiceInner>
            </ServiceBox>
            <ServiceBox>
              <ServiceInner
                onMouseEnter={() => {
                  enterHandler(2);
                }}
                onMouseLeave={() => {
                  leaveHandler();
                }}
              >
                <ServiceImageBox>
                  <ServiceImage
                    focus={serviceFocused === 2 ? true : false}
                    url={iconPreparing}
                  />
                </ServiceImageBox>
                <ServiceTextBox>
                  <ServiceHeadText>서비스 준비중</ServiceHeadText>
                  <ServiceMainText>서비스 준비중 입니다.</ServiceMainText>
                </ServiceTextBox>
              </ServiceInner>
            </ServiceBox>
            <ServiceBox>
              <ServiceInner
                onMouseEnter={() => {
                  enterHandler(3);
                }}
                onMouseLeave={() => {
                  leaveHandler();
                }}
              >
                <ServiceImageBox>
                  <ServiceImage
                    focus={serviceFocused === 3 ? true : false}
                    url={iconPreparing}
                  />
                </ServiceImageBox>
                <ServiceTextBox>
                  <ServiceHeadText>서비스 준비중</ServiceHeadText>
                  <ServiceMainText>서비스 준비중 입니다.</ServiceMainText>
                </ServiceTextBox>
              </ServiceInner>
            </ServiceBox>
            <ServiceBox>
              <ServiceInner
                onMouseEnter={() => {
                  enterHandler(4);
                }}
                onMouseLeave={() => {
                  leaveHandler();
                }}
              >
                <ServiceImageBox>
                  <ServiceImage
                    focus={serviceFocused === 4 ? true : false}
                    url={iconPreparing}
                  />
                </ServiceImageBox>
                <ServiceTextBox>
                  <ServiceHeadText>서비스 준비중</ServiceHeadText>
                  <ServiceMainText>서비스 준비중 입니다.</ServiceMainText>
                </ServiceTextBox>
              </ServiceInner>
            </ServiceBox>
            <ServiceBox>
              <ServiceInner
                onMouseEnter={() => {
                  enterHandler(5);
                }}
                onMouseLeave={() => {
                  leaveHandler();
                }}
              >
                <ServiceImageBox>
                  <ServiceImage
                    focus={serviceFocused === 5 ? true : false}
                    url={iconPreparing}
                  />
                </ServiceImageBox>
                <ServiceTextBox>
                  <ServiceHeadText>서비스 준비중</ServiceHeadText>
                  <ServiceMainText>서비스 준비중 입니다.</ServiceMainText>
                </ServiceTextBox>
              </ServiceInner>
            </ServiceBox>
            <ServiceBox>
              <ServiceInner
                onMouseEnter={() => {
                  enterHandler(6);
                }}
                onMouseLeave={() => {
                  leaveHandler();
                }}
              >
                <ServiceImageBox>
                  <ServiceImage
                    focus={serviceFocused === 6 ? true : false}
                    url={iconPreparing}
                  />
                </ServiceImageBox>
                <ServiceTextBox>
                  <ServiceHeadText>서비스 준비중</ServiceHeadText>
                  <ServiceMainText>서비스 준비중 입니다.</ServiceMainText>
                </ServiceTextBox>
              </ServiceInner>
            </ServiceBox>
          </ServiceDiv>
        </ContentSndDiv>
      )}
      <TechStackTitleDiv>
        <TechStackMainText>Tech Stack</TechStackMainText>
        <TechStackSubText>와쳐스에서 사용된 기술 스택입니다.</TechStackSubText>
      </TechStackTitleDiv>
      {windowWidth < 800 ? (
        <ContentTrdDiv>
          <TechStackDiv>
            <TechStackFstBox>
              <TechStackInner>
                <TechStackImage url={logo_react} />
              </TechStackInner>
            </TechStackFstBox>
            <TechStackFstBox>
              <TechStackInner>
                <TechStackImage url={logo_nodejs} />
              </TechStackInner>
              <TechStackInner>
                <TechStackImage url={logo_graphql} />
              </TechStackInner>
            </TechStackFstBox>
            <TechStackSndBox>
              <TechStackInner>
                <TechStackImage url={logo_apollo} />
              </TechStackInner>
              <TechStackInner>
                <TechStackImage url={logo_github} />
              </TechStackInner>
            </TechStackSndBox>
            <TechStackFstBox>
              <TechStackInner>
                <TechStackImage url={logo_netlify} />
              </TechStackInner>
              <TechStackInner>
                <TechStackImage url={logo_heroku} />
              </TechStackInner>
            </TechStackFstBox>
          </TechStackDiv>
        </ContentTrdDiv>
      ) : (
        <ContentTrdDiv>
          <TechStackDiv>
            <TechStackFstBox>
              <TechStackInner>
                <TechStackImage url={logo_nodejs} />
              </TechStackInner>
              <TechStackInner>
                <TechStackImage url={logo_graphql} />
              </TechStackInner>
            </TechStackFstBox>
            <TechStackSndBox>
              <TechStackInner>
                <TechStackImage url={logo_apollo} />
              </TechStackInner>
              <TechStackInner>
                <TechStackImage url={logo_react} />
              </TechStackInner>
              <TechStackInner>
                <TechStackImage url={logo_github} />
              </TechStackInner>
            </TechStackSndBox>
            <TechStackFstBox>
              <TechStackInner>
                <TechStackImage url={logo_netlify} />
              </TechStackInner>
              <TechStackInner>
                <TechStackImage url={logo_heroku} />
              </TechStackInner>
            </TechStackFstBox>
          </TechStackDiv>
        </ContentTrdDiv>
      )}
      <Footer />
    </Wrapper>
  );
};
