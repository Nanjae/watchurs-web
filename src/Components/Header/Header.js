import React, { useState } from "react";
import styled from "styled-components";
import useWindowScroll from "@react-hook/window-scroll";
import Theme from "../../Styles/Theme";
import iconMenu from "../../Assets/Test/iconMenu.png";
import iconXmark from "../../Assets/Test/iconXmark.png";
import useWindowDimensions from "../../Hooks/useWindowDimensions";

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 44px;
  padding: 8px 16px 24px 16px;
`;

const InnerWrapper = styled.div`
  display: flex;
  max-width: 1240px;
  width: 90%;
`;

const LeftMenuDiv = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

const RightMenuDiv = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const MenuIcon = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;
  width: 14px;
  height: 14px;
  cursor: pointer;
`;

const MenuText = styled.div`
  margin: 0px 20px 1px 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 20%;
`;

const TitleText = styled.div`
  font-size: 24px;
  font-weight: 700;
  padding-bottom: 4px;
`;

const PopMenuDiv = styled.div`
  position: fixed;
  top: 0;
  left: ${props => (props.popClicked ? "0%" : "-51%")};
  z-index: 1000;
  background-color: ${props => props.theme.lightYellow};
  width: ${props => (props.windowWidth < 1000 ? "100%" : "50%")};
  height: 100%;
  min-width: ${props => (props.windowWidth < 1000 ? "300px" : "480px")};
  transition: left 0.3s;
  box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.1);
`;

const PopMenuInner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 48px;
`;

const PopMenuBox = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default () => {
  const { windowWidth } = useWindowDimensions();
  const scrollY = useWindowScroll(60);
  const [popClicked, setPopClicked] = useState(false);

  const popClickHandler = () => {
    setPopClicked(!popClicked);
  };

  return (
    <Wrapper
      style={
        windowWidth < 600
          ? {
              padding: "24px 0px 28px 0px",
              height: "68px",
              backgroundColor: Theme.white,
              boxShadow: "0 2px 4px 1px rgba(0, 0, 0, 0.1)",
              transition: `background-color 0.2s`
            }
          : windowWidth < 800
          ? {
              backgroundColor: Theme.white,
              boxShadow: "0 2px 4px 1px rgba(0, 0, 0, 0.1)",
              transition: `background-color 0.2s`
            }
          : scrollY >= 80
          ? {
              backgroundColor: Theme.white,
              boxShadow: "0 2px 4px 1px rgba(0, 0, 0, 0.1)",
              transition: `background-color 0.2s`
            }
          : { backgroundColor: null, transition: `background-color 0.2s` }
      }
    >
      {windowWidth < 600 ? (
        <InnerWrapper
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-beteween" }}>
            <LeftMenuDiv style={{ width: "50%" }}>
              <MenuIcon
                style={{ marginRight: 20 }}
                onClick={popClickHandler}
                url={iconMenu}
              />
              <MenuText>MENU</MenuText>
            </LeftMenuDiv>
            <RightMenuDiv style={{ width: "50%" }}>
              <MenuText>Dev Intro</MenuText>
            </RightMenuDiv>
          </div>
          <TitleDiv style={{ width: "100%" }}>
            <TitleText>WATCHURS</TitleText>
          </TitleDiv>
        </InnerWrapper>
      ) : (
        <InnerWrapper>
          <LeftMenuDiv>
            <MenuIcon
              style={{ marginRight: 20 }}
              onClick={popClickHandler}
              url={iconMenu}
            />
            <MenuText>MENU</MenuText>
          </LeftMenuDiv>
          <TitleDiv>
            <TitleText>WATCHURS</TitleText>
          </TitleDiv>
          <RightMenuDiv>
            <MenuText>Dev Intro</MenuText>
          </RightMenuDiv>
        </InnerWrapper>
      )}
      <PopMenuDiv
        windowWidth={windowWidth}
        popClicked={popClicked}
        style={
          windowWidth < 1000
            ? popClicked
              ? { left: "0%" }
              : { left: "-101%", transition: "left 0.3s, width 0.3s" }
            : null
        }
      >
        <PopMenuInner>
          <MenuIcon onClick={popClickHandler} url={iconXmark} />
          <PopMenuBox>팝업 테스트</PopMenuBox>
        </PopMenuInner>
      </PopMenuDiv>
    </Wrapper>
  );
};
