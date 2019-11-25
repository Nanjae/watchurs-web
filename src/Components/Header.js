import React from "react";
import styled from "styled-components";
import HeaderLeague from "../Routes/Header/HeaderLeague";

const Header = styled.header`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
`;

const HeaderLeftDiv = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
`;

const HeaderRightDiv = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
`;

const BoldText = styled.text`
  font-weight: 600;
`;

export default () => {
  return (
    <Header>
      <HeaderLeftDiv>
        <BoldText>헤더 좌측</BoldText>
      </HeaderLeftDiv>
      <HeaderLeague />
      <HeaderRightDiv>
        <BoldText>헤더 우측</BoldText>
      </HeaderRightDiv>
    </Header>
  );
};
