import React, { useState } from "react";
import styled from "styled-components";
import bg01 from "../../../../Assets/Images/Bg/bg01.jpg";
import bg02 from "../../../../Assets/Images/Bg/bg02.jpg";
import bg03 from "../../../../Assets/Images/Bg/bg03.jpg";
import bg04 from "../../../../Assets/Images/Bg/bg04.jpg";
import icon_contrast_dark from "../../../../Assets/Icons/icon_contrast_dark.png";
import icon_contrast_light from "../../../../Assets/Icons/icon_contrast_light.png";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

const Wrapper = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Inner = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContentDiv = styled.div`
  width: 95%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

const ContentIconDiv = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
`;

const ContentIconText = styled.div`
  color: ${(props) => props.theme.fontMainColor};
  font-weight: 400;
  transition: color 0.3s;
`;

const ContentIcon = styled.div`
  background-image: url(${(props) => props.url});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 20px;
  height: 20px;
  margin-left: 10px;
  transition: background-image 0.3s;
`;

const ContentTextDiv = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: ${(props) => props.theme.fontMainColor};
  transition: color 0.3s;
`;

const ContentTextTitle = styled.div`
  font-size: 26px;
  font-weight: 700;
`;

const ContentTextSubTitle = styled.div`
  font-size: 80px;
  font-weight: 700;
  margin: 15px 0px;
`;

const ContentTextBox = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
`;

const ContentTextSubBox = styled.div`
  width: fit-content;
  display: flex;
  align-items: flex-end;
  margin-top: 40px;
  opacity: 1;
  transition: opacity 0.3s;
  cursor: pointer;
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
  margin-left: 20px;
  margin-bottom: 5px;
  background-color: ${(props) => props.theme.lineMainColor};
  transition: margin-left 0.3s, background-color 0.3s;
`;

const SwiperDiv = styled.div`
  width: 100%;
  height: 185px;
  display: flex;
  justify-content: flex-end;
`;

const SwiperInner = styled.div`
  width: 85%;
  height: fit-content;
`;

const SwiperImageBox = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
`;

const SwiperImage = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  width: 280px;
  height: 180px;
  box-shadow: 5px 5px 3px ${(props) => props.theme.bgSubColor};
  border: 1px solid ${(props) => props.theme.bgSubColor};
  margin-bottom: 8px;
  transition: box-shadow 0.3s, border 0.3s;
`;

const SwiperImageOpacity = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.bgMainColor};
  width: 278px;
  height: 180px;
  box-shadow: 5px 5px 3px ${(props) => props.theme.bgMainColor};
  border: 1px solid ${(props) => props.theme.bgMainColor};
  opacity: 0;
  margin-bottom: 8px;
  transition: opacity 0.5s, background-color 0.3s;
  cursor: pointer;
`;

export default ({
  setUnderBgIndex,
  siteTheme,
  setSiteTheme,
  setUpperTextIndex,
  scrollY,
}) => {
  const [swiperImageEnter, setSwiperImageEnter] = useState(0);
  const [moreEnter, setMoreEnter] = useState(false);

  const icon_contrast = siteTheme ? icon_contrast_light : icon_contrast_dark;

  return (
    <>
      <Wrapper>
        <Inner>
          <ContentDiv>
            <ContentIconDiv
              onClick={() => {
                setSiteTheme(!siteTheme);
              }}
            >
              {scrollY > 50 ? null : (
                <>
                  <ContentIconText>
                    {siteTheme ? "LIGHT MODE" : "DARK MODE"}
                  </ContentIconText>
                  <ContentIcon
                    url={icon_contrast}
                    style={{ transform: "rotate(45deg)" }}
                  />
                </>
              )}
            </ContentIconDiv>
            <ContentTextDiv>
              <ContentTextTitle>Featured Project</ContentTextTitle>
              <ContentTextSubTitle>WATCH YOURS</ContentTextSubTitle>
              <ContentTextBox>
                In this project, our designers tried to combine several styles
                in a single interior.
              </ContentTextBox>
              <ContentTextBox>
                It features some modern and classic elements in the decor.
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
                  style={moreEnter ? { marginLeft: "15px" } : null}
                />
              </ContentTextSubBox>
            </ContentTextDiv>
          </ContentDiv>
          <SwiperDiv>
            <SwiperInner>
              <Swiper
                width={280}
                centeredSlides={true}
                slideToClickedSlide={true}
              >
                <SwiperImageBox
                  style={{
                    marginLeft: "60px",
                  }}
                  onClick={() => {
                    setUnderBgIndex(bg01);
                    setUpperTextIndex("01");
                  }}
                  onMouseEnter={() => {
                    setSwiperImageEnter(1);
                  }}
                  onMouseLeave={() => {
                    setSwiperImageEnter(0);
                  }}
                >
                  <SwiperImage url={bg01} />
                  <SwiperImageOpacity
                    style={swiperImageEnter === 1 ? { opacity: 0.5 } : null}
                  />
                </SwiperImageBox>
                <SwiperImageBox
                  style={{
                    marginLeft: "60px",
                  }}
                  onClick={() => {
                    setUnderBgIndex(bg02);
                    setUpperTextIndex("02");
                  }}
                  onMouseEnter={() => {
                    setSwiperImageEnter(2);
                  }}
                  onMouseLeave={() => {
                    setSwiperImageEnter(0);
                  }}
                >
                  <SwiperImage url={bg02} />
                  <SwiperImageOpacity
                    style={swiperImageEnter === 2 ? { opacity: 0.5 } : null}
                  />
                </SwiperImageBox>
                <SwiperImageBox
                  style={{
                    marginLeft: "60px",
                  }}
                  onClick={() => {
                    setUnderBgIndex(bg03);
                    setUpperTextIndex("03");
                  }}
                  onMouseEnter={() => {
                    setSwiperImageEnter(3);
                  }}
                  onMouseLeave={() => {
                    setSwiperImageEnter(0);
                  }}
                >
                  <SwiperImage url={bg03} />
                  <SwiperImageOpacity
                    style={swiperImageEnter === 3 ? { opacity: 0.5 } : null}
                  />
                </SwiperImageBox>
                <SwiperImageBox
                  style={{
                    marginLeft: "60px",
                  }}
                  onClick={() => {
                    setUnderBgIndex(bg04);
                    setUpperTextIndex("04");
                  }}
                  onMouseEnter={() => {
                    setSwiperImageEnter(4);
                  }}
                  onMouseLeave={() => {
                    setSwiperImageEnter(0);
                  }}
                >
                  <SwiperImage url={bg04} />
                  <SwiperImageOpacity
                    style={swiperImageEnter === 4 ? { opacity: 0.3 } : null}
                  />
                </SwiperImageBox>
              </Swiper>
            </SwiperInner>
          </SwiperDiv>
        </Inner>
      </Wrapper>
    </>
  );
};
