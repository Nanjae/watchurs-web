import React from "react";
import styled from "styled-components";
import HeaderLeague from "../Routes/Header/HeaderLeague";

const Header = styled.header`
  margin-top: 0.1%;
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  /* border-bottom-width: 1px;
  border-bottom-style: solid; */
`;

const HeaderLeftDiv = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderRightDiv = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleText = styled.text`
  font-size: 32px;
  font-weight: 800;
`;

const BoldText = styled.text`
  font-weight: 600;
`;

export default () => {
  return (
    <Header>
      <HeaderLeftDiv>
        <TitleText>Watchurs</TitleText>
      </HeaderLeftDiv>
      <HeaderLeague />
      <HeaderRightDiv>
        <BoldText>헤더 우측</BoldText>
      </HeaderRightDiv>
    </Header>
  );
};
