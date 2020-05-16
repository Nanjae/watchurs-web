import React, { useState } from "react";
import styled from "styled-components";
import Swiper from "react-id-swiper";
import logo_graphql from "../../../Assets/Images/Logos/logo_graphql.png";
import logo_react from "../../../Assets/Images/Logos/logo_react.png";
import logo_github from "../../../Assets/Images/Logos/logo_github.png";
import logo_apollo from "../../../Assets/Images/Logos/logo_apollo.png";
import logo_netlify from "../../../Assets/Images/Logos/logo_netlify.png";
import logo_nodejs from "../../../Assets/Images/Logos/logo_nodejs.png";
import logo_heroku from "../../../Assets/Images/Logos/logo_heroku.png";
import useWindowDimensions from "../../../Hooks/useWindowDimensions";

const Wrapper = styled.div`
  height: fit-content;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Inner = styled.div`
  height: fit-content;
  padding: 50px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 575.99px) {
    width: 100%;
  }
  @media only screen and (min-width: 576px) {
    width: 480px;
    margin: 0px 30px;
  }
  @media only screen and (min-width: 768px) {
    width: 680px;
    margin-right: 20px;
    margin-left: 20px;
  }
  @media only screen and (min-width: 992px) {
    width: 920px;
    margin-right: 20px;
    margin-left: 20px;
  }
  @media only screen and (min-width: 1200px) {
    width: 1080px;
    margin: 0px 20px;
  }
  @media only screen and (min-width: 1536px) {
    width: 1240px;
  }
  @media only screen and (min-width: 1800px) {
    width: 1400px;
  }
`;

const TitleDiv = styled.div`
  width: 100%;
  display: flex;
  @media only screen and (max-width: 575.99px) {
    width: 90%;
    height: 200px;
  }
  @media only screen and (min-width: 576px) {
    justify-content: flex-start;
    height: 200px;
  }
  @media only screen and (min-width: 768px) {
    height: 240px;
  }
  @media only screen and (min-width: 992px) {
    height: 240px;
  }
  @media only screen and (min-width: 1200px) {
    height: 375px;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const BgTextDiv = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  @media only screen and (max-width: 575.99px) {
    height: 200px;
    width: 90%;
  }
  @media only screen and (min-width: 576px) {
    height: 200px;
    width: 480px;
  }
  @media only screen and (min-width: 768px) {
    height: 240px;
    width: 330px;
  }
  @media only screen and (min-width: 992px) {
    height: 240px;
    width: 400px;
  }
  @media only screen and (min-width: 1200px) {
    height: 375px;
    width: 550px;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const BgText = styled.div`
  color: ${(props) => props.theme.fontMainColor};
  font-family: "Monoton", sans-serif;
  opacity: 0.1;
  transition: color 0.3s;
  @media only screen and (max-width: 575.99px) {
    font-size: 200px;
  }
  @media only screen and (min-width: 576px) {
    font-size: 200px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 225px;
  }
  @media only screen and (min-width: 992px) {
    font-size: 225px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 350px;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const TitleBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media only screen and (max-width: 575.99px) {
    margin-top: 40px;
    margin-left: 80px;
    margin-right: 20px;
    height: 160px;
  }
  @media only screen and (min-width: 576px) {
    margin-top: 40px;
    margin-left: 80px;
    margin-right: 0px;
    height: 160px;
    width: 400px;
  }
  @media only screen and (min-width: 768px) {
    margin-top: 40px;
    margin-left: 100px;
    height: 200px;
    width: 460px;
  }
  @media only screen and (min-width: 992px) {
    margin-top: 40px;
    margin-left: 100px;
    height: 200px;
    width: 600px;
  }
  @media only screen and (min-width: 1200px) {
    margin-top: 60px;
    margin-left: 150px;
    height: 300px;
    width: 800px;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const TitleTopText = styled.div`
  color: ${(props) => props.theme.fontMainColor};
  margin-bottom: 10px;
  transition: color 0.3s;
  @media only screen and (max-width: 575.99px) {
    font-size: 35px;
  }
  @media only screen and (min-width: 576px) {
    font-size: 35px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 40px;
  }
  @media only screen and (min-width: 992px) {
    font-size: 40px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 70px;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const TitleBottomText = styled.div`
  color: ${(props) => props.theme.fontMainColor};
  font-weight: 900;
  transition: color 0.3s;
  @media only screen and (max-width: 575.99px) {
    font-size: 35px;
  }
  @media only screen and (min-width: 576px) {
    font-size: 35px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 40px;
  }
  @media only screen and (min-width: 992px) {
    font-size: 40px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 70px;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const SwiperDiv = styled.div`
  height: fit-content;
  margin-bottom: 50px;
  cursor: e-resize;
  @media only screen and (max-width: 575.99px) {
    margin-top: 40px;
    width: 90%;
  }
  @media only screen and (min-width: 576px) {
    margin-top: 40px;
    width: 480px;
  }
  @media only screen and (min-width: 768px) {
    margin-top: 40px;
    width: 660px;
  }
  @media only screen and (min-width: 992px) {
    margin-top: 60px;
    width: 900px;
  }
  @media only screen and (min-width: 1200px) {
    margin-top: 80px;
    width: 1060px;
  }
  @media only screen and (min-width: 1536px) {
    width: 1220px;
  }
  @media only screen and (min-width: 1800px) {
    width: 1380px;
  }
`;

const SwiperImageBox = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  justify-content: center;
`;

const SwiperImage = styled.div`
  background-image: url(${(props) => props.url});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 200px;
  height: 80px;
  opacity: 0.7;
  transition: opacity 0.3s;
`;

export default () => {
  const [techEnter, setTechEnter] = useState(0);

  const { windowWidth } = useWindowDimensions();

  const swiperParams = {
    breakpoints: {
      576: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 4 },
      1200: { slidesPerView: 5 },
    },
  };

  return (
    <>
      <Wrapper>
        <Inner>
          <TitleDiv>
            <BgTextDiv>
              <BgText>U</BgText>
            </BgTextDiv>
            <TitleBox>
              <TitleTopText>USED</TitleTopText>
              <TitleBottomText>TECH STACK</TitleBottomText>
            </TitleBox>
          </TitleDiv>
          <SwiperDiv>
            <Swiper {...swiperParams} slidesPerView={1} spaceBetween={50}>
              <SwiperImageBox>
                <SwiperImage
                  url={logo_react}
                  onMouseEnter={() => {
                    setTechEnter(1);
                  }}
                  onMouseLeave={() => {
                    setTechEnter(0);
                  }}
                  style={techEnter === 1 ? { opacity: 1 } : null}
                />
              </SwiperImageBox>
              <SwiperImageBox>
                <SwiperImage
                  url={logo_github}
                  onMouseEnter={() => {
                    setTechEnter(2);
                  }}
                  onMouseLeave={() => {
                    setTechEnter(0);
                  }}
                  style={techEnter === 2 ? { opacity: 1 } : null}
                />
              </SwiperImageBox>
              <SwiperImageBox>
                <SwiperImage
                  url={logo_nodejs}
                  onMouseEnter={() => {
                    setTechEnter(3);
                  }}
                  onMouseLeave={() => {
                    setTechEnter(0);
                  }}
                  style={techEnter === 3 ? { opacity: 1 } : null}
                />
              </SwiperImageBox>
              <SwiperImageBox>
                <SwiperImage
                  url={logo_graphql}
                  onMouseEnter={() => {
                    setTechEnter(4);
                  }}
                  onMouseLeave={() => {
                    setTechEnter(0);
                  }}
                  style={techEnter === 4 ? { opacity: 1 } : null}
                />
              </SwiperImageBox>
              <SwiperImageBox>
                <SwiperImage
                  url={logo_apollo}
                  onMouseEnter={() => {
                    setTechEnter(5);
                  }}
                  onMouseLeave={() => {
                    setTechEnter(0);
                  }}
                  style={techEnter === 5 ? { opacity: 1 } : null}
                />
              </SwiperImageBox>
              <SwiperImageBox>
                <SwiperImage
                  url={logo_heroku}
                  onMouseEnter={() => {
                    setTechEnter(6);
                  }}
                  onMouseLeave={() => {
                    setTechEnter(0);
                  }}
                  style={techEnter === 6 ? { opacity: 1 } : null}
                />
              </SwiperImageBox>
              <SwiperImageBox>
                <SwiperImage
                  url={logo_netlify}
                  onMouseEnter={() => {
                    setTechEnter(7);
                  }}
                  onMouseLeave={() => {
                    setTechEnter(0);
                  }}
                  style={techEnter === 7 ? { opacity: 1 } : null}
                />
              </SwiperImageBox>
            </Swiper>
          </SwiperDiv>
        </Inner>
      </Wrapper>
    </>
  );
};
