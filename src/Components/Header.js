import React, { useState } from "react";
import styled from "styled-components";
import HeaderLeague from "../Routes/Header/HeaderLeague";
import leagueIcon from "../Assets/League/LeagueIcon.png";

const Header = styled.header`
  position: fixed;
  width: 60%;
  height: 108px;
  flex-direction: column;
  display: flex;
  margin-left: 20%;
  background-color: ${props => props.theme.whiteColor};
  border: 1px solid ${props => props.theme.lightGrayColor};
  border-top: 0px;
`;

const HeaderTop = styled.div`
  width: 100%;
  height: 54px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TopTitleDiv = styled.div`
  height: 100%;
  margin: 15px;
  display: flex;
  align-items: center;
`;

const TitleBox = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const TitleText = styled.div`
  font-weight: 600;
  font-size: 30px;
  user-select: none;
`;

const TopButtonDiv = styled.div`
  height: 100%;
  padding-top: 5px;
  display: flex;
  align-items: center;
`;

const LoginButton = styled.div`
  margin-right: 15px;
  margin-left: 15px;
  padding: 10px;
  border: 2px solid ${props => props.theme.btnColor};
  border-radius: 4px;
  opacity: 0.8;
  cursor: pointer;
`;

const LoginText = styled.div`
  color: ${props => props.theme.btnColor};
  user-select: none;
`;

const LinkButton = styled.div`
  margin-left: 20px;
  background-color: ${props => props.theme.btnColor};
  padding: 10px;
  border: 2px solid ${props => props.theme.btnColor};
  border-radius: 4px;
  :focus {
    opacity: 0.2;
  }
  cursor: pointer;
`;

const LinkText = styled.div`
  color: ${props => props.theme.whiteColor};
  user-select: none;
`;

const PageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageText = styled.div`
  user-select: none;
`;

const PageIcon = styled.div`
  margin-right: 5px;
  background-image: url(${props => props.url});
  background-size: cover;
  width: 30px;
  height: 30px;
`;

const HeaderBot = styled.div`
  width: 100%;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default () => {
  const [selected, setSelected] = useState(0);
  const [opacity, setOpacity] = useState(0.8);
  const onMouseOut = () => {
    setSelected(0);
  };
  const onMouseOver = num => {
    setSelected(num);
    setOpacity(1.0);
  };
  return (
    <Header>
      <HeaderTop>
        <TopTitleDiv>
          <TitleBox>
            <TitleText>WATCHURS</TitleText>
          </TitleBox>
        </TopTitleDiv>
        <TopButtonDiv>
          <PageBox>
            <PageIcon url={leagueIcon} />
            <PageText>리그 오브 레전드</PageText>
          </PageBox>
          <LinkButton
            onMouseOver={() => onMouseOver(1)}
            onMouseOut={() => onMouseOut()}
            style={{ opacity: selected === 1 ? opacity : 0.8 }}
          >
            <LinkText>와쳐스 맵</LinkText>
          </LinkButton>
          <LoginButton
            onMouseOver={() => onMouseOver(2)}
            onMouseOut={() => onMouseOut()}
            style={{ opacity: selected === 2 ? opacity : 0.8 }}
          >
            <LoginText>로그인</LoginText>
          </LoginButton>
        </TopButtonDiv>
      </HeaderTop>
      <HeaderBot>
        <HeaderLeague />
      </HeaderBot>
    </Header>
  );
};
