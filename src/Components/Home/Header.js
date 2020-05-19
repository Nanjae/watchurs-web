import React from "react";
import styled from "styled-components";
import logo_watchurs_dark from "../../Assets/Images/Logos/logo_watchurs_dark.png";
import logo_watchurs_light from "../../Assets/Images/Logos/logo_watchurs_light.png";
import icon_contrast_dark from "../../Assets/Icons/icon_contrast_dark.png";
import icon_contrast_light from "../../Assets/Icons/icon_contrast_light.png";
import MenuLine from "./Common/MenuLine";

const Wrapper = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  background-color: ${(props) => props.theme.bgMainColor};
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
  top: 0px;
  @media only screen and (max-width: 575.99px) {
    box-shadow: ${(props) =>
      props.siteTheme
        ? `0px 1px 20px 1px rgba(15, 15, 18, 0.1)`
        : `0px 1px 20px 1px rgba(255, 255, 255, 0.1)`};
    height: 56px;
  }
  @media only screen and (min-width: 576px) {
    box-shadow: ${(props) =>
      props.siteTheme
        ? `0px 1px 20px 1px rgba(15, 15, 18, 0.1)`
        : `0px 1px 20px 1px rgba(255, 255, 255, 0.1)`};
    height: 56px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
    box-shadow: none;
    border-bottom: 1px solid ${(props) => props.theme.borderMainColor};
    height: 75px;
    transform: translateY(${(props) => (props.scrollY >= 50 ? "0%" : "-100%")});
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const Inner = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 575.99px) {
    margin: 0px 15px;
  }
  @media only screen and (min-width: 576px) {
    margin: 0px 15px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
    margin: 0px 2%;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const LeftDiv = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const LogoIcon = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  transition: background-image 0.3s;
  cursor: pointer;
  @media only screen and (max-width: 575.99px) {
    width: 40px;
    height: 40px;
  }
  @media only screen and (min-width: 576px) {
    width: 40px;
    height: 40px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
    width: 50px;
    height: 50px;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const CenterDiv = styled.div`
  height: 100%;
  width: fit-content;
  justify-content: center;
  align-items: center;
`;

const MenuLineDiv = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0px 20px;
`;

const RightDiv = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ThemeBox = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
`;

const ThemeText = styled.div`
  color: ${(props) => props.theme.fontMainColor};
  font-weight: 400;
  transition: color 0.3s;
`;

const ThemeIcon = styled.div`
  background-image: url(${(props) => props.url});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 20px;
  height: 20px;
  margin-left: 10px;
  transition: background-image 0.3s;
`;

export default ({
  siteTheme,
  setSiteTheme,
  scrollY,
  headerMenuEnter,
  setHeaderMenuEnter,
  popClosed,
  setPopClosed,
  windowWidth,
}) => {
  const logo_watchurs = siteTheme ? logo_watchurs_light : logo_watchurs_dark;
  const icon_contrast = siteTheme ? icon_contrast_light : icon_contrast_dark;

  const ThemeTextString = siteTheme
    ? windowWidth >= 1200
      ? "LIGHT"
      : windowWidth >= 768
      ? "LIGHT MODE"
      : windowWidth >= 576
      ? "LIGHT"
      : ""
    : windowWidth >= 1200
    ? "DARK"
    : windowWidth >= 768
    ? "DARK MODE"
    : windowWidth >= 576
    ? "DARK"
    : "";

  return (
    <>
      {windowWidth >= 1200 ? (
        <Wrapper scrollY={scrollY}>
          <Inner>
            <LeftDiv>
              <LogoIcon
                onClick={() => {
                  window.location.reload();
                }}
                url={logo_watchurs}
              />
            </LeftDiv>
            <CenterDiv
              onClick={() => {
                setPopClosed(!popClosed);
              }}
            >
              <MenuLineDiv
                onMouseEnter={() => {
                  setHeaderMenuEnter(true);
                }}
                onMouseLeave={() => {
                  setHeaderMenuEnter(false);
                }}
              >
                <MenuLine headerMenuEnter={headerMenuEnter} />
              </MenuLineDiv>
            </CenterDiv>
            <RightDiv>
              <ThemeBox
                onClick={() => {
                  setSiteTheme(!siteTheme);
                }}
              >
                <ThemeText>{siteTheme ? "LIGHT" : "DARK"}</ThemeText>
                <ThemeIcon
                  url={icon_contrast}
                  style={{ transform: "rotate(45deg)" }}
                />
              </ThemeBox>
            </RightDiv>
          </Inner>
        </Wrapper>
      ) : (
        <Wrapper siteTheme={siteTheme}>
          <Inner>
            <LeftDiv>
              <LogoIcon
                onClick={() => {
                  window.location.reload();
                }}
                url={logo_watchurs}
              />
            </LeftDiv>
            <CenterDiv
              onClick={() => {
                setPopClosed(!popClosed);
              }}
            >
              <MenuLineDiv
                onMouseEnter={() => {
                  setHeaderMenuEnter(true);
                }}
                onMouseLeave={() => {
                  setHeaderMenuEnter(false);
                }}
              >
                <MenuLine headerMenuEnter={headerMenuEnter} />
              </MenuLineDiv>
            </CenterDiv>
            <RightDiv>
              <ThemeBox
                onClick={() => {
                  setSiteTheme(!siteTheme);
                }}
              >
                <ThemeText>{ThemeTextString}</ThemeText>
                <ThemeIcon
                  url={icon_contrast}
                  style={{ transform: "rotate(45deg)" }}
                />
              </ThemeBox>
            </RightDiv>
          </Inner>
        </Wrapper>
      )}
    </>
  );
};
