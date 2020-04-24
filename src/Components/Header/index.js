import React from "react";
import styled from "styled-components";
import icon_menu from "../../Assets/Icons/icon_menu.png";
import icon_search from "../../Assets/Icons/icon_search.png";

const HeaderDiv = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const HeaderInner = styled.div`
  display: flex;
  min-width: 1190px;
  max-width: 1190px;
  height: 100%;
`;

const HeaderLeftDiv = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

const MenuIcon = styled.div`
  background-image: url(${(props) => props.url});
  background-size: contain;
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const HeaderTitleDiv = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const HeaderTitleText = styled.div`
  font-size: 36px;
  color: ${(props) => props.theme.lightGray};
  cursor: pointer;
`;

const HeaderRightDiv = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const SearchIcon = styled.div`
  background-image: url(${(props) => props.url});
  background-size: contain;
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export default () => {
  return (
    <HeaderDiv>
      <HeaderInner>
        <HeaderLeftDiv>
          <MenuIcon url={icon_menu} />
        </HeaderLeftDiv>
        <HeaderTitleDiv>
          <HeaderTitleText>WATCHURS</HeaderTitleText>
        </HeaderTitleDiv>
        <HeaderRightDiv>
          <SearchIcon url={icon_search} />
        </HeaderRightDiv>
      </HeaderInner>
    </HeaderDiv>
  );
};
