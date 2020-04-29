import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import logo_watchurs_dark from "../../../../Assets/Images/Logos/logo_watchurs_dark.png";
import logo_watchurs_light from "../../../../Assets/Images/Logos/logo_watchurs_light.png";
import icon_facebook_dark from "../../../../Assets/Icons/icon_facebook_dark.png";
import icon_facebook_light from "../../../../Assets/Icons/icon_facebook_light.png";
import icon_instagram_dark from "../../../../Assets/Icons/icon_instagram_dark.png";
import icon_instagram_light from "../../../../Assets/Icons/icon_instagram_light.png";
import icon_twitter_dark from "../../../../Assets/Icons/icon_twitter_dark.png";
import icon_twitter_light from "../../../../Assets/Icons/icon_twitter_light.png";
import "swiper/css/swiper.css";
import { Link } from "react-router-dom";

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

const LogoIcon = styled(Link)`
  background-image: url(${(props) => props.url});
  background-size: cover;
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background-image 0.3s;
`;

const TitleText = styled(Link)`
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

const MenuLineDiv = styled.div`
  width: 60px;
  height: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const menuUpperLine = keyframes`
  0% {
    width:50%;
    opacity: 0.4;
  }
  33% {
    width:80%;
    opacity: 1;
  }
  66% {
    width:40%;
    opacity: 0.4;
  }
  100% {
    width:100%;
    opacity: 1;
  }
`;

const menuUnderLine = keyframes`
  0% {
    width:100%;
    opacity: 1;
  }
  33% {
    width:50%;
    opacity: 0.4;
  }
  66% {
    width:80%;
    opacity: 1;
  }
  100% {
    width:40%;
    opacity: 0.4;
  }
`;

const MenuUpperLine = styled.div`
  background-color: ${(props) => props.theme.lineMainColor};
  width: 100%;
  height: 3px;
  animation: ${(props) =>
    props.headerMenuEnter
      ? css`
          ${menuUpperLine} 1.2s infinite linear alternate
        `
      : null};
  transition: background-color 0.3s;
`;

const MenuUnderLine = styled.div`
  background-color: ${(props) => props.theme.lineMainColor};
  width: 80%;
  height: 3px;
  animation: ${(props) =>
    props.headerMenuEnter
      ? css`
          ${menuUnderLine} 1.2s infinite linear alternate
        `
      : null};
  transition: background-color 0.3s;
`;

const MenuTextBox = styled.div`
  width: 54px;
  display: flex;
  justify-content: space-between;
  padding: 0px 3px;
`;

const MenuText = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: ${(props) => props.theme.fontMainColor};
  transition: color 0.3s;
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
  transition: background-image 0.3s;
`;

export default ({ siteTheme }) => {
  const [headerMenuEnter, setHeaderMenuEnter] = useState(false);

  const logo_watchurs = siteTheme ? logo_watchurs_light : logo_watchurs_dark;
  const icon_facebook = siteTheme ? icon_facebook_light : icon_facebook_dark;
  const icon_instagram = siteTheme ? icon_instagram_light : icon_instagram_dark;
  const icon_twitter = siteTheme ? icon_twitter_light : icon_twitter_dark;

  return (
    <>
      <Wrapper>
        <Inner>
          <TitleDiv>
            <LogoIcon to={`/home`} url={logo_watchurs} />
            <TitleText to={`/home`}>WATCHURS</TitleText>
          </TitleDiv>
          <MenuDiv>
            <MenuInner
              onMouseEnter={() => {
                setHeaderMenuEnter(true);
              }}
              onMouseLeave={() => {
                setHeaderMenuEnter(false);
              }}
            >
              <MenuLineDiv>
                <MenuUpperLine headerMenuEnter={headerMenuEnter} />
                <MenuUnderLine headerMenuEnter={headerMenuEnter} />
              </MenuLineDiv>
              <MenuTextBox>
                <MenuText>M</MenuText>
                <MenuText>E</MenuText>
                <MenuText>N</MenuText>
                <MenuText>U</MenuText>
              </MenuTextBox>
            </MenuInner>
          </MenuDiv>
          <IconDiv>
            <Icon url={icon_facebook} />
            <Icon url={icon_instagram} />
            <Icon url={icon_twitter} />
          </IconDiv>
        </Inner>
      </Wrapper>
    </>
  );
};
