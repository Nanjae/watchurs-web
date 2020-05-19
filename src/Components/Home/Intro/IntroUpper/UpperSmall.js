import React, { useState } from "react";
import styled from "styled-components";
import Swiper from "react-id-swiper";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media only screen and (max-width: 575.99px) {
    height: 600px;
  }
  @media only screen and (min-width: 576px) {
    height: 560px;
  }
  @media only screen and (min-width: 768px) {
    height: 760px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
    height: 100%;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media only screen and (max-width: 575.99px) {
    height: 600px;
  }
  @media only screen and (min-width: 576px) {
    height: 560px;
  }
  @media only screen and (min-width: 768px) {
    height: 760px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const ContentDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  @media only screen and (max-width: 575.99px) {
    height: 80%;
  }
  @media only screen and (min-width: 576px) {
    height: 75%;
  }
  @media only screen and (min-width: 768px) {
    height: 50%;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const ContentTextDiv = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: ${(props) => props.theme.fontMainColor};
  transition: color 0.3s;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 80px;
`;

const ContentTextTitle = styled.div`
  font-weight: 700;
  @media only screen and (max-width: 575.99px) {
    font-size: 24px;
  }
  @media only screen and (min-width: 576px) {
    font-size: 24px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 24px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const ContentTextSubTitle = styled.div`
  font-weight: 700;
  margin: 15px 0px;
  @media only screen and (max-width: 575.99px) {
    font-size: 50px;
  }
  @media only screen and (min-width: 576px) {
    font-size: 50px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 60px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const ContentTextBox = styled.div`
  font-weight: 400;
  line-height: 30px;
  @media only screen and (max-width: 575.99px) {
    font-size: 18px;
  }
  @media only screen and (min-width: 576px) {
    font-size: 18px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const ContentTextSubBox = styled.div`
  z-index: 30;
  width: fit-content;
  display: flex;
  align-items: flex-end;
  opacity: 1;
  transition: opacity 0.3s;
  cursor: pointer;
  @media only screen and (max-width: 575.99px) {
    margin-top: 30px;
  }
  @media only screen and (min-width: 576px) {
    margin-top: 30px;
  }
  @media only screen and (min-width: 768px) {
    margin-top: 30px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const ContentTextSubBoxText = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: ${(props) => props.theme.lineMainColor};
  transition: color 0.3s;
`;

const ContentTextSubBoxLine = styled.div`
  width: 70px;
  height: 2px;
  margin-left: 15px;
  margin-bottom: 6px;
  background-color: ${(props) => props.theme.lineMainColor};
  transition: margin-left 0.3s, background-color 0.3s;
`;

const SwiperDiv = styled.div`
  width: 100%;
  display: flex;
  @media only screen and (max-width: 575.99px) {
    height: 20%;
    justify-content: flex-start;
    align-items: flex-start;
  }
  @media only screen and (min-width: 576px) {
    height: 25%;
    justify-content: flex-start;
    align-items: flex-start;
  }
  @media only screen and (min-width: 768px) {
    height: 50%;
    justify-content: flex-end;
    align-items: flex-end;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const SwiperBarDiv = styled.div`
  height: 100%;
  display: flex;
  @media only screen and (max-width: 575.99px) {
    flex-direction: column;
    width: 100%;
  }
  @media only screen and (min-width: 576px) {
    flex-direction: column;
    width: 100%;
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    width: 25%;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const SwiperBarBox = styled.div`
  display: flex;
  @media only screen and (max-width: 575.99px) {
    justify-content: flex-start;
    align-items: center;
    width: 120px;
    height: 3px;
    margin-top: 0px;
    margin-bottom: 20px;
    margin-left: 30px;
  }
  @media only screen and (min-width: 576px) {
    justify-content: flex-start;
    align-items: center;
    width: 120px;
    height: 3px;
    margin-top: 0px;
    margin-bottom: 20px;
    margin-left: 30px;
  }
  @media only screen and (min-width: 768px) {
    justify-content: center;
    align-items: flex-start;
    width: 3px;
    height: 120px;
    margin-top: 50px;
    margin-bottom: 0px;
    margin-left: 100px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const SwiperEmptyBar = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.bgLineColor};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  opacity: 0.8;
  transition: background-color 0.3s;
  @media only screen and (max-width: 575.99px) {
    width: 120px;
    height: 3px;
  }
  @media only screen and (min-width: 576px) {
    width: 120px;
    height: 3px;
  }
  @media only screen and (min-width: 768px) {
    width: 3px;
    height: 120px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const SwiperFillBar = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.bgSubColor};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  @media only screen and (max-width: 575.99px) {
    width: ${(props) => props.arrayIndex * 40}px;
    height: 3px;
    transition: width 0.5s, background-color 0.3s;
  }
  @media only screen and (min-width: 576px) {
    width: ${(props) => props.arrayIndex * 40}px;
    height: 3px;
    transition: width 0.5s, background-color 0.3s;
  }
  @media only screen and (min-width: 768px) {
    width: 3px;
    height: ${(props) => props.arrayIndex * 40}px;
    transition: height 0.5s, background-color 0.3s;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const SwiperCircle = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.bgSubColor};
  width: 11px;
  height: 11px;
  border-radius: 50%;
  @media only screen and (max-width: 575.99px) {
    margin-top: 0px;
    margin-left: ${(props) => props.arrayIndex * 40 - 5}px;
    transition: margin-left 0.5s, background-color 0.3s;
  }
  @media only screen and (min-width: 576px) {
    margin-top: 0px;
    margin-left: ${(props) => props.arrayIndex * 40 - 5}px;
    transition: margin-left 0.5s, background-color 0.3s;
  }
  @media only screen and (min-width: 768px) {
    margin-top: ${(props) => props.arrayIndex * 40 - 5}px;
    margin-left: 0px;
    transition: margin-top 0.5s, background-color 0.3s;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const SwiperTextBox = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 575.99px) {
    margin-left: 20px;
  }
  @media only screen and (min-width: 576px) {
    margin-left: 20px;
  }
  @media only screen and (min-width: 768px) {
    margin-left: 0px;
    transform: rotate(-90deg) translate(-60px, -65px);
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const SwiperMaxText = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: ${(props) => props.theme.bgLineColor};
  opacity: 0.8;
  transition: color 0.3s;
`;

const SwiperTextDivsion = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin: 0px 10px;
  color: ${(props) => props.theme.bgLineColor};
  opacity: 0.8;
  transition: color 0.3s;
`;

const SwiperCurrentText = styled.div`
  font-size: 50px;
  font-weight: 700;
  margin: 0px 10px;
  color: ${(props) => props.theme.bgSubColor};
  transition: color 0.3s;
`;

const SwiperInner = styled.div`
  z-index: 30;
  width: 75%;
  height: fit-content;
`;

const SwiperImageBox = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
`;

const SwiperImage = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  width: 280px;
  height: 180px;
  border: 1px solid ${(props) => props.theme.bgSubColor};
  margin-bottom: 20px;
  transition: box-shadow 0.3s, border 0.3s;
`;

const SwiperImageOpacity = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.bgMainColor};
  width: 280px;
  height: 180px;
  border: 1px solid ${(props) => props.theme.bgMainColor};
  opacity: 0;
  margin-bottom: 20px;
  transition: opacity 0.5s, background-color 0.3s;
  cursor: pointer;
`;

export default ({
  arrayIndex,
  setArrayIndex,
  bgArray,
  scrollY,
  windowWidth,
}) => {
  const [swiperImageEnter, setSwiperImageEnter] = useState(0);
  const [moreEnter, setMoreEnter] = useState(false);

  return (
    <>
      <Wrapper>
        <Inner>
          <ContentDiv>
            <ContentTextDiv>
              <ContentTextTitle>Featured Project</ContentTextTitle>
              <ContentTextSubTitle>WATCH YOURS</ContentTextSubTitle>
              <ContentTextBox>
                In this project, our designers tried to combine several styles
                in a single interior. It features some modern and classic
                elements in the decor.
              </ContentTextBox>
              <ContentTextSubBox
                style={moreEnter ? { opacity: "0.6" } : null}
                onMouseEnter={() => {
                  setMoreEnter(true);
                }}
                onMouseLeave={() => {
                  setMoreEnter(false);
                }}
              >
                <ContentTextSubBoxText>more</ContentTextSubBoxText>
                <ContentTextSubBoxLine
                  style={moreEnter ? { marginLeft: "10px" } : null}
                />
              </ContentTextSubBox>
            </ContentTextDiv>
          </ContentDiv>
          {windowWidth >= 768 ? (
            <SwiperDiv>
              <SwiperBarDiv>
                <SwiperBarBox>
                  <SwiperEmptyBar />
                  <SwiperFillBar arrayIndex={arrayIndex} />
                  <SwiperCircle arrayIndex={arrayIndex} />
                </SwiperBarBox>
                <SwiperTextBox>
                  <SwiperCurrentText>0{arrayIndex + 1}</SwiperCurrentText>
                  <SwiperTextDivsion>/</SwiperTextDivsion>
                  <SwiperMaxText>04</SwiperMaxText>
                </SwiperTextBox>
              </SwiperBarDiv>
              <SwiperInner>
                <Swiper
                  width={300}
                  slideToClickedSlide={true}
                  centeredSlides={true}
                  slidesOffsetBefore={150}
                  speed={500}
                >
                  <SwiperImageBox>
                    <SwiperImage url={bgArray[0]} />
                    <SwiperImageOpacity
                      onClick={() => {
                        setArrayIndex(0);
                      }}
                      onMouseEnter={() => {
                        setSwiperImageEnter(1);
                      }}
                      onMouseLeave={() => {
                        setSwiperImageEnter(0);
                      }}
                      style={swiperImageEnter === 1 ? { opacity: 0.5 } : null}
                    />
                  </SwiperImageBox>
                  <SwiperImageBox>
                    <SwiperImage url={bgArray[1]} />
                    <SwiperImageOpacity
                      onClick={() => {
                        setArrayIndex(1);
                      }}
                      onMouseEnter={() => {
                        setSwiperImageEnter(2);
                      }}
                      onMouseLeave={() => {
                        setSwiperImageEnter(0);
                      }}
                      style={swiperImageEnter === 2 ? { opacity: 0.5 } : null}
                    />
                  </SwiperImageBox>
                  <SwiperImageBox>
                    <SwiperImage url={bgArray[2]} />
                    <SwiperImageOpacity
                      onClick={() => {
                        setArrayIndex(2);
                      }}
                      onMouseEnter={() => {
                        setSwiperImageEnter(3);
                      }}
                      onMouseLeave={() => {
                        setSwiperImageEnter(0);
                      }}
                      style={swiperImageEnter === 3 ? { opacity: 0.5 } : null}
                    />
                  </SwiperImageBox>
                  <SwiperImageBox>
                    <SwiperImage url={bgArray[3]} />
                    <SwiperImageOpacity
                      onClick={() => {
                        setArrayIndex(3);
                      }}
                      onMouseEnter={() => {
                        setSwiperImageEnter(4);
                      }}
                      onMouseLeave={() => {
                        setSwiperImageEnter(0);
                      }}
                      style={swiperImageEnter === 4 ? { opacity: 0.3 } : null}
                    />
                  </SwiperImageBox>
                </Swiper>
              </SwiperInner>
            </SwiperDiv>
          ) : (
            <SwiperDiv>
              <SwiperBarDiv>
                <SwiperBarBox>
                  <SwiperEmptyBar />
                  <SwiperFillBar arrayIndex={arrayIndex} />
                  <SwiperCircle arrayIndex={arrayIndex} />
                </SwiperBarBox>
                <SwiperTextBox>
                  <SwiperCurrentText>0{arrayIndex + 1}</SwiperCurrentText>
                  <SwiperTextDivsion>/</SwiperTextDivsion>
                  <SwiperMaxText>04</SwiperMaxText>
                </SwiperTextBox>
              </SwiperBarDiv>
            </SwiperDiv>
          )}
        </Inner>
      </Wrapper>
    </>
  );
};
