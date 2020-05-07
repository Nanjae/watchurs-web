import React, { useState } from "react";
import styled from "styled-components";
import bg01 from "../../../Assets/Images/Bg/bg01.jpg";
import bg02 from "../../../Assets/Images/Bg/bg02.jpg";
import bg03 from "../../../Assets/Images/Bg/bg03.jpg";
import bg04 from "../../../Assets/Images/Bg/bg04.jpg";
import icon_search_dark from "../../../Assets/Icons/icon_search_dark.png";
import icon_search_light from "../../../Assets/Icons/icon_search_light.png";
import icon_search_highlight from "../../../Assets/Icons/icon_search_highlight.png";

const Wrapper = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Inner = styled.div`
  height: fit-content;
  width: 1200px;
  padding: 50px 0px;
  display: flex;
  justify-content: center;
`;

const TitleDiv = styled.div`
  position: absolute;
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
`;

const TitleText = styled.div`
  color: ${(props) => props.theme.fontSubColor};
  font-size: 300px;
  font-weight: 900;
  transition: color 0.3s;
`;

const ImageDiv = styled.div`
  z-index: 50;
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  margin-top: 220px;
`;

const ImageRow = styled.div`
  width: 530px;
  height: fit-content;
  padding: 30px;
`;

const ImageBox = styled.div`
  width: 100%;
  height: 630px;
  display: flex;
  justify-content: center;
  align-items: center;
  :not(:first-child) {
    margin-top: 60px;
  }
`;

const Image = styled.div`
  position: absolute;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  width: 530px;
  height: 630px;
`;

const ImageSearchIcon = styled.div`
  position: absolute;
  z-index: 60;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  width: 80px;
  height: 80px;
  opacity: 0;
  transition: opacity 0.3s, background-image 0.3s;
  cursor: pointer;
`;

const ImageOpacity = styled.div`
  background-color: ${(props) => props.theme.bgMainColor};
  position: absolute;
  width: 430px;
  height: 530px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s, width 0.3s, height 0.3s;
`;

const ImageOpacityLine = styled.div`
  width: 96%;
  height: 96%;
  border: 2px solid
    ${(props) =>
      props.searchEnter ? props.theme.highlightColor : props.theme.bgSubColor};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: border 0.3s;
`;

const MoreBox = styled.div`
  width: fit-content;
  margin-top: 180px;
  display: flex;
  align-items: flex-end;
  opacity: 1;
  cursor: pointer;
  transition: opacity 0.3s;
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
  const [projectEnter, setEnter] = useState(0);

  const icon_search = siteTheme ? icon_search_light : icon_search_dark;

  return (
    <>
      <Wrapper>
        <Inner>
          <TitleDiv>
            <TitleText>project</TitleText>
          </TitleDiv>
          <ImageDiv>
            <ImageRow style={{ marginTop: 200 }}>
              <ImageBox
                onMouseEnter={() => {
                  setEnter(1);
                }}
                onMouseLeave={() => {
                  setEnter(0);
                }}
              >
                <Image url={bg01} />
                <ImageSearchIcon
                  url={searchEnter ? icon_search_highlight : icon_search}
                  style={projectEnter === 1 ? { opacity: 1 } : null}
                  onMouseEnter={() => {
                    setSearchEnter(true);
                  }}
                  onMouseLeave={() => {
                    setSearchEnter(false);
                  }}
                />
                <ImageOpacity
                  style={
                    projectEnter === 1
                      ? { opacity: "0.4", width: 530, height: 630 }
                      : null
                  }
                >
                  <ImageOpacityLine searchEnter={searchEnter} />
                </ImageOpacity>
              </ImageBox>
              <ImageBox
                onMouseEnter={() => {
                  setEnter(3);
                }}
                onMouseLeave={() => {
                  setEnter(0);
                }}
              >
                <Image url={bg03} />
                <ImageSearchIcon
                  url={searchEnter ? icon_search_highlight : icon_search}
                  style={projectEnter === 3 ? { opacity: 1 } : null}
                  onMouseEnter={() => {
                    setSearchEnter(true);
                  }}
                  onMouseLeave={() => {
                    setSearchEnter(false);
                  }}
                />
                <ImageOpacity
                  style={
                    projectEnter === 3
                      ? { opacity: "0.4", width: 530, height: 630 }
                      : null
                  }
                >
                  <ImageOpacityLine searchEnter={searchEnter} />
                </ImageOpacity>
              </ImageBox>
            </ImageRow>
            <ImageRow>
              <ImageBox
                onMouseEnter={() => {
                  setEnter(2);
                }}
                onMouseLeave={() => {
                  setEnter(0);
                }}
              >
                <Image url={bg02} />
                <ImageSearchIcon
                  url={searchEnter ? icon_search_highlight : icon_search}
                  style={projectEnter === 2 ? { opacity: 1 } : null}
                  onMouseEnter={() => {
                    setSearchEnter(true);
                  }}
                  onMouseLeave={() => {
                    setSearchEnter(false);
                  }}
                />
                <ImageOpacity
                  style={
                    projectEnter === 2
                      ? { opacity: "0.4", width: 530, height: 630 }
                      : null
                  }
                >
                  <ImageOpacityLine searchEnter={searchEnter} />
                </ImageOpacity>
              </ImageBox>
              <ImageBox
                onMouseEnter={() => {
                  setEnter(4);
                }}
                onMouseLeave={() => {
                  setEnter(0);
                }}
              >
                <Image url={bg04} />
                <ImageSearchIcon
                  url={searchEnter ? icon_search_highlight : icon_search}
                  style={projectEnter === 4 ? { opacity: 1 } : null}
                  onMouseEnter={() => {
                    setSearchEnter(true);
                  }}
                  onMouseLeave={() => {
                    setSearchEnter(false);
                  }}
                />
                <ImageOpacity
                  style={
                    projectEnter === 4
                      ? { opacity: "0.4", width: 530, height: 630 }
                      : null
                  }
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
