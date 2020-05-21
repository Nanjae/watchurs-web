import React from "react";
import styled, { keyframes, css } from "styled-components";

const MenuLineDiv = styled.div`
  width: 60px;
  height: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const menuUpperLine = keyframes`
  0% {
    width:50%;
    opacity: 0.4;
  }
  33% {
    width:80%;
    opacity: 1;
  }
  66% {
    width:40%;
    opacity: 0.4;
  }
  100% {
    width:100%;
    opacity: 1;
  }
`;

const menuUnderLine = keyframes`
  0% {
    width:100%;
    opacity: 1;
  }
  33% {
    width:50%;
    opacity: 0.4;
  }
  66% {
    width:80%;
    opacity: 1;
  }
  100% {
    width:40%;
    opacity: 0.4;
  }
`;

const MenuUpperLine = styled.div`
  background-color: ${(props) => props.theme.lineMainColor};
  width: 100%;
  height: 3px;
  animation: ${(props) =>
    props.headerMenuEnter
      ? css`
          ${menuUpperLine} 1.2s infinite linear alternate
        `
      : null};
  transition: background-color 0.3s;
`;

const MenuUnderLine = styled.div`
  background-color: ${(props) => props.theme.lineMainColor};
  width: 80%;
  height: 3px;
  animation: ${(props) =>
    props.headerMenuEnter
      ? css`
          ${menuUnderLine} 1.2s infinite linear alternate
        `
      : null};
  transition: background-color 0.3s;
`;

export default ({ headerMenuEnter }) => {
  return (
    <>
      <MenuLineDiv>
        <MenuUpperLine headerMenuEnter={headerMenuEnter} />
        <MenuUnderLine headerMenuEnter={headerMenuEnter} />
      </MenuLineDiv>
    </>
  );
};
