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

const Wrapper = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Inner = styled.div`
  height: fit-content;
  padding: 50px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 575.99px) {
    width: 98%;
  }
  @media only screen and (min-width: 576px) {
    width: 540px;
  }
  @media only screen and (min-width: 768px) {
    width: 720px;
  }
  @media only screen and (min-width: 992px) {
    width: 960px;
  }
  @media only screen and (min-width: 1200px) {
    width: 1120px;
  }
  @media only screen and (min-width: 1536px) {
    width: 1280px;
  }
  @media only screen and (min-width: 1800px) {
    width: 1440px;
  }
`;

const TitleDiv = styled.div`
  height: 350px;
  @media only screen and (max-width: 575.99px) {
  }
  @media only screen and (min-width: 576px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
    width: 1120px;
  }
  @media only screen and (min-width: 1536px) {
    width: 1280px;
  }
  @media only screen and (min-width: 1800px) {
    width: 1440px;
  }
`;

const BgTextDiv = styled.div`
  position: absolute;
  height: 375px;
  width: 375px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

const BgText = styled.div`
  color: ${(props) => props.theme.fontMainColor};
  font-size: 350px;
  font-family: "Monoton", sans-serif;
  opacity: 0.1;
  transition: color 0.3s;
`;

const TitleBox = styled.div`
  position: absolute;
  height: 300px;
  width: 500px;
  margin-left: 150px;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const TitleTopText = styled.div`
  color: ${(props) => props.theme.fontMainColor};
  font-size: 70px;
  margin-bottom: 10px;
  transition: color 0.3s;
`;

const TitleBottomText = styled.div`
  color: ${(props) => props.theme.fontMainColor};
  font-size: 70px;
  font-weight: 900;
  transition: color 0.3s;
`;

const SwiperDiv = styled.div`
  height: fit-content;
  margin-top: 80px;
  margin-bottom: 50px;
  cursor: e-resize;
  @media only screen and (max-width: 575.99px) {
  }
  @media only screen and (min-width: 576px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
    width: 1120px;
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
            <Swiper slidesPerView={5} spaceBetween={50}>
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
