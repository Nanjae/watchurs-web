import React, { useState } from "react";
import styled from "styled-components";
import Theme from "../../../Styles/Theme";
import watchurs_lol from "../../../Assets/Images/watchurs_lol.jpg";
import iconPreparing from "../../../Assets/Test/iconPreparing.png";
import useWindowDimensions from "../../../Hooks/useWindowDimensions";

const ContentDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: 100%;
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
    margin-left: 0px 10px;
    justify-content: center;
    height: 180px;
    width: 130px;
  }
  @media screen and (min-width: 600px) {
    margin: 0px 10px;
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

export default () => {
  const { windowWidth } = useWindowDimensions();

  const [serviceFocused, setServiceFocused] = useState(0);

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
    <>
      {windowWidth < 600 ? (
        <ContentDiv style={{ backgroundColor: Theme.white }}>
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
        </ContentDiv>
      ) : windowWidth < 800 ? (
        <ContentDiv style={{ backgroundColor: Theme.white }}>
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
        </ContentDiv>
      ) : (
        <ContentDiv style={{ backgroundColor: Theme.white }}>
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
        </ContentDiv>
      )}
    </>
  );
};
