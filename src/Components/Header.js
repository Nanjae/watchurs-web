import React, { useState } from "react";
import styled from "styled-components";
import HeaderLeague from "../Routes/Header/HeaderLeague";
// import leagueIcon from "../Assets/League/LeagueIcon.png";
import Theme from "../Styles/Theme";
import { Link, withRouter } from "react-router-dom";

const Header = styled.header`
  position: fixed;
  z-index: 1;
  width: 100%;
  min-width: 1140px;
  height: 100px;
  flex-direction: column;
  display: flex;
  background-color: ${props => props.theme.aTheme};
  /* border: 1px solid ${props => props.theme.skinTone}; */
  border-top: 0px;
  color: ${props => props.theme.cTheme};
`;

const HeaderTop = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TopTitleDiv = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const TitleBox = styled.div`
  height: 100%;
  padding-left: 10px;
  display: flex;
  align-items: center;
`;

const TitleText = styled.div`
  font-weight: bold;
  font-size: 30px;
  user-select: none;
`;

const TopButtonDiv = styled.div`
  height: 100%;
  padding-top: 5px;
  display: flex;
  align-items: center;
`;

const LoginButton = styled(Link)`
  margin-right: 15px;
  margin-left: 15px;
  padding: 10px;
  border: 2px solid ${props => props.theme.cTheme};
  background-color: ${props => props.theme.cTheme};
  border-radius: 4px;
  cursor: pointer;
`;

const LoginText = styled.div`
  color: ${props => props.theme.dTheme};
  user-select: none;
  font-weight: bold;
`;

// const MapButton = styled.div`
//   margin-left: 20px;
//   background-color: ${props => props.theme.lightMainColor};
//   padding: 10px;
//   border: 2px solid ${props => props.theme.lightMainColor};
//   border-radius: 4px;
//   cursor: pointer;
// `;

// const MapText = styled.div`
//   color: ${props => props.theme.whiteColor};
//   user-select: none;
//   font-weight: bold;
// `;

const PageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageText = styled.div`
  user-select: none;
  font-weight: bold;
  font-size: 16px;
`;

// const PageIcon = styled.div`
//   margin-right: 5px;
//   background-image: url(${props => props.url});
//   background-size: cover;
//   width: 30px;
//   height: 30px;
// `;

const HeaderBot = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default withRouter(() => {
  const [focused, setFocused] = useState(0);
  const onMouseOut = () => {
    setFocused(0);
  };
  const onMouseOver = num => {
    setFocused(num);
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
            {/* <PageIcon url={leagueIcon} /> */}
            <PageText>리그 오브 레전드</PageText>
          </PageBox>
          {/* <MapButton
            onMouseOver={() => onMouseOver(1)}
            onMouseOut={() => onMouseOut()}
            style={{
              backgroundColor:
                focused === 1 ? Theme.mainColor : Theme.lightMainColor,
              borderColor:
                focused === 1 ? Theme.mainColor : Theme.lightMainColor
            }}
          >
            <MapText>와쳐스 맵</MapText>
          </MapButton> */}
          <LoginButton
            to="/login"
            onMouseOver={() => onMouseOver(2)}
            onMouseOut={() => onMouseOut()}
            style={{
              borderColor: focused === 2 ? Theme.cTheme : Theme.bTheme,
              backgroundColor: focused === 2 ? Theme.cTheme : Theme.bTheme
            }}
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
});
