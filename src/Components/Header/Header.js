import React, { useState } from "react";
import styled from "styled-components";
import useWindowScroll from "@react-hook/window-scroll";
import Theme from "../../Styles/Theme";
import iconMenu from "../../Assets/Test/iconMenu.png";
import iconXmark from "../../Assets/Test/iconXmark.png";

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 48px;
  padding: 0px 32px 28px 32px;
`;

const InnerWrapper = styled.div`
  display: flex;
  max-width: 1240px;
  width: 90%;
`;

const LeftMenuDiv = styled.div`
  width: 25%;
  display: flex;
  justify-content: flex-start;
`;

const RightMenuDiv = styled.div`
  width: 25%;
  display: flex;
  justify-content: flex-end;
`;

const MenuIcon = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
`;

const TitleText = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

const PopMenuDiv = styled.div`
  position: fixed;
  top: 0;
  left: ${props => (props.popClicked ? "0%" : "-50%")};
  box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.1);
  background-color: ${props => props.theme.lightYellow};
  width: 0%;
  height: 0%;
  width: 50%;
  height: 100%;
  min-width: 480px;
  transition: left 0.3s;
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
  const scrollY = useWindowScroll(60);
  const [popClicked, setPopClicked] = useState(false);

  const popClickHandler = () => {
    setPopClicked(!popClicked);
  };

  return (
    <Wrapper
      style={
        scrollY >= 80
          ? {
              backgroundColor: Theme.white,
              boxShadow: "0 2px 4px 1px rgba(0, 0, 0, 0.1)",
              transition: `background-color 0.2s`
            }
          : { backgroundColor: null, transition: `background-color 0.2s` }
      }
    >
      <InnerWrapper>
        <LeftMenuDiv>
          <MenuIcon onClick={popClickHandler} url={iconMenu} />
        </LeftMenuDiv>
        <TitleDiv>
          <TitleText>WATCHURS</TitleText>
        </TitleDiv>
        <RightMenuDiv>{/* <MenuIcon url={iconMenu} /> */}</RightMenuDiv>
      </InnerWrapper>
      <PopMenuDiv popClicked={popClicked}>
        <PopMenuInner>
          <MenuIcon onClick={popClickHandler} url={iconXmark} />
          <PopMenuBox>팝업 테스트</PopMenuBox>
        </PopMenuInner>
      </PopMenuDiv>
    </Wrapper>
  );
};
