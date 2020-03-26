import React from "react";
import styled, { keyframes } from "styled-components";

const Animation = keyframes`
    0%{
        opacity:0
    }
    50%{
        opacity:1
    }
    100%{
        opacity:0
    }
`;

const Loader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  animation: ${Animation} 1s linear infinite;
  font-weight: bold;
  user-select: none;
  color: ${props => props.theme.darkOrangeColor};
  @media only screen and (max-width: 599px) {
    font-size: 20px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 24px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 28px;
  }
  @media only screen and (min-width: 1800px) {
    font-size: 32px;
  }
`;

export default ({ paddingTop = 200, fontSize, height, alignItems }) => (
  <Loader style={{ paddingTop, fontSize, height, alignItems }}>
    WATCHURS 로딩 중...
  </Loader>
);
