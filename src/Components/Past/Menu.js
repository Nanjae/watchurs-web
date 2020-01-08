import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const MenuDiv = styled.div`
  position: fixed;
  z-index: 1;
  top: 50px;
  width: 240px;
  height: 100%;
  flex-direction: column;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${props => props.theme.bTheme};
  opacity: 0.97;
`;

const MainDiv = styled.div`
  padding-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 20px;
  color: ${props => props.theme.jTheme};
`;

const MainBox = styled.div``;
const MainText = styled.div``;

const SubDiv = styled.div`
  padding-left: 40px;
  color: ${props => props.theme.fTheme};
`;

const SubBox = styled.div`
  margin-bottom: 15px;
`;
const SubText = styled.div``;

export default withRouter(() => {
  //   const [focused, setFocused] = useState(0);
  //   const onMouseOut = () => {
  //     setFocused(0);
  //   };
  //   const onMouseOver = num => {
  //     setFocused(num);
  //   };
  return (
    <MenuDiv>
      <MainDiv>
        <MainBox>
          <MainText>브로드캐스터 정보</MainText>
        </MainBox>
      </MainDiv>
      <SubDiv>
        <SubBox>
          <SubText>전체 랭킹 조회</SubText>
        </SubBox>
        <SubBox>
          <SubText>즐겨찾기 조회</SubText>
        </SubBox>
        <SubBox>
          <SubText>나만의 팀 카드</SubText>
        </SubBox>
        <SubBox>
          <SubText>브로드캐스터 등록 요청</SubText>
        </SubBox>
      </SubDiv>
      <MainDiv>
        <MainBox>
          <MainText>대회 정보</MainText>
        </MainBox>
      </MainDiv>
      <SubDiv>
        <SubBox>
          <SubText>대회 목록 조회</SubText>
        </SubBox>
        <SubBox>
          <SubText>대회 등록 요청</SubText>
        </SubBox>
      </SubDiv>
    </MenuDiv>
  );
});
