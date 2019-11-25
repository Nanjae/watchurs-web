import React from "react";
import styled from "styled-components";

const HeaderTestDiv = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
`;

const TestColumnDiv = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  display: flex;
`;

const TestColumnTop = styled.div`
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TestColumnBot = styled.div`
  padding: 0px 20%;
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BoldText = styled.text`
  font-weight: 600;
`;

export default () => {
  return (
    <HeaderTestDiv>
      <TestColumnDiv>
        <TestColumnTop>
          <BoldText>테스트 페이지</BoldText>
        </TestColumnTop>
        <TestColumnBot>
          <BoldText>하단 메뉴</BoldText>
          <BoldText>하단 메뉴</BoldText>
          <BoldText>하단 메뉴</BoldText>
          <BoldText>하단 메뉴</BoldText>
          <BoldText>하단 메뉴</BoldText>
        </TestColumnBot>
      </TestColumnDiv>
    </HeaderTestDiv>
  );
};
