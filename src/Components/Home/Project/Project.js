import React, { useState } from "react";
import styled from "styled-components";
import bg01 from "../../../Assets/Images/Bg/bg01.jpg";
import bg02 from "../../../Assets/Images/Bg/bg02.jpg";
import bg03 from "../../../Assets/Images/Bg/bg03.jpg";
import bg04 from "../../../Assets/Images/Bg/bg04.jpg";
import icon_search_dark from "../../../Assets/Icons/icon_search_dark.png";
import icon_search_light from "../../../Assets/Icons/icon_search_light.png";
import icon_search_highlight from "../../../Assets/Icons/icon_search_highlight.png";
import useWindowDimensions from "../../../Hooks/useWindowDimensions";

const Wrapper = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Inner = styled.div`
  height: fit-content;
  display: flex;
  justify-content: center;
  padding: 50px 0px;
  @media only screen and (max-width: 575.99px) {
    width: 90%;
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
  position: absolute;
  height: fit-content;
  display: flex;
  @media only screen and (max-width: 575.99px) {
    justify-content: center;
    width: 90%;
  }
  @media only screen and (min-width: 576px) {
    justify-content: center;
    width: 540px;
  }
  @media only screen and (min-width: 768px) {
    justify-content: flex-start;
    width: 720px;
  }
  @media only screen and (min-width: 992px) {
    width: 960px;
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

const TitleText = styled.div`
  color: ${(props) => props.theme.fontSubColor};
  font-weight: 900;
  transition: color 0.3s;
  @media only screen and (max-width: 575.99px) {
    font-size: 70px;
  }
  @media only screen and (min-width: 576px) {
    font-size: 100px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 190px;
  }
  @media only screen and (min-width: 992px) {
    font-size: 260px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 300px;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const ImageDiv = styled.div`
  z-index: 50;
  width: 100%;
  height: fit-content;
  display: flex;
  @media only screen and (max-width: 575.99px) {
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (min-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 120px;
  }
  @media only screen and (min-width: 992px) {
    margin-top: 180px;
  }
  @media only screen and (min-width: 1200px) {
    margin-top: 220px;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const ImageRow = styled.div`
  height: fit-content;
  @media only screen and (max-width: 575.99px) {
    padding: 15px;
    width: 300px;
  }
  @media only screen and (min-width: 576px) {
    padding: 15px;
    width: 300px;
  }
  @media only screen and (min-width: 768px) {
    padding: 30px;
    width: 300px;
  }
  @media only screen and (min-width: 992px) {
    padding: 30px;
    width: 420px;
  }
  @media only screen and (min-width: 1200px) {
    padding: 10px;
    width: 530px;
  }
  @media only screen and (min-width: 1536px) {
    padding: 30px;
  }
  @media only screen and (min-width: 1800px) {
    width: 650px;
  }
`;

const ImageBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 575.99px) {
    :not(:first-child) {
      margin-top: 30px;
    }
    height: 360px;
  }
  @media only screen and (min-width: 576px) {
    :not(:first-child) {
      margin-top: 30px;
    }
    height: 360px;
  }
  @media only screen and (min-width: 768px) {
    :not(:first-child) {
      margin-top: 40px;
    }
    height: 360px;
  }
  @media only screen and (min-width: 992px) {
    :not(:first-child) {
      margin-top: 40px;
    }
    height: 500px;
  }
  @media only screen and (min-width: 1200px) {
    :not(:first-child) {
      margin-top: 60px;
    }
    height: 630px;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
    height: 780px;
  }
`;

const Image = styled.div`
  position: absolute;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  @media only screen and (max-width: 575.99px) {
    width: 300px;
    height: 360px;
  }
  @media only screen and (min-width: 576px) {
    width: 300px;
    height: 360px;
  }
  @media only screen and (min-width: 768px) {
    width: 300px;
    height: 360px;
  }
  @media only screen and (min-width: 992px) {
    width: 420px;
    height: 500px;
  }
  @media only screen and (min-width: 1200px) {
    width: 530px;
    height: 630px;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
    width: 650px;
    height: 780px;
  }
`;

const ImageSearchIcon = styled.div`
  position: absolute;
  z-index: 60;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  transition: opacity 0.3s, background-image 0.3s;
  cursor: pointer;
  @media only screen and (max-width: 575.99px) {
    opacity: 1;
    width: 60px;
    height: 60px;
  }
  @media only screen and (min-width: 576px) {
    opacity: 1;
    width: 60px;
    height: 60px;
  }
  @media only screen and (min-width: 768px) {
    opacity: 1;
    width: 60px;
    height: 60px;
  }
  @media only screen and (min-width: 992px) {
    opacity: 0;
    width: 80px;
    height: 80px;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const ImageOpacity = styled.div`
  background-color: ${(props) => props.theme.bgMainColor};
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: opacity 0.3s, width 0.3s, height 0.3s;
  @media only screen and (max-width: 575.99px) {
    opacity: 0.2;
    width: 300px;
    height: 360px;
  }
  @media only screen and (min-width: 576px) {
    opacity: 0.2;
    width: 300px;
    height: 360px;
  }
  @media only screen and (min-width: 768px) {
    opacity: 0.2;
    width: 300px;
    height: 360px;
  }
  @media only screen and (min-width: 992px) {
    opacity: 0;
    width: 320px;
    height: 400px;
  }
  @media only screen and (min-width: 1200px) {
    width: 430px;
    height: 530px;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
    width: 550px;
    height: 680px;
  }
`;

const ImageOpacityLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: border 0.3s;
  @media only screen and (max-width: 575.99px) {
    border: 0px;
  }
  @media only screen and (min-width: 576px) {
    border: 0px;
  }
  @media only screen and (min-width: 768px) {
    border: 0px;
  }
  @media only screen and (min-width: 992px) {
    border: 2px solid
      ${(props) =>
        props.searchEnter
          ? props.theme.highlightColor
          : props.theme.bgSubColor};
    width: 96%;
    height: 96%;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const MoreBox = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  opacity: 1;
  cursor: pointer;
  transition: opacity 0.3s;
  @media only screen and (max-width: 575.99px) {
    justify-content: center;
    margin-top: 40px;
  }
  @media only screen and (min-width: 576px) {
    justify-content: center;
    margin-top: 40px;
  }
  @media only screen and (min-width: 768px) {
    justify-content: flex-start;
    margin-top: 60px;
  }
  @media only screen and (min-width: 992px) {
    margin-top: 70px;
  }
  @media only screen and (min-width: 1200px) {
    margin-top: 100px;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const MoreText = styled.div`
  color: ${(props) => props.theme.lineMainColor};
  font-size: 18px;
  font-weight: 400;
  transition: color 0.3s;
`;

const MoreLine = styled.div`
  background-color: ${(props) => props.theme.lineMainColor};
  width: 70px;
  height: 2px;
  margin-left: 15px;
  margin-bottom: 6px;
  transition: margin-left 0.3s, background-color 0.3s;
`;

export default ({ siteTheme }) => {
  const [moreEnter, setMoreEnter] = useState(false);
  const [searchEnter, setSearchEnter] = useState(false);
  const [projectEnter, setProjectEnter] = useState(0);

  const icon_search = siteTheme ? icon_search_light : icon_search_dark;

  const { windowWidth } = useWindowDimensions();

  const opacityOptions =
    windowWidth < 1800
      ? windowWidth < 1200
        ? windowWidth < 992
          ? null
          : { opacity: "0.2", width: 420, height: 500 }
        : { opacity: "0.2", width: 530, height: 630 }
      : { opacity: "0.2", width: 650, height: 780 };

  return (
    <>
      <Wrapper>
        <Inner>
          <TitleDiv>
            <TitleText>project</TitleText>
          </TitleDiv>
          <ImageDiv>
            <ImageRow
              style={
                windowWidth < 1800
                  ? windowWidth < 1200
                    ? { marginTop: 130 }
                    : { marginTop: 160 }
                  : { marginTop: 200 }
              }
            >
              <ImageBox
                onMouseEnter={() => {
                  setProjectEnter(1);
                }}
                onMouseLeave={() => {
                  setProjectEnter(0);
                }}
              >
                <Image url={bg01} />
                <ImageSearchIcon
                  url={
                    searchEnter && projectEnter === 1
                      ? icon_search_highlight
                      : icon_search
                  }
                  style={
                    projectEnter === 1
                      ? windowWidth < 992
                        ? null
                        : { opacity: 1 }
                      : null
                  }
                  onMouseEnter={() => {
                    setSearchEnter(true);
                  }}
                  onMouseLeave={() => {
                    setSearchEnter(false);
                  }}
                />
                <ImageOpacity
                  style={projectEnter === 1 ? opacityOptions : null}
                >
                  <ImageOpacityLine searchEnter={searchEnter} />
                </ImageOpacity>
              </ImageBox>
              <ImageBox
                onMouseEnter={() => {
                  setProjectEnter(3);
                }}
                onMouseLeave={() => {
                  setProjectEnter(0);
                }}
              >
                <Image url={bg03} />
                <ImageSearchIcon
                  url={
                    searchEnter && projectEnter === 3
                      ? icon_search_highlight
                      : icon_search
                  }
                  style={
                    projectEnter === 3
                      ? windowWidth < 992
                        ? null
                        : { opacity: 1 }
                      : null
                  }
                  onMouseEnter={() => {
                    setSearchEnter(true);
                  }}
                  onMouseLeave={() => {
                    setSearchEnter(false);
                  }}
                />
                <ImageOpacity
                  style={projectEnter === 3 ? opacityOptions : null}
                >
                  <ImageOpacityLine searchEnter={searchEnter} />
                </ImageOpacity>
              </ImageBox>
            </ImageRow>
            <ImageRow>
              <ImageBox
                onMouseEnter={() => {
                  setProjectEnter(2);
                }}
                onMouseLeave={() => {
                  setProjectEnter(0);
                }}
              >
                <Image url={bg02} />
                <ImageSearchIcon
                  url={
                    searchEnter && projectEnter === 2
                      ? icon_search_highlight
                      : icon_search
                  }
                  style={
                    projectEnter === 2
                      ? windowWidth < 992
                        ? null
                        : { opacity: 1 }
                      : null
                  }
                  onMouseEnter={() => {
                    setSearchEnter(true);
                  }}
                  onMouseLeave={() => {
                    setSearchEnter(false);
                  }}
                />
                <ImageOpacity
                  style={projectEnter === 2 ? opacityOptions : null}
                >
                  <ImageOpacityLine searchEnter={searchEnter} />
                </ImageOpacity>
              </ImageBox>
              <ImageBox
                onMouseEnter={() => {
                  setProjectEnter(4);
                }}
                onMouseLeave={() => {
                  setProjectEnter(0);
                }}
              >
                <Image url={bg04} />
                <ImageSearchIcon
                  url={
                    searchEnter && projectEnter === 4
                      ? icon_search_highlight
                      : icon_search
                  }
                  style={
                    projectEnter === 4
                      ? windowWidth < 992
                        ? null
                        : { opacity: 1 }
                      : null
                  }
                  onMouseEnter={() => {
                    setSearchEnter(true);
                  }}
                  onMouseLeave={() => {
                    setSearchEnter(false);
                  }}
                />
                <ImageOpacity
                  style={projectEnter === 4 ? opacityOptions : null}
                >
                  <ImageOpacityLine searchEnter={searchEnter} />
                </ImageOpacity>
              </ImageBox>
              <MoreBox
                style={moreEnter ? { opacity: "0.6" } : null}
                onMouseEnter={() => {
                  setMoreEnter(true);
                }}
                onMouseLeave={() => {
                  setMoreEnter(false);
                }}
              >
                <MoreText>view more</MoreText>
                <MoreLine style={moreEnter ? { marginLeft: "10px" } : null} />
              </MoreBox>
            </ImageRow>
          </ImageDiv>
        </Inner>
      </Wrapper>
    </>
  );
};
