import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import useWindowDimensions from "../Hooks/useWindowDimensions";
import Input from "./Input";

const Header = styled.div``;

const HeaderDiv = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TopDiv = styled.div`
  background-color: ${props => props.theme.darkBlueColor};
  opacity: 0.8;
  padding: 60px 15%;
  display: flex;
  justify-content: space-between;
`;

const TitleDiv = styled.div``;

const TitleBox = styled.div`
  display: flex;
  align-items: flex-end;
`;

const TitleFstText = styled.div`
  font-weight: bold;
  font-size: 36px;
  user-select: none;
  padding-right: 8px;
  color: ${props => props.theme.whiteColor};
`;

const TitleSndText = styled.div`
  font-weight: bold;
  font-size: 24px;
  user-select: none;
  color: ${props => props.theme.pinkColor};
`;

const SearchInputDiv = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled(Input)``;

const BotDiv = styled.div`
  background-color: ${props => props.theme.deepBlueColor};
  opacity: 0.8;
  padding: 15px 15%;
`;

const MenuDiv = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const MenuBox = styled.div`
  margin-right: 30px;
`;

const MenuText = styled.div``;

export default withRouter(() => {
  const { height, width } = useWindowDimensions();

  console.log("(height, width) : (" + height + ", " + width + ")");

  return (
    <Header>
      {width < 900 ? (
        <HeaderDiv>
          <TopDiv style={{ padding: 10 }}>
            <TitleDiv>
              <TitleBox>
                <TitleFstText style={{ paddingRight: 4, fontSize: 18 }}>
                  와쳐스
                </TitleFstText>
                <TitleSndText style={{ fontSize: 12 }}>WATCHURS</TitleSndText>
              </TitleBox>
            </TitleDiv>
            <SearchInputDiv>
              <SearchInput
                fontsize={"10px"}
                padding={"4px 8px 4px 4px"}
                placeholder={"브로드캐스터 검색"}
              />
            </SearchInputDiv>
          </TopDiv>
          <BotDiv style={{ padding: 10 }}>
            <MenuDiv>
              <MenuBox style={{ marginRight: 10 }}>
                <MenuText style={{ fontSize: 12 }}>임시메뉴</MenuText>
              </MenuBox>
              <MenuBox style={{ marginRight: 10 }}>
                <MenuText style={{ fontSize: 12 }}>임시메뉴</MenuText>
              </MenuBox>
              <MenuBox style={{ marginRight: 10 }}>
                <MenuText style={{ fontSize: 12 }}>임시메뉴</MenuText>
              </MenuBox>
            </MenuDiv>
          </BotDiv>
        </HeaderDiv>
      ) : (
        <HeaderDiv>
          <TopDiv>
            <TitleDiv>
              <TitleBox>
                <TitleFstText>와쳐스</TitleFstText>
                <TitleSndText>WATCHURS</TitleSndText>
              </TitleBox>
            </TitleDiv>
            <SearchInputDiv>
              <SearchInput placeholder={"브로드캐스터 검색"} />
            </SearchInputDiv>
          </TopDiv>
          <BotDiv>
            <MenuDiv>
              <MenuBox>
                <MenuText>임시메뉴</MenuText>
              </MenuBox>
              <MenuBox>
                <MenuText>임시메뉴</MenuText>
              </MenuBox>
              <MenuBox>
                <MenuText>임시메뉴</MenuText>
              </MenuBox>
            </MenuDiv>
          </BotDiv>
        </HeaderDiv>
      )}
    </Header>
  );
});
