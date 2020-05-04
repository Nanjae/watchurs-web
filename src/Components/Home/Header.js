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
  top: -76;
  width: 100%;
  height: 75px;
  background-color: ${(props) => props.theme.bgMainColor};
  border-bottom: 1px solid ${(props) => props.theme.borderMainColor};
  transition: background-color 0.3s, top 0.3s;
`;

const Inner = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0px 2%;
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
  width: 50px;
  height: 50px;
  transition: background-image 0.3s;
`;

const CenterDiv = styled.div`
  height: 100%;
  width: 20%;
  justify-content: center;
  align-items: center;
`;

const MenuLineDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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
}) => {
  const logo_watchurs = siteTheme ? logo_watchurs_light : logo_watchurs_dark;
  const icon_contrast = siteTheme ? icon_contrast_light : icon_contrast_dark;

  return (
    <>
      <Wrapper style={scrollY > 50 ? { top: 0 } : { top: -76 }}>
        <Inner>
          <LeftDiv>
            <LogoIcon url={logo_watchurs} />
          </LeftDiv>
          <CenterDiv>
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
    </>
  );
};
