import React from "react";
import styled from "styled-components";
import logo_watchurs_dark from "../../../../Assets/Images/Logos/logo_watchurs_dark.png";
import logo_watchurs_light from "../../../../Assets/Images/Logos/logo_watchurs_light.png";
import icon_facebook_dark from "../../../../Assets/Icons/icon_facebook_dark.png";
import icon_facebook_light from "../../../../Assets/Icons/icon_facebook_light.png";
import icon_instagram_dark from "../../../../Assets/Icons/icon_instagram_dark.png";
import icon_instagram_light from "../../../../Assets/Icons/icon_instagram_light.png";
import icon_twitter_dark from "../../../../Assets/Icons/icon_twitter_dark.png";
import icon_twitter_light from "../../../../Assets/Icons/icon_twitter_light.png";
import MenuLine from "../../Common/MenuLine";
import { useState } from "react";

const Wrapper = styled.div`
  width: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const Inner = styled.div`
  width: 70%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const TitleDiv = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const LogoIcon = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background-image 0.3s;
`;

const TitleText = styled.div`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 3px;
  color: ${(props) => props.theme.fontMainColor};
  transform: rotate(-90deg) translate(-50%, -280%);
  white-space: nowrap;
  cursor: pointer;
  transition: color 0.3s;
`;

const MenuDiv = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
`;

const MenuInner = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
`;

const MenuTextBox = styled.div`
  width: 54px;
  display: flex;
  justify-content: space-between;
  color: ${(props) =>
    props.headerMenuEnter
      ? props.theme.lineSubColor
      : props.theme.fontMainColor};
  padding: 0px 3px;
  margin-top: 20px;
  transition: color 0.3s;
`;

const MenuText = styled.div`
  font-size: 15px;
  font-weight: 700;
`;

const IconDiv = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Icon = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  width: 20px;
  height: 20px;
  margin-top: 40px;
  cursor: pointer;
  opacity: 1;
  transition: background-image 0.3s, opacity 0.3s;
`;

export default ({
  siteTheme,
  scrollY,
  headerMenuEnter,
  setHeaderMenuEnter,
  setPopClosed,
}) => {
  const [iconEnter, setIconEnter] = useState(0);

  const logo_watchurs = siteTheme ? logo_watchurs_light : logo_watchurs_dark;
  const icon_facebook = siteTheme ? icon_facebook_light : icon_facebook_dark;
  const icon_instagram = siteTheme ? icon_instagram_light : icon_instagram_dark;
  const icon_twitter = siteTheme ? icon_twitter_light : icon_twitter_dark;

  return (
    <>
      <Wrapper>
        {scrollY > 50 ? null : (
          <Inner>
            <TitleDiv>
              <LogoIcon
                onClick={() => {
                  window.location.reload();
                }}
                url={logo_watchurs}
              />
              <TitleText
                onClick={() => {
                  window.location.reload();
                }}
              >
                WATCHURS
              </TitleText>
            </TitleDiv>
            <MenuDiv>
              <MenuInner
                onClick={() => {
                  setPopClosed(false);
                }}
                onMouseEnter={() => {
                  setHeaderMenuEnter(true);
                }}
                onMouseLeave={() => {
                  setHeaderMenuEnter(false);
                }}
              >
                <MenuLine headerMenuEnter={headerMenuEnter} />
                <MenuTextBox headerMenuEnter={headerMenuEnter}>
                  <MenuText>M</MenuText>
                  <MenuText>E</MenuText>
                  <MenuText>N</MenuText>
                  <MenuText>U</MenuText>
                </MenuTextBox>
              </MenuInner>
            </MenuDiv>
            <IconDiv>
              <Icon
                onMouseEnter={() => {
                  setIconEnter(1);
                }}
                onMouseLeave={() => {
                  setIconEnter(0);
                }}
                style={iconEnter === 1 ? { opacity: 0.6 } : { opacity: 1 }}
                url={icon_facebook}
              />
              <Icon
                onMouseEnter={() => {
                  setIconEnter(2);
                }}
                onMouseLeave={() => {
                  setIconEnter(0);
                }}
                style={iconEnter === 2 ? { opacity: 0.6 } : { opacity: 1 }}
                url={icon_instagram}
              />
              <Icon
                onMouseEnter={() => {
                  setIconEnter(3);
                }}
                onMouseLeave={() => {
                  setIconEnter(0);
                }}
                style={iconEnter === 3 ? { opacity: 0.6 } : { opacity: 1 }}
                url={icon_twitter}
              />
            </IconDiv>
          </Inner>
        )}
      </Wrapper>
    </>
  );
};
