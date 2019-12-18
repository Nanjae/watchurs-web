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
`;

export default ({ paddingTop = 200, fontSize = 20 }) => (
  <Loader style={{ paddingTop, fontSize }}>WATCHURS 로딩 중...</Loader>
);
